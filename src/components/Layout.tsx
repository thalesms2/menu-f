import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const navLink = (route: string) => {
    if(route === location.pathname) {
        return "transition-colors hover:text-white/80 text-white"
    }
    return "transition-colors hover:text-white/80 text-white/60"
  }
  return (
    <section className="md:mx-12 lg:mx-[20vh] xl:mx-[40vh]">
      <nav className="min-h-[5vh] flex gap-3 items-center p-2">
        <Link to="/" className={navLink("/")}>Cardápio</Link>
        <Link to="/reserva" className={navLink("/reserva")}>Reserva</Link>
      </nav>
      <main className="p-2 min-h-[93vh]">
        <Outlet />
      </main>
      <footer className="min-h-[2vh] flex justify-center text-xs">
        <a 
          href="https://www.svgbackgrounds.com/elements/animated-svg-preloaders/"
          className="text-slate-600"
        >Animated SVG Preloaders by SVGBackgrounds.com</a>
      </footer>
    </section>
  )
}