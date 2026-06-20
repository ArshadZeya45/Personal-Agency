import CardGrid from "@/components/shared/CardGrid";
import ProcessPipelineCard from "@/components/shared/ProcessPipelineCard";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import SectionHeader from "@/components/shared/SectionHeader";
import { webPipeline, webProcessSteps } from "@/data/process";

const ProcessSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-10 lg:py-18">
      <SectionHeader
        badge="Our Methodology"
        title="How We Turn Ideas Into"
        highlightedText="Reality"
        description="A structured, risk-free delivery pipeline that ensures success every single time."
      />
      <div className="grid lg:grid-cols-2 gap-20 mt-16">
        <ProcessPipelineCard data={webPipeline} />
        <ProcessTimeline steps={webProcessSteps} />
      </div>
    </section>
  );
};
export default ProcessSection;
