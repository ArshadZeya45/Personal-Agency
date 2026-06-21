import { Testimonial } from "@/types/testimonials";
import { Star, ThumbsUp } from "lucide-react";

type Props = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="w-[360px] h-[340px] ml-6 shrink-0 rounded-3xl border border-white/10 bg-card p-6 flex flex-col bg-card p-6 flex flex-col transition-all duration-300 hover:border-cyan/40">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan to-purple-500 text-base font-bold text-white">
            {testimonial.avatar}
          </div>

          <div>
            <h3 className="font-bold text-text">{testimonial.name}</h3>

            <p className="text-sm text-muted">{testimonial.date}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 rounded-full border border-blue/20 bg-blue/10 px-3 py-1 text-xs text-blue">
          <ThumbsUp size={12} />
          RECOMMENDS
        </div>
      </div>

      {/* Rating */}
      <div className="mt-5 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#f59e0b" className="text-yellow-500" />
        ))}
      </div>

      {/* Review */}
      <p className="mt-5 flex-1 line-clamp-5 leading-8 text-muted">
        {testimonial.review}
      </p>

      {/* Category */}
      <div className="mt-auto pt-6">
        <span
          className={`rounded-full px-4 py-2 text-xs font-semibold ${
            testimonial.categoryColor === "blue"
              ? "bg-blue/10 text-blue"
              : testimonial.categoryColor === "green"
                ? "bg-green/10 text-green"
                : "bg-pink-500/10 text-pink-400"
          }`}
        >
          {testimonial.category}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
