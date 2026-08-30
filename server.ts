import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Gemini Ayurvedic Vaidya Chat Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, conversationHistory, userDosha } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      if (apiKey) {
        try {
          const ai = new GoogleGenAI({
            apiKey,
            httpOptions: {
              headers: {
                "User-Agent": "aistudio-build",
              },
            },
          });

          const systemInstruction = `You are Acharya Anand, a revered senior Ayurvedic Doctor (Vaidya) and Panchakarma Specialist at VedaSanctum Holistic Health Retreat.
You provide compassionate, authentic, and scientifically grounded Ayurvedic wisdom to seekers.

Key Guidelines:
1. Speak in a warm, serene, deeply knowledgeable, and reassuring tone.
2. Ground your explanations in classical Ayurvedic principles (Tridosha: Vata, Pitta, Kapha; Agni: digestive fire; Ama: metabolic toxins; Ojas: vitality; Dhatus: bodily tissues; Panchakarma: five detoxification therapies).
3. If the user mentions their dosha (or if userDosha is provided: ${userDosha || "undetermined"}), tailor your diet, herb (Rasayana), and Panchakarma recommendations (Abhyanga, Shirodhara, Swedana, Basti, Nasya, etc.) to pacify imbalances.
4. Format your answer with clear, elegant bullet points, Sanskrit terminology with simple English translations, and actionable lifestyle (Dinacharya) advice.
5. Always remind the seeker with gentle grace that your guidance is educational and holistic wellness-focused.`;

          const prompt = `User's message: "${message}"\n${userDosha ? `User's dominant dosha profile: ${userDosha}` : ""}\n\nPlease provide your Ayurvedic consultation response:`;

          const response = await ai.models.generateContent({
            model: "gemini-3.7-flash",
            contents: prompt,
            config: {
              systemInstruction,
              temperature: 0.7,
            },
          });

          const replyText = response.text || "";
          return res.json({ reply: replyText });
        } catch (apiErr: any) {
          console.error("Gemini API call error, falling back to expert knowledge base:", apiErr?.message);
        }
      }

      // Intelligent curated Ayurvedic Knowledge Base fallback if key is not yet set or in offline preview
      const fallbackReply = generateAyurvedicFallback(message, userDosha);
      return res.json({ reply: fallbackReply });
    } catch (err: any) {
      console.error("Server chat error:", err);
      res.status(500).json({ error: "Failed to generate Ayurvedic response" });
    }
  });

  // Vite development middleware vs production static bundle
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`VedaSanctum Ayurvedic Server running on http://localhost:${PORT}`);
  });
}

function generateAyurvedicFallback(query: string, userDosha?: string): string {
  const q = query.toLowerCase();

  if (q.includes("shirodhara") || q.includes("stress") || q.includes("anxiety") || q.includes("sleep") || q.includes("insomnia")) {
    return `### Namaste. On Shirodhara & Nervous System Rejuvenation

**Shirodhara** (from *Shiras* = head, *Dhara* = flow) is one of Ayurveda’s most sublime therapies for soothing an agitated nervous system (*Majja Dhatu*) and balancing hyperactive **Vata & Pitta**.

**How It Works:**
- A continuous, gentle stream of warm medicated herbal oil (*Brahmi Taila* or *Ksheerabala*) is rhythmic poured across the *Ajna Chakra* (forehead).
- This stimulates the pineal gland and induces deep alpha and theta brainwave states, similar to prolonged meditation.

**Key Benefits:**
- Deeply calms mental chatter and chronic insomnia.
- Lowers systemic cortisol and alleviates tension headaches.
- Nourishes hair roots and sharpens sensory perception.

**Recommended Pairing:** 3 to 7 consecutive sessions accompanied by *Abhyanga* (warm herbal oil massage) and warm herbal teas like Chamomile & Gotu Kola.`;
  }

  if (q.includes("abhyanga") || q.includes("massage") || q.includes("oil")) {
    return `### Namaste. The Classical Science of Abhyanga

**Abhyanga** is the foundational daily ritual (*Dinacharya*) of loving self-oil massage. In Sanskrit, *Sneha* means both "oil" and "love".

**Classical Benefits:**
- **Vata Pacification:** Sesame or medicated Mahanarayan oil lubricates dry tissues and soothes joint stiffness.
- **Lymphatic Drainage:** Synchronized rhythmic strokes move metabolic waste (*Ama*) toward elimination channels.
- **Nourishes All 7 Dhatus:** From plasma (*Rasa*) to reproductive vitality (*Shukra*).

**Vaidya Recommendation:** Best practiced in the morning before warm bathing (*Swedana*), using warm organic sesame oil for Vata, coconut/sunflower for Pitta, and mustard/sesame for Kapha.`;
  }

  if (q.includes("dosha") || q.includes("vata") || q.includes("pitta") || q.includes("kapha")) {
    return `### Namaste. Understanding Your Bio-Elemental Constitution

In Ayurveda, health is defined as the harmonious balance of the three **Doshas**:

1. **Vata (Ether + Air):** Governs movement, respiration, nerve impulses, and creativity. When aggravated, it manifests as dry skin, anxiety, gas, and insomnia.
2. **Pitta (Fire + Water):** Governs digestion, metabolism, enzyme transformation, and intellect. When aggravated, it causes inflammation, acidity, anger, and heat rashes.
3. **Kapha (Water + Earth):** Governs structure, lubrication, immunity, and stability. When aggravated, it causes lethargy, weight gain, sinus congestion, and attachment.

${userDosha ? `**Your Profile:** You have selected **${userDosha}**. Focus on grounding, warmth, and balancing foods that soothe this specific constitution.` : `*Take our interactive Dosha Assessment on this page to discover your unique Prakriti constitution!*`}`;
  }

  if (q.includes("panchakarma") || q.includes("detox") || q.includes("cleanse") || q.includes("program")) {
    return `### Namaste. The 3 Phases of Classical Panchakarma

Panchakarma is not merely a superficial detox; it is a clinical cellular reset (*Shodhana*) performed in three sequential phases:

1. **Purva Karma (Preparation):**
   - *Snehana* (internal & external oleation) and *Swedana* (herbal sweating) to loosen deep cellular toxins (*Ama*).
2. **Pradhana Karma (The 5 Cleansing Therapies):**
   - Vamana (emesis), Virechana (purgation), Basti (medicated enema), Nasya (nasal clearance), and Raktamokshana (blood purification).
3. **Paschat Karma (Rejuvenation & Rasayana):**
   - Specialized light *Kitchari* diet (*Samsarjana Krama*) to reignite the digestive fire (*Agni*) and restore vitality (*Ojas*).

Our 7, 14, and 21-day immersive retreats guide you through this personalized sequence under continuous physician supervision.`;
  }

  return `### Namaste and Blessings from VedaSanctum

Thank you for your question on holistic wellness and classical Ayurveda.

Ayurveda teaches that optimal health (*Swastha*) occurs when:
- The **Doshas** (Vata, Pitta, Kapha) are in dynamic equilibrium.
- The digestive fire (**Agni**) burns cleanly without toxic buildup (**Ama**).
- The tissues (**Dhatus**) are nourished and waste products (**Malas**) eliminate effortlessly.
- The mind, senses, and soul abide in serene contentment.

**Next Steps for You:**
- Explore our **Classical Therapies** (Shirodhara, Abhyanga, Swedana, Nasya).
- Take our **Dosha Assessment** to pinpoint your constitution.
- Reserve a consultation with our Ayurvedic physicians for a personalized retreat protocol.`;
}

startServer();
