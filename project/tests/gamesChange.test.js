const app = require('../main');
var request = require('supertest');
const DButils = require("../routes/utils/DButils");
jest.setTimeout(10000000);
var session = require('supertest-session');
const games_utils = require("../routes/utils/games_utils");
const teams_utils = require("../routes/utils/teams_utils");

var testSession = null;


describe("test Make leauge ", () => {
    describe("test make league detials type 1 ", () => {
        var testSession = session(app, { user_id: 87 });
        var games;
        var old_games;
        var teams_list
        var new_games;
        var Respone;
        var team_add_len1;
        var Ref = true;
        var Stad = true;
        beforeAll(async () => {
            testSession.post('/Login')
                .send({ username: 'admin', password: 'admin' })
                .end(function (err) {
                    authenticatedSession = testSession;
                });

            old_games = await games_utils.returnAllGames();
            teams_list = await teams_utils.getAllTeams();
            Respone = await testSession.post('/gamechange/MakeLeague/')
                .send({
                    Type: 1
                })
            new_games = await games_utils.returnAllGames();
            team_add_len1 = new_games.length - old_games.length;
            if (Respone.statusCode == 201) {
                const games = new_games.slice(-team_add_len1)

                games.forEach((match1) => {
                    let sub1 = match1.referee;
                    if (!sub1 || sub1 === "undefined") {
                        Ref = false;
                    }
                    if (!match1.stadium || match1.stadium === "undefined") {
                        Stad = false;
                    }
                })
            }
        })

        it('testing status', async () => {
            const t = Respone;
            expect(Respone.statusCode).toEqual(201);
        });

        it('testing number of games', async () => {
            teams_list = await teams_utils.getAllTeams();
            const teams_list_len1 = teams_list.length;
            
            const needTobeNumber1 = (teams_list_len1 * (teams_list_len1 - 1)) / 2;
            expect(team_add_len1).toBe(needTobeNumber1);
        });

        it('testing reefre for each game', async () => {
            expect(Ref).toBeTruthy();
        })

        it('testing stadium for each game', async () => {
            expect(Stad).toBeTruthy();
        })

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

            isAvilableTest = await testSession.post('/gamechange/MakeReferee/')
                .send({
                    userId: 16,
                    training: "Expert Level",
                    isPrimary: 1
                })
            isRefereeByIDTest = await testSession.post('/gamechange/MakeReferee/')
                .send({
                    userId: 180,
                    training: "Expert Level",
                    isPrimary: 1
                })
            missingTest = await testSession.post('/gamechange/MakeReferee/')
                .send({
                    userId: 17,
                    training: "Expert Level"
                })
            successTest = await testSession.post('/gamechange/MakeReferee/')
                .send({
                    userId: 207,
                    training: "Expert Level",
                    isPrimary: 1
                })
            refferes = await DButils.execQuery("select * from dbo.RefereesTest where UserID=16")
        });

        it('testing add User Referee', async () => {
            expect(isAvilableTest.statusCode).toEqual(409);
        });

        it('testing added Referree only once', async () => {
            expect(isRefereeByIDTest.statusCode).toEqual(409);
        });

        it('testing each game has Referee', async () => {
            expect(missingTest.statusCode).toEqual(409);
        });
        it('testing each game has Referee', async () => {
            expect(successTest.statusCode).toEqual(201);
        });
        afterAll(async () => {
            await DButils.execQuery(
                "Delete from dbo.RefereesTest where UserID=16"
            );
            await DButils.execQuery(
                "Delete from dbo.RefereesTest where UserID=17"
            );
            await DButils.execQuery(
                "Delete from dbo.RefereesTest where UserID=207"
            );
        });
    });


});