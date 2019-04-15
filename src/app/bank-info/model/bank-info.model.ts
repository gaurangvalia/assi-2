/** Bank info is a class base on Bank Server */
export class BankInfo {
    /** Bank name of bank info */
    public bankName: string;
    /** Base currency of bank info */
    public baseCurrency: string;
    /** Amount  of bank info */
    public amount: number;
    /** Target currency of bank info */
    public targetCurrency:string;
    /** Rate of target currency of bank info */
    public rateOfTargetCurrency:string;
    /** Total amount of bank info */
    public totalAmount:string;
}

/** Convert data  is a type of converted price */
export class convertData{
    public price:string;
} 
