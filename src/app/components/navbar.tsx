import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between items-center p-4 bg-gray-800 text-xl border-b-2 border-slate-500 text-white font-semibold'>
        <div className="flex gap-12">
          <Link href="/">Home</Link>
          <Link href="/Project">Project</Link>
          <Link href="/info">About me</Link>
        </div>
        {/* Download CV Button */}
        <a
          href="/Phirakan_CV.pdf" // Correct path to the file in the public folder
          download
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-mono"
        >
          Download CV
        </a>
      </nav>
    </>
  )
}

export default Navbar
