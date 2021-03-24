const User = require("../../models/users")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
module.exports = {
  Mutation: {
    async register(_, {registerInput : {userName, email, password, confirmPassowrd}}, context, info){
      password = await bcrypt.hash(password,10)
      const newUser = new User({
        userName,
        email,
        password,
        createdAt: new Date().toISOString
      })

      const res = await newUser.save()

      const token = jwt.sign({
        id: res.id,
        email: res.email,
        userName: res.userName
      })
    }
  }
}