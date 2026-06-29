import { services } from "@/data/admin-services";
import Banner from "@/features/service-detail/hero/Banner";

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
    <main className="py-10 lg:py-18">
      <Banner hero={service.hero} />
    </main>
  );
};

export default Page;
