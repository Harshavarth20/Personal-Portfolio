import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
	return (
		<section id="contact" className="py-24 border-t border-gray-800">
			<div className="max-w-6xl mx-auto px-6">

				<h2 className="text-3xl font-bold mb-10 text-white">
					Get In Touch
				</h2>

				<p className="text-gray-400 mb-8">
					Feel free to reach out for opportunities, collaborations, or professional discussions.
				</p>

				{/* Icons */}
				<div className="flex gap-6">

					{/* GitHub */}
					<a
						href="https://github.com/Harshavarth20"
						target="_blank"
						className="
              text-gray-400 text-2xl
              hover:text-white
              hover:scale-110
              transition-all duration-300
            "
					>
						<FaGithub />
					</a>

					{/* LinkedIn */}
					<a
						href="https://www.linkedin.com/in/harshavarth-vengateasan"
						target="_blank"
						className="
              text-gray-400 text-2xl
              hover:text-blue-400
              hover:scale-110
              transition-all duration-300
            "
					>
						<FaLinkedin />
					</a>

					{/* Email */}
					<a
						href="mailto:Harshavarthvengat@gmail.com"
						className="
  						text-gray-400 text-2xl
              hover:text-red-400
              hover:scale-110
              transition-all duration-300
							"
					>
						<FaEnvelope />
					</a>

				</div>

			</div>
		</section>
	);
}