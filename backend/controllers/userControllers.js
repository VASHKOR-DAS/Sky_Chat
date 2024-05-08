const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(400).send({ message: "Please Enter all the Fields" })
        throw new Error("Please Enter all the Fields");
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400).send({ message: "User already exists" });
        throw new Error("User already exists");
    }

    const user = await User.create({
        name, email, password, pic
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id), //user create hole 1ta token o take generate kore dibo
        });
    } else {
        res.status(400).send({ message: "Failed to Create the User" });
        throw new Error("Failed to Create the User");
    }
});

// const authUser = async(req, res) => { }
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).send({ message: "Invalid Email or Password" });
        throw new Error("Invalid Email or Password");
    }
});

// get by query
const allUsers = asyncHandler(async (req, res) => {
    // for this query: {{URL}}/api/user?search=joya&lastname=das show the result in server console

    //@description     Get or Search all users
    //@route           GET {{URL}}/api/user?search=
    //@access          Public
    const keyword = req.query.search
        ? {
            $or: [
                { name: { $regex: req.query.search, $option: "i" } },
                { email: { $regex: req.query.search, $option: "i" } },
            ],
        }
        : {};

    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
});

module.exports = { registerUser, authUser, allUsers };