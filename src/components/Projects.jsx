export default function Projects() {
	const projects = [
		{
			title: "Developer Portfolio Website",
			description:
				"Designed and developed a modern portfolio using React, Vite, and Tailwind CSS with responsive layout and clean UI.",
			tech: ["React", "Tailwind", "Vite"],
			github: "https://github.com/Harshavarth20/Personal-Portfolio",
		},
		{
			title: "Expense Tracker Application",
			description:
				"Built a dynamic expense tracking application with state management, data handling, and responsive UI.",
			tech: ["JavaScript", "HTML", "CSS"],
			github: "https://github.com/Harshavarth20/Expense-tracker",
		},
		{
			title: "API Submission Form",
			description:
				"Developed a form integrated with external APIs, handling data submission, validation, and response handling.",
			tech: ["JavaScript", "REST API"],
			github: "https://github.com/Harshavarth20/Submission-form-using-API-calls",
		},
	];

	return (
		<section id="projects" className="py-24 border-t border-gray-800">
			<div className="max-w-6xl mx-auto px-6">

				<h2 className="text-4xl font-bold mb-10 text-white">
					Projects
				</h2>

				<div className="grid md:grid-cols-2 gap-6">

					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-500 transition"
						>
							<h3 className="text-xl font-semibold text-white">
								{project.title}
							</h3>

							<p className="text-gray-400 mt-3">
								{project.description}
							</p>

							<div className="flex gap-2 mt-4 flex-wrap">
								{project.tech.map((tech, i) => (
									<span
										key={i}
										className="text-xs border border-gray-700 px-3 py-1 rounded text-gray-300"
									>
										{tech}
									</span>
								))}
							</div>

							<a
								href={project.github}
								target="_blank"
								className="inline-block mt-4 text-cyan-400 hover:text-cyan-300"
							>
								View on GitHub →
							</a>

						</div>
					))}

				</div>

			</div>
		</section>
	);
}