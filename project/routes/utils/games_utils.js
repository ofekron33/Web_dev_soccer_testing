const DButils = require("./DButils");


async function getGameDetial(game_id) {
  const game_detiel = await DButils.execQuery(
    `select * from dbo.Games where gameID='${game_id}'`
  );
  return game_detiel;
}

async function updateGameDetial(game_id,homeScore, awayScore) {
  const updated_game = await DButils.execQuery(
  `UPDATE Games
    SET homeScore = ${homeScore} , awayScore = ${awayScore}
    WHERE gameID = ${game_id};`
  );
  return updated_game;
}

async function AddEvent(game_id, eventType, gameDate, gameTime, inGameMinute, eventDescription) {
  // (gameID, eventType, gameDate, gameTime, inGameMinute, eventDescription)
  const added_event = await DButils.execQuery(
    `INSERT INTO dbo.GameEvents 
     VALUES (${game_id}, '${eventType}', '${gameDate}', '${gameTime}', ${inGameMinute}, '${eventDescription}')`
  );
  return added_event;
}

async function getEvents(game_id) {
  // (gameID, eventType, gameDate, gameTime, inGameMinute, eventDescription)
  const added_event = await DButils.execQuery(
    `select * from dbo.GameEvents where gameID='${game_id}'`
  );
  return added_event;
}



exports.getGameDetial = getGameDetial;
exports.AddEvent = AddEvent;
exports.getEvents = getEvents;
exports.updateGameDetial = updateGameDetial;
