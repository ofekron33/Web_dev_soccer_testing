const teams_utils = require("../routes/utils/teams_utils");
const DButils = require("../routes/utils/DButils");
const bcrypt = require("bcryptjs");

//check that list from api is equal to db
test('unittest getAllTeams', async () => {
    const teams = await teams_utils.getAllTeams();
    console.log(teams);
    expect(teams).toEqual([
      {
        TeamId: 85,
        Name: 'København',
        LeagueId: 271,
        SeasonId: 18334,
        Stadium: 'Parken'
      },
      {
        TeamId: 86,
        Name: 'Silkeborg',
        LeagueId: 271,
        SeasonId: 18334,
        Stadium: 'JYSK park'
      },
      {
        TeamId: 293,
        Name: 'Brøndby',
        LeagueId: 271,
        SeasonId: 18334,
        Stadium: 'Brøndby Stadion'
      },
      {
        TeamId: 390,
        Name: 'SønderjyskE',
        LeagueId: 271,
        SeasonId: 18334,
        Stadium: 'Sydbank Park'
      },
      {
        TeamId: 939,
        Name: 'Midtjylland',
        LeagueId: 271,
        SeasonId: 18334,
        Stadium: 'MCH Arena'
      },
      {
        TeamId: 1020,
        Name: 'AaB',
        LeagueId: 271,
        SeasonId: 18334,
        Stadium: 'Aalborg Portland Park'
      },
      {
        TeamId: 1789,
        Name: 'OB',
        LeagueId: 271,
        SeasonId: 18334,
        Stadium: 'Nature Energy Park'
      },
      {
        TeamId: 2356,
        Name: 'Randers',
        LeagueId: 271,
        SeasonId: 18334,
        Stadium: 'Cepheus Park Randers'
      },
      {
        TeamId: 2394,
        Name: 'Nordsjælland',
        LeagueId: 271,
        SeasonId: 18334,
        Stadium: 'Right To Dream Park'
      },
      {
        TeamId: 2447,
        Name: 'Viborg',
        LeagueId: 271,
        SeasonId: 18334,
        Stadium: 'Energi Viborg Arena'
      },
      {
        TeamId: 2905,
        Name: 'AGF',
        LeagueId: 271,
        SeasonId: 18334,
        Stadium: 'Ceres Park'
      },
      {
        TeamId: 7466,
        Name: 'Vejle',
        LeagueId: 271,
        SeasonId: 18334,
        Stadium: 'Vejle Stadion'
      }
    ])
})