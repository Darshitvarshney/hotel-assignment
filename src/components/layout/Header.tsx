import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
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
              Find My Hotel
            </h1>

            <p className="text-[10px] uppercase tracking-wider text-brand-gold-dark font-medium -mt-1">
              Find the best stay for your next trip
            </p>

          </div>

        </Link>

      </div>
    </header>
  );
};

export default Header;