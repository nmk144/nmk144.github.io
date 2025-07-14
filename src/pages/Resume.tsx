import Layout from '@/components/Layout';
import { Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Resume = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-header text-center">Resume & CV</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my academic journey, professional experience, and technical competencies.
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <a 
            href="/assets/pdfs/alex-johnson-resume.pdf"
            className="btn-primary inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={20} />
            Download Resume
          </a>
          <a 
            href="/assets/pdfs/alex-johnson-cv.pdf"
            className="btn-secondary inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>

        {/* Resume Content */}
        <div className="card-professional p-8 space-y-8">
          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6 pb-2 border-b border-border">
              Contact Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">alex.johnson@university.edu</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Boston, MA</span>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-5 h-5 text-primary" />
                <a href="https://linkedin.com/in/alexjohnson" className="text-primary hover:text-primary-light transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6 pb-2 border-b border-border">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Bachelor of Science in Industrial Engineering & Management
                </h3>
                <p className="text-muted-foreground">
                  Boston University • Expected May 2025 • GPA: 3.8/4.0
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Relevant Coursework:</strong> Operations Research, Supply Chain Management, 
                  Data Analytics, Process Optimization, Quality Control, Project Management
                </p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6 pb-2 border-b border-border">
              Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Operations Research Intern
                </h3>
                <p className="text-muted-foreground">
                  TechLogistics Solutions • Summer 2024
                </p>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4 list-disc">
                  <li>Developed optimization models for warehouse layout and inventory management</li>
                  <li>Analyzed transportation networks to reduce costs by 18% across three facilities</li>
                  <li>Created automated reporting dashboards using Python and Power BI</li>
                  <li>Collaborated with cross-functional teams on process improvement initiatives</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Research Assistant
                </h3>
                <p className="text-muted-foreground">
                  BU Industrial Engineering Department • September 2023 - Present
                </p>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4 list-disc">
                  <li>Conducting research on supply chain resilience optimization models</li>
                  <li>Published findings in undergraduate research journal</li>
                  <li>Mentoring junior students in quantitative analysis methods</li>
                  <li>Presenting research at academic conferences and symposiums</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6 pb-2 border-b border-border">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Programming & Analytics</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'R', 'SQL', 'MATLAB', 'Excel VBA'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-3">Tools & Software</h3>
                <div className="flex flex-wrap gap-2">
                  {['Tableau', 'Power BI', 'Minitab', 'AutoCAD', 'Arena Simulation'].map((tool) => (
                    <span 
                      key={tool}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-3">Methodologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Lean Six Sigma', 'Design Thinking', 'Agile', 'Operations Research'].map((method) => (
                    <span 
                      key={method}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['English (Native)', 'Spanish (Conversational)', 'French (Basic)'].map((lang) => (
                    <span 
                      key={lang}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6 pb-2 border-b border-border">
              Certifications & Training
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">Lean Six Sigma Yellow Belt</span>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">Google Data Analytics Certificate</span>
                <span className="text-sm text-muted-foreground">2023</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">Project Management Fundamentals</span>
                <span className="text-sm text-muted-foreground">2023</span>
              </div>
            </div>
          </section>
        </div>

        {/* Contact Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in learning more about my background and experience?
          </p>
          <a 
            href="mailto:alex.johnson@university.edu" 
            className="btn-primary"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;