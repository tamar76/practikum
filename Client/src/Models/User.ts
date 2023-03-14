export class User {
    constructor(Identity:string="", firstName: string = "", lastName: string = "", dateBirth: Date = null, maleOrFemale: string = "", HMO: string = "", children: number = null, parentId: string = "") {
        this.Identity =Identity;
        this.firstName=firstName;
        this.lastName = lastName;
        this.dateBirth= dateBirth;
        this.maleOrFemale =maleOrFemale;
        this.HMO = HMO;
        this.children= children;
        this.parentId= parentId; 
     }


    Identity: string = "";
    firstName: string = "";
    lastName: string = "";
    dateBirth: Date = null;
    maleOrFemale: string = "";
    HMO: string = "";
    children: number = null;
    parentId: string = "";
}
