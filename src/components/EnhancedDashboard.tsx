import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import SmartQuiz from "@/components/SmartQuiz";
import { Calendar, Clock, BookOpen, Trophy, TrendingUp, Target, Zap, Star, Brain, Sparkles, Play } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const EnhancedDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    subjects: 8,
    studyHours: 127,
    achievements: 23,
    performance: 89
  });
  const [recentQuizzes, setRecentQuizzes] = useState<any[]>([]);
  const [studySessions, setStudySessions] = useState<any[]>([]);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      // Fetch recent quizzes
      const { data: quizzes } = await supabase
        .from('quizzes')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (quizzes) setRecentQuizzes(quizzes);

      // Fetch study sessions
      const { data: sessions } = await supabase
        .from('study_sessions')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (sessions) setStudySessions(sessions);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const aiInsights = [
    {
      type: "study_tip",
      icon: Zap,
      title: "Optimal Study Time",
      content: "Your best learning time is between 9-11 AM. Consider scheduling difficult subjects during this period.",
      color: "primary"
    },
    {
      type: "focus_area",
      icon: Target,
      title: "Focus Recommendation",
      content: "Physics quantum mechanics needs more attention. Try the AI quiz generator for extra practice.",
      color: "secondary"
    },
    {
      type: "achievement",
      icon: Star,
      title: "Learning Streak",
      content: "You're on a 15-day study streak! Keep up the excellent consistency.",
      color: "accent"
    }
  ];

  const interactiveFeatures = [
    {
      title: "AI Study Assistant",
      description: "Get personalized study recommendations based on your learning patterns",
      icon: Brain,
      action: "Launch Assistant",
      color: "bg-gradient-to-r from-purple-500 to-blue-500"
    },
    {
      title: "Smart Quiz Generator",
      description: "Generate adaptive quizzes tailored to your knowledge level",
      icon: Sparkles,
      action: "Generate Quiz",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      title: "Study Timer & Analytics",
      description: "Track your study sessions with advanced productivity insights",
      icon: Clock,
      action: "Start Session",
      color: "bg-gradient-to-r from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">Welcome back, {user?.user_metadata?.full_name || 'Student'}!</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Your AI-powered learning dashboard is ready. Let's continue your educational journey with personalized insights and adaptive tools.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white/20 hover:bg-white/30 border-white/30">
              <Play className="w-4 h-4 mr-2" />
              Quick Start Session
            </Button>
            <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
              <Brain className="w-4 h-4 mr-2" />
              AI Recommendations
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">AI-Powered Features</Badge>
            <h2 className="text-3xl font-bold">Intelligent Learning Tools</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {interactiveFeatures.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className={`absolute inset-0 ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <Button className="w-full group-hover:shadow-md transition-all">
                    {feature.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: BookOpen, label: "Active Subjects", value: stats.subjects.toString(), change: "+2 this month", color: "primary" },
              { icon: Clock, label: "Study Hours", value: stats.studyHours.toString(), change: "+15 this week", color: "secondary" },
              { icon: Trophy, label: "Achievements", value: stats.achievements.toString(), change: "+3 this month", color: "accent" },
              { icon: TrendingUp, label: "Performance", value: `${stats.performance}%`, change: "+5% improvement", color: "primary" }
            ].map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-${stat.color}/10 rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Tabs */}
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="quiz">AI Quiz</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Quiz Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {recentQuizzes.length > 0 ? (
                      <div className="space-y-3">
                        {recentQuizzes.map((quiz, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div>
                              <div className="font-semibold">{quiz.subject}</div>
                              <div className="text-sm text-muted-foreground">{quiz.difficulty_level}</div>
                            </div>
                            <Badge variant={quiz.score >= 80 ? "default" : quiz.score >= 60 ? "secondary" : "destructive"}>
                              {quiz.score}%
                            </Badge>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">No quizzes yet. Try the AI Quiz Generator!</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Study Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {studySessions.length > 0 ? (
                      <div className="space-y-3">
                        {studySessions.map((session, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div>
                              <div className="font-semibold">{session.subject}</div>
                              <div className="text-sm text-muted-foreground">{session.topic}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium">{session.duration_minutes}m</div>
                              <Progress value={session.progress_percentage} className="w-16" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Start your first study session!</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* AI Quiz Tab */}
            <TabsContent value="quiz" className="space-y-6">
              <SmartQuiz />
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Optimized Study Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
                      <Card key={index} className="p-4 hover:shadow-md transition-all">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {day}
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span>9:00 AM - Mathematics</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full" />
                            <span>2:00 PM - Physics</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                            <span>4:00 PM - AI Quiz</span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* AI Insights Tab */}
            <TabsContent value="insights" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Learning Insights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {aiInsights.map((insight, index) => (
                      <div key={index} className={`p-4 bg-${insight.color}/10 rounded-lg`}>
                        <div className="flex items-center gap-2 mb-2">
                          <insight.icon className={`w-4 h-4 text-${insight.color}`} />
                          <span className="font-semibold">{insight.title}</span>
                        </div>
                        <p className="text-sm">{insight.content}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Achievement Center</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center p-6">
                      <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Quiz Master</h3>
                      <p className="text-muted-foreground mb-4">Complete 10 AI-generated quizzes!</p>
                      <Progress value={67} className="mb-4" />
                      <p className="text-sm text-muted-foreground">7/10 completed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Progress Tab */}
            <TabsContent value="progress" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Progress Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span>Overall Progress</span>
                      <span className="font-semibold">89%</span>
                    </div>
                    <Progress value={89} />
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="font-semibold">Streak</div>
                        <div className="text-2xl font-bold text-primary">15 days</div>
                      </div>
                      <div className="text-center p-4 bg-secondary/10 rounded-lg">
                        <Target className="w-8 h-8 text-secondary mx-auto mb-2" />
                        <div className="font-semibold">Goals Met</div>
                        <div className="text-2xl font-bold text-secondary">8/10</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default EnhancedDashboard;