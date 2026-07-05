import { useEffect, useMemo, useState } from "react";
import {
  FaLocationDot,
  FaRotateLeft,
  FaMagnifyingGlass,
  FaStar,
} from "react-icons/fa6";
import { useDebounce } from "use-debounce";

import { useAppDispatch, useAppSelector } from "../app/hooks";

import {
  setQuery,
  resetQuery,
} from "../features/hotels/hotelSlice";

const SearchSection = () => {
  const locations = useMemo(
    () => [
      "Ahmedabad",
      "Bengaluru",
      "Chennai",
      "Delhi",
      "Goa",
      "Gurgaon",
      "Hyderabad",
      "Jaipur",
      "Kolkata",
      "Mumbai",
      "Noida",
      "Pune",
    ],
    []
  );

  const dispatch = useAppDispatch();

  const { query } = useAppSelector((state) => state.hotels);

  const [search, setSearch] = useState(query.search ?? "");

  const [debouncedSearch] = useDebounce(search, 500);

  useEffect(() => {
    dispatch(
      setQuery({
        search: debouncedSearch,
        skip: 0,
      })
    );
  }, [debouncedSearch, dispatch]);

  useEffect(() => {
    setSearch(query.search ?? "");
  }, [query.search]);

  return (
    <div className="rounded-2xl border border-brand-gold/15 bg-brand-cream p-6 shadow-md font-sans space-y-6">

      {/* Title */}
      <div>
        <h3 className="font-serif text-lg font-bold text-brand-emerald">
          Refine Your Search
        </h3>
        <p className="text-[11px] font-medium text-brand-charcoal-light/60 mt-0.5">
          Find your ideal stay in India
        </p>
      </div>

      <div className="flex flex-col gap-5">

        {/* Name Keywords Search */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal-light/75">
            Search Keywords
          </label>
          <div className="relative">
            <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-emerald/50 text-xs" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g. Radisson, Mumbai..."
              className="w-full rounded-xl border border-brand-gold/25 bg-brand-cream-dark/50 py-3.5 pl-10 pr-4 text-xs text-brand-charcoal placeholder-brand-charcoal/40 outline-none transition focus:border-brand-emerald focus:ring-2 focus:ring-brand-gold/10"
            />
          </div>
        </div>

        {/* Location Dropdown */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal-light/75">
            Destination City
          </label>
          <div className="relative">
            <FaLocationDot className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-emerald/50 text-xs" />
            <select
              value={query.location ?? ""}
              onChange={(e) =>
                dispatch(
                  setQuery({
                    location: e.target.value,
                    skip: 0,
                  })
                )
              }
              className="w-full appearance-none rounded-xl border border-brand-gold/25 bg-brand-cream-dark/50 py-3.5 pl-10 pr-4 text-xs text-brand-charcoal outline-none transition focus:border-brand-emerald focus:ring-2 focus:ring-brand-gold/10"
            >
              <option value="">All Locations</option>
              {locations.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Rating Select */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal-light/75">
            Minimum Guest Rating
          </label>
          <div className="relative">
            <FaStar className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold text-xs" />
            <select
              value={query.rating_min ?? ""}
              onChange={(e) =>
                dispatch(
                  setQuery({
                    rating_min: e.target.value
                      ? Number(e.target.value)
                      : undefined,
                    skip: 0,
                  })
                )
              }
              className="w-full appearance-none rounded-xl border border-brand-gold/25 bg-brand-cream-dark/50 py-3.5 pl-10 pr-4 text-xs text-brand-charcoal outline-none transition focus:border-brand-emerald focus:ring-2 focus:ring-brand-gold/10"
            >
              <option value="">Any Star Rating</option>
              <option value="5">5 ★ Ultra-Luxury</option>
              <option value="4">4 ★ & Above</option>
              <option value="3">3 ★ & Above</option>
              <option value="2">2 ★ & Above</option>
              <option value="1">1 ★ & Above</option>
            </select>
          </div>
        </div>

        {/* Sorting Dropdown */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal-light/75">
            Arrange By
          </label>
          <select
            value={query.ordering ?? ""}
            onChange={(e) =>
              dispatch(
                setQuery({
                  ordering: e.target.value,
                  skip: 0,
                })
              )
            }
            className="w-full rounded-xl border border-brand-gold/25 bg-brand-cream-dark/50 py-3.5 px-4 text-xs text-brand-charcoal outline-none transition focus:border-brand-emerald focus:ring-2 focus:ring-brand-gold/10"
          >
            <option value="">Recommended</option>
            <option value="price">Valuation: Low to High</option>
            <option value="-price">Valuation: High to Low</option>
            <option value="rating">Rating: Low to High</option>
            <option value="-rating">Rating: High to Low</option>
          </select>
        </div>

      </div>

      {/* Reset Operations */}
      <button
        onClick={() => {
          setSearch("");
          dispatch(resetQuery());
        }}
        className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand-emerald px-4 py-3.5 text-xs font-semibold text-brand-gold hover:text-brand-cream border border-brand-gold/20 hover:border-brand-gold hover:bg-brand-emerald-light transition-all duration-300"
      >
        <FaRotateLeft className="text-xs" />
        Reset Filter Set
      </button>

    </div>
  );
};

export default SearchSection;