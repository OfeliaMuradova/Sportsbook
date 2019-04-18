export interface Sport{
    id: number;
    priority: number;
    name: string;
    total: number;
    countries : Array<Country>;
}

export interface Country{
    id: number;
    name: string;
    total: number;
    leagues : Array<League>;
}

export interface League{
    id: number;
    name: string;
    total: number;
}

export interface Match{
    id: number;
    startDate: string;
    home: string;
    away: string;
    odds: OddType[];
}

export interface OddType{
    index: string;
    name: string;
    priority: number;
    odds: Odd[];
}

export interface Odd{
    id: string;
    name: string;
    priority: number;
    type: string;
}