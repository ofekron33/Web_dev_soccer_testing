var express = require("express");
var router = express.Router();
const coach_utils = require("./utils/coaches_utils");



router.get("/coachDetailById/:coachId", async (req, res, next) => {
  try {
    const coach = await coach_utils.getCoachById(req.params.coachId);
    res.send(coach);
  } catch (error) {
    next(error);
  }
});

router.get("/coachDetailByName/:coachName", async (req, res, next) => {
  try {
    const coach = await coach_utils.SearchCoachByname(req.params.coachName);
    res.send(coach);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
