import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'aasgrover@gmail.com',
      href: 'mailto:aasgrover@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    // {
    //   label: 'Phone',
    //   value: '+91 9464143561',
    //   href: 'tel:+919464143561',
    //   icon: (
    //     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    //     </svg>
    //   ),
    // },
    {
      label: 'Location',
      value: 'Gurugram, India',
      href: null,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />
      <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px]" />

      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-accent-primary tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Have a project in mind? I'd love to hear from you. Let's discuss
            how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="glass-card p-6 flex items-center gap-5 group glow-accent-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary/20 transition-colors shrink-0">
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-text-primary hover:text-accent-primary transition-colors font-medium text-sm truncate block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-text-primary font-medium text-sm">
                      {info.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Availability card */}
            <div className="glass-card p-6 border-accent-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-400">
                  Available for work
                </span>
              </div>
              <p className="text-sm text-text-muted">
                I'm currently open to full-time roles and freelance opportunities.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-card overflow-hidden"
            >
              {/* Form header */}
              <div className="p-7 md:p-8 border-b border-border-subtle">
                <h3 className="text-lg font-bold text-text-primary">
                  Send a Message
                </h3>
                <p className="text-sm text-text-muted mt-1">
                  I'll respond within 24 hours
                </p>
              </div>

              <div className="p-7 md:p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 text-text-primary border border-border-subtle focus:border-accent-primary/50 focus:outline-none focus:ring-1 focus:ring-accent-primary/30 placeholder-text-muted/50 text-sm transition-colors"
                      placeholder="Aastha"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 text-text-primary border border-border-subtle focus:border-accent-primary/50 focus:outline-none focus:ring-1 focus:ring-accent-primary/30 placeholder-text-muted/50 text-sm transition-colors"
                      placeholder="Grover"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 text-text-primary border border-border-subtle focus:border-accent-primary/50 focus:outline-none focus:ring-1 focus:ring-accent-primary/30 placeholder-text-muted/50 text-sm transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 text-text-primary border border-border-subtle focus:border-accent-primary/50 focus:outline-none focus:ring-1 focus:ring-accent-primary/30 placeholder-text-muted/50 text-sm transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>

                {submitted && (
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center text-sm font-medium">
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Thank you! I'll get back to you soon.
                    </span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
