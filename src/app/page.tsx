import Head from 'next/head';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>Phirakan Khongphet - Portfolio</title>
        <meta name="description" content="Portfolio website of Phirakan Khongphet" />
      </Head>

      {/* Header */}
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Phirakan Khongphet</h1>
          <p>Developer | Backend </p>
        </div>
      </header>

      {/* About Me */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <p>
          My nickname is mos ,I am 22 years old, I am a senior student in Major of Information Technology Faculty of Sciences and Industrial Technology Prince of Songkla University, Suratthani Campus.  
          I am ambitious and like to learn new things all the time and can learn quickly. Able to accept work pressure. 
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Experience</h2>
          {/* 2022 */}
          <div>
              <h3 className="text-xl font-semibold text-gray-800">2022</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>
                  <strong>Application Development:</strong> Developed an MP3
                  music player application using Java and Android Studio.
                </li>
                <li>
                  <strong>Full Stack Web Development:</strong> Created a web
                  application for selling products as a final project for the
                  WEB PROGRAMMING course. Used HTML, CSS, and PHP.
                </li>
              </ul>
            </div>

            {/* 2023 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">2023</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>
                  <strong>Web Application Development:</strong> Developed a
                  back-end system for a web application to order food via QR
                  Code using PHP.
                </li>
                <li>
                  <strong>Application Development:</strong> Built a mobile
                  application to control the opening and closing of an electric
                  lock for IoT devices using Flutter and Dart.
                </li>
              </ul>
            </div>

            {/* 2024 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">2024</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>
                  <strong>Full Stack Web Development:</strong> Developed a
                  website to display electricity usage and calculate carbon
                  dioxide emissions from electricity consumption via IoT
                  devices.
                </li>
                <li>
                  <strong>Internship at Siam Cement (Thung Song) Co., Ltd.:</strong>{' '}
                  Contributed to digital transformation initiatives as part of
                  the back-end development team in the Digital Transformation
                  department.
                </li>
                <li>
                  <strong>Full Stack Web Development:</strong> Developed a
                  website for selling in-game items with a payment system for
                  adding credits. Used HTML, CSS, JavaScript, and PHP.
                </li>
                <li>
                  <strong>Internship at Axons Corporate (a subsidiary of CP
                  Group):</strong> Currently interning as a Developer,
                  contributing to various projects.
                </li>
              </ul>
            </div>

            {/* 2024 - Present */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">2024 - Present</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>
                  <strong>Internship at Axons Corporate:</strong> Continuation
                  of the internship, focusing on software development and other
                  technical projects.
                </li>
              </ul>
            </div>
        </div>
      </section>

      {/* Contact Me */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Contact Me</h2>
          <p>
            Tel. +66952616334 <br />
            Email{' '}
            <a href="peerakran03g@gmail.com" className="text-blue-500">
              peerakran03g@gmail.com
            </a>.
          </p>
        </div>
      </section>

     
    </div>
  );
};

export default Home;
