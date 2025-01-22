import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 text-white bg-[#5157C0] sticky top-0 z-50">
        <div className="flex gap-8 font-semibold text-lg">
        <Link href="#about">About Me</Link>
        <Link href="#projects">My Project</Link>
          <Link href="#Tipme">Support Me</Link>
          
          
        </div>
        <a
          href="/Phirakan_CV.pdf"
          download
          className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition"
        >
          Download CV
        </a>
      </nav>
    </>
  )
}

export default Navbar
