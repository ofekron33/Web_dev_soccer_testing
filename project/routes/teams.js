var express = require("express");
var router = express.Router();
const DButils = require("./utils/DButils");
const players_utils = require("./utils/players_utils");
const teams_utils = require("./utils/teams_utils");
const games_utils = require("./utils/games_utils");

router.get("/teamFullDetails/:teamId", async (req, res, next) => {
  // let team_details = [];
  try {
    const players_details = await players_utils.getPlayersByTeam(
      req.params.teamId
    );
    const team_stats = await teams_utils.getTeamDetailsbyID(
      req.params.teamId
    );
    const game_stats = await games_utils.returnGamesByTeamID(
      req.params.teamId
      );

    team_stats.players = players_details;
    team_stats.games = game_stats;
    // team_details.push(team_stats,players_details);
    res.send(team_stats);
  } catch (error) {
    next(error);
  }
});

router.get("/teamByName/:teamName", async (req, res, next) => {
  let team_details = [];
  try {
    const teams_stats = await teams_utils.getTeamDetailsbyName(
      req.params.teamName
    );
    // we should keep implementing team page.....

    res.send(teams_stats);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
