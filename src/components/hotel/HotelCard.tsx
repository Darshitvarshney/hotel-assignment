import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaLocationDot,
  FaStar,
  FaWifi,
  FaSnowflake,
  FaUtensils,
} from "react-icons/fa6";

import type { Hotel } from "../../types/hotel";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  // Generate some semi-consistent preview amenities based on the hotel id
  const hasWifi = hotel.id % 2 === 0;
  const hasAC = hotel.id % 3 !== 0;
  const hasDining = hotel.id % 4 === 0;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col md:flex-row overflow-hidden rounded-2xl border border-brand-gold/15 bg-brand-cream shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand-gold/45"
    >
      {/* Left side: Image */}
      <div className="relative h-64 md:h-auto md:w-[40%] shrink-0 overflow-hidden">
        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Rating overlay badge */}
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-lg bg-brand-charcoal/95 border border-brand-gold/30 px-2 py-1 shadow-md backdrop-blur-sm">
          <FaStar className="text-brand-gold text-xs" />
          <span className="font-serif text-xs font-semibold text-brand-gold-light mt-0.5">
            {hotel.rating}
          </span>
        </div>
      </div>

      {/* Right side: Information Details */}
      <div className="flex flex-col justify-between p-6 flex-1 font-sans">

        <div className="space-y-3">
          {/* Header & Location */}
          <div>
            <h2 className="line-clamp-1 font-serif text-xl font-semibold text-brand-charcoal">
              {hotel.name}
            </h2>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-brand-charcoal-light/70">
              <FaLocationDot className="text-brand-gold-dark" />
              <span>{hotel.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="line-clamp-2 text-xs leading-relaxed text-brand-charcoal/80">
            {hotel.description}
          </p>

          {/* Dynamic Amenities Row */}
          <div className="flex flex-wrap gap-2 pt-1">
            {hasWifi && (
              <span className="inline-flex items-center gap-1 rounded-md bg-brand-cream-dark border border-brand-gold/20 px-2 py-0.5 text-[10px] font-medium text-brand-charcoal-light/80">
                <FaWifi className="text-[9px]" /> Free WiFi
              </span>
            )}
            {hasAC && (
              <span className="inline-flex items-center gap-1 rounded-md bg-brand-cream-dark border border-brand-gold/20 px-2 py-0.5 text-[10px] font-medium text-brand-charcoal-light/80">
                <FaSnowflake className="text-[9px]" /> AC Room
              </span>
            )}
            {hasDining && (
              <span className="inline-flex items-center gap-1 rounded-md bg-brand-cream-dark border border-brand-gold/20 px-2 py-0.5 text-[10px] font-medium text-brand-charcoal-light/80">
                <FaUtensils className="text-[9px]" /> Dinner Included
              </span>
            )}
          </div>
        </div>

        {/* Pricing tag & book stay button placed side-by-side */}
        <div className="mt-5 pt-4 border-t border-brand-gold/10 flex items-center justify-between">
          <div>
            <span className="text-[9px] uppercase tracking-wider text-brand-charcoal-light/50 font-semibold block leading-none">
              nightly rate
            </span>
            <span className="font-serif text-lg font-bold text-brand-emerald">
              ₹{Number(hotel.price).toLocaleString("en-IN")}
            </span>
          </div>

          <Link
            to={`/hotels/${hotel.id}`}
            className="flex items-center gap-1.5 rounded-lg bg-brand-emerald px-4 py-2.5 text-xs font-semibold text-brand-gold hover:text-brand-cream border border-brand-gold/15 hover:border-brand-gold hover:bg-brand-emerald-light transition-all duration-300"
          >
            <span>View Details</span>
            <FaArrowRight className="transition group-hover:translate-x-0.5 text-[10px]" />
          </Link>
        </div>

      </div>
    </motion.article>
  );
};

export default HotelCard;