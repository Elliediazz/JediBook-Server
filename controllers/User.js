const User = require("../models/User");
const bcrypt = require('bcrypt')









// //Signup function
// async function signUp(req, res) {
//     const body = req.body;

//     if (!(body.email && body.password)) {
//         return res.status(400).send({error: "Incorrect Format"})
//     }

//     //Creating a new User & encrypting password 
//     const user = new User(body);
//     const salt = await bcrypt.genSalt(10);

//     //setting the user to a Hashed Password
//     user.password =  await bcrypt.hash(user.password, salt);
//     user.save().then((doc) => res.status(201).send(doc))
// }

// //Login Function 
// async function logIn (req, res) {
//     const body = req.body;
//     const user = await User.findOne({email: body.email});
    
//     if (user) {
//         const validPassword = await bcrypt.compare(body.password, user.password)

//         if(validPassword) {
//             res.status(200).json({ message: "Valid password" });
//         } else {
//             res.status(400).json({ error: "Invalid Password" });
//         }
//     } else {
//         res.status(401).json({ error: "User does not exist" });
//     }
// }

// module.exports = {
//     signUp,
//     logIn
// }