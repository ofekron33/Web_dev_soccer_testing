const DButils = require("./DButils");

async function getTeamDetailsbyID(TEAM_ID) {
  const team = await axios.get(
    `https://soccer.sportmonks.com/api/v2.0/teams/${TEAM_ID}`,
    {
      params: {
        include:"coach, trophies",
        api_token: process.env.api_token,
      },
    }
  );
  return {
    team_name: team.data.data.name,
    logo_path: team.data.data.logo_path,
    coach_name: team.data.data.coach.data.fullname,

    current_stage_name: stage.data.data.namer,
    // next game details should come from DB
  };
}
exports.getLeagueDetails = getLeagueDetails;
