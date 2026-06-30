import { services } from "@/data/admin-services";
import Banner from "@/features/service-detail/hero/Banner";
import Overview from "@/features/service-detail/overview/Overview";
import Solutions from "@/features/service-detail/solutions/Solutions";
import Stats from "@/features/service-detail/stats/Stats";
import Technologies from "@/features/service-detail/technologies/Technologies";

import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;

  console.log("slug =>", slug);
  const service = services[slug as keyof typeof services];
  console.log(service);
  if (!service) {
    notFound();
  }

  return (
    <main>
      <Banner hero={service.hero} />
      <Stats stats={service.stats} />
      <Overview overview={service.overview} />
      <Solutions solutions={service.solutions} />
      <Technologies technologies={service.technologies} />
    </main>
  );
};

export default Page;
