import { InputHTMLAttributes, forwardRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => {
    return (
      <div>
        <label className="mb-2 block text-sm text-muted">{label}</label>

        <input
          ref={ref}
          {...props}
          className="
          h-14
          w-full
          rounded-xl
          border
          border-white/10
          bg-card
          px-4
          text-text
          outline-none
          transition-all
          focus:border-cyan
        "
        />

        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
