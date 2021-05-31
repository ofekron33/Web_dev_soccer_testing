const axios = require("axios");

async function getTeamDetailsbyID(TEAM_ID) {
  const team = await axios.get(
    `https://soccer.sportmonks.com/api/v2.0/teams/${TEAM_ID}`,
    {
      params: {
        include: "coach, trophies,league",
        api_token: process.env.api_token,
      },
    }
  );

  if (team.data.data.league) {
    if (team.data.data.league.data.id === 271) {
      return {
        team_name: team.data.data.name,
        logo_path: team.data.data.logo_path,
        coach_id: team.data.data.coach.data.coach_id,
        coach_name: team.data.data.coach.data.fullname,
        trophies: team.data.data.trophies.data,
      }

      // next game details should come from DB
    };
  }

}

async function getTeamDetailsbyName(TEAM_Name) {
  const teams = await axios.get(
    `https://soccer.sportmonks.com/api/v2.0/teams/search/${TEAM_Name}`,
    {
      params: {
        api_token: process.env.api_token,
      },
    }
  );
  const Team_Info = [];
  teams.data.data.forEach((element) => {
    var obj = {
      team_id: element.id,
      team_name: element.name,
      logo_path: element.logo_path,
    }
    Team_Info.push(obj)
  })

  return Team_Info;
}


exports.getTeamDetailsbyID = getTeamDetailsbyID;
exports.getTeamDetailsbyName = getTeamDetailsbyName;
