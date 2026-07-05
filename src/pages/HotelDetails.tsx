import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";

import Layout from "../components/layout/Layout";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchHotelById } from "../features/hotels/hotelSlice";


const HotelDetails = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { selectedHotel, loading, error } = useAppSelector(
    (state) => state.hotels
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchHotelById(Number(id)));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <Layout>
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center font-sans">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-gold/30 border-t-brand-emerald" />
            <p className="text-sm font-medium text-brand-charcoal-light/60">
              Retrieving retreat details...
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center font-sans">
          <div className="rounded-xl bg-red-50 border border-red-200 px-8 py-6 text-center">
            <p className="text-red-800 font-semibold">{error}</p>
            <Link to="/" className="mt-4 inline-block text-sm font-medium text-brand-emerald underline">
              Return to showcase
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  if (!selectedHotel) {
    return (
      <Layout>
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center font-sans">
          <div className="text-center">
            <p className="text-lg font-medium text-brand-charcoal/60">
              Retreat not found.
            </p>
            <Link to="/" className="mt-2 inline-block text-sm font-medium text-brand-emerald underline">
              Return to showcase
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-12 font-sans">

        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 rounded-xl border border-brand-gold/30 bg-brand-cream px-5 py-2.5 text-sm font-semibold text-brand-emerald transition-all duration-300 hover:bg-brand-cream-dark hover:border-brand-gold"
        >
          <FaArrowLeft />
          Back to Retreats
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div>

            <img
              src={selectedHotel.thumbnail}
              alt={selectedHotel.name}
              className="h-[520px] w-full rounded-2xl border border-brand-gold/20 object-cover shadow-xl"
            />

          </div>

          {/* Right */}

          <div className="flex flex-col justify-center">

            <div className="flex items-start justify-between gap-6">

              <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-charcoal">
                {selectedHotel.name}
              </h1>

              <div className="flex items-center gap-1.5 rounded-full bg-brand-charcoal border border-brand-gold/30 px-4 py-2 text-brand-gold">

                <FaStar className="text-brand-gold" />

                <span className="font-serif font-bold text-brand-gold-light mt-0.5">
                  {selectedHotel.rating}
                </span>

              </div>

            </div>

            <div className="mt-5 flex items-center gap-2 text-base text-brand-charcoal-light/75 font-medium">

              <FaLocationDot className="text-brand-gold-dark" />

              {selectedHotel.location}

            </div>

            <div className="mt-8 border-t border-brand-gold/10 pt-8">

              <h2 className="font-serif text-5xl font-bold text-brand-gold">
                ₹{Number(selectedHotel.price).toLocaleString("en-IN")}
              </h2>

              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-brand-charcoal-light/50">
                Guaranteed price per night
              </p>

            </div>

            <div className="mt-8 border-y border-brand-gold/10 py-8">

              <h3 className="mb-4 font-serif text-2xl font-semibold text-brand-emerald">
                The Elysian Experience
              </h3>

              <p className="leading-relaxed text-brand-charcoal/80 text-sm md:text-base">
                {selectedHotel.description}
              </p>

            </div>

          </div>

        </div>

        {/* Gallery */}

        <div className="mt-20">

          <h2 className="mb-8 font-serif text-3xl font-semibold text-brand-emerald">
            Interior & Exterior Gallery
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {selectedHotel.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Hotel gallery ${index + 1}`}
                loading="lazy"
                className="h-60 w-full rounded-xl border border-brand-gold/10 object-cover shadow-sm transition duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-brand-gold/30"
              />
            ))}

          </div>

        </div>

      </section>
    </Layout>
  );
};

export default HotelDetails;