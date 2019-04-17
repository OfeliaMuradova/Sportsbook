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