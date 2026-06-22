import { SelectHTMLAttributes, forwardRef } from "react";

interface Option {
  label: string;
  value: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: Option[];
}

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ label, options, error, ...props }, ref) => {
    return (
      <div>
        <label className="mb-2 block text-sm text-muted">{label}</label>

        <select
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
          focus:border-cyan
        "
        >
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>

        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;
