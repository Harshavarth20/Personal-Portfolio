function Certificates() {
  return (
    <section id="certificates" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10 text-white">Certificates</h2>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Certificate 1 */}
          <div className="border border-cyan-400/40 rounded-xl p-6 bg-[#0b1a2b]">
            <h3 className="text-lg font-semibold text-white">
              Meta Front-End Developer Professional Certificate
            </h3>
            <p className="text-gray-400">Issued by Meta</p>
            <p className="text-gray-500">2024</p>
          </div>

          {/* Certificate 2 */}
          <div className="border border-cyan-400/40 rounded-xl p-6 bg-[#0b1a2b]">
            <h3 className="text-lg font-semibold text-white">
              JavaScript Professional Certificate
            </h3>
            <p className="text-gray-400">Issued by Mozilla</p>
            <p className="text-gray-500">2024</p>
          </div>

          {/* Certificate 3 */}
          <div className="border border-cyan-400/40 rounded-xl p-6 bg-[#0b1a2b]">
            <h3 className="text-lg font-semibold text-white">
              Young Professional Career Edge
            </h3>
            <p className="text-gray-400">Issued by TCS iON</p>
            <p className="text-gray-500">2024</p>
          </div>

          {/* Certificate 4 */}
          <div className="border border-cyan-400/40 rounded-xl p-6 bg-[#0b1a2b]">
            <h3 className="text-lg font-semibold text-white">
              Python Professional Certificate
            </h3>
            <p className="text-gray-400">Issued by GUVI</p>
            <p className="text-gray-500">2024</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Certificates;