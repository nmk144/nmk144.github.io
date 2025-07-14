import Layout from '@/components/Layout';
import { ArrowRight, Download, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '@/assets/images/profile-headshot.jpg';

const Index = () => {
  const academicTimeline = [
    {
      semester: 'Fall 2021',
      courses: ['Calculus I', 'Chemistry', 'Engineering Design', 'English Composition'],
      highlight: 'Introduction to Engineering Fundamentals'
    },
    {
      semester: 'Spring 2022',
      courses: ['Calculus II', 'Physics I', 'Statistics', 'Computer Programming'],
      highlight: 'First Programming Experience'
    },
    {
      semester: 'Fall 2022',
      courses: ['Linear Algebra', 'Physics II', 'Engineering Economics', 'Materials Science'],
      highlight: 'Core Engineering Foundation'
    },
    {
      semester: 'Spring 2023',
      courses: ['Operations Research', 'Probability', 'Manufacturing Processes', 'Ethics'],
      highlight: 'Discovered Passion for Optimization'
    },
    {
      semester: 'Fall 2023',
      courses: ['Supply Chain Management', 'Quality Control', 'Data Analytics', 'Project Management'],
      highlight: 'Research Assistant Position Began'
    },
    {
      semester: 'Spring 2024',
      courses: ['Systems Engineering', 'Lean Six Sigma', 'Advanced Statistics', 'Leadership'],
      highlight: 'Published First Research Paper'
    },
    {
      semester: 'Fall 2024',
      courses: ['Capstone Project', 'Advanced Optimization', 'Internship Reflection', 'Thesis'],
      highlight: 'Current Focus: Supply Chain Resilience'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent-warm to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  Alex Johnson
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mt-4">
                  Industrial Engineering & Management Student
                </p>
                <p className="text-lg text-muted-foreground mt-2">
                  Optimizing systems. Solving problems. Creating impact.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/projects" 
                  className="btn-primary inline-flex items-center gap-2 justify-center"
                >
                  View Projects
                  <ArrowRight size={20} />
                </Link>
                <a 
                  href="/assets/pdfs/alex-johnson-resume.pdf" 
                  className="btn-secondary inline-flex items-center gap-2 justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={20} />
                  Resume
                </a>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="mailto:alex.johnson@university.edu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/alexjohnson"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
                  <img 
                    src={profileImage} 
                    alt="Alex Johnson - Industrial Engineering Student"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-header text-center">About Me</h2>
          </div>
          
          <div className="card-professional p-8 lg:p-12">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                I'm a senior Industrial Engineering & Management student at Boston University with a passion for 
                applying analytical thinking to complex organizational challenges. My academic journey has been 
                shaped by a deep curiosity about how systems work and how they can be optimized to create 
                meaningful impact.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Through coursework, research, and hands-on experience, I've developed expertise in operations research, 
                supply chain optimization, and data analytics. I believe that the most elegant solutions often emerge 
                from the intersection of quantitative rigor and systems thinking.
              </p>
              
              <p className="text-lg leading-relaxed">
                Currently, I'm focused on research in supply chain resilience and exploring how organizations can 
                build more adaptive, sustainable operational models. I'm particularly interested in the application 
                of optimization techniques to real-world problems in manufacturing, logistics, and service operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Timeline */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-header text-center">Academic Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A progression through core concepts in industrial engineering, building from mathematical foundations 
              to advanced optimization and systems design.
            </p>
          </div>
          
          {/* Timeline - Horizontal scroll on mobile, grid on desktop */}
          <div className="overflow-x-auto pb-4">
            <div className="flex lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 min-w-max lg:min-w-0">
              {academicTimeline.map((semester, index) => (
                <div key={semester.semester} className="card-professional p-6 min-w-80 lg:min-w-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-primary">
                      {semester.semester}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Key Courses</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {semester.courses.map((course) => (
                          <li key={course} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-primary/20 pl-3">
                      <p className="text-sm text-primary font-medium">
                        {semester.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-header text-center">Explore More</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/projects" className="card-professional p-6 group">
              <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-primary-light transition-colors">
                Featured Projects
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Explore optimization models, process improvements, and data analytics projects with real-world impact.
              </p>
            </Link>
            
            <Link to="/research" className="card-professional p-6 group">
              <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-primary-light transition-colors">
                Research & Writing
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Academic papers and thoughtful analysis on supply chain resilience and systems optimization.
              </p>
            </Link>
            
            <Link to="/achievements" className="card-professional p-6 group">
              <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-primary-light transition-colors">
                Recognition & Growth
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Awards, competitions, and learning experiences that have shaped my development.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
