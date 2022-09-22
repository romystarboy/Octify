import mongoose from 'mongoose';

const UsagerSchema = mongoose.Schema({
 username:{
    type:String,
    required:true,
    unique:true
 },
 email:{
    type:String,
    required:true,
    unique:true
 },
 country:{
    type:String,
    default:"Cameroon"
 },
 city:{
    type:String,
  
 },
 password:{
    type:String,
    required:true,
 },
 isAdmin:{
    type:Boolean,
    default:false
 },
 personnel:{
    type:Boolean,
    default:false
 },
},{
    timestamps: true
});


export default mongoose.model('Usager',UsagerSchema );