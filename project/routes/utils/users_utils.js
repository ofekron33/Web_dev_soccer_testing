const DButils = require("./DButils");

async function markPlayerAsFavorite(user_id, player_id) {
  await DButils.execQuery(
    `insert into FavoritePlayers values ('${user_id}',${player_id})`
  );
}

async function getFavoritePlayers(user_id) {
  const player_ids = await DButils.execQuery(
    `select player_id from FavoritePlayers where user_id='${user_id}'`
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
