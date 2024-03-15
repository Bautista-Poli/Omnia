export interface Class {
    src: string;
    name: string;
    time: number;
    id: number;
}

export interface Hour {
    '8'?: Class[];
    '9'?: Class[];
    '13'?: Class[];
    '18'?: Class[];
    '19'?: Class[];
    '20'?: Class[];
}

export interface Schedule {
    [day: string]: Hour;
}

