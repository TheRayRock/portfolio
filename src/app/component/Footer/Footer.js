export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-12 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted">© {new Date().getFullYear()} Your Name — All rights reserved</div>
        <div className="flex gap-4">
          <a href="#" className="text-muted">Twitter</a>
          <a href="#" className="text-muted">Dribbble</a>
          <a href="#" className="text-muted">GitHub</a>
        </div>
      </div>
    </footer>
  )
}