var express = require("express");
var router = express.Router();
const DButils = require("./utils/DButils");
const games_utils = require("./utils/games_utils");
const users_utils= require("./utils/users_utils");
const players_utils= require("./utils/players_utils");
const teams_utils = require("./utils/teams_utils");

router.use(async function (req, res, next) {
  if(!req.session){
    throw { status: 404, message:"Must Be Logged in" };

  }
  if (req.session && req.session.user_id) {
    DButils.execQuery("SELECT UserID FROM users")
      .then((users) => {
        if (users.find((x) => x.user_id === req.session.user_id)) {
          req.user_id = req.session.user_id;
        }
        next();
      })
      .catch((error) => next());
  } else {
    res.sendStatus(401);
    next();

  }
});




  router.get("/favoriteplayer", async (req, res, next) => {
    try {
      const user_id = req.session.user_id;
      let favorite_players = {};
      const player_ids = await users_utils.getFavoritePlayers(user_id);
      let player_ids_array = [];
      player_ids.map((element) => player_ids_array.push(element.playerID)); //extracting the players ids into array
      const results = await players_utils.getPlayersInfo(player_ids_array);
      res.status(200).send(results);
    } catch (error) {
      next(error);
          }});



  router.put("/favoritePlayer/:playerId", async (req, res, next) => {
    try {
      const player_id = req.params.playerId;
      if(!await players_utils.getPlayerDetail(player_id)){
        throw { status: 406, message:"The player does not exists in the system" };
      }
      const CheckIfExsits=await users_utils.AddingFavoriteChecker(req.session.user_id,"FavoritePlayers","playerID",req.params.playerId)
      
      if(CheckIfExsits){
        throw { status: 406, message:"The player is  already in your favorites" };
      }
     
      await users_utils.markPlayerAsFavorite(req.session.user_id, player_id);
      res.status(201).send("The player was successfully added to favorites");
    } catch (error) {
      next(error);
    }
  });

  router.delete("/favoritePlayer/:playerId", async (req, res, next) => {
    try {
      const player_id = parseInt(req.params.playerId);
      const cookie= parseInt(req.session.user_id);
      await users_utils.removePlayerFromFavorites(cookie, player_id);
      res.status(201).send("The player was  successfully removed from  favorites");
    } catch (error) {
      next(error);
    }
  });

  router.get("/favoriteteam", async (req, res, next) => {
    try {
      const user_id = req.session.user_id;
      //let favorite_teams = {};
      const team_ids = await users_utils.getFavoriteTeams(user_id);
      let team_ids_array = [];
      team_ids.map((element) => team_ids_array.push(element.teamID)); //extracting the players ids into array
      const results = await teams_utils.getTeam(team_ids_array);
      res.status(200).send(results);
    } catch (error) {
      next(error);
          }});
      
  router.put("/favoriteteam/:teamId", async (req, res, next) => {
    try {
      const team_id = req.params.teamId;
      if(!await teams_utils.getTeamDetailsbyID(team_id)){
        throw { status: 406, message:"The team does not exists in the system" };
      }
      const CheckIfExsits=await users_utils.AddingFavoriteChecker(req.session.user_id,"FavoriteTeam","teamID",req.params.teamId)
      if(CheckIfExsits){
        throw { status: 406, message:"The team is  already in your favorites" };
      }
     

      await users_utils.markTeamAsFavorite(req.session.user_id, team_id);
      res.status(201).send("The team was successfully saved in favorite");
    } catch (error) {
      next(error);
    }
  });

  router.delete("/favoriteteam/:teamId", async (req, res, next) => {
    try {
      const team_id = parseInt(req.params.teamId);
      const cookie= parseInt(req.session.user_id);
      await users_utils.removeTeamFromFavorites(cookie, team_id);
      res.status(201).send("The team was  successfully removed from  favorites");
    } catch (error) {
      next(error);
    }
  });


  router.get("/favoritematches", async (req, res, next) => {
    try {
      const user_id = req.session.user_id;
      const game_ids = await users_utils.getFavoriteMatches(user_id);
      let team_ids_array = [];
      game_ids.map((element) => team_ids_array.push(element.gameID)); //extracting the players ids into array
      const results = await games_utils.getFavoriteMatchesDetails(team_ids_array);
      res.status(200).send(results);
    } catch (error) {
      next(error);
          }});
      

  router.put("/favoritematches/:gameId", async (req, res, next) => {
    try {
      const game = req.params.gameId;
      if(!await games_utils.getGameDetial(game)){
        throw { status: 406, message:"The game does not exists in the system" };
      }
      const CheckIfExsits=await users_utils.AddingFavoriteChecker(req.session.user_id,"FavoriteGames","gameID",req.params.gameId)
      if(CheckIfExsits){
        throw { status: 406, message:"The team is  already in your favorites" };
      }
      await users_utils.markGameAsFavorite(req.session.user_id, game);
      res.status(201).send("The game was successfully saved in favorite");
    } catch (error) {
      next(error);
    }
  });


  router.delete("/favoritematches/:gameId", async (req, res, next) => {
    try {
      const game = req.params.gameId;
      await users_utils.removeGameFromFavorites(req.session.user_id, game);
      res.status(201).send("The game was successfully removed from favorites");
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;
