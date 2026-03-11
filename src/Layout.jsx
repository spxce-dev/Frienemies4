import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";

const logoUrl = `${import.meta.env.BASE_URL}frienemies-logo.svg`;
const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-orange-500 ${
    isActive ? "text-orange-500" : "text-zinc-900"
  }`;

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/products" className={navLinkClass}>
              Shop
            </NavLink>
            <a href="#categories" className="text-sm font-medium text-zinc-900 transition-colors hover:text-orange-500">
              Categories
            </a>
          </nav>

          <Link to="/" className="mx-auto md:mx-0" aria-label="Frienemies home">
            <img src={logoUrl} alt="Frienemies" className="h-10 w-auto md:h-12" />
          </Link>

          <div className="flex items-center gap-4">
            <NavLink to="/products" className={navLinkClass}>
              Browse
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors ${
                  isActive ? "bg-orange-600" : "bg-orange-500 hover:bg-orange-600"
                }`
              }
            >
              Cart
            </NavLink>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
