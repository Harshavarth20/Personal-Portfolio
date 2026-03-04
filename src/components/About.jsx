export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10 text-white">About Me</h2>

        <div className="bg-[#0b1a2b] border border-cyan-400/30 rounded-xl p-8">
          <p className="text-gray-400 leading-relaxed mb-6">
            I am a Junior Software Developer focused on building modern web applications
            using technologies such as React.js, Next.js, Ruby on Rails, and JavaScript.
            I enjoy creating responsive user interfaces and developing efficient
            backend systems while following clean coding practices.

            I continuously improve my skills by building real-world projects and
            learning modern development technologies.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            My primary stack includes React.js, Next.js, Ruby on Rails,
            JavaScript. I work across both frontend and backend,
            developing responsive interfaces, RESTful APIs, and efficient
            database structures.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I continuously improve my skills by building real-world projects
            and following modern development practices.
          </p>
        </div>

      </div>
    </section>
  );
}