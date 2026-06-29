import OverviewLeft from "./OverviewLeft";
import OverviewRight from "./OverviewRight";

type Props = {
  overview: any;
};

const Overview = ({ overview }: Props) => {
  return (
    <section className="py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <OverviewLeft overview={overview} />
        <OverviewRight overview={overview} />
      </div>
    </section>
  );
};

export default Overview;
