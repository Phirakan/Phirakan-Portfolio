import Navbar from './components/navbar'
import './globals.css';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'RazeCar | Next.js Starter',
  description: 'A Next.js 15 starter with TypeScript, Tailwind CSS, and ESLint.',
  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS', 'RazeCar', 'E-commerce'],
};


const layout = ({children}) => {
  return (
   <html>
    <body>
      <Navbar />
      {children}
    </body>
   </html>
  )
}

export default layout
