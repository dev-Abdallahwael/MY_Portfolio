import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      threshold: 0.5, // Adjusted threshold
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <nav className="bg-black py-4 drop-shadow-md fixed z-50 top-0 left-0 right-0 text-white text-lg">
        <div className="container flex justify-between items-center">
          <div className="md:ml-0 ml-5 opacity-0">
            <h3 className='text-xlg font-bold text-red-700'>
              My<span className='text-white'>Portfolio</span>
            </h3>
          </div>

          {/* Navigation Links */}
          <div className="NavLinks text-lg">
            <ul className="xl:flex gap-12 font-semibold hidden">
              <li>
                <a href='#home' className={`${activeSection === 'home' ? 'text-red-700 font-bold' : 'hover:text-red-700 transition delay-100'}`}>
                  Home
                </a>
              </li>
              <li>
                <a href='#about' className={`${activeSection === 'about' ? 'text-red-700 font-bold' : 'hover:text-red-700 transition delay-100'}`}>
                  About Me
                </a>
              </li>
              <li>
                <a href='#certificates' className={`${activeSection === 'certificates' ? 'text-red-700 font-bold' : 'hover:text-red-700 transition delay-100'}`}>
                  Certificates
                </a>
              </li>
              <li>
                <a href='#projects' className={`${activeSection === 'projects' ? 'text-red-700 font-bold' : 'hover:text-red-700 transition delay-100'}`}>
                  Projects
                </a>
              </li>
              <li>
                <a href='#contact' className={`${activeSection === 'contact' ? 'text-red-700 font-bold' : 'hover:text-red-700 transition delay-100'}`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex gap-6 text-lg justify-center items-center">
              {/* Social Media */}
              <li>
                <a href='https://www.linkedin.com/in/abdallah-wael-b059bb267'
                className="hover:text-red-700 transition delay-100">
                 <i className="fa-brands fa-linkedin"></i> 
                </a>
              </li>

              <li>
                <a href='#' className="hover:text-red-700 transition delay-100">
                <i className="fa-brands fa-github"></i>
                </a>
              </li>

              {/* Mobile Menu Icon */}
              <li className='lg:hidden flex'>
                <i
                  onClick={toggleMenu}
                  className="fa-solid fa-bars mr-5 text-2xl font-semibold cursor-pointer"></i>
              </li>
            </ul>

            {/* Mobile Menu */}
            <div className={`list-none md:hidden absolute top-16 left-0 w-full text-black bg-gray-200 flex flex-col gap-5 text-lg justify-center items-center transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}>
              <li>
                <a href='#home' className={`${activeSection === 'home' ? 'text-red-700 font-bold' : 'hover:text-red-700 transition delay-100'}`}>
                  Home
                </a>
              </li>
              <li>
                <a href='#about' className={`${activeSection === 'about' ? 'text-red-700 font-bold' : 'hover:text-red-700 transition delay-100'}`}>
                  About Me
                </a>
              </li>
              <li>
                <a href='#certificates' className={`${activeSection === 'certificates' ? 'text-red-700 font-bold' : 'hover:text-red-700 transition delay-100'}`}>
                  Certificates
                </a>
              </li>
              <li>
                <a href='#projects' className={`${activeSection === 'projects' ? 'text-red-700 font-bold' : 'hover:text-red-700 transition delay-100'}`}>
                  Projects
                </a>
              </li>
              <li>
                <a href='#contact' className={`${activeSection === 'contact' ? 'text-red-700 font-bold' : 'hover:text-red-700 transition delay-100'}`}>
                  Contact
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}