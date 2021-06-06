const teams_utils = require("./teams_utils");


test('acceptence test getTeamDetailsbyID', async () => {
    const data = await teams_utils.getTeamDetailsbyID(85);
    expect(data).toStrictEqual({
        "team_id": "85",
        "team_name": "København",
        "logo_path": "https://cdn.sportmonks.com/images//soccer/teams/21/85.png",
        "coach_id": 456421,
        "coach_name": "Jess Thorup",
        "trophies": [
            {
                "team_id": 85,
                "status": "Runner-up",
                "times": 7,
                "league": "Superliga",
                "league_id": 271,
                "non_sportmonk_seasons": [
                    {
                        "name": "1993/1994"
                    },
                    {
                        "name": "2001/2002"
                    },
                    {
                        "name": "2004/2005"
                    }
                ],
                "seasons": {
                    "data": [
                        {
                            "id": 1279,
                            "name": "2011/2012",
                            "league_id": 271,
                            "is_current_season": false,
                            "current_round_id": null,
                            "current_stage_id": null
                        },
                        {
                            "id": 1281,
                            "name": "2013/2014",
                            "league_id": 271,
                            "is_current_season": false,
                            "current_round_id": null,
                            "current_stage_id": null
                        },
                        {
                            "id": 1282,
                            "name": "2014/2015",
                            "league_id": 271,
                            "is_current_season": false,
                            "current_round_id": null,
                            "current_stage_id": null
                        },
                        {
                            "id": 16020,
                            "name": "2019/2020",
                            "league_id": 271,
                            "is_current_season": false,
                            "current_round_id": null,
                            "current_stage_id": null
                        }
                    ]
                }
            },
            {
                "team_id": 85,
                "status": "Winner",
                "times": 13,
                "league": "Superliga",
                "league_id": 271,
                "non_sportmonk_seasons": [
                    {
                        "name": "1992/1993"
                    },
                    {
                        "name": "2000/2001"
                    },
                    {
                        "name": "2002/2003"
                    },
                    {
                        "name": "2003/2004"
                    }
                ],
                "seasons": {
                    "data": [
                        {
                            "id": 1273,
                            "name": "2005/2006",
                            "league_id": 271,
                            "is_current_season": false,
                            "current_round_id": null,
                            "current_stage_id": null
                        },
                        {
                            "id": 1274,
                            "name": "2006/2007",
                            "league_id": 271,
                            "is_current_season": false,
                            "current_round_id": null,
                            "current_stage_id": null
                        },
                        {
                            "id": 1276,
                            "name": "2008/2009",
                            "league_id": 271,
                            "is_current_season": false,
                            "current_round_id": null,
                            "current_stage_id": null
                        },
                        {
                            "id": 1277,
                            "name": "2009/2010",
                            "league_id": 271,
                            "is_current_season": false,
                            "current_round_id": null,
                            "current_stage_id": null
                        },
                        {
                            "id": 1278,
                            "name": "2010/2011",
                            "league_id": 271,
                            "is_current_season": false,
                            "current_round_id": null,
                            "current_stage_id": null
                        },
                        {
                            "id": 1280,
                            "name": "2012/2013",
                            "league_id": 271,
                            "is_current_season": false,
                            "current_round_id": null,
                            "current_stage_id": null
                        },
                        {
                            "id": 1286,
                            "name": "2015/2016",
                            "league_id": 271,
                            "is_current_season": false,
                            "current_round_id": null,
                            "current_stage_id": null
                        },
                        {
                            "id": 759,
                            "name": "2016/2017",
                            "league_id": 271,
                            "is_current_season": false,
                            "current_round_id": null,
                            "current_stage_id": null
                        },
                        {
                            "id": 12919,
                            "name": "2018/2019",
                            "league_id": 271,
                            "is_current_season": false,
                            "current_round_id": null,
                            "current_stage_id": null
                        }
                    ]
                }
            },
            {
                "team_id": 85,
                "status": "Runner-up",
                "times": 4,
                "league": "Landspokal Cup",
                "league_id": 277,
                "non_sportmonk_seasons": [
                    {
                        "name": "1997/1998"
                    },
                    {
                        "name": "2001/2002"
                    },
                    {
                        "name": "2006/2007"
                    }
                ],
                "seasons": {
                    "data": []
                }
            },
            {
                "team_id": 85,
                "status": "Winner",
                "times": 8,
                "league": "Landspokal Cup",
                "league_id": 277,
                "non_sportmonk_seasons": [
                    {
                        "name": "1994/1995"
                    },
                    {
                        "name": "1996/1997"
                    },
                    {
                        "name": "2003/2004"
                    },
                    {
                        "name": "2008/2009"
                    },
                    {
                        "name": "2011/2012"
                    }
                ],
                "seasons": {
                    "data": []
                }
            },
            {
                "team_id": 85,
                "status": "Runner-up",
                "times": 1,
                "league": "Atlantic Cup",
                "league_id": 1434,
                "non_sportmonk_seasons": [
                    {
                        "name": "2006/2007"
                    }
                ],
                "seasons": {
                    "data": []
                }
            },
            {
                "team_id": 85,
                "status": "Winner",
                "times": 1,
                "league": "Atlantic Cup",
                "league_id": 1434,
                "non_sportmonk_seasons": [
                    {
                        "name": "2014"
                    }
                ],
                "seasons": {
                    "data": []
                }
            }
        ],
        "players": [
            {
                "player_id": 26722,
                "name": "Stephan Maigaard Andersen",
                "position": 1,
                "image": "https://cdn.sportmonks.com/images/soccer/players/2/26722.png",
                "team_name": "København"
            },
            {
                "player_id": 84587,
                "name": "Sten Michael Grytebust",
                "position": 1,
                "image": "https://cdn.sportmonks.com/images/soccer/players/11/84587.png",
                "team_name": "København"
            },
            {
                "player_id": 25057,
                "name": "Karl-Johan Johnsson",
                "position": 1,
                "image": "https://cdn.sportmonks.com/images/soccer/players/1/25057.png",
                "team_name": "København"
            },
            {
                "player_id": 84494,
                "name": "Victor Nelsson",
                "position": 2,
                "image": "https://cdn.sportmonks.com/images/soccer/players/14/84494.png",
                "team_name": "København"
            },
            {
                "player_id": 6223,
                "name": "Andreas Bjelland",
                "position": 2,
                "image": "https://cdn.sportmonks.com/images/soccer/players/15/6223.png",
                "team_name": "København"
            },
            {
                "player_id": 73869,
                "name": "Karlo Bartolec",
                "position": 2,
                "image": "https://cdn.sportmonks.com/images/soccer/players/13/73869.png",
                "team_name": "København"
            },
            {
                "player_id": 1256,
                "name": "Bryan Oviedo",
                "position": 2,
                "image": "https://cdn.sportmonks.com/images/soccer/players/8/1256.png",
                "team_name": "København"
            },
            {
                "player_id": 24519,
                "name": "Nicolai Møller Boilesen",
                "position": 2,
                "image": "https://cdn.sportmonks.com/images/soccer/players/7/24519.png",
                "team_name": "København"
            },
            {
                "player_id": 52371,
                "name": "Peter Ankersen",
                "position": 2,
                "image": "https://cdn.sportmonks.com/images/soccer/players/19/52371.png",
                "team_name": "København"
            },
            {
                "player_id": 24613,
                "name": "Mathias Jattah-Njie Jørgensen",
                "position": 2,
                "image": "https://cdn.sportmonks.com/images/soccer/players/5/24613.png",
                "team_name": "København"
            },
            {
                "player_id": 107930,
                "name": "Marios Oikonomou",
                "position": 2,
                "image": "https://cdn.sportmonks.com/images/soccer/players/26/107930.png",
                "team_name": "København"
            },
            {
                "player_id": 32796825,
                "name": "Victor Bernth Kristansen",
                "position": 2,
                "image": "https://cdn.sportmonks.com/images/soccer/placeholder.png",
                "team_name": "København"
            },
            {
                "player_id": 84658,
                "name": "Jens Stage",
                "position": 3,
                "image": "https://cdn.sportmonks.com/images/soccer/players/18/84658.png",
                "team_name": "København"
            },
            {
                "player_id": 1738,
                "name": "Viktor Fischer",
                "position": 3,
                "image": "https://cdn.sportmonks.com/images/soccer/players/10/1738.png",
                "team_name": "København"
            },
            {
                "player_id": 84098,
                "name": "Nicolaj Thomsen",
                "position": 3,
                "image": "https://cdn.sportmonks.com/images/soccer/players/2/84098.png",
                "team_name": "København"
            },
            {
                "player_id": 107851,
                "name": "José Carlos Gonçalves Rodrigues",
                "position": 3,
                "image": "https://cdn.sportmonks.com/images/soccer/players/11/107851.png",
                "team_name": "København"
            },
            {
                "player_id": 21073415,
                "name": "Mohammed Daramy",
                "position": 4,
                "image": "https://cdn.sportmonks.com/images/soccer/players/7/21073415.png",
                "team_name": "København"
            },
            {
                "player_id": 62898,
                "name": "Lukas Reiff Lerager",
                "position": 3,
                "image": "https://cdn.sportmonks.com/images/soccer/players/18/62898.png",
                "team_name": "København"
            },
            {
                "player_id": 447344,
                "name": "Pep Biel Mas Jaume",
                "position": 3,
                "image": "https://cdn.sportmonks.com/images/soccer/players/16/447344.png",
                "team_name": "København"
            },
            {
                "player_id": 83721,
                "name": "Rasmus Falk Jensen",
                "position": 3,
                "image": "https://cdn.sportmonks.com/images/soccer/players/9/83721.png",
                "team_name": "København"
            },
            {
                "player_id": 37341836,
                "name": "Marko Stamenic",
                "position": 3,
                "image": "https://cdn.sportmonks.com/images/soccer/placeholder.png",
                "team_name": "København"
            },
            {
                "player_id": 84526,
                "name": "Kamil Wilczek",
                "position": 4,
                "image": "https://cdn.sportmonks.com/images/soccer/players/14/84526.png",
                "team_name": "København"
            },
            {
                "player_id": 537914,
                "name": "Jonas Older Wind",
                "position": 4,
                "image": "https://cdn.sportmonks.com/images/soccer/players/26/537914.png",
                "team_name": "København"
            },
            {
                "player_id": 84644,
                "name": "Mustapha Bundu",
                "position": 4,
                "image": "https://cdn.sportmonks.com/images/soccer/players/4/84644.png",
                "team_name": "København"
            },
            {
                "player_id": 21072742,
                "name": "Mikkel Kaufmann",
                "position": 4,
                "image": "https://cdn.sportmonks.com/images/soccer/players/6/21072742.png",
                "team_name": "København"
            },
            {
                "player_id": 32777470,
                "name": "Hákon Arnar Haraldsson",
                "position": 4,
                "image": "https://cdn.sportmonks.com/images/soccer/placeholder.png",
                "team_name": "København"
            },
            {
                "player_id": 37325014,
                "name": "William Bøving Vick",
                "position": 4,
                "image": "https://cdn.sportmonks.com/images/soccer/placeholder.png",
                "team_name": "København"
            },
            {
                "player_id": 37325012,
                "name": "Rasmus Winther Højlund",
                "position": 4,
                "image": "https://cdn.sportmonks.com/images/soccer/placeholder.png",
                "team_name": "København"
            }
        ],
        "games": [
            {
                "gameID": 42,
                "homeTeam": 85,
                "awayTeam": 211,
                "stage": 4,
                "homeScore": 3,
                "awayScore": 2,
                "stadium": "Sydbank Park",
                "gameDate": "2021-06-01T00:00:00.000Z",
                "referee": "Daniel izmaylov"
            },
            {
                "gameID": 48,
                "homeTeam": 293,
                "awayTeam": 85,
                "stage": 5,
                "homeScore": 0,
                "awayScore": 0,
                "stadium": "Brøndby Stadion",
                "gameDate": "2021-07-07T00:00:00.000Z",
                "referee": "Daniel izmaylov"
            },
            {
                "gameID": 61,
                "homeTeam": 85,
                "awayTeam": 211,
                "stage": 6,
                "homeScore": null,
                "awayScore": null,
                "stadium": "Sydbank Park",
                "gameDate": "2021-05-30T00:00:00.000Z",
                "referee": "Ofek Ronen"
            },
            {
                "gameID": 62,
                "homeTeam": 85,
                "awayTeam": 211,
                "stage": 7,
                "homeScore": null,
                "awayScore": null,
                "stadium": "Sydbank Park",
                "gameDate": "2021-05-30T00:00:00.000Z",
                "referee": "Ofek Ronen"
            },
            {
                "gameID": 63,
                "homeTeam": 85,
                "awayTeam": 211,
                "stage": 17,
                "homeScore": null,
                "awayScore": null,
                "stadium": "Sydbank Park",
                "gameDate": "2021-05-30T00:00:00.000Z",
                "referee": "Ofek Ronen"
            },
            {
                "gameID": 64,
                "homeTeam": 85,
                "awayTeam": 211,
                "stage": 20,
                "homeScore": null,
                "awayScore": null,
                "stadium": "Sydbank Park",
                "gameDate": "2021-05-30T00:00:00.000Z",
                "referee": "Daniel Izmaylov"
            },
            {
                "gameID": 65,
                "homeTeam": 85,
                "awayTeam": 211,
                "stage": 26,
                "homeScore": null,
                "awayScore": null,
                "stadium": "Sydbank Park",
                "gameDate": "2021-05-30T00:00:00.000Z",
                "referee": "Ofek Ronen"
            },
            {
                "gameID": 66,
                "homeTeam": 85,
                "awayTeam": 211,
                "stage": 21,
                "homeScore": null,
                "awayScore": null,
                "stadium": "Sydbank Park",
                "gameDate": "2021-05-30T00:00:00.000Z",
                "referee": "Daniel Izmaylov"
            },
            {
                "gameID": 67,
                "homeTeam": 85,
                "awayTeam": 211,
                "stage": 27,
                "homeScore": null,
                "awayScore": null,
                "stadium": "Sydbank Park",
                "gameDate": "2021-05-30T00:00:00.000Z",
                "referee": "Ofek Ronen"
            },
            {
                "gameID": 68,
                "homeTeam": 85,
                "awayTeam": 211,
                "stage": 29,
                "homeScore": null,
                "awayScore": null,
                "stadium": "Sydbank Park",
                "gameDate": "2021-05-30T00:00:00.000Z",
                "referee": "Ofek Ronen"
            }
        ]
    }
    )
}
)

test('negtive test getEvent', async () => {
    const data = await teams_utils.getTeamDetailsbyID('15616');
    expect(data).toBeNull();
})
