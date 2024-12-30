import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className='flex  justify-between items-center p-4 bg-slate-300 text-2xl border-b-2 border-slate-500'>
    <div className="flex gap-12 ">
    <Link href="/">Home</Link>

    <Link href="/about">About</Link>

    <Link href="/info">Contact</Link>
    </div>

    <div className='flex gap-4'>
    <Link href="/login">Login</Link>

<Link href="/register">Register</Link>
    </div>
  </nav>
  
  </>
  )
}

export default Navbar
