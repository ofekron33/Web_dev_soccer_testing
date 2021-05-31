const DButils = require("./DButils");
const teams_utils = require("./teams_utils");


async function getGameDetial(game_id) {
  const game_detiel = (await DButils.execQuery(
    `select * from dbo.Games where gameID='${game_id}'`
  ))[0];
  if (!game_detiel){
    return null;
  }
  const awayTeam =await  teams_utils.getTeamDetailsbyID(game_detiel.awayTeam);
  const homeTeam = await teams_utils.getTeamDetailsbyID( game_detiel.homeTeam);
  // const events = await getEvents(game_id);
  return {
    gameDate: game_detiel.gameDate,
    homeTeam: homeTeam,
    awayTeam: awayTeam,
    referee: game_detiel.referee,
    homescore: game_detiel.homeScore,
    awayScore: game_detiel.awayScore,
  };
}

async function updateGameDetial(game_id,homeScore, awayScore) {

  await DButils.execQuery(
  `UPDATE Games
    SET homeScore = ${homeScore} , awayScore = ${awayScore}
    WHERE gameID = ${game_id};`
  );
  const game = await DButils.execQuery(
    ` SELECT * FROM [dbo].[Games]
    WHERE gameID = ${game_id};`
  );
  return game;
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
  const added_event =await DButils.execQuery(
    `select * from dbo.GameEvents where gameID='${game_id}'`
  );
  const event_Info = [];
  added_event.forEach((element) => {
    var obj = {
      eventType: element.eventType,
      gameDate: element.gameDate,
      gameTime: element.gameTime,
      inGameMinute: element.inGameMinute,
      eventDescription: element.eventDescription,
    }
    event_Info.push(obj)
  })
  return added_event;
}



exports.getGameDetial = getGameDetial;
exports.AddEvent = AddEvent;
exports.getEvents = getEvents;
exports.updateGameDetial = updateGameDetial;
