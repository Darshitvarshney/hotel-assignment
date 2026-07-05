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
    <section className="sticky top-20 z-40 border-y border-brand-gold/10 bg-brand-cream-dark/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-6 font-sans">
        <div className="grid gap-4 lg:grid-cols-12">

          {/* Search */}

          <div className="relative lg:col-span-5">
            <FaMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-emerald/50" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search hotels, cities, or retreat types..."
              className="w-full rounded-xl border border-brand-gold/30 bg-brand-cream py-4 pl-14 pr-5 text-brand-charcoal placeholder-brand-charcoal/50 outline-none transition focus:border-brand-emerald focus:ring-4 focus:ring-brand-gold/20"
            />
          </div>

          {/* Location */}

          <div className="relative lg:col-span-2">
            <FaLocationDot className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-emerald/50" />

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
              className="w-full appearance-none rounded-xl border border-brand-gold/30 bg-brand-cream py-4 pl-11 pr-5 text-brand-charcoal outline-none transition focus:border-brand-emerald focus:ring-4 focus:ring-brand-gold/20"
            >
              <option value="">Any Location</option>

              {locations.map((city) => (
                <option
                  key={city}
                  value={city}
                >
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Rating */}

          <div className="relative lg:col-span-2">
            <FaStar className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold" />

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
              className="w-full appearance-none rounded-xl border border-brand-gold/30 bg-brand-cream py-4 pl-11 pr-5 text-brand-charcoal outline-none transition focus:border-brand-emerald focus:ring-4 focus:ring-brand-gold/20"
            >
              <option value="">Min Rating</option>
              <option value="5">5 ★ Exclusive</option>
              <option value="4">4 ★ & Above</option>
              <option value="3">3 ★ & Above</option>
            </select>
          </div>

          {/* Sort */}

          <div className="lg:col-span-2">
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
              className="w-full rounded-xl border border-brand-gold/30 bg-brand-cream px-4 py-4 text-brand-charcoal outline-none transition focus:border-brand-emerald focus:ring-4 focus:ring-brand-gold/20"
            >
              <option value="">Sort Collection</option>

              <option value="price">Valuation: Low to High</option>
              <option value="-price">Valuation: High to Low</option>

              <option value="rating">Rating: Low to High</option>
              <option value="-rating">Rating: High to Low</option>
            </select>
          </div>

          {/* Reset */}

          <button
            onClick={() => {
              setSearch("");
              dispatch(resetQuery());
            }}
            className="flex items-center justify-center gap-2 rounded-xl bg-brand-emerald px-5 py-4 font-semibold text-brand-gold hover:text-brand-cream border border-brand-gold/20 hover:border-brand-gold hover:bg-brand-emerald-light transition-all duration-300"
          >
            <FaRotateLeft />
            Reset
          </button>

        </div>
      </div>
    </section>
  );
};

export default SearchSection;