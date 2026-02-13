import mongoose from "mongoose";
const {Schema} = mongoose;

const jobSchema = Schema({

     userId:{
          type: mongoose.Schema.Types.ObjectId,
          ref:"User",
          required :true

     },

     company:{
          type: String,
          required: true
     },

     jobTitle:{
          type:String,
          required:true
     },

     status:{
          type:String,
          enum:["Applied","Interview","Offer","Rejected"],
          default:"Applied"
     },

     date:{
          type: Date,
          default: Date.now()
     },

     location:{
          type:String,
     },

     salary:{
          type:String,
          default: "Not Mentioned"
     },

     notes:{
          type:String 
     }




})


export default jobSchema;
