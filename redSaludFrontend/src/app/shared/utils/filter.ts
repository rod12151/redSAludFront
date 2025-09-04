import { Dependencia } from "../models/dependencia";


export const fitrarDependeciaPorId = (dependecias: Dependencia[], id: number): Dependencia []=> {
    return dependecias.filter((dependecia) => dependecia.id === id);
}
