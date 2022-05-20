const { exists } = require('../models/users.models.js');
const Users  = require ('../models/users.models.js')
const ValidateUser = require('../validation/Users.validation')
const AddUser = async (req,res)=>{
    const {errors,isValid} = ValidateUser(req.body)
try{
    if (!isValid) {
        res.status(404).json(errors)
    } else {
        await Users.findOne({Email:req.body.Email}).then(async(exists)=>{
            if(exists){
                errors.Email="User Exist";
                res.status(404).json(errors)
            }
        })
        await Users.create(req.body)
        res.status(201).json({message:'User added with succes'});
    }
 
}catch(error){
    console.log(error.message)
}
};

const FindAllUsers = async (req,res) =>{
   try {
       const data =await Users.find()
       res.status(201).json(data)
   } catch (error) {
       console.log(error.message)
   }
}

const FindSingleUser = async (req,res) =>{
    try {
        const data =await Users.findOne({_id : req.params.id})
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }
 }


const UpdateUser = async (req,res) =>{
    const {errors,isValid} = ValidateUser(req.body)
    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
        const data =await Users.findOneAndUpdate(
            {_id : req.params.id},
            req.body,
            {new:true}
            )
        res.status(201).json(data)}
    } catch (error) {
        console.log(error.message)
    }
 }
  

 const DeleteUser = async (req, res) => {
    try {
      await Users.deleteOne({ _id: req.params.id });
      res.status(201).json({ message: "User deleted with success" });
    } catch (error) {
      console.log(error.message);
    }
  };
module.exports={
    AddUser,
    FindAllUsers,
    FindSingleUser,
    UpdateUser,
    DeleteUser
}