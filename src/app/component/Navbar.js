// import Link from 'next/link'

// export default function Navbar(){
//   return (
//     <header style={{padding:'1rem 0', borderBottom:'1px solid rgba(255,255,255,0.03)'}}>
//       <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
//         {/* <Link href="/"><a style={{fontWeight:700, letterSpacing:'.4px'}}>YourName</a></Link> */}
//         <Link href="/" style={{fontWeight:700, letterSpacing:'.4px'}}>Md Shahnawaz Alam</Link>

//         <nav style={{display:'flex', gap:'1rem', alignItems:'center'}}>
//           <a href="#projects" style={{color:'var(--muted)'}}>Projects</a>
//           <a href="#about" style={{color:'var(--muted)'}}>About</a>
//           <a href="#contact" style={{padding:'8px 12px', background:'linear-gradient(90deg,var(--accent), #4f9cff)', borderRadius:8, color:'#071024'}}>Contact</a>
//         </nav>
//       </div>
//     </header>
//   )
// }

const Navbar = () => (
  <nav className="flex justify-between items-center py-4 px-8">
    <div className="font-bold text-2xl">Personal</div>
    <ul className="flex space-x-8 items-center">
      <li><a href="/AboutMe" className="hover:underline">About Me</a></li>
      <li><a href="#" className="hover:underline">Skills</a></li>
      <li><a href="#" className="hover:underline">Project</a></li>
      <li><a href="#" className="hover:underline">Contact Me</a></li>
      <li>
        <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2">
          Resume <span>⬇️</span>
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
