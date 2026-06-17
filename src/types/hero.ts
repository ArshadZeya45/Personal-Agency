export interface HeroStat {
    label : string;
    value : number
}

export interface HeroData {
    badge : String;
    title : String;
    description : string;
    stats : HeroStat[]
}