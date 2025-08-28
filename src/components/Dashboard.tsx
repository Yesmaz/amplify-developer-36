import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Clock, 
  Target, 
  TrendingUp, 
  Calendar,
  CheckCircle,
  Brain,
  Flame,
  Award,
  Play
} from "lucide-react";

const Dashboard = () => {
  const studyPlan = [
    { subject: "Mathematics", progress: 85, nextSession: "Today 2:00 PM", status: "active" },
    { subject: "Physics", progress: 60, nextSession: "Tomorrow 10:00 AM", status: "scheduled" },
    { subject: "Chemistry", progress: 40, nextSession: "Wednesday 3:00 PM", status: "pending" },
    { subject: "Biology", progress: 90, nextSession: "Completed", status: "completed" }
  ];

  const recentQuizzes = [
    { subject: "Calculus", score: 92, date: "Today", questions: 15 },
    { subject: "Organic Chemistry", score: 78, date: "Yesterday", questions: 20 },
    { subject: "Classical Mechanics", score: 86, date: "2 days ago", questions: 12 }
  ];

  return (
    <section id="dashboard" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-light rounded-full mb-6">
            <Target className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Your Dashboard</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Track Your
            <span className="bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent"> Progress </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor your learning journey with detailed analytics, personalized insights, 
            and AI-powered recommendations to optimize your study sessions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stats Overview */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="bg-gradient-to-r from-primary to-primary border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <Flame className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-foreground">28</div>
                  <div className="text-sm text-primary-foreground/80">Day Streak</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-secondary to-secondary border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 text-secondary-foreground mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary-foreground">12</div>
                  <div className="text-sm text-secondary-foreground/80">Subjects</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-accent to-accent border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-accent-foreground mx-auto mb-2" />
                  <div className="text-2xl font-bold text-accent-foreground">87%</div>
                  <div className="text-sm text-accent-foreground/80">Avg Score</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border shadow-card">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">124h</div>
                  <div className="text-sm text-muted-foreground">Study Time</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Study Plan */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  AI Study Plan
                </CardTitle>
                <CardDescription>
                  Your personalized learning schedule optimized by AI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {studyPlan.map((plan, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-b from-background to-muted">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-foreground">{plan.subject}</h4>
                        <Badge 
                          variant={plan.status === 'completed' ? 'secondary' : 
                                 plan.status === 'active' ? 'default' : 'outline'}
                        >
                          {plan.status}
                        </Badge>
                      </div>
                      <Progress value={plan.progress} className="mb-2" />
                      <p className="text-sm text-muted-foreground">{plan.nextSession}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Quizzes */}
          <div>
            <Card className="shadow-card border-0 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  Recent Quizzes
                </CardTitle>
                <CardDescription>
                  Your latest quiz performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentQuizzes.map((quiz, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gradient-to-b from-background to-muted">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">{quiz.subject}</h4>
                      <Badge variant={quiz.score >= 85 ? 'secondary' : quiz.score >= 70 ? 'default' : 'outline'}>
                        {quiz.score}%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{quiz.questions} questions</span>
                      <span>{quiz.date}</span>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline-primary" className="w-full mt-4">
                  <CheckCircle className="w-4 h-4" />
                  Take New Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;