var express = require("express");
var router = express.Router();
const DButils = require("./utils/DButils");
const games_utils = require("./utils/games_utils");
const users_utils = require("./utils/users_utils");
const teams_utils = require("./utils/teams_utils");


router.use(async function (req, res, next) {
    if (req.session && req.session.user_id) {
        DButils.execQuery("SELECT UserID FROM Admins")
            .then((users) => {
                if (users.find((x) => x.UserID === req.session.user_id)) {
                    req.user_id = req.session.user_id;
                    next();
                    
                } else {
                    res.sendStatus(401);
                }

            }).catch((err) => next(err));

    } else {
        res.sendStatus(401);
    }
});


router.post("/", async (req, res, next) => {
    try {

        const date = req.body.gameDate
        const games = await DButils.execQuery(
            `SELECT gameDate,homeTeam,awayTeam FROM dbo.Games 
      WHERE homeTeam = ${req.body.homeTeam} AND awayTeam=${req.body.awayTeam} AND gameDate='${date}';`
        );
        if (games.length != 0)
            throw { status: 409, message: "Game already in system" };

        const hometeam = await teams_utils.getTeamDetailsbyID(req.body.homeTeam);
        const awayteam = await teams_utils.getTeamDetailsbyID(req.body.awayTeam);
        if (!hometeam || (!awayteam))
            throw { status: 409, message: "One of the ids are not in api" };

        await DButils.execQuery(
            `INSERT INTO dbo.Games (gameDate,homeTeam,awayTeam,stage,stadium,referee) VALUES (
            '${req.body.gameDate}' , ${req.body.homeTeam}, ${req.body.awayTeam},${req.body.stageID},'${req.body.stadium}','${req.body.referee}')`
        );
        res.status(201).send("Game created");
    } catch (error) {
        next(error);
    }
});

router.put("/:gameId", async (req, res, next) => {
    try {
        const game = await games_utils.getGameDetial(req.params.gameId);
        if (!game)
            throw { status: 409, message: "There is no game" };
        var gamedate=game.gameDate;
        var today = new Date();
        if (gamedate > today)
            throw { status: 409, message: "The game didn't happen yet." };

        const game_details = await games_utils.updateGameDetial(req.params.gameId, req.body.homeScore, req.body.awayScore);
        res.send(game_details);
    } catch (error) {
        next(error);
    }
});


router.post("/:gameId/events/", async (req, res, next) => {
    try {
        // todo: check if game exist 
        const game_details = await games_utils.getGameDetial(req.params.gameId);
        if (!game_details)
            throw { status: 409, message: "There is no game" };

        var gamedate = game.gameDate;
        var today = new Date();
        if (gamedate > today)
            throw { status: 409, message: "The game didn't happen yet." };


        await games_utils.AddEvent(req.params.gameId, req.body.eventType, req.body.gameDate, req.body.gameTime, req.body.inGameMinute, req.body.eventDescription);
        res.status(201).send("Game Event created");
    } catch (error) {
        next(error);
    }
});

module.exports = router;
