export interface Class {
    name: string;
    id: number;
}

export interface Hours {
    [hour: string]: Class[];
}

export interface Schedule {
    day:Array<string>;
}

