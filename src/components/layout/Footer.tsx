const Footer = () => {
  return (
    <footer className="border-t border-brand-gold/20 py-8 bg-brand-charcoal text-brand-gold-light/60">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm font-medium tracking-wide">
        © {new Date().getFullYear()} Elysian Stays. Designed for Discerning Travelers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;