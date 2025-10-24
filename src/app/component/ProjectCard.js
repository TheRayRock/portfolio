// import Image from 'next/image'

// export default function ProjectCard({project}){
//   return (
//     <article style={{background:'linear-gradient(180deg, rgba(255,255,255,0.015), transparent)', padding:14, borderRadius:12, overflow:'hidden', border:'1px solid rgba(255,255,255,0.03)'}}>
//       <div style={{borderRadius:10, overflow:'hidden'}}>
//         <Image src={project.image} alt={project.title} width={600} height={360} style={{objectFit:'cover', width:'100%', height:'auto'}} />
//       </div>
//       <div style={{paddingTop:10}}>
//         <h3 style={{margin:'6px 0 6px 0'}}>{project.title}</h3>
//         <p style={{color:'var(--muted)', margin:0, fontSize:14}}>{project.description}</p>
//         <div style={{marginTop:10, display:'flex', gap:8, flexWrap:'wrap'}}>
//           {project.tags.map(t=> <span key={t} style={{fontSize:12, color:'var(--muted)', background:'rgba(255,255,255,0.02)', padding:'6px 8px', borderRadius:8}}>{t}</span>)}
//         </div>
//       </div>
//     </article>
//   )
// }