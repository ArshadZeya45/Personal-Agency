interface CardGridProps {
  children: React.ReactNode;
  className?: string;
}

const CardGrid = ({ children, className }: CardGridProps) => {
  return (
    <div className={`mt-16 grid gap-6 md:grid-cols-2  ${className}`}>
      {children}
    </div>
  );
};
export default CardGrid;
