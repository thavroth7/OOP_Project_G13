import { Aeroplan } from "./aeroplan/Aeroplan"
export class Airline{
    private name: string
    private aeroplan: Aeroplan[]=[]

    addAeroplan(aeroplan: Aeroplan) {
        return this.aeroplan.push(aeroplan)
    }
}