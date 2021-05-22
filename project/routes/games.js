var express = require("express");
var router = express.Router();
const DButils = require("./utils/DButils");
const games_utils = require("./utils/games_utils");

router.post("/", async (req, res, next) => {
  try {
    // parameters exists
    // valid parameters
    // username exists
    const date = req.body.gameDate
    const users = await DButils.execQuery(
      `SELECT gameDate,homeTeam,awayTeam FROM dbo.Games 
      WHERE homeTeam = ${req.body.homeTeam} AND awayTeam=${req.body.awayTeam} AND gameDate='${date}';`
    );
    // const date =   await Date.parse(req.body.homeTeam.gameDate).toISOString().slice(0, 19).replace('T', ' ');
    var t = `SELECT gameDate,homeTeam,awayTeam FROM dbo.Games 
      WHERE homeTeam = ${req.body.homeTeam} AND awayTeam=${req.body.awayTeam} AND gameDate='${date}';`
    if (users.length!=0)
      throw { status: 409, message: "Game already in system" };
    // add the new game
    await DButils.execQuery(
      `INSERT INTO dbo.Games (gameDate,homeTeam,awayTeam) VALUES ('
      "${req.body.gameDate}" ',' ${req.body.homeTeam}',' ${req.body.awayTeam}')`
    );
    res.status(201).send("Game created");
  } catch (error) {
    next(error);
  }
});


/**
 * This path returns the favorites players that were saved by the logged-in user
 */

router.get("/:gameId", async (req, res, next) => {
  try {
    const game_details = await games_utils.getGameDetial(req.params.gameId);
    res.send(game_details);
  } catch (error) {
    next(error);
  }
});


router.put("/:gameId", async (req, res, next) => {
  try {
    const game_details = await games_utils.updateGameDetial(req.params.gameId, req.body.homeScore, req.body.awayScore);
    res.send(game_details);
  } catch (error) {
    next(error);
  }
});


router.get("/:gameId/events/", async (req, res, next) => {
  try {
    const game_events= await games_utils.getEvents(req.params.gameId);
    res.status(200).send(game_events);
  } catch (error) {
    next(error);
  }
});


router.post("/:gameId/events/", async (req, res, next) => {
  try {
    // todo: check if game exist 
    // const game_details = await games_utils.getGameDetial(req.params.gameId);
    await games_utils.AddEvent(req.params.gameId, req.body.eventType, req.body.gameDate, req.body.gameTime, req.body.inGameMinute, req.body.eventDescription);
    res.status(201).send("Game Event created");
  } catch (error) {
    next(error);
  }
});


module.exports = router;
