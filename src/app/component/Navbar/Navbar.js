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
//         <div className="font-bold text-2xl text-gray-800">Personal</div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 items-center">
//           <li>
//             <a href="#about" className="hover:underline">
//               About Me
//             </a>
//           </li>
//           <li>
//             <a href="#skills" className="hover:underline">
//               Skills
//             </a>
//           </li>
//           <li>
//             <a href="#projects" className="hover:underline">
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:underline">
//               Contact Me
//             </a>
//           </li>
//           <li>
//             <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2">
//               {/* Resume <span>⬇️</span> */}
//               <a
//                 href="/MdShahnawaz Alam.CV.pdf"
//                 download
//                 className="bg-black text-white px-4 py-0.2 rounded-md flex items-center gap-2"
//               >
//                 Resume{" "}
//                 <span>
//                   <FiDownload />
//                 </span>
//               </a>
//             </button>
//           </li>
//         </ul>

//         {/* Mobile Icon */}
//         <div
//           className="md:hidden text-2xl cursor-pointer"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <ul className="flex flex-col items-center space-y-4 pb-4 bg-white shadow-md md:hidden">
//           <li>
//             <a
//               href="#about"
//               className="hover:underline"
//               onClick={() => setOpen(false)}
//             >
//               About Me
//             </a>
//           </li>
//           <li>
//             <a
//               href="#skills"
//               className="hover:underline"
//               onClick={() => setOpen(false)}
//             >
//               Skills
//             </a>
//           </li>
//           <li>
//             <a
//               href="#projects"
//               className="hover:underline"
//               onClick={() => setOpen(false)}
//             >
//               Projects
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className="hover:underline"
//               onClick={() => setOpen(false)}
//             >
//               Contact Me
//             </a>
//           </li>
//           <li>
//             <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2">
//               Resume <span>⬇️</span>
//             </button>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// }


"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0 scroll-smooth">
      <div className="flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="font-bold text-2xl text-gray-800"> Personal</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li><a href="#about" className="hover:underline">About Me</a></li>
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact Me</a></li>
          <li>
            <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2">
              <a 
  href="/MdShahnawaz Alam.CV (1).pdf" 
  download 
  className="bg-black text-white px-4 py-0.5 rounded-md flex items-center gap-2"
>
  Resume <span><FiDownload /></span>
</a>

            </button>
          </li>
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col items-center space-y-4 pb-4 bg-white shadow-md md:hidden">
          <li><a href="#about" className="hover:underline" onClick={() => setOpen(false)}>About Me</a></li>
          <li><a href="#skills" className="hover:underline" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" className="hover:underline" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="hover:underline" onClick={() => setOpen(false)}>Contact Me</a></li>
          <li>
            <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2">
                      <a 
  href="/MdShahnawaz Alam.CV (1).pdf" 
  download 
  className="bg-black text-white px-4 py-0.5 rounded-md flex items-center gap-2"
>
  Resume <span><FiDownload /></span>
</a>
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
