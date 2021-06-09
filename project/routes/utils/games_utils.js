const DButils = require("./DButils");
const teams_utils = require("./teams_utils");
const league_utils = require("./league_utils");


async function getGameDetial(game_id) {
  const game_detiel = (await DButils.execQuery(
    `select * from dbo.Games where gameID='${game_id}'`
  ))[0];
  if (!game_detiel) {
    return null;
  }
  // const awayTeam =await  teams_utils.getTeamDetailsbyID(game_detiel.awayTeam);
  // const homeTeam = await teams_utils.getTeamDetailsbyID( game_detiel.homeTeam);
  const events = await getEvents(game_id);
  return {
    game_id: game_id,
    gameDate: game_detiel.gameDate,
    homeTeam: game_detiel.homeTeam,
    awayTeam: game_detiel.awayTeam,
    referee: game_detiel.referee,
    homescore: game_detiel.homeScore,
    awayScore: game_detiel.awayScore,
    events: events
  };
}

async function updateGameDetial(game_id, homeScore, awayScore) {

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
  const added_event = await DButils.execQuery(
    `select * from dbo.GameEvents where gameID=${game_id}`
  );
  const event_Info = [];
  if (added_event) {
    added_event.forEach((element) => {
      const time = element.gameTime.getHours() + ':' +
        (element.gameTime.getMinutes()) + ':' +
        element.gameTime.getSeconds();

      var obj = {
        eventType: element.eventType,
        game_id: game_id,
        gameDate: element.gameDate,
        gameTime: time,
        inGameMinute: element.inGameMinute,
        eventDescription: element.eventDescription,
      }
      event_Info.push(obj)
    })
    return event_Info;
  }
  return event_Info;
}

async function getFavoriteMatchesDetails(game_ids) {
  let promises = [];
  game_ids.map((element) => {
    promises.push(
      getGameDetial(element)
    )
  })
  let game_details = await Promise.all(promises);
  return game_details;
}

async function isStage(StageName) {

  const stages = await DButils.execQuery(
    ` SELECT * FROM [dbo].[Stages]
    WHERE stageName = '${StageName}' ;`
  );
  if (stages.length === 0) {
    return false;
  }
  return true;
}
async function isReferee(refereeName) {
  const referes = await DButils.execQuery(
    ` SELECT * FROM [dbo].[RefereesTest]
    WHERE refName = '${refereeName}' ;`
  );
  if (referes.length === 0) {
    return false;
  }
  return true;
}

async function isRefereeByID(refereeID) {
  const referes = await DButils.execQuery(
    ` SELECT * FROM [dbo].[RefereesTest]
    WHERE UserID = '${refereeID}' ;`
  );
  if (referes.length === 0) {
    return false;
  }
  return true;
}


async function isStadium(StadiumName) {

  const stadiums = await DButils.execQuery(
    ` SELECT * FROM [dbo].[Venue]
    WHERE name = '${StadiumName}' ;`
  );
  if (stadiums.length === 0) {
    return false;
  }
  return true;
}


async function returnGamesByTeamID(teamID) {

  const games = await DButils.execQuery(
    ` SELECT * FROM [dbo].[Games]
    WHERE (homeTeam = ${teamID} or awayTeam = ${teamID}) ;`
  );


  games.forEach(async (element) => {
    element.events = await getEvents(element.gameID)
  })
  return games;
}

async function returnAllGames() {
  const games = await DButils.execQuery(
    ` SELECT * FROM [dbo].[Games] ;`
  );
  return games;
}

async function getClosestGame() {
  var pad = function (num) { return ('00' + num).slice(-2) };
  var date;
  date = new Date();
  date = date.getUTCFullYear() + '-' +
    pad(date.getUTCMonth() + 1) + '-' +
    pad(date.getUTCDate())
  const games = await DButils.execQuery(
    ` SELECT * FROM [dbo].[Games] 
      WHERE gameDate>'${date}'
      ;`
  );
  games.sort((a, b) => a.gameDate - b.gameDate)
  return games;
}




async function getCurrentStageGames(stage_num) {
  const games = await DButils.execQuery(
    ` SELECT * FROM [dbo].[Games] 
      WHERE stage=${stage_num};`
  );
  return games;
}

async function schduleReffere(matchList) {
  try {
    const reffreList = await league_utils.getReferees();
    if (!reffreList || reffreList.length === 0) {
      return Null;
    }
    matchList.forEach(StageGames => {
      StageGames.forEach(game => {
        var reffre_i = getRandomInt(reffreList.length);
        game.referee = reffreList[reffre_i];
      })
    });
    return matchList;
  }
  catch (error) {
    console.log(error)
    return null
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


async function AddDateToGames(matches) {
  var counter = 1;
  var date = new Date();
  date = addDays(date, 50);
  matches.forEach((element) => {
    element.forEach((match) => {
      match[2] = DateFormatter(date);
      match[3] = counter;
      //      EnterGamesToDBHelper(date, match[0].TeamId, match[1].TeamId, counter, match[0].Stadium, match[0].referee)
      date = addDays(date, 1);
    }
    )
    counter += 1;
  }
  )
  return matches;
}
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
function DateFormatter(date) {
  var pad = function (num) { return ('00' + num).slice(-2) };
  date = date.getUTCFullYear() + '-' +
    pad(date.getUTCMonth() + 1) + '-' +
    pad(date.getUTCDate())
  return date;
}
async function EnterGameToDB(date, homeTeam, awayTeam, stage, stadium, ref) {
  const added_match = await DButils.execQuery(

    `INSERT INTO dbo.GamesTest (gameDate,homeTeam,awayTeam,stage,stadium,referee) VALUES (
      '${date}' , ${homeTeam}, ${awayTeam},'${stage}','${stadium}','${ref}')`
  );
  return added_match;

}

exports.returnAllGames = returnAllGames;
exports.isRefereeByID = isRefereeByID;
exports.schduleReffere = schduleReffere;
exports.isStage = isStage;
exports.isStadium = isStadium;
exports.isReferee = isReferee;
exports.getClosestGame = getClosestGame;
exports.returnGamesByTeamID = returnGamesByTeamID;
exports.getGameDetial = getGameDetial;
exports.AddEvent = AddEvent;
exports.getEvents = getEvents;
exports.updateGameDetial = updateGameDetial;
exports.getFavoriteMatchesDetails = getFavoriteMatchesDetails;
exports.getCurrentStageGames = getCurrentStageGames;
exports.EnterGameToDB = EnterGameToDB;
exports.AddDateToGames = AddDateToGames;
exports.EnterGameToDB = EnterGameToDB;
exports.addDays = addDays;
exports.DateFormatter = DateFormatter;