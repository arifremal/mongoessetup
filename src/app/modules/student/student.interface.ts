import { Schema, model, connect } from 'mongoose';



export type Gurdian={
 
        father:string;
        fatherocc:string;
        fatherphone:string;
        mother:string;
        motherocc:string;
        motherphone:string;
  

}

export type UserName ={
   
        firstname:string;
        middlename:string;
        lastname:string,

    
}

export type LocalGurdian={
    name:string;
    occu:string;
    contact:string;
    address:string;
}

export type Student = {
    id:string,
    name:UserName;
    gender: "male" | "female";
    dob?:string,

    email: string;
    ContactNo:string,
    emercontact:string,
    blodGroup?:"A+"| "A-" | "B" | "B-";
    presemtAdd:string,
    perAddd:string;
    gurdian:Gurdian;
    localGurdian: LocalGurdian;
    pimage?:string;
    isActive: 'active'| 'blocked'
  
  }
  
   