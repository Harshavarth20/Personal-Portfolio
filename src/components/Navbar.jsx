function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#020617]/80 backdrop-blur border-b border-gray-800 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-white font-semibold text-3xl tracking-wide">
          Harshavarth Vengateasan
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-400">

          <a href="#home" className="hover:text-white transition">
            Home
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;