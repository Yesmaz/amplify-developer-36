import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Lightbulb, Users, Award, TrendingUp, BookOpen, Star } from "lucide-react";

const About = () => {
  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Get personalized study recommendations based on your learning patterns and preferences."
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Set and track your academic goals with intelligent milestone tracking and progress analytics."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Understand your strengths and weaknesses with detailed performance insights and recommendations."
    },
    {
      icon: BookOpen,
      title: "Adaptive Content",
      description: "Access study materials that adapt to your learning style and difficulty preferences."
    }
  ];

  const achievements = [
    { number: "50,000+", label: "Active Students" },
    { number: "95%", label: "Success Rate" },
    { number: "4.8/5", label: "User Rating" },
    { number: "200+", label: "Universities" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
              <Brain className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">About StudyAI</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing education through artificial intelligence, helping students achieve their academic dreams with personalized learning experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Our Mission</Badge>
              <h2 className="text-4xl font-bold mb-6">Empowering Every Student to Excel</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At StudyAI, we believe that every student deserves access to personalized, intelligent learning tools. 
                Our mission is to democratize quality education through cutting-edge AI technology that adapts to 
                individual learning styles and preferences.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're not just building an app – we're creating a learning companion that grows with you, 
                understands your challenges, and celebrates your victories.
              </p>
              <div className="flex items-center gap-4">
                <Lightbulb className="w-8 h-8 text-primary" />
                <span className="text-lg font-semibold">Innovation in Education</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                    <div className="text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Gain Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Benefits</Badge>
            <h2 className="text-4xl font-bold mb-6">What You'll Gain with StudyAI</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your learning journey with intelligent features designed to maximize your academic potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Community Learning</h3>
              <p className="text-sm text-muted-foreground">Connect with fellow students and share knowledge</p>
            </Card>
            <Card className="text-center p-6">
              <Award className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Achievement System</h3>
              <p className="text-sm text-muted-foreground">Earn badges and track your learning milestones</p>
            </Card>
            <Card className="text-center p-6">
              <Star className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">24/7 AI Support</h3>
              <p className="text-sm text-muted-foreground">Get instant help whenever you need it</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already achieving their academic goals with StudyAI.
          </p>
          <Button size="lg" className="mr-4">
            Get Started for Free
          </Button>
          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;