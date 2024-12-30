import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyAFN9pOKBLHodW9aOMr1WzYJuAVXLeo4Hs');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export type CampaignType = 'ad' | 'email' | 'social' | 'landing';
export type ContentTone = 'professional' | 'casual' | 'luxury' | 'friendly' | 'urgent' | 'educational';
export type AudienceType = 'b2b' | 'b2c' | 'enterprise' | 'startup' | 'local' | 'global';

interface CampaignInput {
  type: CampaignType;
  product: string;
  audience: {
    type: AudienceType;
    demographics: string;
    interests: string;
    painPoints: string;
  };
  tone: ContentTone;
  goals: string;
  uniqueValue: string;
}

export async function generateCampaignContent(input: CampaignInput): Promise<string> {
  const prompt = `Create a ${input.type} campaign for ${input.product}.

Target Audience:
- Type: ${input.audience.type}
- Demographics: ${input.audience.demographics}
- Interests: ${input.audience.interests}
- Pain Points: ${input.audience.painPoints}

Campaign Details:
- Tone: ${input.tone}
- Goals: ${input.goals}
- Unique Value Proposition: ${input.uniqueValue}

Please provide:
${getCampaignTypePrompt(input.type)}

Format the response with clear sections using markdown headers.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

function getCampaignTypePrompt(type: CampaignType): string {
  switch (type) {
    case 'ad':
      return `- Headline options (3-5)
- Main ad copy (2-3 versions)
- Call-to-action variations
- Keywords for targeting`;
    
    case 'email':
      return `- Subject line options (3-5)
- Email body content
- Call-to-action
- Follow-up email suggestion`;
    
    case 'social':
      return `- Post content for multiple platforms
- Hashtag suggestions
- Visual content recommendations
- Engagement prompts`;
    
    case 'landing':
      return `- Hero section copy
- Key benefits (3-5)
- Social proof suggestions
- Call-to-action variations`;
  }
}