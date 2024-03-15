import { Address } from "./Address";

export class RegisterCustomer{
    public id?:number;
    public userName?:string;
    public email?:string;
    public password?:string;
    public mobileNo?:string;
    public address?:Address;
    constructor(){
        this.address=new Address();
    }
}