import { IconType } from "react-icons";

type Props = {
  title: string;
  icon: IconType;
};

const TechnologyCard = ({ title, icon: Icon }: Props) => {
  return (
    <div
      className="
      group
      rounded-[24px]
      border
      border-blue-500/20
      bg-[#111620]
      px-4
      py-7
      flex
      flex-col
      items-center
      justify-center
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-blue-500/40
      "
    >
      <Icon
        size={30}
        className="
        text-slate-400
        transition-all
        duration-300
        group-hover:text-cyan-400
        "
      />

      <h3
        className="
        mt-3
        text-sm
        font-semibold
        text-white
        text-center
        "
      >
        {title}
      </h3>
    </div>
  );
};

export default TechnologyCard;
