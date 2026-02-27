import profile from "../assets/images/pic.jpeg";

function Hero() {
	return (
		<section id="home" className="pt-32 pb-20">

			<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

				{/* Left */}

				<div>

					<p className="text-cyan-400 text-sm mb-10">
						JUNIOR SOFTWARE DEVELOPER
					</p>

					<h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">

						I build scalable web applications with modern technologies and clean architecture.

					</h1>

					<p className="text-gray-400 mb-4 leading-relaxed">

						Specialized in developing full stack applications using React, Ruby on Rails,
						PostgreSQL, and modern frontend frameworks. Focused on performance, scalability,
						and maintainability.

					</p>

					<p className="text-gray-400 mb-8 leading-relaxed">

						Experienced in designing REST APIs, database architecture, frontend systems,
						and production-ready applications.

					</p>

					<div className="flex gap-4">

						<a
							href="#projects"
							className="
    						px-6 py-3 rounded-md text-sm font-medium
    						bg-white text-black
    						hover:bg-cyan-400
    						hover:text-black
    						transition-all duration-300
  							"
						>
							View Projects
						</a>

						<a
							href="/resume/Harshavarth_Resume.pdf"
							download
							className="
    						px-6 py-3 rounded-md text-sm font-medium
    						border border-gray-700
    						text-gray-300
    						hover:bg-cyan-400
    						hover:text-black
    						hover:border-cyan-400
    						transition-all duration-300
  							"
						>
							Download Resume
						</a>

					</div>

				</div>

				{/* Right */}

				<div className="flex justify-center">

					<img
						src={profile}
						className="w-80 h-80 object-cover rounded-lg border border-gray-800 shadow-lg"
					/>

				</div>

			</div>

		</section>
	);
}

export default Hero;