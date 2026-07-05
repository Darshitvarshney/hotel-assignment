import { useAppSelector } from "../../app/hooks";
import HotelCard from "./HotelCard";
import HotelSkeleton from "../HotelSkeleton";

const HotelGrid = () => {
  const { hotels, loading, error } = useAppSelector(
    (state) => state.hotels
  );

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <HotelSkeleton key={index} />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <div className="inline-block rounded-xl bg-red-50 border border-red-200 px-6 py-4">
          <p className="text-red-800 font-medium">{error}</p>
        </div>
      </section>
    );
  }

  if (!hotels.length) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20 text-center font-sans">
        <p className="text-lg font-medium text-brand-charcoal/60">
          No luxury retreats match your currently selected filters.
        </p>
        <p className="text-sm text-brand-charcoal-light/60 mt-1">
          Try resetting your metrics or applying alternative criteria.
        </p>
      </section>
    );
  }

  return (
    <section
      id="hotels"
      className="w-full"
    >
      <div className="mb-8 flex items-center justify-between font-sans">

        <div>

          <h2 className="font-serif text-3xl font-semibold text-brand-emerald">
            Verified Hotel Collection
          </h2>

          <p className="mt-1.5 text-xs text-brand-charcoal-light/60 font-medium">
            {hotels.length} matching properties found in India
          </p>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
          />
        ))}
      </div>
    </section>
  );
};

export default HotelGrid;