import bcrypt from "bcryptjs";
import User from "../../modals/user.modal.js";
import jwt from "jsonwebtoken"

class authController {
  userRegister = async (req, res, next) => {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 10);

    try {
      const existingUser = await User.findOne({ email: user.email });
      if (!existingUser) {
        const newUser = await User.create(user);
        res.status(201).json({
          status: "success",
          message: "registered successfully",
          data: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
          },
        });
      } else {
        res.status(409).json({
          status: "fail",
          message: "User with this email already exists",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        message: "Registration failed",
        error: error.message,
      });
    }
  };

  login = async (req, res, next) => {
    let { email, password } = req.body;

    if (!email || !password) {
      res.status(401).json({
        status: "Authentication Failed",
        message: "Email and password required",
      });
    }
    try {
      const user =  await User.findOne({ email: email });
      if (!user) {
        res.status(401).json({
          status: "failed",
          message: "user not found",
        });
      }

      const isMatch = bcrypt.compareSync(password, user.password);

      if (!isMatch) {
        res.status(400).json({
          status: "AUTHENTICATION FAILED",
          message: " password is incorrect",
        });
      }

      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.jwtSecret,
        {
          expiresIn: "1h",
        }
      );

      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 1000, // 1 hour
      });

      res.status(200).json({
        status: "success",
        message: "Login successful",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        message: "Login failed",
        error: error.message,
      });
    }
  };
}

let authCtrl = new authController();
export default authCtrl;
