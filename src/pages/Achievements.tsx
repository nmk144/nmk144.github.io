import Layout from '@/components/Layout';
import { Award, Trophy, Star, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'McKinsey & Company Case Competition',
      subtitle: 'Regional Finalist',
      year: '2024',
      description: 'Advanced to regional finals among 500+ teams by developing a comprehensive market entry strategy for a Fortune 500 client. Led cross-functional analysis and presented actionable recommendations to senior partners.',
      impact: 'Gained invaluable exposure to real-world consulting methodology and strategic thinking frameworks.',
      icon: Trophy,
      category: 'Competition'
    },
    {
      id: 2,
      title: 'Dean\'s List Recognition',
      subtitle: 'Academic Excellence',
      year: '2023-2024',
      description: 'Maintained top 5% academic standing while actively participating in research projects and extracurricular leadership roles.',
      impact: 'Demonstrated ability to excel academically while contributing meaningfully to the university community.',
      icon: Star,
      category: 'Academic'
    },
    {
      id: 3,
      title: 'Operations Research Society Award',
      subtitle: 'Outstanding Undergraduate Research',
      year: '2024',
      description: 'Recognized for research on supply chain resilience optimization, which was later published in an undergraduate research journal.',
      impact: 'Contributed to academic knowledge while developing deep expertise in quantitative problem-solving.',
      icon: Award,
      category: 'Research'
    },
    {
      id: 4,
      title: 'Student Innovation Challenge',
      subtitle: 'First Place Winner',
      year: '2023',
      description: 'Led team that developed an AI-powered solution for campus resource optimization, resulting in projected 25% efficiency gains.',
      impact: 'Bridged theoretical knowledge with practical innovation, demonstrating entrepreneurial thinking.',
      icon: Target,
      category: 'Innovation'
    }
  ];

  const categorizeAchievements = (category: string) => {
    return achievements.filter(achievement => achievement.category === category);
  };

  const categories = ['Competition', 'Academic', 'Research', 'Innovation'];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-header text-center">Achievements</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognition earned through dedication to excellence, continuous learning, 
            and meaningful contribution to academic and professional communities.
          </p>
        </div>

        {/* Timeline of Achievements */}
        <div className="space-y-12">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="timeline-item">
              <div className="card-professional p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h2 className="text-xl font-semibold text-primary mb-1">
                          {achievement.title}
                        </h2>
                        <h3 className="text-lg text-muted-foreground">
                          {achievement.subtitle}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 mt-2 sm:mt-0">
                        <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border">
                          {achievement.category}
                        </span>
                        <span className="text-sm font-medium text-primary">
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {achievement.description}
                    </p>
                    
                    <div className="border-l-4 border-primary/20 pl-4">
                      <p className="text-sm text-primary font-medium">
                        Key Learning: {achievement.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 card-professional p-8 bg-gradient-to-r from-accent-warm to-muted">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Continuous Growth
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Each recognition represents not just an endpoint, but a stepping stone toward deeper understanding 
              and greater impact. The journey of learning, contributing, and growing continues with every new challenge.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Achievements;