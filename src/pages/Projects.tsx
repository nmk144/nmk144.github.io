import Layout from '@/components/Layout';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Supply Chain Optimization Model',
      description: 'Developed a comprehensive optimization model for a regional manufacturing company to reduce logistics costs by 23% while improving delivery times.',
      problem: 'Complex multi-node distribution network with inefficient routing and inventory management.',
      method: 'Applied linear programming and network analysis using Python (PuLP) and data visualization.',
      result: '23% cost reduction, 15% faster delivery times, and streamlined inventory management.',
      tools: ['Python', 'PuLP', 'Pandas', 'NetworkX', 'Tableau'],
      pdfLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Process Improvement Case Study',
      description: 'Led a cross-functional team to analyze and redesign manufacturing processes for a local electronics company.',
      problem: 'High defect rates and bottlenecks in the production line causing delivery delays.',
      method: 'Lean Six Sigma methodology with statistical process control and value stream mapping.',
      result: '40% reduction in defect rates, 20% increase in throughput, and improved quality metrics.',
      tools: ['Minitab', 'Value Stream Mapping', 'Statistical Analysis', 'Lean Tools'],
      pdfLink: '#'
    },
    {
      id: 3,
      title: 'Data Analytics Dashboard',
      description: 'Created an interactive dashboard for academic performance tracking and resource allocation optimization.',
      problem: 'University department needed better visibility into student performance and resource utilization.',
      method: 'Built ETL pipeline and interactive dashboard using modern data visualization techniques.',
      result: 'Real-time insights enabling 30% better resource allocation and proactive student support.',
      tools: ['R', 'Shiny', 'SQL', 'ggplot2', 'dplyr'],
      githubLink: '#'
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-header text-center">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A curated selection of projects showcasing systematic problem-solving, 
            analytical rigor, and practical impact across operations, optimization, and data analysis.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card-professional p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-primary mb-3">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex gap-3 lg:ml-6">
                  {project.pdfLink && (
                    <a 
                      href={project.pdfLink}
                      className="btn-secondary text-sm py-2 px-4 inline-flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      View PDF
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      className="btn-secondary text-sm py-2 px-4 inline-flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* Problem → Method → Result */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h3 className="font-medium text-primary mb-2">Problem</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-2">Method</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.method}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-primary mb-2">Result</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="font-medium text-primary mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span 
                      key={tool}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in discussing these projects or exploring collaboration opportunities?
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

export default Projects;