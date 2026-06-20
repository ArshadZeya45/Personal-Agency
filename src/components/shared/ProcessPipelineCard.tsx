import { ProcessPipeline } from "@/types/process";

type Props = {
  data: ProcessPipeline;
};

const ProcessPipelineCard = ({ data }: Props) => {
  const MainIcon = data.icon;

  return (
    <div className="relative  overflow-hidden rounded-xl border border-cyan/30 bg-card p-4 sm:p-6 h-fit md:wit-fit lg:w-fit w-full">
      {/* Glow Dot */}
      <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-cyan shadow-[0_0_20px_#06b6d4] sm:right-8 sm:top-8" />

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue/20 gradient-to-br from-blue/20 to-cyan/10 sm:h-12 sm:w-12">
          <MainIcon size={18} className="text-cyan sm:size-[20px]" />
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-bold text-text sm:text-lg">
            {data.title}
          </h3>

          <p className="mt-1 text-xs text-muted sm:text-sm">{data.subtitle}</p>
        </div>
      </div>

      {/* Stages */}
      <div className="mt-8 flex items-start justify-between gap-1 sm:gap-2">
        {data.stages.map((stage, index) => {
          const Icon = stage.icon;

          return (
            <div key={stage.title} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border sm:h-12 sm:w-12 ${
                    stage.active
                      ? "border-cyan text-cyan shadow-[0_0_20px_rgba(6,182,212,.4)]"
                      : "border-white/10 text-muted"
                  }`}
                >
                  <Icon size={16} className="sm:size-[20px]" />
                </div>

                <p
                  className={`mt-2 text-[10px] font-semibold sm:mt-4 sm:text-xs ${
                    stage.active ? "text-cyan" : "text-muted"
                  }`}
                >
                  {stage.title}
                </p>

                <div className="mt-2 h-0.5 w-10 bg-white/10 sm:mt-3 sm:w-16">
                  {stage.active && (
                    <div className="h-full w-5 gradient-to-r from-cyan to-purple-500 sm:w-8" />
                  )}
                </div>
              </div>

              {index !== data.stages.length - 1 && (
                <div className="mx-1 h-0.5 flex-1 gradient-to-r from-cyan/70 to-cyan/20 sm:mx-2" />
              )}
            </div>
          );
        })}
      </div>

      {/* Logs */}
      <div className="mt-8 space-y-3">
        {data.logs.map((log) => (
          <div
            key={log.title}
            className={`flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-black/20 px-3 py-3 sm:px-5 sm:py-4 ${log.isBlur && "opacity-50"}`}
          >
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              <div
                className={`h-2 w-2 shrink-0 rounded-full ${
                  log.color === "cyan"
                    ? "bg-cyan shadow-[0_0_10px_#06b6d4]"
                    : log.color === "green"
                      ? "bg-green"
                      : "bg-purple-500"
                }`}
              />

              <span className="truncate text-[11px] text-text sm:text-sm">
                {log.title}
              </span>
            </div>

            <span className="shrink-0 text-[10px] text-muted sm:text-sm">
              {log.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessPipelineCard;
