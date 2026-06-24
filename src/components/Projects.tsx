export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI Trip Planner',
      category: 'AI & Travel',
      period: '10 Days',
      description:
        'A comprehensive trip planning app powered by Google Gemini AI for intelligent, personalized recommendations with real-time Firebase backend.',
      highlights: [
        'AI-powered personalized recommendations',
        'Real-time itinerary updates',
        'Budget-based trip planning',
        'Interactive animated UI',
      ],
      tech: ['React', 'Gemini AI', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      gradient: 'from-accent-primary to-accent-secondary',
    },
    {
      id: 2,
      title: 'Zenix — Video Calling',
      category: 'Communication',
      period: '5 Days',
      description:
        'Real-time video calling and scheduling app with WebRTC for video streaming, Socket.IO for live communication, and integrated scheduling.',
      highlights: [
        'Real-time video calling with WebRTC',
        'Live scheduling integration',
        'Socket.IO real-time updates',
        'Responsive UI design',
      ],
      tech: ['React', 'TypeScript', 'Socket.IO', 'WebRTC', 'Tailwind CSS'],
      gradient: 'from-accent-cyan to-accent-primary',
    },
    {
      id: 3,
      title: 'AI Notemaking App',
      category: 'Productivity',
      period: '5 Days',
      description:
        'Intelligent AI-powered notetaking app with PDF upload support and automatic note generation using Next.js and LangChain.',
      highlights: [
        'PDF upload and processing',
        'AI-powered note generation',
        'Next.js server-side rendering',
        'LangChain AI integration',
      ],
      tech: ['Next.js', 'Tailwind CSS', 'LangChain', 'PDF.js', 'TypeScript'],
      gradient: 'from-accent-rose to-accent-primary',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'Web Design',
      period: '5 Days',
      description:
        'A modern, responsive portfolio website with smooth scroll animations, mobile-first design, and performance optimized with Vite.',
      highlights: [
        'Responsive mobile-first design',
        'Smooth scroll animations',
        'React component architecture',
        'Vite performance optimization',
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      gradient: 'from-accent-secondary to-accent-rose',
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent-rose/30 to-transparent" />
      <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-accent-rose/5 rounded-full blur-[120px]" />

      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-accent-rose tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-accent-rose to-accent-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Innovative side projects showcasing my passion for creative problem-solving
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass-card overflow-hidden gradient-border glow-accent-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top accent bar */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-7 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                      <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <span className="tag shrink-0">
                    {project.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 gap-2.5">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <svg className="w-3.5 h-3.5 text-accent-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="pt-6 border-t border-border-subtle">
                  <div className="flex flex-wrap gap-2.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="skill-tag tag hover:text-accent-primary hover:border-accent-primary/30 transition-colors"
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
    </section>
  );
}
