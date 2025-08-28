import { Button } from "@/components/ui/button";
import { Brain, BookOpen, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">StudyAI</h1>
            <p className="text-xs text-muted-foreground">Smart Study Assistant</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="/features" className="text-foreground hover:text-primary transition-smooth">
            Features
          </a>
          <a href="/resources" className="text-foreground hover:text-primary transition-smooth">
            Resources
          </a>
          <a href="/dashboard" className="text-foreground hover:text-primary transition-smooth">
            Dashboard
          </a>
          <a href="/about" className="text-foreground hover:text-primary transition-smooth">
            About
          </a>
          <a href="/contact" className="text-foreground hover:text-primary transition-smooth">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline-primary" size="sm" asChild>
            <a href="/login">
              <User className="w-4 h-4" />
              Login
            </a>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <a href="/register">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;