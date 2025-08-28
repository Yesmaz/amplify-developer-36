import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { subject, difficulty, studentLevel, learningStyle } = await req.json();
    
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const prompt = `Create an engaging and educational quiz for a student with these parameters:
    - Subject: ${subject}
    - Difficulty: ${difficulty}
    - Student Level: ${studentLevel || 'intermediate'}
    - Learning Style: ${learningStyle || 'visual'}
    
    Generate a JSON quiz with exactly 5 questions. Each question should:
    1. Be challenging but appropriate for the difficulty level
    2. Include educational explanations for answers
    3. Use engaging language to encourage learning
    4. Be relevant to real-world applications when possible
    
    Return ONLY valid JSON in this exact format:
    {
      "title": "Quiz title",
      "questions": [
        {
          "id": 1,
          "question": "Question text",
          "options": ["Option A", "Option B", "Option C", "Option D"],
          "correctAnswer": 0,
          "explanation": "Detailed explanation of why this answer is correct and educational context",
          "difficulty": "${difficulty}",
          "topic": "Specific topic this question covers"
        }
      ]
    }`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: 'You are an expert educational content creator. Generate engaging, accurate quiz questions that promote learning. Always return valid JSON only.' 
          },
          { role: 'user', content: prompt }
        ],
        max_tokens: 2000,
        temperature: 0.8,
      }),
    });

    const data = await response.json();
    console.log('OpenAI response received');
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response from OpenAI');
    }

    const quizContent = data.choices[0].message.content;
    let quizData;
    
    try {
      quizData = JSON.parse(quizContent);
    } catch (parseError) {
      console.error('Failed to parse quiz JSON:', parseError);
      throw new Error('Failed to generate valid quiz format');
    }

    // Validate quiz structure
    if (!quizData.questions || !Array.isArray(quizData.questions) || quizData.questions.length === 0) {
      throw new Error('Invalid quiz structure generated');
    }

    return new Response(JSON.stringify(quizData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in generate-quiz function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});