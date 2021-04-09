const { UserInputError } = require("apollo-server");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = require("../../config/default.json").SECRET_KEY;
const User = require("../../models/users");
const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../utils/validations");

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      userName: user.userName,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
}

module.exports = {
  Mutation: {
    async login(_, { userName, password }) {
      const { errors, valid } = validateLoginInput(userName, password);

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const user = await User.findOne({ userName });
      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        errors.general = "Please enter correct password";
        throw new UserInputError("Please enter correct password", { errors });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },

    async register(
      _,
      { registerInput: { userName, email, password, confirmPassword } }
    ) {
      const { errors, valid } = validateRegisterInput(
        userName,
        email,
        password,
        confirmPassword
      );

      if (!valid) { 
        throw new UserInputError("Errors", { errors });
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
        throw new UserInputError(
          errors.userName ? errors.userName : errors.email
        );
      } else {
        const newUser = new User({
          userName,
          email,
          password,
          createdAt: new Date().toISOString(),
        });
        password = await bcrypt.hash(password, 10);

        const res = await newUser.save();
        const token = generateToken(newUser);
        
        return {
          ...res._doc,
          id: res._id,
          token,
        };
      }
    },
  },
};
