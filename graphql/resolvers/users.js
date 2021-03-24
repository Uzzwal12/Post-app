const {UserInputError} = require("apollo-server")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = require("../../config/default.json").SECRET_KEY;
const User = require("../../models/users");
const { validateRegisterInput } = require("../../utils/validations")

module.exports = {
  Mutation: {
    async register(
      _,
      { registerInput: { userName, email, password, confirmPassword } }
    ) {

      const {errors, valid} = validateRegisterInput(userName,email,password,confirmPassword)

      if(!valid) {
        throw new UserInputError('Errors', {errors})
      }
      const user = await User.findOne({
        $or: [
          {
            email,
          },
          {
            userName,
          },
        ],
      });

      if (user) {
        let errors = {};
        if (user.userName === userName) {
          errors.userName = "Username already exists";
        } else {
          errors.email = "Email already exists";
        }
        throw new UserInputError(errors.userName ? errors.userName : errors.email);
      } else {
        const newUser = new User({
          userName,
          email,
          password,
          createdAt: new Date().toISOString(),
        });
        password = await bcrypt.hash(password, 10);

        const res = await newUser.save();
  
        const token = jwt.sign(
          {
            id: res.id,
            email: res.email,
            userName: res.userName,
          },
          SECRET_KEY,
          { expiresIn: "1h" }
        );
  
        return {
          ...res._doc,
          id: res._id,
          token,
        };
      }
    },
  },
};
