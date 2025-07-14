import Layout from '@/components/Layout';
import { Users, Heart, BookOpen, Lightbulb } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: 'Industrial Engineering Student Association',
      role: 'Vice President',
      period: '2023 - Present',
      description: 'Leading initiatives to connect students with industry professionals and organize career development workshops. Coordinated the annual IE symposium with 200+ attendees and 15 industry speakers.',
      impact: 'Increased student engagement by 40% and established partnerships with 8 local engineering firms.',
      icon: Users,
      category: 'Leadership'
    },
    {
      id: 2,
      title: 'Boston Community Food Bank',
      role: 'Operations Volunteer',
      period: '2022 - Present',
      description: 'Apply process optimization principles to improve food sorting and distribution efficiency. Lead volunteer teams during weekend shifts and help streamline inventory management processes.',
      impact: 'Implemented new sorting system that increased processing speed by 25% and trained 50+ new volunteers.',
      icon: Heart,
      category: 'Community Service'
    },
    {
      id: 3,
      title: 'Peer Academic Success Program',
      role: 'Math & Statistics Tutor',
      period: '2023 - Present',
      description: 'Provide one-on-one and group tutoring for students in calculus, statistics, and operations research courses. Develop study materials and practice problems to support student learning.',
      impact: 'Helped 30+ students improve their grades with 85% achieving B+ or higher in target courses.',
      icon: BookOpen,
      category: 'Education'
    },
    {
      id: 4,
      title: 'University Innovation Lab',
      role: 'Research Team Member',
      period: '2023 - 2024',
      description: 'Participated in interdisciplinary research projects focusing on sustainable technology solutions. Collaborated with engineering, business, and design students on prototype development.',
      impact: 'Contributed to 2 patent applications and presented findings at 3 academic conferences.',
      icon: Lightbulb,
      category: 'Innovation'
    }
  ];

  const values = [
    {
      title: 'Systems Thinking',
      description: 'Every challenge is part of a larger system. I approach problems holistically, considering interconnections and long-term implications.'
    },
    {
      title: 'Continuous Learning',
      description: 'Growth happens at the intersection of curiosity and action. I actively seek opportunities to expand my understanding and capabilities.'
    },
    {
      title: 'Community Impact',
      description: 'Technical skills are most valuable when applied to benefit others. I believe in using my abilities to create positive change in my community.'
    },
    {
      title: 'Collaborative Leadership',
      description: 'The best solutions emerge from diverse perspectives working together. I strive to create inclusive environments where everyone can contribute.'
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-header text-center">Activities & Values</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond academics, I'm deeply committed to community engagement, leadership development, 
            and applying engineering principles to create positive social impact.
          </p>
        </div>

        {/* Activities */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-8">Involvement & Leadership</h2>
          
          <div className="space-y-8">
            {activities.map((activity) => (
              <div key={activity.id} className="card-professional p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <activity.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">
                          {activity.title}
                        </h3>
                        <h4 className="text-lg text-muted-foreground">
                          {activity.role}
                        </h4>
                      </div>
                      <div className="flex items-center gap-3 mt-2 sm:mt-0">
                        <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border">
                          {activity.category}
                        </span>
                        <span className="text-sm font-medium text-primary">
                          {activity.period}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {activity.description}
                    </p>
                    
                    <div className="border-l-4 border-primary/20 pl-4">
                      <p className="text-sm text-primary font-medium">
                        Impact: {activity.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-8">Core Values & Philosophy</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-professional p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Statement */}
        <section className="mt-16">
          <div className="card-professional p-8 bg-gradient-to-r from-accent-warm to-muted text-center">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Looking Forward
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              As I continue my journey in Industrial Engineering & Management, I'm excited to tackle increasingly 
              complex challenges that sit at the intersection of technology, human systems, and social good. 
              The experiences I've gained through these activities have reinforced my commitment to using analytical 
              thinking and collaborative leadership to create meaningful, lasting impact.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in collaboration, mentorship, or learning more about these initiatives?
          </p>
          <a 
            href="mailto:alex.johnson@university.edu" 
            className="btn-primary"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Activities;