const games_utils = require("../routes/utils/games_utils");
const DButils = require("../routes/utils/DButils");
const bcrypt = require("bcryptjs");
const league_utils = require("../routes/utils/league_utils");

test('unittest addDays', async () => {
    const date = games_utils.addDays(new Date(2021,0,1), 365);
    expect(date).toEqual(new Date(2022,0,1))
})

test('unittest addDays not', async () => {
    const date = games_utils.addDays(new Date(2021,0,1), 365);
    expect(date).not.toEqual(new Date(2023,0,1))
})

test('unittest DateFormatter', async () => {
    const date = games_utils.DateFormatter(new Date(2021,1,1, 20));
    expect(date).toEqual('2021-02-01')
})

test('unittest DateFormatter not', async () => {
    const date = games_utils.DateFormatter(new Date(2021,1,1, 20));
    expect(date).not.toEqual('2022-02-01')
})


test('unittest addDays + DateFormatter ', async () => {
    const date = games_utils.addDays(new Date(2021,1,1, 20), 365);
    const date_format = games_utils.DateFormatter(date);
    expect(date_format).toEqual('2022-02-01')
})

test('unittest addDays + DateFormatter not', async () => {
    const date = games_utils.addDays(new Date(2021,1,1, 20), 365);
    const date_format = games_utils.DateFormatter(date);
    expect(date_format).not.toEqual('2023-02-01')
})

test('unittest AddDateToGames', async () => {
    let teams_matches = [
        [
          [
            {
              TeamId: 86,
              Name: 'Silkeborg',
              LeagueId: 271,
              SeasonId: 18334,
              Stadium: 'JYSK park',
              Finance: null
            },
            {
              TeamId: 85,
              Name: 'København',
              LeagueId: 271,
              SeasonId: 18334,
              Stadium: 'Parken',
              Finance: null
            },
            {referee: 'Dvir Rainisch'}
          ],
          [
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
            {referee: 'Ofek Ronen'}
          ],
          [
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
            {referee: 'Dvir Rainisch'}
          ],
          [
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
            {referee: 'Ofek Ronen'}
          ],
          [
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
            {referee : 'Dvir Rainisch'}
          ],
          [
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
            },
            {referee: 'Dvir Rainisch'}
          ]
        ]
        ]
    let res = true;
    const matches = await games_utils.AddDateToGames(teams_matches);
    matches.forEach((element) => {
        element.forEach((match) => {
            let sub = match[2];
            if(sub == null){
                res= false;
            }

        })
       })
    expect(res).toBeTruthy();
})


test('acceptence test getReferees', async () => { 
  const data = await league_utils.getReferees();
  const referes = await DButils.execQuery(
      ` SELECT* FROM [dbo].[RefereesTest]
        INNER JOIN [dbo].[UsersTest]
        on [dbo].[UsersTest].UserID=[dbo].[RefereesTest].UserID ;`);
    const referesArr = [];
    referes.forEach(element => {
      referesArr.push(element.fullname)
    });
    if(data.length===referesArr.length){
      expect(data).toEqual(data);
      }
      else{
          expect('fail').toEqual([]);

      }

});


test('unittest schduleReffere', async () => {
  let teams_matches_test = [
      [
        [
          {
            TeamId: 86,
            Name: 'Silkeborg',
            LeagueId: 271,
            SeasonId: 18334,
            Stadium: 'JYSK park',
            Finance: null
          },
          {
            TeamId: 85,
            Name: 'København',
            LeagueId: 271,
            SeasonId: 18334,
            Stadium: 'Parken',
            Finance: null
          }        ],
        [
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
          }        ],
        [
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
          }        ],
        [
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
          }
                ],
        [
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
          }        ],
        [
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
          }        ]
      ]
      ]
  let res1 = true;
  const matches1 = await games_utils.schduleReffere(teams_matches_test);
  matches1.forEach((element1) => {
    element1.forEach((match1) => {
          let sub1 = match1.referee;
          if(sub1 == null){
            res1= false;
          }

      })
     })
  expect(res1).toBeTruthy();
})