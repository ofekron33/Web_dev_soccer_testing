//these tests are for b - Game Algo

const app = require('../main');
var request = require('supertest');
const DButils = require("../routes/utils/DButils");
jest.setTimeout(10000000);


describe("test make league", () => {
    beforeAll(async () => {
        const response = await request(app).post("/Login")
        .send({
            username: 'admin',
            password: 'admin'

        })
      });
   
    // algo invalid ->> status code 400
    test("Make league with invalid type return 400 status code", async () => {
        const response = await request(app).post("/gamechange/MakeLeague/")
        .send({
            Type: 3
        })
        expect(response.statusCode).toBe(400)
    });

    // algo valid ->> status code 201
    test("Make league with valid type return 201 status code", async () => {
        const response = await request(app).post("/gamechange/MakeLeague/")
        .send({
            Type: 1
        })
        expect(response.statusCode).toBe(201)
    });
})