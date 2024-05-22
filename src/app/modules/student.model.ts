import { Schema, model, connect } from 'mongoose';
import { Gurdian, LocalGurdian, Student, UserName } from './student/student.interface';

const userNameSchema = new Schema<UserName>({
    firstname:{
        type:String,
        required:true,
    },
    
    
    middlename:{
        type:String
    },
    lastname:{
        type:String,required:true
    }

})
const gurdianSchema = new Schema<Gurdian>(
    {
        father:{
            type:String,
            required:true,
        },
        fatherocc:{
            type:String,
            required:true,
        },
        fatherphone:{
            type:String,
            required:true,
        },
        mother:{
            type:String,
            required:true,
        },
        motherocc:{
            type:String,
            required:true,
        },
        motherphone:{
            type:String,
            required:true,
        },
    
    
    })
const localGurdianSchema = new Schema<LocalGurdian>(
    
    {
        name:{
            type:String,
            required:true
        },
        occu:{
            type:String,
            required:true
        },
        contact:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        
        }
)



const studentSchema = new Schema<Student>({

id:{ type:String},
name:userNameSchema,

gender:["male","female"],
dob:{type:String},
email:{type:String,required:true},
ContactNo:{type:String,required:true},
emercontact:{type:String,required:true},
blodGroup:["A+", "A-" , "B" , "B-"],
presemtAdd:{type:String,required:true},
perAddd:{type:String,required:true},
gurdian:gurdianSchema,
localGurdian:localGurdianSchema,
pimage:{type:String},
isActive:['active','blocked']


});


const Student =model<Student>('Student',studentSchemat);


