import Navbar from './components/navbar'
import Footer from './components/footer';
import './globals.css';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Phirakan - Portfolio',
  description: 'Phirakan Khongphet Portfolio Website Developed with Next.js | TypeScript | Tailwind CSS',
  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Phirakan', 'Portfolio'],
};


const layout = ({children}) => {
  return (
   <html>
    <body>
      <Navbar />
      {children}

      <Footer />
    </body>
   </html>
  )
}

export default layout
