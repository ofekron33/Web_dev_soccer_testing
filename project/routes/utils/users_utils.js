const DButils = require("./DButils");

async function markPlayerAsFavorite(user_id, player_id) {
  await DButils.execQuery(
    `insert into FavoritePlayers values ('${user_id}',${player_id})`
  );
}

async function removePlayerFromFavorites(user_id, playerID) {
  await DButils.execQuery(
    `DELETE   from FavoritePlayers where UserID=${user_id} and playerID=${playerID}`
  );
}

async function getFavoritePlayers(user_id) {
  const player_ids = await DButils.execQuery(
    `select playerID from FavoritePlayers where UserID='${user_id}'`
  );
  return player_ids;
}

async function isAdmin(user_id) {
  const player_id = await DButils.execQuery(
    `select * from Admins where userID='${user_id}'`
  );
  if (player_id){
    return true;
  }
  else{
    return false
  }
}


exports.markPlayerAsFavorite = markPlayerAsFavorite;
exports.getFavoritePlayers = getFavoritePlayers;
exports.isAdmin = isAdmin;
async function markTeamAsFavorite(user_id, team_id) {
  await DButils.execQuery(
    `insert into FavoriteTeam values ('${user_id}',${team_id})`
  );
}

async function removeTeamFromFavorites(user_id, playerID) {
  await DButils.execQuery(
    `DELETE   from FavoriteTeam where UserID=${user_id} and teamID=${playerID}`
  );
}

async function getFavoriteTeams(user_id) {
  const team_ids = await DButils.execQuery(
    `select teamID from FavoriteTeam  where UserID='${user_id}'`
  );
  return team_ids;
}

async function markGameAsFavorite(user_id,game_id) {
  const game = await DButils.execQuery(
    `insert into FavoriteGames values ('${game_id}',${user_id})`
  );
}
async function removeGameFromFavorites(user_id, game_id) {
  await DButils.execQuery(
    `DELETE   from FavoriteGames where UserID=${user_id} and gameID=${game_id}`
  );
}
async function getFavoriteMatches(user_id) {
  const team_ids = await DButils.execQuery(
    `select gameID from FavoriteGames  where UserID='${user_id}'`
  );
  return team_ids;
}

async function AddingFavoriteChecker(user_id,table_name,key_name,key_value){
  const ans = await DButils.execQuery(
    `select  ${key_name} from ${table_name}  where UserID='${user_id}' and ${key_name}=${key_value}`
  );  
if(ans.length>0){
  return ans
}
}




exports.removePlayerFromFavorites=removePlayerFromFavorites;
exports.markTeamAsFavorite=markTeamAsFavorite;
exports.removeTeamFromFavorites=removeTeamFromFavorites;
exports.getFavoriteTeams=getFavoriteTeams;
exports.markGameAsFavorite=markGameAsFavorite;
exports.removeGameFromFavorites=removeGameFromFavorites;
exports.getFavoriteMatches=getFavoriteMatches;
exports.AddingFavoriteChecker=AddingFavoriteChecker;