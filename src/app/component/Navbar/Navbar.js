// // "use client";
// // import { useState } from "react";
// // import { FaBars, FaTimes } from "react-icons/fa";
// // import { FiDownload } from "react-icons/fi";

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0 scroll-smooth">
// //       <div className="flex justify-between items-center py-4 px-8">
// //         {/* Logo */}
// //         <div className="font-bold text-2xl text-gray-800">Personal</div>

// //         {/* Desktop Menu */}
// //         <ul className="hidden md:flex space-x-8 items-center">
// //           <li>
// //             <a href="#about" className="hover:underline">
// //               About Me
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#skills" className="hover:underline">
// //               Skills
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#projects" className="hover:underline">
// //               Projects
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#contact" className="hover:underline">
// //               Contact Me
// //             </a>
// //           </li>
// //           <li>
// //             <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2">
// //               {/* Resume <span>⬇️</span> */}
// //               <a
// //                 href="/MdShahnawaz Alam.CV.pdf"
// //                 download
// //                 className="bg-black text-white px-4 py-0.2 rounded-md flex items-center gap-2"
// //               >
// //                 Resume{" "}
// //                 <span>
// //                   <FiDownload />
// //                 </span>
// //               </a>
// //             </button>
// //           </li>
// //         </ul>

// //         {/* Mobile Icon */}
// //         <div
// //           className="md:hidden text-2xl cursor-pointer"
// //           onClick={() => setOpen(!open)}
// //         >
// //           {open ? <FaTimes /> : <FaBars />}
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {open && (
// //         <ul className="flex flex-col items-center space-y-4 pb-4 bg-white shadow-md md:hidden">
// //           <li>
// //             <a
// //               href="#about"
// //               className="hover:underline"
// //               onClick={() => setOpen(false)}
// //             >
// //               About Me
// //             </a>
// //           </li>
// //           <li>
// //             <a
// //               href="#skills"
// //               className="hover:underline"
// //               onClick={() => setOpen(false)}
// //             >
// //               Skills
// //             </a>
// //           </li>
// //           <li>
// //             <a
// //               href="#projects"
// //               className="hover:underline"
// //               onClick={() => setOpen(false)}
// //             >
// //               Projects
// //             </a>
// //           </li>
// //           <li>
// //             <a
// //               href="#contact"
// //               className="hover:underline"
// //               onClick={() => setOpen(false)}
// //             >
// //               Contact Me
// //             </a>
// //           </li>
// //           <li>
// //             <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2">
// //               Resume <span>⬇️</span>
// //             </button>
// //           </li>
// //         </ul>
// //       )}
// //     </nav>
// //   );
// // }


// "use client";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { FiDownload } from "react-icons/fi";


// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0 scroll-smooth">
//       <div className="flex justify-between items-center py-4 px-8">
//         {/* Logo */}
//         {/* <div className="font-bold text-2xl text-gray-800"> Personal</div> */}
                 
//            <div className="flex items-center gap-2 font-bold text-2xl text-gray-800">
//   <img src="/letter-p.png" alt="logo" className="h-8 w-8" />
//   <span>Personal</span>
// </div>


//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 items-center">
//           <li><a href="#about" className="hover:underline">About Me</a></li>
//           <li><a href="#skills" className="hover:underline">Skills</a></li>
//           <li><a href="#projects" className="hover:underline">Projects</a></li>
//           <li><a href="#contactform" className="hover:underline">Contact Me</a></li>
//           <li>
//             <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2">
//               <a 
//   href="/MdShahnawaz Alam.CV (1).pdf" 
//   download 
//   className="bg-black text-white px-4 py-0.5 rounded-md flex items-center gap-2"
// >
//   Resume <span><FiDownload /></span>
// </a>

//             </button>
//           </li>
//         </ul>

//         {/* Mobile Icon */}
//         <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
//           {open ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <ul className="flex flex-col items-center space-y-4 pb-4 bg-white shadow-md md:hidden">
//           <li><a href="#about" className="hover:underline" onClick={() => setOpen(false)}>About Me</a></li>
//           <li><a href="#skills" className="hover:underline" onClick={() => setOpen(false)}>Skills</a></li>
//           <li><a href="#projects" className="hover:underline" onClick={() => setOpen(false)}>Projects</a></li>
//           <li><a href="#contactform" className="hover:underline" onClick={() => setOpen(false)}>Contact Me</a></li>

//           <li>
//             <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2">
//                       <a 
//   href="/MdShahnawaz Alam.CV (1).pdf" 
//   download 
//   className="bg-black text-white px-4 py-0.5 rounded-md flex items-center gap-2"
// >
//   Resume <span><FiDownload /></span>
// </a>
//             </button>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// }










"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // ✅ Smooth scroll behavior for entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // ✅ Auto close menu when a link is clicked
  const handleLinkClick = (section) => {
    setActive(section);
    setOpen(false);
  };

  const links = [
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contactform", label: "Contact Me" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md fixed w-full z-50 top-0 left-0 transition-all duration-300">
      <div className="flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-2xl text-gray-800">
          <img src="/letter-p.png" alt="logo" className="h-8 w-8" />
          <span>Personal</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`transition-all hover:text-gray-900 ${
                  active === link.href
                    ? "underline underline-offset-4 text-gray-900 font-medium"
                    : "text-gray-600"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Resume Button */}
          <li>
            <a
              href="/MdShahnawaz Alam.CV (1).pdf"
              download
              className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-900 transition"
            >
              Resume <FiDownload className="inline" />
            </a>
          </li>
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open
            ? "max-h-96 opacity-100 py-4"
            : "max-h-0 opacity-0 py-0 overflow-hidden"
        } transition-all duration-300 bg-white shadow-md md:hidden`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`transition-all ${
                  active === link.href
                    ? "underline underline-offset-4 text-gray-900 font-medium"
                    : "text-gray-700"
                } hover:text-gray-900`}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="/MdShahnawaz Alam.CV (1).pdf"
              download
              className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-900 transition"
            >
              Resume <FiDownload className="inline" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
