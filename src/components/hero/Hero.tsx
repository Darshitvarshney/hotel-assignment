import { FaArrowRight, FaHotel, FaLocationDot, FaStar } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-charcoal">

      {/* Animated Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-emerald-light/20 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[160px]" />

        <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-brand-emerald-dark/40 blur-[150px]" />

      </div>

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dfcdab03_1px,transparent_1px),linear-gradient(to_bottom,#dfcdab03_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        {/* Badge */}

        <div className="mt-9 mb-8 inline-flex items-center gap-2 rounded-full border border-brand-gold/15 bg-brand-emerald-dark/25 px-5 py-2 backdrop-blur">

          <FaHotel className="text-brand-gold" />

          <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold-light/95">

            500+ Curated Retreats Across India

          </span>

        </div>

        {/* Heading */}

        <h1 className="max-w-5xl font-serif text-5xl font-normal leading-tight text-brand-cream md:text-7xl">

          Discover Your

          <span className="block mt-2 font-serif font-semibold italic bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold-dark bg-clip-text text-transparent">

            Perfect Elysian Retreat

          </span>

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-base leading-8 text-brand-cream/80 md:text-lg font-sans">

          Explore hand-picked boutique hotels and ultra-luxury estates across India with refined
          curation, real-time booking access, validated guest critiques, and
          tailored local guest plans.

        </p>

        {/* CTA */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <a
            href="#hotels"
            className="group inline-flex items-center gap-3 rounded-xl bg-brand-gold px-8 py-4 text-base font-semibold text-brand-charcoal transition-all duration-300 hover:bg-brand-gold-light hover:shadow-2xl hover:shadow-brand-gold/20"
          >
            Curated Showcase

            <FaArrowRight className="transition group-hover:translate-x-1" />
          </a>

          <a
            href="#hotels"
            className="rounded-xl border border-brand-gold/25 bg-white/5 px-8 py-4 font-semibold text-brand-cream-dark backdrop-blur transition hover:bg-white/10 hover:border-brand-gold-light"
          >

            Learn More

          </a>

        </div>

        {/* Stats */}

        <div className="mt-24 grid w-full max-w-5xl gap-6 rounded-2xl border border-brand-gold/15 bg-brand-emerald-dark/20 p-8 backdrop-blur md:grid-cols-3">

          <div>

            <h2 className="font-serif text-4xl font-bold text-brand-gold">

              500+

            </h2>

            <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-brand-cream/60">

              Bespoke Hotels

            </p>

          </div>

          <div>

            <div className="flex justify-center gap-2">

              <FaStar className="text-brand-gold" />

              <span className="font-serif text-4xl font-bold text-brand-gold">

                4.9

              </span>

            </div>

            <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-brand-cream/60">

              Average Rating

            </p>

          </div>

          <div>

            <div className="flex justify-center gap-2">

              <FaLocationDot className="text-brand-gold" />

              <span className="font-serif text-4xl font-bold text-brand-gold">

                12+

              </span>

            </div>

            <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-brand-cream/60">

              Prime Locations

            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;