import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, BookOpen, BarChart3, Users, Zap, Shield, Smartphone, Globe } from "lucide-react";

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "AI Study Plans",
      description: "Personalized study schedules that adapt to your learning pace and goals",
      features: ["Smart scheduling", "Goal tracking", "Progress optimization", "Deadline management"]
    },
    {
      icon: BookOpen,
      title: "Smart Quizzes",
      description: "Intelligent quizzes that focus on your weak areas and reinforce learning",
      features: ["Adaptive difficulty", "Instant feedback", "Performance analytics", "Topic mastery"]
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Detailed insights into your learning patterns and academic performance",
      features: ["Performance tracking", "Trend analysis", "Strength identification", "Improvement suggestions"]
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Connect with study groups and learn together with AI-powered matching",
      features: ["Study groups", "Peer matching", "Knowledge sharing", "Group challenges"]
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Instant AI Answers",
      description: "Get immediate help with any academic question"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Study anywhere with our responsive mobile interface"
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Available in multiple languages for global learners"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
              <Zap className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Powerful Features</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover all the intelligent features that make StudyAI the ultimate learning companion for modern students.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Core Features</Badge>
            <h2 className="text-4xl font-bold mb-6">Everything You Need to Excel</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive suite of AI-powered tools designed to enhance every aspect of your learning journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Additional Benefits</Badge>
            <h2 className="text-4xl font-bold mb-6">More Ways to Succeed</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">AI-Powered</Badge>
              <h2 className="text-4xl font-bold mb-6">Smart Learning That Adapts</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our advanced AI algorithms learn from your study patterns, preferences, and performance 
                to create a truly personalized learning experience that evolves with you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Learns from your study habits</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Identifies knowledge gaps automatically</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Suggests optimal study times</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <div className="text-center">
                <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Intelligence</h3>
                <p className="text-muted-foreground">
                  Experience the power of artificial intelligence working specifically for your academic success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using these powerful features to achieve academic excellence.
          </p>
          <Button size="lg" className="mr-4">
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg">
            Schedule Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;