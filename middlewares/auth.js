const { verifyToken } = require("../helpers/jwt")
const {User, Task} = require(`../models/index`)

function authentication (req, res, next){
    try {
        let decoded = verifyToken(req.headers.access_token)
        User.findByPk(decoded.id)
            .then(data=>{
                if(!data){
                    throw {name:"Authentication Failed!"}
                } else {
                    req.currentUser = {id:data.id, name:data.name, email:data.email}
                    next()
                }
            })
            .catch(err=>{
                next(err)
            })
    } catch (error) {
        throw {name:"Authentication Failed!"}
    }
}

function authorization (req, res, next){
    // console.log(req.params.id);
    Task.findByPk(req.params.id)
        .then(data=>{

            if(!data){
                throw {name: "Task not found"}
            } else {
                if(req.currentUser.id !== data.UserId){
                    throw {name:"Authorization Failed!"}
                } else {
                    next()
                }
            }
        })
        .catch(err=>{
            next(err)
        })
}

module.exports = {authentication, authorization}