import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  icon?: ReactNode;
};

const Badge = ({ icon, children }: BadgeProps) => {
  return (
    <div
      className="
    
      
      rounded-full
      border
      border-blue-500/40
      bg-blue-500/10
      px-5
      py-2
      lg:text-xs
      text-[10px]
      font-medium
      uppercase
      tracking-[0.18em]
      text-blue-400
      backdrop-blur-sm
      flex
      items-center gap-2
      
    "
    >
      {icon}
      <span>{children}</span>
    </div>
  );
};

export default Badge;
