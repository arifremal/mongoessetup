import { Schema, model, connect } from 'mongoose';



export type Gurdian={
    gurdian:{
        father:string;
        fatherocc:string;
        fatherphone:string;
        mother:string;
        motherocc:string;
        motherphone:string;
    }

}

export type Student = {
    id:string,
    name:{
        firstname:string;
        middlename:string;
        lastname:string,

    },
    gender: "male" | "female";
    dob:string,

    email: string;
    ContactNo:string,
    emercontact:string,
    blodGroup?:"A+"| "A-" | "B" | "B-";
    presemtAdd:string,
    perAddd:string;
    gurdian:Gurdian;
  
  }
  