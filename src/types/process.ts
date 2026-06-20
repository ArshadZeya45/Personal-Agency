import { LucideIcon } from "lucide-react";


export interface ProcessStage {
    title : string;
    icon : LucideIcon;
    active? : boolean
}

export interface ProcessLog {
    title : string;
    time : string;
    color : "cyan" | "green" | "purple"
    isBlur? : boolean
}

export interface ProcessPipeline {
    title : string;
    subtitle : string;
    icon : LucideIcon;
    stages : ProcessStage[];
    logs: ProcessLog[];
}

export interface ProcessStep{
    id : number;
    title : string;
    description : string
}