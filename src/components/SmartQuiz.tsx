import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Brain, CheckCircle, XCircle, Lightbulb, RotateCcw, Sparkles } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: string;
  topic: string;
}

interface Quiz {
  title: string;
  questions: Question[];
}

const SmartQuiz: React.FC = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quizSettings, setQuizSettings] = useState({
    subject: '',
    difficulty: '',
    studentLevel: 'intermediate',
    learningStyle: 'visual'
  });
  const { toast } = useToast();
  const { user } = useAuth();

  const generateQuiz = async () => {
    if (!quizSettings.subject || !quizSettings.difficulty) {
      toast({
        title: "Missing Information",
        description: "Please select both subject and difficulty level.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-quiz', {
        body: quizSettings
      });

      if (error) throw error;

      setQuiz(data);
      setCurrentQuestion(0);
      setSelectedAnswers([]);
      setShowResults(false);
      
      toast({
        title: "Quiz Generated!",
        description: `Your personalized ${quizSettings.subject} quiz is ready.`,
      });
    } catch (error) {
      console.error('Error generating quiz:', error);
      toast({
        title: "Generation Failed",
        description: "Failed to generate quiz. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < (quiz?.questions.length || 0) - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = async () => {
    setShowResults(true);
    
    if (user && quiz) {
      const score = calculateScore();
      try {
        await supabase.from('quizzes').insert({
          user_id: user.id,
          title: quiz.title,
          subject: quizSettings.subject,
          difficulty_level: quizSettings.difficulty,
          questions: quiz.questions as any,
          score: score,
          completed_at: new Date().toISOString()
        });
      } catch (error) {
        console.error('Error saving quiz:', error);
      }
    }
  };

  const calculateScore = () => {
    if (!quiz) return 0;
    const correct = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
    }, 0);
    return Math.round((correct / quiz.questions.length) * 100);
  };

  const resetQuiz = () => {
    setQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  if (!quiz) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="flex items-center gap-2">
                AI-Powered Smart Quiz
                <Sparkles className="w-4 h-4 text-primary" />
              </CardTitle>
              <CardDescription>
                Generate personalized quizzes based on your learning style and level
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Subject</Label>
              <Select value={quizSettings.subject} onValueChange={(value) => 
                setQuizSettings({...quizSettings, subject: value})
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="biology">Biology</SelectItem>
                  <SelectItem value="computer-science">Computer Science</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="english">English Literature</SelectItem>
                  <SelectItem value="psychology">Psychology</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Difficulty Level</Label>
              <Select value={quizSettings.difficulty} onValueChange={(value) => 
                setQuizSettings({...quizSettings, difficulty: value})
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Your Learning Level</Label>
              <Select value={quizSettings.studentLevel} onValueChange={(value) => 
                setQuizSettings({...quizSettings, studentLevel: value})
              }>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">High School</SelectItem>
                  <SelectItem value="undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Learning Style</Label>
              <Select value={quizSettings.learningStyle} onValueChange={(value) => 
                setQuizSettings({...quizSettings, learningStyle: value})
              }>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="visual">Visual</SelectItem>
                  <SelectItem value="auditory">Auditory</SelectItem>
                  <SelectItem value="kinesthetic">Kinesthetic</SelectItem>
                  <SelectItem value="reading">Reading/Writing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            onClick={generateQuiz} 
            className="w-full" 
            size="lg"
            disabled={loading}
          >
            {loading ? (
              <>
                <Brain className="w-4 h-4 mr-2 animate-spin" />
                Generating Your Perfect Quiz...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate AI Quiz
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (showResults) {
    const score = calculateScore();
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Quiz Results</CardTitle>
          <CardDescription className="text-center">{quiz.title}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{score}%</div>
            <p className="text-muted-foreground">
              You got {selectedAnswers.filter((answer, index) => answer === quiz.questions[index].correctAnswer).length} out of {quiz.questions.length} questions correct!
            </p>
          </div>

          <div className="space-y-4">
            {quiz.questions.map((question, index) => (
              <Card key={question.id} className="p-4">
                <div className="flex items-start gap-3">
                  {selectedAnswers[index] === question.correctAnswer ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mt-1" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium mb-2">{question.question}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Your answer: {question.options[selectedAnswers[index]]}
                    </p>
                    {selectedAnswers[index] !== question.correctAnswer && (
                      <p className="text-sm text-green-600 mb-2">
                        Correct answer: {question.options[question.correctAnswer]}
                      </p>
                    )}
                    <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Lightbulb className="w-4 h-4 text-blue-500 mt-0.5" />
                      <p className="text-sm text-blue-700 dark:text-blue-300">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Button onClick={resetQuiz} className="w-full" variant="outline">
            <RotateCcw className="w-4 h-4 mr-2" />
            Generate New Quiz
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQ = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{quiz.title}</CardTitle>
            <CardDescription>
              Question {currentQuestion + 1} of {quiz.questions.length}
            </CardDescription>
          </div>
          <Badge variant="outline">{currentQ.difficulty}</Badge>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Badge variant="secondary" className="mb-3">{currentQ.topic}</Badge>
          <h3 className="text-lg font-medium mb-4">{currentQ.question}</h3>
        </div>

        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswers[currentQuestion] === index ? "default" : "outline"}
              className="w-full justify-start text-left h-auto p-4"
              onClick={() => selectAnswer(index)}
            >
              <span className="mr-3 font-medium">{String.fromCharCode(65 + index)}.</span>
              {option}
            </Button>
          ))}
        </div>

        <Button 
          onClick={nextQuestion} 
          className="w-full" 
          disabled={selectedAnswers[currentQuestion] === undefined}
        >
          {currentQuestion === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SmartQuiz;