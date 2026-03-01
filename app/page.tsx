import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      name: "The Decoherence Log",
      description:
        "An AI-powered research and journaling space built for deep thinkers. Explore ideas at the edge of science, consciousness, and technology.",
      tech: [
        "Vertex AI / Gemini — AI summarization & content rewriting",
        "Vision AI — image analysis & moderation",
        "Speech-to-Text — voice post transcription",
        "Cloud Translate — multi-language support",
        "reCAPTCHA Enterprise — spam & bot protection",
      ],
      link: "https://huggingface.co/spaces/Thatbtchryleigh/TheDecoherenceLog",
      image: "/new_img1.jpg",
    },
    {
      name: "TRANZcend X",
      description:
        "A discovery platform built for the trans community — connecting people to resources, stories, and support in one place.",
      tech: [],
      link: "https://trans-cend-official.vercel.app/discover",
      image: "/new_img3.png",
    },
    {
      name: "Scout AI",
      description:
        "An intelligent scouting and intelligence platform. Real-time data, sharp insights, built for those who need to stay ahead.",
      tech: [],
      link: "https://scoutintelbyblxndside.up.railway.app/",
      image: "/new_img4.png",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* NAV */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <Image src="/new_img2.png" alt="Blindsided Development Logo" width={40} height={40} className="rounded-full object-cover" />
          <span className="text-lg font-bold tracking-tight">Blindsided Development</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-white/60">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 via-black to-black pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">AI Systems · Web & App Design · Tech Solutions</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            We Build What&apos;s<br />
            <span className="text-violet-400">Next.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-10">
            Blindsided Development crafts intelligent systems, sleek web experiences, and custom tech solutions for businesses ready to move fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Work With Us
            </a>
            <a
              href="#projects"
              className="border border-white/20 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">What We Do</h2>
        <p className="text-white/50 text-center mb-14">End-to-end solutions from idea to deployment.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🤖",
              title: "AI Systems & Agents",
              desc: "Custom AI agents, automation pipelines, and intelligent workflows that save time and scale your business.",
            },
            {
              icon: "🌐",
              title: "Web & App Design",
              desc: "Fast, modern, and conversion-focused websites and apps built with the latest frameworks.",
            },
            {
              icon: "🖥️",
              title: "Computer Upgrades",
              desc: "Hardware assessments, upgrades, and optimization for outdated machines — get more out of what you have.",
            },
          ].map((s) => (
            <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-violet-500/50 transition-colors">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="px-6 py-24 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Featured Projects</h2>
          <p className="text-white/50 text-center mb-14">A few things we&apos;ve shipped.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <Link
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/60 transition-all hover:-translate-y-1"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-400 transition-colors">{p.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
                  {p.tech.length > 0 && (
                    <div className="mt-4">
                      <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-2">Powered By</p>
                      <ul className="space-y-1">
                        {p.tech.map((t) => (
                          <li key={t} className="text-white/40 text-xs flex items-start gap-1.5">
                            <span className="text-violet-500 mt-0.5">›</span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <span className="inline-block mt-4 text-violet-400 text-sm font-medium">View Project →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Build Something</h2>
        <p className="text-white/50 mb-10">
          Got a project in mind? Reach out and let&apos;s talk about what we can build together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="mailto:blindsidesolutions.dev@gmail.com"
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Email Us
          </a>
          <a
            href="https://instagram.com/blindside_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            @blindside_dev
          </a>
        </div>
        <div className="text-white/30 text-sm space-y-1">
          <p>blindsidesolutions.dev@gmail.com</p>
          <p>(334) 336-2178</p>
          <p>Venmo: @blindsidedev</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-white/30 text-sm">
        <span>© 2026 Blindsided Development. All rights reserved.</span>
        <span className="mt-2 sm:mt-0">Built with 🖤 by Blindsided Dev</span>
      </footer>
    </main>
  );
}
