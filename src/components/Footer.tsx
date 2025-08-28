import { Brain, Github, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-accent to-secondary rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">StudyAI</h3>
                <p className="text-sm text-primary-foreground/80">Smart Study Assistant</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering students worldwide with AI-powered learning tools and personalized study experiences.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-accent transition-smooth">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/features" className="hover:text-accent transition-smooth">AI Study Plans</a></li>
              <li><a href="/features" className="hover:text-accent transition-smooth">Smart Quizzes</a></li>
              <li><a href="/dashboard" className="hover:text-accent transition-smooth">Progress Analytics</a></li>
              <li><a href="/resources" className="hover:text-accent transition-smooth">Learning Resources</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/resources" className="hover:text-accent transition-smooth">Programming</a></li>
              <li><a href="/resources" className="hover:text-accent transition-smooth">Science</a></li>
              <li><a href="/resources" className="hover:text-accent transition-smooth">File Upload</a></li>
              <li><a href="/dashboard" className="hover:text-accent transition-smooth">Dashboard</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/about" className="hover:text-accent transition-smooth">About Us</a></li>
              <li><a href="/contact" className="hover:text-accent transition-smooth">Contact</a></li>
              <li><a href="/login" className="hover:text-accent transition-smooth">Login</a></li>
              <li><a href="/register" className="hover:text-accent transition-smooth">Register</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 StudyAI. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-primary-foreground/80 mt-4 md:mt-0">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-accent" />
            <span>for students everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;