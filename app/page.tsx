import Link from "next/link";

const stats = [
  { label: "Products architected end-to-end", value: "12" },
  { label: "Operational lift delivered", value: "40%" },
  { label: "Teams coached & scaled", value: "60+" },
  { label: "High-pressure incidents resolved", value: "40+" },
];

const capabilities = [
  {
    title: "Systems-grade frontend craft",
    pitch:
      "Design systems, accessibility, and motion working together. Next.js, React, Angular, and SwiftUI shipped with obsessive attention to latency and feel.",
    signals: ["Design tokens & theming", "Streaming + RSC", "Storybook driven QA"],
  },
  {
    title: "Backend & platform architecture",
    pitch:
      "From Node microservices to Python/FastAPI and Django monoliths - documented, observable, and production-hardened.",
    signals: ["Event driven flows", "AuthN/AuthZ patterns", "Observability first instrumentation"],
  },
  {
    title: "Product strategy with operations rigor",
    pitch:
      "Translate ambiguity into roadmaps, bring stakeholders with me, and back every bet with metrics and user evidence.",
    signals: ["Experiment design", "Behavioral analytics", "Team rituals that unlock focus"],
  },
  {
    title: "Leadership at velocity",
    pitch:
      "Former ops leader and trader : calm in chaos, decisive with data, relentless about team health.",
    signals: ["Blameless incident reviews", "Coaching frameworks", "Cross functional alignment"],
  },
];

const experience = [
  {
    role: "Software Engineer, Fellow",
    company: "General Assembly",
    time: "Aug 2025 - Nov 2025",
    value:
      "480+ hours mastering full-stack delivery with CI/CD discipline, research led discovery, and production deployments.",
    impact: [
      "Led debugging labs that lifted team velocity 30% week-over-week.",
      "Shipped Node, Python, and React apps with automated quality gates and observability baked in.",
      "Facilitated product workshops translating user research into sprintable slices.",
    ],
  },
  {
    role: "Operations Manager",
    company: "French Truck Coffee",
    time: "Jun 2022 - Aug 2025",
    value:
      "Promoted in five months to orchestrate four locations - rewired systems, analytics, and talent pipelines.",
    impact: [
      "Engineered labor intelligence that cut overlap 22% and boosted throughput 18% in peak hours.",
      "Built dashboards aligning finance, supply, and service; material waste dropped 27% week over week.",
      "Increased retention 40% via coaching playbooks and CX experience mapping.",
    ],
  },
  {
    role: "Proprietary Trader",
    company: "Independent",
    time: "Jun 2020 - Present",
    value:
      "Self-engineered probabilistic models and execution engines - discipline forged in volatility.",
    impact: [
      "Achieved 70%+ model accuracy across 10k simulations with decision-tree + edge modeling.",
      "Maintained zero critical failures through 40+ high-volatility events with tight incident response loops.",
      "Delivered 12-18% annualized alpha by iterating on signal extraction and automation.",
    ],
  },
  {
    role: "Founder & Property Manager",
    company: "Walker K LLC",
    time: "Jun 2020 - Present",
    value:
      "Bootstrapped a hospitality portfolio - automation, CX design, and financial stewardship end-to-end.",
    impact: [
      "Automated booking + analytics workflows in Google Workspace, driving 30% profit growth without headcount.",
      "Sustained 4.8 star guest experience via service design and data-driven iteration.",
      "Ran acquisitions to retention with systems thinking that kept occupancy premium in competitive markets.",
    ],
  },
];

