var express = require("express");
var router = express.Router();
const auth_utilis = require("../routes/utils/auth_utils");
const DButils = require("../routes/utils/DButils");
const bcrypt = require("bcryptjs");

router.post("/Register", async (req, res, next) => {
  try {
    // parameters exists
    // valid parameters
    // username exists
    


    if (!await auth_utilis.isAvilable(req.body.username))
      throw { status: 409, message: "Username taken" };


    //hash the password
    let hash_password = bcrypt.hashSync(
      req.body.password,
      parseInt(process.env.bcrypt_saltRounds)
    );
    req.body.password = hash_password;

    // add the new username
    await auth_utilis.addUser(req.body.username, hash_password ,req.body.fullName);
    res.status(201).send("user created");
  } catch (error) {
    next(error);
  }
});

router.post("/Login", async (req, res, next) => {
  try {
    const user = (await auth_utilis.getUsers(req.body.username))[0];
    console.log(user);

    // check that username exists & the password is correct
    if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
      throw { status: 401, message: "Username or Password incorrect" };
    }

    // Set cookie
    req.session.user_id = user.UserID;

    // return cookie
    res.status(200).send("login succeeded");
  } catch (error) {
    next(error);
  }
});


router.post("/Logout", function (req, res) {
  req.session.reset(); // reset the session info --> send cookie when  req.session == undefined!!
  res.send({ success: true, message: "logout succeeded" });
});

module.exports = router;
