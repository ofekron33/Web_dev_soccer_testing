const axios = require("axios");
const api_domain = "https://soccer.sportmonks.com/api/v2.0";
const league_id = "271";
const season_id=17328;




// const TEAM_ID = "85";

//coach id=16845924
//coach name= jens
async function getCoachById(id) {
  const coach = await axios.get(`${api_domain}/players/${id}`,
    {
      params: {
        include: "team.league",
        api_token: process.env.api_token,
      },
    }
  );
  if (coach.data.data.team && coach.data.data.team.data.league) {
    if (coach.data.data.team.data.league.data.id === 271) {
      return {
        name: coach.data.data.fullname,
        team_name: coach.data.data.team.data.name,
        image: coach.data.data.image_path,
        nationality: coach.data.data.nationality,
        birth_date: coach.data.data.birthdate,
        birthcountry: coach.data.data.birthcountry,
      };

    }
  }
  return coach;
}

async function SearchCoachByname(name) {
  const coaches = await axios.get(`${api_domain}/teams/season/17328`,
  {
    params: {
      include: "coach",
      api_token: process.env.api_token,
    },
  }
  );
  return extractRelevantCoachData(name,coaches);
}



async function extractRelevantCoachData(name,coaches) {
  const coachArr = [];
  coaches.data.data.forEach((element) => {
      if(element.coach.data.fullname.toLowerCase().includes(name.toLowerCase())){ 
        //#TODO LOWERCASE NAME SEARCHES
         var obj = {
          name:element.coach.data.fullname,
          team_name: element.name,
          image: element.coach.data.image_path,
        }
        coachArr.push(obj)
      }  
        });
  
    return coachArr;
      }
 
exports.getCoachById = getCoachById;
exports.SearchCoachByname=SearchCoachByname;