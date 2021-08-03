const { comparePassword } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt")
// const {User,Task} = require(`../models/index`)

class UserController{

    // static register (req, res, next){
    //     let {name, email, password} = req.body
    //     User.create({name, email, password})
    //         .then(data=>{
    //             res.status(200).json({name:data.name, email:data.email})
    //         })
    //         .catch(err=>{
    //             next(err)
    //         })
    // }

    // static login (req, res, next){
    //     let {email, password} = req.body
    //     User.findOne({where:{email}})
    //         .then(data=>{
    //             if(!data){
    //                 throw {name:"Username/Password Salah"}
    //             } else {
    //                 if(!comparePassword(password, data.password)){
    //                     throw {name:"Username/Password Salah"}
    //                 } else {
    //                     let token = generateToken({id:data.id, name:data.name, email:data.email})
    //                     res.status(201).json({access_token: token})
    //                 }
    //             }
    //         })
    //         .catch(err=>{
    //             next(err)
    //         })
    // }

    // static googleLogin(req, res, next){
    //     const {OAuth2Client} = require('google-auth-library');
    //     const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    //     const {token} = req.body
    //     let payload

    //     client.verifyIdToken({
    //         idToken: token,
    //         audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
    //         // Or, if multiple clients access the backend:
    //         //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    //         ///// CONTUINUYRE HEREEEEE
    //     })
    //         .then(ticket=>{
    //             payload = ticket.getPayload() 
    //             console.log(payload, "ini dari google verivy user controller");
    //             return User.findOne({where:{email:payload.email}});
    //             // res.status(200).json(ticket)
    //         })
    //         .then(user=>{
    //             if(!user){
    //                 return User.create({name: payload.name, email:payload.email, type:"normal", password: process.env.USERPASS}, {returning:true})
    //             } else {
    //                 return user
    //             }
    //         })
    //         .then(user=>{
    //             let token = generateToken({id: user.id, name: user.name, email: user.email, type:user.type})
    //             res.status(200).json({token:token, name:user.name})
    //         })
    //         .catch(err=>{
    //             next(err)
    //         })
    // }
}

module.exports = UserController