"use client";

import { Faq } from "@/types/faq";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Props = {
  faq: Faq;
};
const FaqItem = ({ faq }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${open ? "border-cyan/50 bg-cyan/5" : "border-white/10 bg-card"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left cursor-pointer"
      >
        <h3 className="text-base font-semibold text-text">{faq.question}</h3>
        <ChevronDown
          className={`text-cyan transition duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-t border-white/5 px-6 py-5">
          <p className="leading-8 text-muted">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};
export default FaqItem;
