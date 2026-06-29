export interface PipelineStage {
  title: string;

  active: boolean;

  icon: unknown;
}

export interface PipelineLog {
  title: string;

  time: string;

  color: string;
}

export interface Pipeline {
  title: string;

  subtitle: string;

  icon: unknown;

  stages: PipelineStage[];

  logs: PipelineLog[];
}

export interface ProcessStep {
  id: number;

  title: string;

  description: string;
}

export interface Process {
  badge: string;

  title: string;

  highlightedText: string;

  description: string;

  pipeline?: Pipeline;

  steps?: ProcessStep[];
}