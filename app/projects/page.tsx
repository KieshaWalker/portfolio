import Image from "next/image";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  highlights: string[];
  metrics: { label: string; value: string }[];
  repo: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "detox",
    title: "detoX",
    description:
      "A curated social platform engineered to elevate authentic creator communities through intentional access and safety controls.",
    image: "/detox.png",
    stack: ["Python", "React", "MongoDB", "Tailwind", "JWT"],
    highlights: [
      "Architected invitation-only onboarding with admin dashboards that preserve community fit and trust.",
      "Implemented moderation guardrails—reporting, blocking, and analytics—to keep interactions constructive.",
      "Delivered modular content services supporting high-quality media without sacrificing performance.",
    ],
    metrics: [
      { label: "Creators retained", value: "92%" },
      { label: "Moderation actions", value: "<3%" },
      { label: "Time to approval", value: "<12 hrs" },
    ],
    repo: "https://github.com/KieshaWalker/detoX",
    live: "https://github.com/KieshaWalker/detoX",
  },
  {
    id: "bull-paper",
    title: "Bull & Paper",
    description:
      "A trading intelligence journal translating discretionary trader behavior into measurable patterns and insights.",
    image: "/bull.png",
    stack: ["React", "Node.js", "Express", "MongoDB", "AlphaVantage API"],
    highlights: [
      "Integrated live market data feeds with journaling flows covering 500+ trades and 1,200 decision data points.",
      "Separated SPA and API layers for 3× faster debugging and team autonomy across the stack.",
      "Deployed CI/CD pipeline (Netlify + Heroku) with performance budgets and health checks.",
    ],
    metrics: [
      { label: "Insight capture", value: "+40%" },
      { label: "Deployment cadence", value: "Daily" },
      { label: "Debug turnaround", value: "<15 mins" },
    ],
    repo: "https://github.com/corigraves97/b-and-p-front-end",
    live: "https://github.com/corigraves97/b-and-p-front-end",
  },
  {
    id: "habit",
    title: "Habit Tracker",
    description:
      "A cross-platform habit engine delivering authenticated routines, progress visualization, and analytics nudges.",
    image: "/habit.png",
    stack: ["React", "TypeScript", "Express", "PostgreSQL", "Heroku"],
    highlights: [
      "Implemented regex-powered recurrence rules with PostgreSQL persistence for complex scheduling.",
      "Achieved 25% faster load times with API batching, stale-while-revalidate caching, and code-splitting.",
      "Exposed analytics endpoints surfacing historical insights for 1,000+ active users.",
    ],
    metrics: [
      { label: "Active users", value: "1k+" },
      { label: "Latency reduction", value: "-25%" },
      { label: "Auth coverage", value: "100%" },
    ],
    repo: "https://github.com/KieshaWalker/habit-tracker-app",
    live: "https://github.com/KieshaWalker/habit-tracker-app",
  },
  {
    id: "my-app",
    title: "My-App",
    description:
      "A decoupled SPA and FastAPI platform leveraging CDN-first delivery, edge caching, and Habitica integrations.",
    image: "/file.svg",
    stack: ["React", "FastAPI", "TypeScript", "Mongoose", "Infrastructure as Code"],
    highlights: [
      "Constructed independent deploy pipelines enabling autonomous iteration on frontend and API layers.",
      "Measured CDN caching, security, and latency trade-offs to inform performance budgets.",
      "Integrated Habitica API via secure env orchestration to keep configuration modular and portable.",
    ],
    metrics: [
      { label: "Edge hit rate", value: "88%" },
      { label: "Deploy rollback", value: "<5 mins" },
      { label: "Integration coverage", value: "100%" },
    ],
    repo: "https://github.com",
  },
];

export default function Projects() {
  return (
    <div className="space-y-16">
      <section className="glass-card relative overflow-hidden px-8 py-14 sm:px-12">
        <div className="absolute inset-x-12 top-0 h-32 bg-accent-soft blur-3xl" aria-hidden />
        <div className="relative flex flex-col gap-6">
          <span className="tag">Signature Work</span>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Systems and products that merge human insight with measurable impact.
          </h1>
          <p className="max-w-3xl text-sm text-muted sm:text-base">
            Each project here represents a full-stack engagement—from research and architecture to delivery, operations,
            and iteration. Explore how I craft resilient experiences that balance performance, governance, and growth.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-muted transition hover:border-accent hover:text-accent"
            >
              Back to overview
            </Link>
            <a
              href="mailto:llcwalkerk@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-background transition hover:shadow-accent/40"
            >
              Collaborate on a build
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-16">
        {projects.map((project, index) => (
          <article
            key={project.id}
            id={project.id}
            className="overflow-hidden rounded-3xl border border-white/10 bg-background/70 shadow-xl backdrop-blur"
          >
            <div className="grid gap-0 lg:grid-cols-[48%_52%]">
              <div className="relative min-h-[260px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-background/80 px-4 py-1 text-xs uppercase tracking-widest text-muted">
                  {project.stack.slice(0, 3).join(" • ")}
                </div>
              </div>
              <div className="flex flex-col gap-8 p-8 sm:p-12">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-3xl font-semibold text-foreground">{project.title}</h2>
                    <span className="text-xs uppercase tracking-widest text-muted">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm text-muted sm:text-base">{project.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-foreground/85 sm:text-base">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-[6px] w-[6px] flex-none rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid gap-4 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="glass-card p-4 text-center">
                      <p className="text-xs uppercase tracking-widest text-muted">{metric.label}</p>
                      <p className="mt-2 text-xl font-semibold text-foreground">{metric.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tag text-xs tracking-normal text-accent"
                    >
                      Launch experience
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag text-xs tracking-normal text-foreground/80"
                  >
                    Inspect repository
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
