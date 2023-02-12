export default class User {
    constructor (public FirstName: string,public LastName:string,public  birthday:Date,
    public TZ: string, public Gender: number,public HMO: number, public Parent?: number,public Id?:number){};
}