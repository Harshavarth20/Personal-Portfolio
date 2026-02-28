function Skills() {

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Ruby",
    "Ruby on Rails",
    "PostgreSQL",
    "MySQL",
    "REST API Development",
    "Git",
    "GitHub",
    "Tailwind CSS",
    "Responsive Web Design",
    "API Integration",
  ];

  return (
    <section id="skills" className="py-20 border-t border-gray-800">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-white">

          Technical Skills

        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {skills.map(skill => (

            <div
              key={skill}
              className="border border-gray-800 rounded-md px-4 py-3 text-gray-300 hover:border-white transition"
            >
              {skill}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;