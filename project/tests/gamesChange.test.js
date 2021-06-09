const app = require('../main');
var request = require('supertest');
const DButils = require("../routes/utils/DButils");
jest.setTimeout(10000000);
var session = require('supertest-session');
const games_utils = require("../routes/utils/games_utils");
const teams_utils = require("../routes/utils/teams_utils");

var testSession = null;


describe("test make league detials type 2 ", () => {
    var testSession = session(app, { user_id: 87 });
    var games;
    var old_games;
    var teams_list
    var new_games;
    beforeAll(async () => {
        testSession.post('/Login')
            .send({ username: 'admin', password: 'admin' })
            .end(function (err) {
                authenticatedSession = testSession;
            });

        old_games = await games_utils.returnAllGames();
        teams_list = await teams_utils.getAllTeams();
        await testSession.post('/gamechange/MakeLeague/')
            .send({
                Type: 2
            })
        new_games = await games_utils.returnAllGames();

    });

    it('testing each game has Reffre', async () => {
        const teams_list_len = teams_list.length;
        const team_add_len = new_games.length - old_games.length;
        team_add_len.valueOf(teams_list_len * (teams_list_len - 1) )
    });


    it('testing each has date', async () => {
        const teams_list_len = teams_list.length;
        const team_add_len = new_games.length - old_games.length;
        team_add_len.valueOf((teams_list_len * (teams_list_len - 1) / 2))
    });

    it('testing each has stadium and hes on of them home stadium', async () => {
        const teams_list_len = teams_list.length;
        const team_add_len = new_games.length - old_games.length;
        team_add_len.valueOf((teams_list_len * (teams_list_len - 1) / 2))
    });
});


/// liad 

describe("test make referee with all correct ", () => {
    var testSession = session(app, { user_id: 87 });
    var refferes;
    var old_games;
    var teams_list
    var new_games;
    beforeAll(async () => {
        testSession.post('/Login')
            .send({ username: 'admin', password: 'admin' })
            .end(function (err) {
                authenticatedSession = testSession;
            });

            old_games = await games_utils.returnAllGames();
            teams_list = await teams_utils.getAllTeams();

            isAvilableTest =  await testSession.post('/gamechange/MakeReferee/')
            .send({
                userId: 16,
                training: "Expert Level",
                isPrimary: 1
            })
            isRefereeByIDTest =  await testSession.post('/gamechange/MakeReferee/')
            .send({
                userId: 180,
                training: "Expert Level",
                isPrimary: 1
            })
            missingTest =  await testSession.post('/gamechange/MakeReferee/')
            .send({
                userId: 17,
                training: "Expert Level"
            })
            refferes = await DButils.execQuery("select * from dbo.RefereesTest where UserID=16")
    });

    it('testing each game has Referee', async () => {
       expect(isAvilableTest.statusCode).toEqual(409); 
    });

    it('testing each game has Referee', async () => {
        expect(isRefereeByIDTest.statusCode).toEqual(409);
     });

     it('testing each game has Referee', async () => {
        expect(missingTest.statusCode).toEqual(409);
     });
    afterAll(async () => {
        await DButils.execQuery(
            "Delete from dbo.RefereesTest where UserID=16"
          );
          await DButils.execQuery(
            "Delete from dbo.RefereesTest where UserID=17"
          );
      });
});