const projects = [
  {
    name: "detoX",
    tagline: "An invitation-only creator network engineered for trust-first growth.",
    outcomes: [
      "Architected admin curation workflows and automated questionnaires that preserve culture integrity.",
      "Moderation suite (reporting, blocking, analytics) keeps interaction quality high while surfacing meaningful signals.",
      "Modular media services deliver premium photo/video without sacrificing performance budgets.",
    ],
    stack: ["Python", "React", "MongoDB", "Tailwind", "JWT"],
    repo: "https://github.com/KieshaWalker/detoX",
    live: "https://github.com/KieshaWalker/detoX",
  },
  {
    name: "Bull & Paper",
    tagline: "Quantified trading cognition for elite day traders.",
    outcomes: [
      "Journaling analytics pipeline logging 500+ trades and 1,200+ decision points for pattern detection.",
      "SPA/API split enables parallel squads and 3x faster debugging across React + Node + Express layers.",
      "Continuous delivery via Netlify + Heroku with structured performance budgets and monitoring hooks.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "AlphaVantage API"],
    repo: "https://github.com/corigraves97/b-and-p-front-end",
    live: "https://github.com/corigraves97/b-and-p-front-end",
  },
  {
    name: "Habit Tracker",
    tagline: "multi platform habit engine with behavioral nudges.",
    outcomes: [
      "Regex-powered recurrence rules with PostgreSQL persistence deliver flexible scheduling.",
      "Latency reduced 25% through batching, SWR cache strategy, and intentional hydration.",
      "Analytics endpoints fuel personalized progress insights for 1,000+ active users.",
    ],
    stack: ["React", "TypeScript", "Express", "PostgreSQL", "Heroku"],
    repo: "https://github.com/KieshaWalker/habit-tracker-app",
    live: "https://github.com/KieshaWalker/habit-tracker-app",
  },
];

const differentiators = [
  {
    title: "Build for humans, scale like systems",
    detail:
      "Psychology and UX research background means every architectural decision ladders up to human outcomes without sacrificing velocity.",
  },
  {
    title: "Operational brass tacks",
    detail:
      "I show up with dashboards, rituals, and playbooks that keep teams aligned and accountable. No more guesswork on what's working.",
  },
  {
    title: "Calm in the volatility",
    detail:
      "Trader mindset: stress tested in markets and production incidents. I default to clarity, action, and follow through.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <section
        id="hero"
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-8 py-16 shadow-2xl sm:px-12"
      >
        <div className="absolute inset-x-10 top-0 h-40 bg-accent-soft blur-3xl" aria-hidden />
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-6">
            <span className="tag">Kiesha Walker · Systems-Focused Software Engineer</span>
            <h1 className="text-2xl font-semibold leading-tight sm:text-2xl lg:text-2xl">
              I build products that feel inevitable. Rooted in human insight, engineered for scale, and battle-tested in
              high-pressure environments.
            </h1>
            <p className="text-md text-muted sm:text-xl">
              Give me ambiguous problems.. I will be the roadmap,
              operationalize the learnings, and bring everyone along the journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:llcwalkerk@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-background shadow-lg transition hover:shadow-accent/40"
              >
                Start a conversation
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition hover:border-accent hover:text-accent"
              >
                View case studies
              </Link>
              <a
                href="https://github.com/KieshaWalker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kiesha-walker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-6 lg:gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <p className="text-sm uppercase  text-muted">{stat.label}</p>
                <p className="mt-3 text-1xl font-semibold text-foreground sm:text-1xl">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="space-y-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="tag">Signature capabilities</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Bring me the problem space you keep punting</h2>
          </div>
          <p className="max-w-xl text-sm text-muted sm:text-base">
            End-to-end product ownership, design systems, distributed services, research synthesis, and the operational
            mechanics that keep releases crisp and reliable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article key={capability.title} className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground">{capability.title}</h3>
              <p className="mt-4 text-sm text-muted sm:text-base">{capability.pitch}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {capability.signals.map((signal) => (
                  <span key={signal} className="tag text-xs tracking-normal text-foreground/80">
                    {signal}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="space-y-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="tag">Experience portfolio</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Where technical depth meets operational gravity</h2>
          </div>
          <p className="max-w-xl text-sm text-muted sm:text-base">
            I have shipped in environments ranging from high-touch hospitality to quantitative trading floors. The common
            thread: build resilient systems people trust.
          </p>
        </div>
        <div className="space-y-10">
          {experience.map((item) => (
            <article key={`${item.role}-${item.company}`} className="glass-card p-6 transition hover:border-accent/40 hover:shadow-2xl sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{item.role}</h3>
                  <p className="text-sm uppercase tracking-widest text-muted">{item.company}</p>
                </div>
                <p className="text-sm text-muted">{item.time}</p>
              </div>
              <p className="mt-4 text-base text-muted">{item.value}</p>
              <ul className="mt-6 space-y-3 text-sm text-foreground/90 sm:text-base">
                {item.impact.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 h-[6px] w-[6px] flex-none rounded-full bg-accent" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="space-y-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="tag">Recent builds</span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">High-impact case studies</h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold uppercase tracking-widest text-accent transition hover:text-foreground"
          >
            Browse the full project library ↗
          </Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="glass-card flex flex-col p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-foreground">{project.name}</h3>
                <span className="text-xs uppercase tracking-widest text-muted">{project.stack.join(" • ")}</span>
              </div>
              <p className="mt-4 text-sm text-muted sm:text-base">{project.tagline}</p>
              <ul className="mt-6 flex flex-col gap-3 text-sm text-foreground/85">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-2 h-[6px] w-[6px] flex-none rounded-full bg-accent" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag text-xs tracking-normal text-accent"
                >
                  Live preview
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag text-xs tracking-normal text-foreground/80"
                >
                  View repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="differentiators" className="space-y-10">
        <div className="max-w-2xl">
          <span className="tag">Why it matters</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Hiring me means your hardest problems stop stalling</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {differentiators.map((item) => (
            <article key={item.title} className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm text-muted sm:text-base">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="glass-card overflow-hidden px-8 py-16 text-center sm:px-12">
        <div className="mx-auto max-w-2xl space-y-6">
          <span className="tag">Let's build what's next</span>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Want to move faster without breaking trust? Let's talk roadmap, delivery, and outcomes that stick.
          </h2>
          <p className="text-sm text-muted sm:text-base">
            Email, call, or tap into the case studies. I come prepared with vision, execution plans, and the sleeves rolled up.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:llcwalkerk@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-background transition hover:shadow-accent/40"
            >
              Email Kiesha
            </a>
            <a
              href="tel:+14699342489"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition hover:border-accent hover:text-accent"
            >
              Call direct
            </a>
            <a
              href="/resume.txt"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition hover:border-accent hover:text-accent"
            >
              View resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

