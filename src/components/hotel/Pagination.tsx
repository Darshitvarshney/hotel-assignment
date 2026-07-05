import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPrevious(): void;
  onNext(): void;
}

const Pagination = ({
  page,
  totalPages,
  onPrevious,
  onNext,
}: PaginationProps) => {
  return (
    <section className="py-16">

      <div className="flex items-center justify-center gap-4 text-brand-emerald">

        <button
          disabled={page === 1}
          onClick={onPrevious}
          className="rounded-xl border border-brand-gold/30 bg-brand-cream p-4 font-semibold text-brand-emerald transition-all duration-300 enabled:hover:bg-brand-cream-dark enabled:hover:border-brand-gold disabled:opacity-30"
        >
          <FaChevronLeft />
        </button>

        <span className="font-serif font-semibold text-brand-charcoal px-4">
          Collection {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={onNext}
          className="rounded-xl border border-brand-gold/30 bg-brand-cream p-4 font-semibold text-brand-emerald transition-all duration-300 enabled:hover:bg-brand-cream-dark enabled:hover:border-brand-gold disabled:opacity-30"
        >
          <FaChevronRight />
        </button>

      </div>

    </section>
  );
};

export default Pagination;