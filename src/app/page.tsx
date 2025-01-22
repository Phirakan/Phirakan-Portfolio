"use client";

import Head from "next/head";
import { useState, useEffect } from "react";

const Home = () => {
  const [age, setAge] = useState<number>(0);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date("2003-03-05"); // วันเกิดของคุณ
      const today = new Date();
      let currentAge = today.getFullYear() - birthDate.getFullYear();

      // เช็คว่าครบรอบวันเกิดหรือยังในปีนี้
      const isBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

      // ถ้ายังไม่ถึงวันเกิดในปีนี้ ให้ลบอายุออก 1 ปี
      if (!isBirthdayPassed) {
        currentAge--;
      }
      setAge(currentAge);
    };

    calculateAge();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>Phirakan Khongphet - Portfolio</title>
        <meta name="description" content="Portfolio website of Phirakan Khongphet" />
      </Head>

      {/* Header */}
      <header className="text-center py-10 bg-white">
        <h1 className="text-4xl font-bold">Phirakan Khongphet</h1>
        <p className="text-xl text-gray-700 mt-2">- Developer -</p>
        <p className="text-xl font-bold text-black mt-2">___________________________________________________________________________________________________________________</p>
        <div className="flex justify-center items-center flex-wrap gap-4 mt-6">
          <img src="/adonisjs.png" alt="AdonisJS" className="w-16 h-auto" />
          <img src="/logo-laravel-icon-1024.png" alt="Laravel" className="w-16 h-auto" />
          <img src="/PHP-Logo.png" alt="PHP" className="w-16 h-auto" />
          <img src="/java.png" alt="Java" className="w-16 h-auto" />
          <img src="/docker.png" alt="Docker" className="w-16 h-auto" />
          <img src="/flutter_logo-freelogovectors.net_.png" alt="Flutter" className="w-16 h-auto" />
          <img src="/next.svg" alt="Next.js" className="w-16 h-auto" />
          <img src="/React.png" alt="React" className="w-16 h-auto" />
          <img src="/ant.png" alt="Ant Design" className="w-16 h-auto" />
          <img src="/tailwind.png" alt="Tailwind CSS" className="w-16 h-auto" />
          <img src="/github.png" alt="Github" className="w-16 h-auto" />
        </div>
        <p className="text-lg font-semibold leading-relaxed max-w-2xl mx-auto mt-6">
          Hi! My name is <span className="font-bold">Mosu</span>, and I’m <span className="font-bold">{age} years old</span>. My full name is <span className="font-bold">Phirakan Khongphet</span>. 
          I’m a web developer from Thailand, with a strong focus on back-end development. This website showcases all my work. 
          Thanks for your interest and for visiting my site—I hope you enjoy exploring my projects!
        </p>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-10 bg-white text-center">
        <h2 className="text-3xl font-bold">My Project 💻</h2>
        <p className="text-xl font-bold text-black mt-2">_____________________________________________________________________________________________________________________________________________</p>


        <div className="flex justify-center items-center mt-8 gap-4">
  {/* Project 1 */}
  <div className="w-64 h-full bg-gray-100 shadow-lg p-4 rounded-lg" style={{ backgroundColor: "#8291F3" }}>
    <img src="/food.png" alt="Food Restaurant" className="w-full h-40 object-cover rounded-xl" />
    <h3 className="text-xl font-bold pt-4">Food Restaurant</h3>
    <p className="text-sm mt-2 text-left font-semibold text-gray-100">
      Develop a Web Application for ordering food via QR Code (Back-End) using PHP.
    </p>
    <a
      href="#"
      className="inline-block mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-400 hover:text-white"
    >
      View on Github
    </a>
  </div>

  {/* Project 2 */}
  <div className="w-64 h-full bg-gray-100 shadow-lg p-4 rounded-lg" style={{ backgroundColor: "#8291F3" }}>
    <img src="/lnwlogo.png" alt="Lnw Game" className="w-full h-40 object-cover rounded-xl" />
    <h3 className="text-xl font-bold pt-4">Lnw Game Shop</h3>
    <p className="text-sm mt-2 text-left font-semibold text-gray-100">
      Website for selling in-game items, The website should also include a payment system for adding credits to purchase items on the site
    </p>
    <a
      href="#"
      className="inline-block mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-400 hover:text-white"
    >
      View on Github
    </a>
  </div>

  {/* Project 3 */}
  <div className="w-64 h-full bg-gray-100 shadow-lg p-4 rounded-lg" style={{ backgroundColor: "#8291F3" }}>
    <img src="/R.png" alt="RazeCar" className="w-full h-40 object-cover rounded-xl" />
    <h3 className="text-xl pt-4 font-bold">RazeCar</h3>
    <p className="text-sm mt-2 text-left font-semibold text-gray-100">
      An e-commerce website with a shopping cart, payment system, and order tracking feature.(Back-End).
    </p>
    <a
      href="#"
      className="inline-block mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-400 hover:text-white"
    >
      View on Github
    </a>
  </div>
</div>

      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-4  mx-96 text-center rounded-xl bg-gray-500 text-gray-100">
        <h2 className="text-3xl  font-bold">Buy me coffee ☕</h2>
        <div className="flex justify-center mt-8 gap-8">
          <div>
            <img
              src="/Promptpay.png"
              alt="Promptpay QR Code"
              className="w-40 mx-auto"
            />
            <p className="mt-2">Promptpay QR-code</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg font-semibold">OR</p>
            <a
              href="mailto:peerakan03@gmail.com"
              className="mt-4 px-4 py-2 text-white rounded hover:bg-blue-700"
              style={{ backgroundColor: "#6878DD" }}
            >
              peerakan03@gmail.com
            </a>
            <p className="mt-2">Paypal</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
