var express = require("express");
var router = express.Router();
const DButils = require("./utils/DButils");
const games_utils = require("./utils/games_utils");



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


router.get("/:gameId/events/", async (req, res, next) => {
  try {
    const game_events= await games_utils.getEvents(req.params.gameId);
    res.status(200).send(game_events);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
