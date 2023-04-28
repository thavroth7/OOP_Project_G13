export enum FareBasis{
    ECONOMY_CLASSIC,
    ECONOMY_FLEX,
    BUSINESS_CLASS
}
export class Seat{
    private seatId: string
    private price: number
    private fareBasis: FareBasis
    constructor(seatId: string, price:number, fareBasis: FareBasis)
    {}
}