import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="
      h-14
      w-full
      rounded-xl
      bg-gradient-to-r
      from-cyan
      to-blue
      font-semibold
      text-white
      transition-all
      hover:opacity-90
      flex items-center gap-2
      justify-center
      cursor-pointer
    "
    >
      {children}
    </button>
  );
};

export default Button;
