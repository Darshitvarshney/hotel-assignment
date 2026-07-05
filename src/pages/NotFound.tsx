import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 text-center font-sans">
        <span className="font-serif text-8xl font-normal text-brand-gold">404</span>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-brand-charcoal">
          Location Not Discovered
        </h1>
        <p className="mt-2 text-brand-charcoal-light/70 max-w-md">
          The bespoke experience you are seeking could not be found. It may have been moved, renamed, or is temporarily archived.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-xl bg-brand-emerald px-6 py-3.5 font-semibold text-brand-gold hover:text-brand-cream border border-brand-gold/20 hover:border-brand-gold transition-all duration-300 shadow-md shadow-brand-emerald/10"
        >
          Return to Showcase
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;