const express = require("express");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth")

const router = express.Router();

// POST /api/v1/users/signup
router.get("/", auth, authController.getAllUser);

router.get("/user", auth, authController.getSingleUser);

router.get("/product", auth, authController.createProduct);

router.post("/signup", authController.signup);

module.exports = router;


// const express = require("express");
// const User = require("../models/userModel");
// const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('Welcom To My API!')
  
  

//   })

// router.post("/signup", async (req, res,) => {

//     console.log(req.body)

//     let {firstName, lastName, email, password } = req.body;

//     const checkEmail = await User.findOne({ email });

//     if (checkEmail){
//         return res.json({
//             status: "failed",
//             message: "Email already exist"
//         })
//     }

//     const newUser = { firstName, lastName, email, password };

//     const createUser = await User.create(newUser);

//     res.status(201).json({
//         status: "success",
//         data: {
//           id: createUser._id,
//           firstName: createUser.firstName,
//           lastName: createUser.lastName,
//           email: createUser.email
//         },
//     });
// });

module.exports = router;