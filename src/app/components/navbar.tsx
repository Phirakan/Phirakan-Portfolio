import Link from 'next/link'

const Navbar = () => {
  return (
    <>
   {/* Navbar */}
   <nav className="flex justify-between rounded-b-xl items-center p-4  text-white" style={{backgroundColor: '#5157C0'}}>
        <div className="flex gap-8 font-semibold text-lg">
          <Link href="/">Overview</Link>
          <Link href="#projects">My Project</Link>
          <Link href="#about">About Me</Link>
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
