import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHotel,
  FaArrowRight,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 80);
  };
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative transition duration-300 font-medium ${
      isActive
        ? "text-brand-emerald border-b-2 border-brand-gold pb-1 font-semibold"
        : "text-brand-charcoal/80 hover:text-brand-emerald-light"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-gold/10 bg-brand-cream/90 shadow-md shadow-brand-emerald/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-emerald to-brand-emerald-light text-brand-gold shadow-lg shadow-brand-emerald/20">

            <FaHotel size={20} />

          </div>

          <div>

            <h1 className="font-serif text-2xl font-bold tracking-wide text-brand-emerald">
              Elysian Stays
            </h1>

            <p className="text-[10px] uppercase tracking-wider text-brand-gold-dark font-medium -mt-1">
              Bespoke Retreat Curation
            </p>

          </div>

        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 md:flex">

          <NavLink
            to="/"
            className={navLinkClass}
          >
            Home
          </NavLink>

          <a
            href="#hotels"
            className="text-brand-charcoal/80 font-medium transition hover:text-brand-emerald"
          >
            Discover Hotels
          </a>

        </nav>

        {/* CTA */}

        <div className="hidden md:flex">

          <a
            href="#hotels"
            className="group flex items-center gap-2 rounded-xl bg-brand-emerald px-6 py-3 font-semibold text-brand-gold hover:text-brand-cream border border-brand-gold/30 hover:border-brand-gold transition-all duration-300 hover:bg-brand-emerald-light hover:shadow-xl hover:shadow-brand-emerald/10"
          >

            Explore

            <FaArrowRight className="transition group-hover:translate-x-1" />

          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl p-2 transition hover:bg-brand-cream-dark md:hidden text-brand-emerald"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-64 border-t border-brand-gold/10" : "max-h-0"
        }`}
      >
        <nav className="space-y-2 bg-brand-cream p-6 border-b border-brand-gold/10">

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 font-medium transition text-brand-charcoal hover:bg-brand-cream-dark"
          >
            Home
          </NavLink>

          <a
            href="#hotels"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 font-medium transition text-brand-charcoal hover:bg-brand-cream-dark"
          >
            Discover Hotels
          </a>

          <a
            href="#hotels"
            onClick={() => setIsOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-brand-emerald px-4 py-3 font-semibold text-brand-gold hover:text-brand-cream border border-brand-gold/20"
          >
            Explore Hotels

            <FaArrowRight />
          </a>

        </nav>
      </div>
    </header>
  );
};

export default Header;