const axios = require("axios");
const LEAGUE_ID = 271;
const STAGE_ID = 271;
const DButils = require("./DButils");

async function getLeagueDetails() {
  try {
    const league = await axios.get(
      `https://soccer.sportmonks.com/api/v2.0/leagues/${LEAGUE_ID}`,
      {
        params: {
          include: "season",
          api_token: process.env.api_token,
        },
      }
    );
    const stage = await axios.get(
      `https://soccer.sportmonks.com/api/v2.0/stages/season/${STAGE_ID}`,
      {
        params: {
          api_token: process.env.api_token,
        },
      }
    );
    return {
      league_name: league.data.data.name,
      current_season_name: league.data.data.season.data.name,
      current_stage_name: stage.data.data[3].name,
      // next game details should come from DB
    };
  }
  catch (error) {
    return null
  }
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


async function getReferees() {

  const referes = await DButils.execQuery(
    ` SELECT* FROM [dbo].[RefereesTest]
      INNER JOIN [dbo].[UsersTest]
      on [dbo].[UsersTest].UserID=[dbo].[RefereesTest].UserID ;`);
  const referesArr = [];
  referes.forEach(element => {
    referesArr.push(element.fullname)
  });
  return referesArr;
}

async function getStadiums() {

  const stadiums = await DButils.execQuery(
    ` SELECT * FROM [dbo].[Venue] ;`);
  const stadiumsArr = [];
  stadiums.forEach(element => {
    stadiumsArr.push(element.name)
  });
  return stadiumsArr;
}


async function getStages() {

  const stadiums = await DButils.execQuery(
    ` SELECT * FROM [dbo].[Stages];`);
  const stadiumsArr = [];
  stadiums.forEach(element => {
    stadiumsArr.push(element.stageName)
  });
  return stadiumsArr;
}

async function AddRefToDb(UserID, training, isPrimary) {
  const added_match = await DButils.execQuery(
    `INSERT INTO dbo.RefereesTest VALUES (
      '${UserID}' , '${training}', ${isPrimary})`
  );
  console.log(added_match);
  return added_match;

}

exports.getReferees = getReferees;
exports.isRefereeByID = isRefereeByID;
exports.AddRefToDb = AddRefToDb;
exports.getStages = getStages;
exports.getStadiums = getStadiums;
exports.getLeagueDetails = getLeagueDetails;
