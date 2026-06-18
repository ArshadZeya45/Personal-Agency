interface CardGridProps {
  children: React.ReactNode;
}

const CardGrid = ({ children }: CardGridProps) => {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {children}
    </div>
  );
};
export default CardGrid;
