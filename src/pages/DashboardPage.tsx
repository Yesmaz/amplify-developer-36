import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, BookOpen, Trophy, TrendingUp, Target, Zap, Star } from "lucide-react";

const DashboardPage = () => {
  const stats = [
    { icon: BookOpen, label: "Subjects", value: "8", change: "+2 this month" },
    { icon: Clock, label: "Study Hours", value: "127", change: "+15 this week" },
    { icon: Trophy, label: "Achievements", value: "23", change: "+3 this month" },
    { icon: TrendingUp, label: "Performance", value: "89%", change: "+5% improvement" }
  ];

  const recentActivity = [
    { subject: "Mathematics", topic: "Calculus", progress: 85, time: "2 hours ago" },
    { subject: "Physics", topic: "Quantum Mechanics", progress: 65, time: "1 day ago" },
    { subject: "Chemistry", topic: "Organic Chemistry", progress: 92, time: "2 days ago" },
    { subject: "Biology", topic: "Cell Biology", progress: 78, time: "3 days ago" }
  ];

  const upcomingTasks = [
    { task: "Complete Physics Assignment", due: "Tomorrow", priority: "High" },
    { task: "Review Mathematics Quiz", due: "In 2 days", priority: "Medium" },
    { task: "Chemistry Lab Report", due: "Next week", priority: "Low" },
    { task: "Biology Presentation", due: "Next week", priority: "Medium" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Student Dashboard</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your personalized learning command center. Track progress, manage tasks, and optimize your study experience.
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Badge variant="secondary" className="mb-4">Dashboard Overview</Badge>
            <h2 className="text-3xl font-bold mb-6">Your Learning Analytics</h2>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-primary" />
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
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs defaultValue="progress" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>

            {/* Progress Tab */}
            <TabsContent value="progress" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest study sessions and progress</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div className="flex-1">
                          <div className="font-semibold">{activity.subject}</div>
                          <div className="text-sm text-muted-foreground">{activity.topic}</div>
                          <div className="text-xs text-muted-foreground mt-1">{activity.time}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium mb-1">{activity.progress}%</div>
                          <Progress value={activity.progress} className="w-20" />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance Overview</CardTitle>
                    <CardDescription>Your overall academic performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
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
              </div>
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Study Schedule</CardTitle>
                  <CardDescription>Your AI-optimized study plan for the week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
                      <Card key={index} className="p-4">
                        <h3 className="font-semibold mb-3">{day}</h3>
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
                            <span>4:00 PM - Chemistry</span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tasks Tab */}
            <TabsContent value="tasks" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>Stay on top of your assignments and deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingTasks.map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div className="flex-1">
                          <div className="font-semibold">{task.task}</div>
                          <div className="text-sm text-muted-foreground">Due: {task.due}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge 
                            variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'default' : 'secondary'}
                          >
                            {task.priority}
                          </Badge>
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Insights Tab */}
            <TabsContent value="insights" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Insights</CardTitle>
                    <CardDescription>Personalized recommendations for better learning</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="font-semibold">Study Tip</span>
                      </div>
                      <p className="text-sm">Your best learning time is between 9-11 AM. Consider scheduling difficult subjects during this period.</p>
                    </div>
                    <div className="p-4 bg-secondary/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-secondary" />
                        <span className="font-semibold">Focus Area</span>
                      </div>
                      <p className="text-sm">Physics quantum mechanics needs more attention. Recommended: 2 extra practice sessions this week.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Achievement Unlocked</CardTitle>
                    <CardDescription>Celebrate your learning milestones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center p-6">
                      <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Study Streak Master</h3>
                      <p className="text-muted-foreground mb-4">15 days of consistent studying!</p>
                      <Badge variant="default" className="mb-4">
                        New Achievement
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        Keep it up! Next milestone: 30 days
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Learning?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect to Supabase to unlock personalized dashboards and save your progress.
          </p>
          <Button size="lg">
            Connect Database
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;