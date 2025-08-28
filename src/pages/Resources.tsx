import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SmartQuiz from "@/components/SmartQuiz";
import { 
  Code, 
  Beaker, 
  Upload, 
  ExternalLink, 
  Play, 
  BookOpen, 
  FileText,
  Youtube,
  Globe,
  Star,
  Clock,
  Users
} from "lucide-react";

const Resources = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const programmingResources = [
    {
      title: "W3Schools - Web Development",
      description: "Complete tutorials on HTML, CSS, JavaScript, Python, Java, and more with interactive examples.",
      url: "https://www.w3schools.com/",
      type: "Interactive Tutorial",
      rating: 4.8,
      students: "50M+",
      topics: ["HTML/CSS", "JavaScript", "Python", "Java", "SQL", "PHP"],
      difficulty: "Beginner to Advanced"
    },
    {
      title: "freeCodeCamp - Full Stack Development",
      description: "Learn to code for free with interactive coding challenges and projects. Get certifications.",
      url: "https://www.freecodecamp.org/",
      type: "Certification Course",
      rating: 4.9,
      students: "400K+",
      topics: ["Frontend", "Backend", "Data Science", "Machine Learning"],
      difficulty: "Beginner to Expert"
    },
    {
      title: "Simplilearn Official - YouTube",
      description: "Comprehensive programming tutorials covering latest technologies and frameworks.",
      url: "https://www.youtube.com/@SimplilearnOfficial",
      type: "Video Tutorial",
      rating: 4.7,
      students: "3M+",
      topics: ["React", "Node.js", "Python", "DevOps", "Cloud", "AI/ML"],
      difficulty: "Intermediate to Advanced"
    },
    {
      title: "Appliso Generative AI Course",
      description: "Comprehensive course on Generative AI, covering fundamentals to advanced applications.",
      url: "https://training.appliso.com/course/view.php?id=16",
      type: "Professional Course",
      rating: 4.8,
      students: "10K+",
      topics: ["Generative AI", "Machine Learning", "Deep Learning", "AI Applications"],
      difficulty: "Intermediate to Advanced"
    },
    {
      title: "MDN Web Docs",
      description: "The most comprehensive and accurate web development documentation by Mozilla.",
      url: "https://developer.mozilla.org/",
      type: "Documentation",
      rating: 4.9,
      students: "10M+",
      topics: ["Web APIs", "HTML", "CSS", "JavaScript", "Web Standards"],
      difficulty: "All Levels"
    }
  ];

  const scienceResources = [
    {
      title: "Khan Academy - Science",
      description: "World-class education in Biology, Chemistry, Physics, Earth Science with practice exercises.",
      url: "https://www.khanacademy.org/science",
      type: "Interactive Learning",
      rating: 4.8,
      students: "120M+",
      topics: ["Biology", "Chemistry", "Physics", "Earth Science", "Cosmology"],
      difficulty: "K-12 to College"
    },
    {
      title: "Coursera - Science Courses",
      description: "University-level science courses from top institutions worldwide.",
      url: "https://www.coursera.org/browse/physical-science-and-engineering",
      type: "University Course",
      rating: 4.7,
      students: "92M+",
      topics: ["Advanced Physics", "Organic Chemistry", "Molecular Biology"],
      difficulty: "College Level"
    },
    {
      title: "Crash Course - Science YouTube",
      description: "Engaging video series covering Biology, Chemistry, Physics, and Earth Science.",
      url: "https://www.youtube.com/@crashcourse",
      type: "Video Series",
      rating: 4.9,
      students: "13M+",
      topics: ["Biology", "Chemistry", "Physics", "Anatomy", "Ecology"],
      difficulty: "High School to College"
    },
    {
      title: "MIT OpenCourseWare - Science",
      description: "Free access to MIT's science course materials, lectures, and assignments.",
      url: "https://ocw.mit.edu/search/?q=science",
      type: "University Material",
      rating: 4.8,
      students: "5M+",
      topics: ["Advanced Physics", "Biochemistry", "Materials Science"],
      difficulty: "Advanced College"
    },
    {
      title: "NASA Education Resources",
      description: "Official NASA educational content about space science, Earth science, and astronomy.",
      url: "https://www.nasa.gov/audience/foreducators/",
      type: "Educational Content",
      rating: 4.9,
      students: "2M+",
      topics: ["Space Science", "Earth Science", "Astronomy", "Engineering"],
      difficulty: "All Levels"
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
      // Note: This is just UI - actual upload needs Supabase
      alert("File upload functionality requires Supabase integration for storage. Please connect Supabase first.");
    }
  };

  const ResourceCard = ({ resource, category }: { resource: any, category: string }) => (
    <Card className="h-full hover:shadow-elegant transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {category === 'programming' ? 
              <Code className="w-5 h-5 text-primary" /> : 
              <Beaker className="w-5 h-5 text-secondary" />
            }
            <Badge variant="outline" className="text-xs">
              {resource.type}
            </Badge>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{resource.rating}</span>
          </div>
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {resource.title}
        </CardTitle>
        <CardDescription className="text-sm">
          {resource.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{resource.students}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{resource.difficulty}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="text-sm font-medium">Topics Covered:</Label>
          <div className="flex flex-wrap gap-1">
            {resource.topics.map((topic: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
        
        <Button 
          className="w-full group-hover:shadow-md transition-all"
          onClick={() => window.open(resource.url, '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Access Resource
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Learning Resources</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Access the best online learning resources for programming and science. From beginner tutorials to advanced courses.
          </p>
        </div>
      </section>

      {/* Resources Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="programming" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-2xl grid-cols-4">
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="science">Science</TabsTrigger>
                <TabsTrigger value="quiz">AI Quiz</TabsTrigger>
                <TabsTrigger value="upload">Upload</TabsTrigger>
              </TabsList>
            </div>

            {/* Programming Resources */}
            <TabsContent value="programming" className="space-y-8">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">Programming</Badge>
                <h2 className="text-4xl font-bold mb-6">Master Programming Skills</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Learn from the best programming resources including W3Schools, freeCodeCamp, and top YouTube channels.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {programmingResources.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} category="programming" />
                ))}
              </div>

              {/* Featured YouTube Channels */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Youtube className="w-6 h-6 text-red-500" />
                  Featured Programming YouTube Channels
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia", subs: "2M+" },
                    { name: "Programming with Mosh", url: "https://www.youtube.com/@programmingwithmosh", subs: "3M+" },
                    { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja", subs: "1M+" }
                  ].map((channel, index) => (
                    <Card key={index} className="p-4 hover:shadow-md transition-all">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{channel.name}</h4>
                          <p className="text-sm text-muted-foreground">{channel.subs} subscribers</p>
                        </div>
                        <Button size="sm" variant="outline" onClick={() => window.open(channel.url, '_blank')}>
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Science Resources */}
            <TabsContent value="science" className="space-y-8">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">Science</Badge>
                <h2 className="text-4xl font-bold mb-6">Explore Scientific Knowledge</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Discover comprehensive science resources from Khan Academy, MIT, NASA, and leading educational platforms.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {scienceResources.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} category="science" />
                ))}
              </div>

              {/* Featured Science YouTube Channels */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Youtube className="w-6 h-6 text-red-500" />
                  Featured Science YouTube Channels
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: "SciShow", url: "https://www.youtube.com/@SciShow", subs: "7M+" },
                    { name: "Veritasium", url: "https://www.youtube.com/@veritasium", subs: "14M+" },
                    { name: "MinutePhysics", url: "https://www.youtube.com/@minutephysics", subs: "5M+" }
                  ].map((channel, index) => (
                    <Card key={index} className="p-4 hover:shadow-md transition-all">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{channel.name}</h4>
                          <p className="text-sm text-muted-foreground">{channel.subs} subscribers</p>
                        </div>
                        <Button size="sm" variant="outline" onClick={() => window.open(channel.url, '_blank')}>
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* AI Quiz Tab */}
            <TabsContent value="quiz" className="space-y-8">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">AI-Powered Learning</Badge>
                <h2 className="text-4xl font-bold mb-6">Smart Quiz Generator</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Generate personalized quizzes tailored to your learning style, level, and subject preferences using advanced AI.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <SmartQuiz />
              </div>
            </TabsContent>

            {/* File Upload */}
            <TabsContent value="upload" className="space-y-8">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">File Management</Badge>
                <h2 className="text-4xl font-bold mb-6">Upload Your Study Materials</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Upload and organize your personal study files, notes, and documents in one secure place.
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="w-5 h-5" />
                      Upload Study Files
                    </CardTitle>
                    <CardDescription>
                      Upload PDFs, documents, images, and other study materials. Files are stored securely with Supabase.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <div className="space-y-2">
                        <Label htmlFor="file-upload" className="text-lg font-medium cursor-pointer">
                          Click to upload files or drag and drop
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          PDF, DOC, DOCX, JPG, PNG up to 10MB each
                        </p>
                      </div>
                      <Input
                        id="file-upload"
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleFileUpload}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
                      />
                    </div>

                    {uploadedFiles.length > 0 && (
                      <div className="space-y-3">
                        <Label className="text-sm font-medium">Uploaded Files:</Label>
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                            <FileText className="w-5 h-5 text-primary" />
                            <div className="flex-1">
                              <p className="font-medium">{file.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              Ready to Upload
                            </Badge>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800 dark:text-yellow-200">
                          Supabase Integration Required
                        </span>
                      </div>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        File upload and storage functionality requires Supabase integration. 
                        Connect your project to Supabase to enable file storage capabilities.
                      </p>
                    </div>

                    <Button className="w-full" size="lg" disabled>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Files (Requires Supabase)
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Resources;