const teams_utils = require("../routes/utils/teams_utils");
const DButils = require("../routes/utils/DButils");
const bcrypt = require("bcryptjs");

//check that list from api is equal to db
test('unittest getAllTeams', async () => {
    const teams = await teams_utils.getAllTeams();
    expect(teams).toEqual([
        {
          TeamId: 85,
          Name: 'København',
          LeagueId: 271,
          SeasonId: 18334,
          Stadium: 'Parken',
          Finance: null
        },
        {
          TeamId: 86,
          Name: 'Silkeborg',
          LeagueId: 271,
          SeasonId: 18334,
          Stadium: 'JYSK park',
          Finance: null
        },
        {
          TeamId: 293,
          Name: 'Brøndby',
          LeagueId: 271,
          SeasonId: 18334,
          Stadium: 'Brøndby Stadion',
          Finance: null
        },
        {
          TeamId: 390,
          Name: 'SønderjyskE',
          LeagueId: 271,
          SeasonId: 18334,
          Stadium: 'Sydbank Park',
          Finance: null
        },
        {
          TeamId: 939,
          Name: 'Midtjylland',
          LeagueId: 271,
          SeasonId: 18334,
          Stadium: 'MCH Arena',
          Finance: null
        },
        {
          TeamId: 1020,
          Name: 'AaB',
          LeagueId: 271,
          SeasonId: 18334,
          Stadium: 'Aalborg Portland Park',
          Finance: null
        },
        {
          TeamId: 1789,
          Name: 'OB',
          LeagueId: 271,
          SeasonId: 18334,
          Stadium: 'Nature Energy Park',
          Finance: null
        },
        {
          TeamId: 2356,
          Name: 'Randers',
          LeagueId: 271,
          SeasonId: 18334,
          Stadium: 'Cepheus Park Randers',
          Finance: null
        },
        {
          TeamId: 2394,
          Name: 'Nordsjælland',
          LeagueId: 271,
          SeasonId: 18334,
          Stadium: 'Right To Dream Park',
          Finance: null
        },
        {
          TeamId: 2447,
          Name: 'Viborg',
          LeagueId: 271,
          SeasonId: 18334,
          Stadium: 'Energi Viborg Arena',
          Finance: null
        },
        {
          TeamId: 2905,
          Name: 'AGF',
          LeagueId: 271,
          SeasonId: 18334,
          Stadium: 'Ceres Park',
          Finance: null
        },
        {
          TeamId: 7466,
          Name: 'Vejle',
          LeagueId: 271,
          SeasonId: 18334,
          Stadium: 'Vejle Stadion',
          Finance: null
        }
      ])
})