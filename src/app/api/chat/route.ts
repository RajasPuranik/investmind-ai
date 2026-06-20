import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Normalize frontend messages to standard CoreMessage schema
  const coreMessages = messages.map((m: any) => ({
    role: m.role,
    content: m.content || (m.parts ? m.parts.map((p: any) => p.text).join("") : "")
  }));

  const result = await streamText({
    model: google("gemini-2.5-flash"),
    messages: coreMessages,
    system: `You are InvestMind AI, a cyberpunk-themed AI Investment Mentor created by Rajas Puranik. 
Your primary goal is to educate users on financial markets, focusing on NASDAQ, NIFTY, FOREX, and Crypto basics.

CRITICAL RULES:
1. NEVER give direct buy/sell calls or financial advice.
2. Always use analogies to explain complex financial concepts (e.g., comparing blockchain to a public ledger, or stock market to a bustling cyber-bazaar).
3. Maintain a slightly futuristic, cyberpunk persona in your tone without being overly cheesy.
4. Be concise but highly informative.
5. If a user asks for stock picks or investment advice, politely decline and offer to teach them how to analyze the market instead.`,
  });

  return result.toDataStreamResponse();
}
