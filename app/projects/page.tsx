import { use } from "react"



import Image from "next/image"

export default function Projects() {
  return (
    <>
    <section className="px-4 py-16 bg-foreground text-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-background text-foreground rounded-lg">
              <h3 className="text-xl font-semibold mb-4">detoX</h3>
              <Image src="/detox.png" alt="Projects Overview" width={800} height={400} className="mx-auto mb-8 rounded-lg cover" />
              <p className="mb-4">A curated social media platform for authentic content creators.</p>
              <p className="text-sm">Technologies: Python, JavaScript, HTML, CSS</p>
              <a href="https://github.com/KieshaWalker/detoX" className="mt-9 inline-block px-4 py-2 bg-foreground text-background rounded hover:bg-opacity-80 ">Live</a>
              
              <a href="https://github.com/KieshaWalker/detoX" className="mt-4 inline-block px-4 py-2 bg-foreground text-background rounded hover:bg-opacity-80">View on GitHub</a>
            </div>
            <div className="p-6 bg-background text-foreground rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Bull & Paper</h3>
              <Image src="/bull.png" alt="Bull & Paper Project" width={800} height={400} className="mx-auto mb-8 rounded-lg cover" />
              <p className="mb-4">A trading journal system for professional day traders.</p>
              <p className="text-sm">Technologies: HTML, JavaScript, Node.js, React, Express, EJS, CSS, Mongoose, etc.</p>
              <a href="https://github.https://github.com/corigraves97/b-and-p-front-end" className="mt-4 inline-block px-4 py-2 bg-foreground text-background rounded hover:bg-opacity-80">View on GitHub</a>
            </div>
            <div className="p-6 bg-background text-foreground rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Habit-Tracker</h3>
              <Image src="/habit.png" alt="Habit Tracker Project" width={800} height={400} className="mx-auto mb-8 rounded-lg cover" />
              <p className="mb-4">A habit tracking app with progress visualization.</p>
              <p className="text-sm">Technologies: React, Node.js, Express.js, PostgreSQL, TypeScript</p>
              <a href="https://github.com/KieshaWalker/habit-tracker-app.git" className="mt-4 inline-block px-4 py-2 bg-foreground text-background rounded hover:bg-opacity-80">View on GitHub</a>
            </div>
            <div className="p-6 bg-background text-foreground rounded-lg">
              <h3 className="text-xl font-semibold mb-4">My-App</h3>
              <p className="mb-4">A decoupled SPA with API integration.</p>
              <p className="text-sm">Technologies: Cython, Python, Node.js, Express, React, TypeScript</p>
              <a href="https://github.com" className="mt-4 inline-block px-4 py-2 bg-foreground text-background rounded hover:bg-opacity-80">View on GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">Software Engineering</h3>
            <p className="text-lg">General Assembly | Remote | August 2025 - November 2025</p>
            <p className="mt-2">Full-time immersive program with 480+ hours of project work.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">B.A. Psychology & Spanish</h3>
            <p className="text-lg">Texas A&M University | College Station, TX | August 2019</p>
            <p className="mt-2">Dual major; study abroad in Costa Rica and Spain.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 bg-foreground text-background text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg mb-6">I'm always open to discussing new opportunities and collaborations.</p>
        <p className="text-lg">Email: llcwalkerk@gmail.com | Phone: (469) 934.2489</p>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://github.com" className="px-6 py-3 bg-background text-foreground rounded-lg hover:bg-opacity-80">GitHub</a>
          <a href="https://linkedin.com" className="px-6 py-3 bg-background text-foreground rounded-lg hover:bg-opacity-80">LinkedIn</a>
        </div>
      </section>
    </>
  );
}
