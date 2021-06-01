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


router.get("/coachDetailByName/:coach_name/filterbyTeam/:teamName", async (req, res, next) => {
  try {
    const coachess = await coach_utils.SearchCoachByname(req.params.coach_name);
    const filterd_player_details = await coach_utils.filterCoachbyTeamName(coachess, req.params.teamName);
    res.send(filterd_player_details);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
