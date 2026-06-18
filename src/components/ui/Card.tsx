interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-card transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;
