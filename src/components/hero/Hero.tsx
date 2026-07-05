import { FaArrowRight, FaHotel } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative flex min-h-[45vh] items-center overflow-hidden bg-brand-charcoal py-16 md:py-24">

      {/* Animated Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-emerald-light/20 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-brand-gold/10 blur-[160px]" />

      </div>

      {/* Grid Pattern */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dfcdab03_1px,transparent_1px),linear-gradient(to_bottom,#dfcdab03_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">

        {/* Asymmetrical 2-Column Grid */}
        <div className="grid gap-12 lg:grid-cols-12 items-center">

          {/* Left Column: Heading and Details */}
          <div className="text-left lg:col-span-7 space-y-6">

            <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/15 bg-brand-emerald-dark/25 px-4 py-1.5 backdrop-blur-sm">
              <FaHotel className="text-brand-gold text-xs" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold-light/95">
                India's Premium Hotel Search Engine
              </span>
            </div>

            <h1 className="font-serif text-4xl font-normal leading-tight text-brand-cream md:text-6xl">
              Find My Hotel
              <span className="block mt-1.5 font-serif font-semibold italic text-brand-gold">
                Made Simple
              </span>
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-brand-cream/80 font-sans">
              Looking for a stay in Mumbai, Delhi, or Goa? Search over 800+ verified hotels across 18 cities in India. Filter by budget, ratings, and locations to book your next hotel stress-free.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#hotels"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-gold px-6 py-3.5 text-xs font-semibold text-brand-charcoal transition-all duration-300 hover:bg-brand-gold-light hover:shadow-lg hover:shadow-brand-gold/10"
              >
                Start Exploring
                <FaArrowRight className="transition group-hover:translate-x-0.5 text-[11px]" />
              </a>

              <a
                href="#hotels"
                className="rounded-xl border border-brand-gold/20 bg-white/5 px-6 py-3.5 text-xs font-semibold text-brand-cream-dark backdrop-blur-sm transition hover:bg-white/10 hover:border-brand-gold-light"
              >
                Learn How It Works
              </a>
            </div>

          </div>

          {/* Right Column: Floating Stats Board */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-brand-gold/20 bg-brand-emerald-dark/25 p-8 backdrop-blur-sm shadow-xl space-y-6">

              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-brand-gold">
                  Directory Statistics
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">

                <div className="space-y-1">
                  <span className="font-serif text-3xl font-bold text-brand-cream block">
                    800+
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-brand-cream/50 tracking-wider block">
                    Verified Stays
                  </span>
                </div>

                <div className="space-y-1 border-x border-brand-gold/10">
                  <span className="font-serif text-3xl font-bold text-brand-cream block flex items-center justify-center gap-0.5">
                    4.9<span className="text-brand-gold text-lg">★</span>
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-brand-cream/50 tracking-wider block">
                    Average Score
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="font-serif text-3xl font-bold text-brand-cream block">
                    18
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-brand-cream/50 tracking-wider block">
                    Key Cities
                  </span>
                </div>

              </div>

              <div className="pt-2 border-t border-brand-gold/10 text-center">
                <p className="text-[11px] text-brand-cream/60">
                  All listings are updated daily with current tariff data
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;