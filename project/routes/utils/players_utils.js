const axios = require("axios");
const api_domain = "https://soccer.sportmonks.com/api/v2.0";
// const TEAM_ID = "85";

async function getPlayerIdsByTeam(team_id) {
  let player_ids_list = [];
  const team = await axios.get(`${api_domain}/teams/${team_id}`, {
    params: {
      include: "squad",
      api_token: process.env.api_token,
    },
  });
  team.data.data.squad.data.map((player) =>
    player_ids_list.push(player.player_id)
  );
  return player_ids_list;
}


async function getPlayerDetail(id) {
  const player = await axios.get(`${api_domain}/players/${id}`,
    {
      params: {
        include: "team",
        api_token: process.env.api_token,
      },
    }
  );
  return {
    name: player.data.data.fullname,
    team_name: player.data.data.team.data.name,
    position: player.data.data.position_id,
    image: player.data.data.image_path,
    nationality: player.data.data.nationality,
    birth_date:player.data.data.birthdate,
    birthcountry:player.data.data.birthcountry,
    height:player.data.data.height,
    weight:player.data.data.weight,
  };
}


async function getPlayersInfo(players_ids_list) {
  let promises = [];
  players_ids_list.map((id) =>
    promises.push(
      axios.get(`${api_domain}/players/${id}`, {
        params: {
          api_token: process.env.api_token,
          include: "team",
        },
      })
    )
  );
  let players_info = await Promise.all(promises);
  return extractRelevantPlayerData(players_info);
}

function extractRelevantPlayersData(players_info) {
  const Player_arr=[];
  players_info.data.data.forEach((element) => {
    if (!element.team)
    {
      var tmp=null;
    }
    else {
      var tmp=element.team.data.name
    }
      var obj= {
        name: element.fullname,
        position: element.position_id,
        image: element.image_path,
        team_name: tmp
        }
        Player_arr.push(obj);
    })
  
   
   return Player_arr;
}
async function getPlayersByTeam(team_id) {
  let player_ids_list = await getPlayerIdsByTeam(team_id);
  let players_info = await getPlayersInfo(player_ids_list);
  return players_info;
}

async function SearchPlayerByName(name) {
  const player = await axios.get(`${api_domain}/players/search/${name}`,
  {
    params: {
      include: "team",
      api_token: process.env.api_token,
    },
  }
);
// const players_ids=[];
// for (var key in p.data.data) {
//   players_ids.push(extractRelevantPlayerData(key));
// }
return extractRelevantPlayersData(player);
}


exports.getPlayersByTeam = getPlayersByTeam;
exports.getPlayersInfo = getPlayersInfo;
exports.getPlayerDetail = getPlayerDetail;
exports.SearchPlayerByName=SearchPlayerByName;