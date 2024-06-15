import { Detail } from "./detail";

export class Shoe {
    id: number = 0;
    shoesName: string = '';
    imageTop: string = '';
    imageLeft: string = '';
    imageRight: string = '';
    imageBottom: string = '';
    quantity: number = 0;
    supplier: string = '';
    importDate: Date = new Date;
    brand: string = '';
    category: string = '';
    shoeDetails: Detail[] = [];
}
