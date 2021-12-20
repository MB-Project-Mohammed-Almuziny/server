const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SALT = Number(process.env.SALT);
const SECRET = process.env.SECRETKEY;

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const savedEmail = email.toLowerCase();
    const savedPassword = await bcrypt.hash(password, SALT);

    const newUser = new usersModel({
      name,
      email: savedEmail,
      password: savedPassword,
      role,
    });

    newUser
      .save()
      .then(async (result) => {
        const message = `${process.env.BASE_URL}/user/verify/${newUser._id}`;
        await sendEmail(newUser.email, "Verify Email", message);

        res.status(201).json(result);
      })
      .catch((err) => {
        res.status(400).json({ error: err.message });
      });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { register };
