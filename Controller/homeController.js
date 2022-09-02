const userModel = require("../Models/userModel")
const csv = require('csvtojson')

const dashboard = async (req,res)=>{
    res.render('home')
}
const users = async (req,res)=>{
    const userData = await userModel.find({});
    res.render('usersTable',{data:userData})
}

///insert user
const insert_from_data = async (req,res)=>{
    var {name,fatherName,motherName,email,contact,address,gender,city,state,pincode} = req.body
    const newUser = await userModel.create({
        name,fatherName,motherName,email,contact,address,gender,city,state,pincode
    })

    res.redirect('/')
}

////search user

const filterUser = async (req,res)=>{
    const keyword = req.query.search ? {
        $or:[
            {name:{$regex:req.query.search,$options:"i"}},
        ]
    }: {}
try {
    const users = await userModel.find(keyword)
    if (users.length ===0) {
        res.redirect('/')
    } else {
        res.render('usersTable',{data:users})
    }
   
} catch (error) {
    console.log(error.message);
}
}

////insert cvs file

const insert_csv = async (req,res)=>{
    console.log(req.file.path);
    csv()
    .fromFile(req.file.path)
    .then((jsonObj)=>{
        userModel.insertMany(jsonObj).then(()=>{
            res.redirect('/usersTable')
        })
     
    })
}

module.exports={
    dashboard,
    users,
    insert_from_data,
    filterUser,
    insert_csv
}