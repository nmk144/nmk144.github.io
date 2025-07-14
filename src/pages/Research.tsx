import Layout from '@/components/Layout';
import { FileText, ExternalLink, Calendar, Book } from 'lucide-react';

const Research = () => {
  const research = [
    {
      id: 1,
      title: 'Supply Chain Resilience in Post-Pandemic Manufacturing',
      type: 'Research Paper',
      date: 'March 2024',
      abstract: 'This paper examines how manufacturing companies can build more resilient supply chains by implementing diversification strategies, advanced analytics, and flexible operational models. Through case study analysis and quantitative modeling, we propose a framework for assessing and improving supply chain robustness.',
      status: 'Published',
      journal: 'Undergraduate Research Journal in Industrial Engineering',
      pdfLink: '#',
      tags: ['Supply Chain', 'Risk Management', 'Operations Research']
    },
    {
      id: 2,
      title: 'Optimization Models for Campus Resource Allocation',
      type: 'Working Paper',
      date: 'January 2024',
      abstract: 'An analytical study on optimizing university resource allocation using linear programming and simulation models. The research focuses on classroom scheduling, faculty assignment, and facility utilization to maximize educational outcomes while minimizing operational costs.',
      status: 'Under Review',
      journal: 'Journal of Higher Education Operations',
      pdfLink: '#',
      tags: ['Optimization', 'Resource Allocation', 'Education Analytics']
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Manufacturing: Digital Twins and Industry 4.0',
      date: 'April 2024',
      excerpt: 'Exploring how digital twin technology is revolutionizing manufacturing processes and what this means for the next generation of industrial engineers.',
      readTime: '6 min read',
      link: '#',
      tags: ['Industry 4.0', 'Digital Twins', 'Manufacturing']
    },
    {
      id: 2,
      title: 'Systems Thinking in Everyday Problem Solving',
      date: 'March 2024',
      excerpt: 'How applying systems thinking principles can transform the way we approach complex problems in both academic and professional contexts.',
      readTime: '4 min read',
      link: '#',
      tags: ['Systems Thinking', 'Problem Solving', 'Methodology']
    },
    {
      id: 3,
      title: 'Data-Driven Decision Making: Lessons from Case Competitions',
      date: 'February 2024',
      excerpt: 'Insights gained from participating in business case competitions and how data analytics can drive better strategic decisions.',
      readTime: '5 min read',
      link: '#',
      tags: ['Data Analytics', 'Strategy', 'Case Studies']
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-header text-center">Research & Insights</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of industrial engineering, data analytics, and systems optimization 
            through rigorous research and thoughtful analysis.
          </p>
        </div>

        {/* Research Papers Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Book className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-primary">Research Papers</h2>
          </div>
          
          <div className="space-y-6">
            {research.map((paper) => (
              <div key={paper.id} className="card-professional p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-primary">
                        {paper.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        paper.status === 'Published' 
                          ? 'bg-success/10 text-success border border-success/20' 
                          : 'bg-warning/10 text-warning border border-warning/20'
                      }`}>
                        {paper.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {paper.date}
                      </span>
                      <span>{paper.type}</span>
                      {paper.journal && <span className="italic">{paper.journal}</span>}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {paper.abstract}
                    </p>
                  </div>
                  
                  {paper.pdfLink && (
                    <div className="lg:ml-6">
                      <a 
                        href={paper.pdfLink}
                        className="btn-secondary text-sm py-2 px-4 inline-flex items-center gap-2"
                      >
                        <FileText size={16} />
                        Read Paper
                      </a>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Posts Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-primary">Recent Articles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="card-professional p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={post.link}
                  className="text-primary hover:text-primary-light transition-colors text-sm font-medium inline-flex items-center gap-1"
                >
                  Read More
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16 card-professional p-8 bg-gradient-to-r from-accent-warm to-muted">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Research Collaboration
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Interested in collaborative research opportunities or discussing these topics further? 
            I'm always open to engaging with fellow researchers and practitioners.
          </p>
          <a 
            href="mailto:alex.johnson@university.edu" 
            className="btn-primary"
          >
            Connect for Research
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Research;