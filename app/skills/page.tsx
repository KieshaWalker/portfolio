
   export default function Skills() {
      return (
      <>
      <section className="px-4 py-16 bg-foreground text-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend Systems</h3>
              <ul className="space-y-2">
                <li>React, Angular, SwiftUI</li>
                <li>TypeScript, JavaScript (ES6+)</li>
                <li>HTML5, CSS3, MUI, Bootstrap</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Backend Systems</h3>
              <ul className="space-y-2">
                <li>Node.js, Express, Django, Flask, FastAPI</li>
                <li>REST APIs, JWT Auth, MongoDB, SQL, GraphQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tools & DevOps</h3>
              <ul className="space-y-2">
                <li>Git, Docker, Vite, Babel</li>
                <li>Heroku, Netlify, Vercel</li>
                <li>ESLint, Prettier, CI/CD</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <ul className="space-y-2">
                <li>Python, JavaScript, C++, Swift, Kotlin, SQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Other</h3>
              <ul className="space-y-2">
                <li>ASL, Spanish, Tri-lingual collaboration</li>
                <li>Leadership, debugging as inquiry, rapid self-learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
       <a href ="/projects" className="px-6 py-3 bg-foreground text-background rounded-lg hover:bg-opacity-80 transition">View My Projects</a>
      </section>

      {/* Contact Section */}
    </>
  );
}
