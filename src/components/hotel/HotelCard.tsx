import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";

import type { Hotel } from "../../types/hotel";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-2xl border border-brand-gold/15 bg-brand-cream shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-gold/45"
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          loading="lazy"
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent" />

        {/* Rating */}

        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-brand-charcoal/90 border border-brand-gold/30 px-3 py-1.5 shadow-lg backdrop-blur-sm">

          <FaStar className="text-brand-gold text-sm" />

          <span className="font-serif text-sm font-semibold text-brand-gold-light">
            {hotel.rating}
          </span>

        </div>

        {/* Price */}

        <div className="absolute bottom-4 left-4 rounded-xl bg-brand-emerald/90 border border-brand-gold/20 px-4 py-2 shadow-lg backdrop-blur-sm">

          <p className="font-serif text-xl font-bold text-brand-gold">
            ₹{Number(hotel.price).toLocaleString("en-IN")}
          </p>

          <span className="text-[10px] uppercase tracking-wider text-brand-cream/80 font-medium">
            per night
          </span>

        </div>

      </div>

      {/* Content */}

      <div className="space-y-4 p-6 font-sans">

        <div>

          <h2 className="line-clamp-1 font-serif text-2xl font-semibold text-brand-charcoal">
            {hotel.name}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-sm text-brand-charcoal-light/75">

            <FaLocationDot className="text-brand-gold-dark" />

            <span>{hotel.location}</span>

          </div>

        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-brand-charcoal/80">
          {hotel.description}
        </p>

        <Link
          to={`/hotels/${hotel.id}`}
          className="flex items-center justify-between rounded-xl bg-brand-emerald px-5 py-4 font-semibold text-brand-gold hover:text-brand-cream border border-brand-gold/15 hover:border-brand-gold hover:bg-brand-emerald-light transition-all duration-300 shadow-md shadow-brand-emerald/5"
        >
          <span>Reserve Retreat</span>

          <FaArrowRight className="transition group-hover:translate-x-1" />
        </Link>

      </div>
    </motion.article>
  );
};

export default HotelCard;