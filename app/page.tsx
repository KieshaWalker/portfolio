import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <h1 className="text-6xl font-bold mb-4 text-center">Kiesha Walker</h1>
        <p className="text-2xl mb-6 text-center">Software Engineer</p>
        <p className="text-lg mb-8 text-center max-w-2xl">
          Full-Stack Software Engineer with 5+ years of experience in systems-oriented development, blending psychology and leadership to create human-centric, scalable codebases.
        </p>
        <div className="flex space-x-4">
          <a href="mailto:llcwalkerk@gmail.com" className="px-6 py-3 bg-foreground text-background rounded-lg hover:bg-opacity-80 transition">Contact Me</a>
          <a href="https://github.com" className="px-6 py-3 border border-foreground rounded-lg hover:bg-foreground hover:text-background transition">GitHub</a>
          <a href="https://linkedin.com" className="px-6 py-3 border border-foreground rounded-lg hover:bg-foreground hover:text-background transition">LinkedIn</a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About</h2>
        <p className="text-lg leading-relaxed">
          Full-Stack Software Engineer with 5+ years of experience in systems-oriented development, blending psychology and leadership to create human-centric, scalable codebases. Expertise in operational design and UX methodologies, integrating trading system logic to build maintainable systems that enhance user interactions. Optimized products with a disciplined approach, translating complex ideas into functional solutions—seeking to drive innovative projects in dynamic teams.
        </p>
      </section>

      <section className="px-4 py-16 max-w-4xl mx-auto">
        <a href="/skills" className="px-6 py-3 bg-foreground text-background rounded-lg hover:bg-opacity-80 transition">View My Skills</a>
        <a href="/projects" className="px-6 py-3 bg-foreground text-background rounded-lg hover:bg-opacity-80 transition">View My Projects</a>
      </section>

      {/* Contact Section */}
    </div>
  );
}
