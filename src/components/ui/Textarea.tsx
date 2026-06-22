import { TextareaHTMLAttributes, forwardRef } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, ...props }, ref) => {
    return (
      <div>
        <label className="mb-2 block text-sm text-muted">{label}</label>

        <textarea
          ref={ref}
          {...props}
          className="
        min-h-[150px]
        w-full
        rounded-xl
        border
        border-white/10
        bg-card
        p-4
        text-text
        outline-none
        resize-none
        focus:border-cyan
      "
        />

        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
