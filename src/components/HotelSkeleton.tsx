const HotelSkeleton = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-brand-gold/15 bg-brand-cream">

      <div className="h-72 bg-brand-gold/15" />

      <div className="space-y-4 p-6">

        <div className="h-6 w-2/3 rounded bg-brand-gold/15" />

        <div className="h-4 w-1/3 rounded bg-brand-gold/10" />

        <div className="space-y-2">

          <div className="h-4 rounded bg-brand-gold/10" />

          <div className="h-4 rounded bg-brand-gold/10" />

          <div className="h-4 w-4/5 rounded bg-brand-gold/10" />

        </div>

        <div className="mt-6 h-12 rounded-xl bg-brand-gold/15" />

      </div>

    </div>
  );
};

export default HotelSkeleton;