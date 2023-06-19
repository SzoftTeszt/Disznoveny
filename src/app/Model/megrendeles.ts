export class Megrendeles {
    key?:string;
    nev?:string;
    cim?:string;
    datum?:string;
    statusz?:boolean; //Teljesült vagy sem!
    rendeles?:{
        novenyKey:string;
        db:number;
    }[]
}
