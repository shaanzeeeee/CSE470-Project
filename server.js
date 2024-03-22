const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors module

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const dotenv = require("dotenv");

// Create an instance of Express
const app = express();

dotenv.config();

const port = 3000;
app.use(cors());
app.use(express.json());

// mongodb
const DB = 'mongodb+srv://Nafiul:thikachinafiul@cluster0.xmke6ss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
//mongoose.connect(DB);
mongoose.connect(DB, {
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true
}).then(() => {
  console.log('DB connected');
}).catch((err) => console.log('DB not connected'));
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res) => {
  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      // If email already registered, send an error response
      return res.status(400).json({ error: "Email already registered" });
    }

    // If email is not registered, proceed with user registration
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).send("Successfully Registered");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while registering." });
  }
});

app.post("/login", async (req, res) => {
  try {
    const username = req.body.email;
    const password = req.body.password;

    const foundUser = await User.findOne({ email: username });

    if (foundUser) {
      const result = await bcrypt.compare(password, foundUser.password);
      if (result) {
        res.status(200).send("Login Successful");
      } else {
        res.status(401).json({ error: "Incorrect Password" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while logging in." });
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});