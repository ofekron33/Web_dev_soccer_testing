var express = require("express");
var router = express.Router();
const DButils = require("./utils/DButils");
const games_utils = require("./utils/games_utils");
// import Tournament from "round-robin-tournament"


/**
 * This path returns the favorites players that were saved by the logged-in user
 */

router.get("/getDetails/:gameId", async (req, res, next) => {
  try {    
    const game_details = await games_utils.getGameDetial(req.params.gameId);
    if (!game_details)
      throw { status: 406, message: "There is no game with this id" };
    res.send(game_details);
  } catch (error) {
    next(error);
  }
});


router.get("/:gameId/events/", async (req, res, next) => {
  try {
    const game_details = await games_utils.getGameDetial(req.params.gameId);
    if (!game_details)
      throw { status: 406, message: "There is no game with this id" };
    const game_events= await games_utils.getEvents(req.params.gameId);
    res.status(200).send(game_events);
  } catch (error) {
    next(error);
  }
});

router.get("/allGames/", async (req, res, next) => {
  try {
    const games=await games_utils.returnAllGames();
    res.status(200).send(games);
  } catch (error) {
    next(error);
  }
});

router.get("/getClosestGame/", async (req, res, next) => {
    
  try {
    const game = await games_utils.getClosestGame();
    res.status(200).send(game);
  } catch (error) {
    next(error);
  }
});






module.exports = router;
