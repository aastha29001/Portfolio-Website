export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/8 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-rose/6 rounded-full blur-[100px] animate-glow-pulse delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-cyan/5 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(167,139,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10 text-center pt-28 pb-20 md:pt-32 md:pb-24">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-accent-primary">
            Open to opportunities
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 animate-fade-up delay-100">
          <span className="text-text-primary">Hi, I'm </span>
          <span className="gradient-text">Aastha</span>
          <br />
          <span className="text-text-primary">Software Engineer</span>
        </h1>

        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200">
          I build scalable systems, optimize integrations, and craft exceptional
          user experiences with{' '}
          <span className="text-accent-primary font-medium">3 years</span> of
          full-stack expertise.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up delay-300">
          <a
            href="#projects"
            className="btn btn-primary btn-lg group"
          >
            View My Work
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="btn btn-secondary btn-lg"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center animate-fade-up delay-500">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-primary transition group"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
