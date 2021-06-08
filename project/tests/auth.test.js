const app = require('../main');
var request = require('supertest');
const DButils = require("../routes/utils/DButils");
jest.setTimeout(10000000);


describe("test auth file", () => {

    // UserTest doesnt exists ->> register successfully
    test("login should succeed and return 200 status code", async () => {
        const response = await request(app).post("/Register")
        .send({
            username: 'UserTest',
            password: '1234',
            fullName: 'User Test'

        })
        expect(response.statusCode).toBe(201)
    });

    // UserTest exists ->> register unsuccessfully
    test("login should succeed and return 200 status code", async () => {
        const response = await request(app).post("/Register")
        .send({
            username: 'UserTest',
            password: '1234',
            fullName: 'User Test'

        })
        expect(response.statusCode).toBe(409)
    });

    //userTesr exists ->> login successfully
    test("login should succeed and return 200 status code", async () => {
        const response = await request(app).post("/Login")
        .send({
            username: 'UserTest',
            password: '1234'

        })
        expect(response.statusCode).toBe(200)
    });

    //UserTest1 doesnt exists ->> login unsuccessfully
    test("login should unsucceed and return 401 status code", async () => {
        const response = await request(app).post("/Login")
        .send({
            username: 'UserTest1',
            password: '1234'

        })
        expect(response.statusCode).toBe(401)
    });


    afterAll(async () => {
        await DButils.execQuery(
            "Delete from dbo.UsersTest where username='UserTest'"
          );
      });
})




