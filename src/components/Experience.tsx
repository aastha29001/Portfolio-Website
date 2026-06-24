export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Shardlab',
      period: 'Jun 2025 — Feb 2026',
      duration: '8 months',
      description:
        'Built a comprehensive full-featured blog application with end-to-end CRUD functionality. Developed and tested Solidity smart contracts, designed secure authentication systems with OIDC integration.',
      achievements: [
        'Full-stack CRUD operations with scalable architecture',
        'ERC-20, ERC-721, ERC-1155 smart contract development',
        'OIDC-based secure authentication flow',
        'Multi-language inline documentation tooling',
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Solidity'],
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Lumineux Informatik Technologies',
      period: 'Aug 2024 — May 2025',
      duration: '10 months',
      description:
        'Designed, integrated, and maintained multiple third-party REST APIs with complex request/response mappings. Built and scaled backend services with interactive UI components.',
      achievements: [
        'Multiple third-party REST API integrations',
        'Java & Spring Boot backend services at scale',
        'React with Redux state management',
        'AG Grid for large dataset processing',
      ],
      tech: ['Java', 'Spring Boot', 'React', 'Redux', 'PostgreSQL'],
    },
    {
      id: 3,
      title: 'Software Development Engineer',
      company: 'Tiket.com',
      period: 'Jul 2022 — Aug 2024',
      duration: '2+ years',
      description:
        'Increased integration speed by 30% by developing a generic service for Hotel Provider API integration. Resolved critical issues across services, enhancing platform stability.',
      achievements: [
        '30% speed improvement in integrations',
        'Generic service architecture for vendor APIs',
        'Reduced integration complexity across layers',
        'Enhanced overall platform stability',
      ],
      tech: ['Java', 'Spring Boot', 'Microservices', 'REST APIs'],
    },
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px]" />

      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-accent-cyan tracking-widest uppercase mb-3">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Work{' '}
            <span className="gradient-text-cyan">Experience</span>
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            My professional journey building scalable solutions and impactful products
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary/50 via-accent-cyan/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-12 md:pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-8 z-10">
                  <div className="w-3 h-3 rounded-full bg-accent-primary ring-4 ring-bg-primary group-hover:ring-accent-primary/20 transition-all duration-300" />
                </div>

                {/* Card */}
                <div className="glass-card p-7 md:p-9 gradient-border glow-accent-hover transition-all duration-300 hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-accent-primary/80 font-medium mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex gap-2.5 flex-wrap">
                      <span className="tag tag-accent">
                        {exp.duration}
                      </span>
                      <span className="tag">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed mb-7">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-7">
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                      Key Achievements
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <svg className="w-4 h-4 text-accent-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                          </svg>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-6 border-t border-border-subtle">
                    <div className="flex flex-wrap gap-2.5">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="skill-tag tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
