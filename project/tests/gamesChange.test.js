const app = require('../main');
var request = require('supertest');
const DButils = require("../routes/utils/DButils");
jest.setTimeout(10000000);
var session = require('supertest-session');

var testSession = null;

describe("test make league", () => {

    // beforeEach(function () {
    //     testSession = session(app);
    //   });


    // // it('should sign in', function (done) {
    // // testSession.post('/Login')
    // //     .send({ username: 'admin', password: 'admin' })
    // //     .expect(200)
    // //     .end(done);
    // // });

    // // var authenticatedSession;
    var testSession = session(app, { user_id: 87 });

    beforeEach(function (done) {
        testSession.post('/Login')
            .send({ username: 'admin', password: 'admin' })
            .expect(200)
            .end(function (err) {
                if (err) return done(err);
                authenticatedSession = testSession;
                return done();
            });
    });
    // var  session_cookie={user_id:87  };
    // var testSession = session(app, { user_id: 87 });

    it('should get a restricted page', function (done) {
        const response= testSession.post('/gamechange/MakeLeague/')
            .send({
                Type: 3
            }).expect(400).end(done);

        // expect(response.statusCode).toBe(409)
        //     .end(done)
    });
});

    //     authenticatedSession.post('/gamechange/MakeLeague/')
    //     .set('session124', session_cookie)
    //      .send({
    //         Type: 3
    //     })
    //       .expect(response.statusCode).toBe(400)
    //       .end(done)
    //   });

    // beforeAll(async () => {
    //     const response = await request(app).post("/Login")
    //     .send({
    //         username: 'admin',
    //         password: 'admin'

    //     })
    //   });

    // algo invalid ->> status code 400
    // test("Make league with invalid type return 400 status code", async () => {
    //     // const response2 = await request(app).post("/Login")
    //     // .send({
    //     //     username: 'admin',
    //     //     password: 'admin'

    //     // })
    //     const response = await request(app).post("/gamechange/MakeLeague/")
    //     .send({
    //         Type: 3
    //     })
    //     expect(response.statusCode).toBe(400)
    // });

    // algo valid ->> status code 201
//     test("Make league with valid type return 201 status code", async () => {
//         const response = await request(app).post("/gamechange/MakeLeague/")
//         .send({
//             Type: 1
//         })
//         expect(response.statusCode).toBe(201)
//     });
// })