export default function About() {
  const expertise = [
    {
      category: 'Frontend',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
      color: 'accent-primary',
    },
    {
      category: 'Backend',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices'],
      color: 'accent-cyan',
    },
    {
      category: 'Databases',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: ['MongoDB', 'PostgreSQL', 'DynamoDB', 'Redis'],
      color: 'accent-rose',
    },
    {
      category: 'DevOps',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ['Docker', 'AWS EC2', 'Jenkins', 'CI/CD'],
      color: 'accent-primary',
    },
  ];

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '30%', label: 'Integration Speed↑' },
    { value: '3', label: 'Companies' },
    { value: '4+', label: 'Projects Shipped' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />

      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-accent-primary tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Crafting Scalable{' '}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto leading-relaxed">
            A Software Development Engineer who turns complex problems into
            elegant, high-performance applications.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-7 md:p-8 text-center glow-accent-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bio + Expertise */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-7">
            <p className="text-text-secondary leading-relaxed">
              I'm a full-stack developer with experience spanning from
              crafting responsive frontends with{' '}
              <span className="text-accent-primary font-medium">React</span>{' '}
              to designing microservices with{' '}
              <span className="text-accent-primary font-medium">
                Java & Spring Boot
              </span>
              .
            </p>
            <p className="text-text-secondary leading-relaxed">
              At Tiket.com, I achieved a{' '}
              <span className="text-accent-cyan font-semibold">
                30% improvement in integration speed
              </span>{' '}
              by developing a generic service for Hotel Provider API
              integration, reducing complexity across service layers.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My passion lies in solving complex problems through elegant code
              and building products that make a meaningful impact.
            </p>

            {/* Education */}
            <div className="glass-card p-6 mt-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">
                    B.Tech — CSE
                  </h4>
                  <p className="text-xs text-text-muted">
                    Chitkara University · GPA 9.8/10
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5 md:gap-6">
            {expertise.map((exp) => (
              <div
                key={exp.category}
                className="glass-card p-7 md:p-8 gradient-border glow-accent-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg bg-${exp.color}/10 flex items-center justify-center text-${exp.color}`}>
                    {exp.icon}
                  </div>
                  <h3 className="font-semibold text-text-primary">
                    {exp.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag tag hover:text-accent-primary hover:border-accent-primary/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
