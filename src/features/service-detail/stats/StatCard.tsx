type StatCardProps = {
  value: string;
  label: string;
  isLast?: boolean;
};

const StatCard = ({ value, label, isLast }: StatCardProps) => {
  return (
    <div
      className={`
  relative
  flex
  flex-col
  items-center
  justify-center
  px-6
  py-6
  text-center

  ${!isLast ? "border-b lg:border-b-0 lg:border-r border-blue-500/20" : ""}
`}
    >
      <h3 className="text-2xl lg:text-3xl font-bold text-cyan-400">{value}</h3>

      <p className="mt-3 text-xs lg:text-sm uppercase tracking-wider text-slate-400">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
