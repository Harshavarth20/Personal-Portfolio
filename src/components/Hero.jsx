import profile from "../assets/images/pic.jpeg";
import { TypeAnimation } from "react-type-animation";

function Hero() {
	return (
		<section id="home" className="pt-32 pb-24">
			<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

				{/* Left Content */}
				<div>

					{/* Role label */}
					<p className="text-cyan-400 text-sm tracking-wider uppercase mb-6">
						Junior Software Developer
					</p>

					{/* Main Heading */}
					<h1 className="text-2xl md:text-6xl font-bold text-white leading-tight mb-6">
						Open to work as a{" "}
						<span className="text-cyan-400">
							<TypeAnimation
								sequence={[
									"Software Developer",
									2000,
									"Ruby Developer",
									2000,
									"Frontend Web Developer",
									2000,
									"Full Stack Developer",
									2000,
									"React Developer",
									2000,
								]}
								speed={50}
								repeat={Infinity}
							/>
						</span>
					</h1>

					{/* Description */}
					<p className="text-gray-400 text-lg leading-relaxed mb-4 max-w-xl">
						Specialized in developing full stack applications using React, Ruby on Rails,
						PostgreSQL, and modern frontend frameworks. Focused on performance, scalability,
						and maintainability.
					</p>

					<p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
						Experienced in designing REST APIs, database schemas, and modern frontend systems, delivering scalable and production-ready web applications.
					</p>

					{/* Buttons */}
					<div className="flex flex-wrap gap-4">

						<a
							href="#projects"
							className="
                px-7 py-3 rounded-md text-sm font-semibold
                bg-cyan-400 text-black
                hover:bg-cyan-300
                transition-all duration-300
                shadow-lg hover:shadow-cyan-400/20
              "
						>
							View Projects
						</a>

						<a
							href="/resume/Harshavarth_Resume.pdf"
							download
							className="
                px-7 py-3 rounded-md text-sm font-semibold
                border border-gray-600 text-gray-300
                hover:bg-cyan-400 hover:text-black hover:border-cyan-400
                transition-all duration-300
              "
						>
							Download Resume
						</a>

					</div>

				</div>

				{/* Right Image */}
				<div className="flex justify-center md:justify-end">
					<div className="relative">

						{/* Glow effect */}
						<div className="absolute inset-0 bg-cyan-400/10 blur-2xl rounded-xl"></div>

						<img
							src={profile}
							alt="Harshavarth profile"
							className="
                relative
                w-72 h-72 md:w-80 md:h-80
                object-cover
                rounded-xl
                border border-gray-800
                shadow-xl
              "
						/>

					</div>
				</div>

			</div>
		</section>
	);
}

export default Hero;