import { ProcessStep } from "@/types/process";

type Props = {
  steps: ProcessStep[];
};

const ProcessTimeline = ({ steps }: Props) => {
  return (
    <div className="space-y-3">
      {steps.map((step, index) => (
        <div key={step.id} className="relative flex gap-4">
          {/* Left Number */}
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center shrink-0 justify-center rounded-full border-2 border-blue text-cyan text-xl font-bold">
              {step.id}
            </div>

            {index !== steps.length - 1 && (
              <div className="mt-2 h-full w-px bg-white/10" />
            )}
          </div>

          {/* Content */}
          <div className="pb-5">
            <h3 className="text-xl font-bold text-text">{step.title}</h3>

            <p className="mt-4 leading-8 text-muted text-sm">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessTimeline;
