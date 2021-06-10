//these tests are for c - Login Precedure

const auth_utils = require("../routes/utils/auth_utils");
const DButils = require("../routes/utils/DButils");
const bcrypt = require("bcryptjs");
jest.setTimeout(10000000);


var hash_password = bcrypt.hashSync(
    '1234',
    parseInt(process.env.bcrypt_saltRounds)
  );

// db doesnt have a test user  - >> any username is avilable
test('unittest isAvilable', async () => {
    const data_isAvilable = await auth_utils.isAvilable('UserTestAuthUtils');
    expect(data_isAvilable).toEqual(true)})

//add user ->> should not be avilable afterwards
test('unittest addUser', async () => {
    const user = await auth_utils.addUser('UserTestAuthUtils', hash_password, 'User Test');
    const data_addUser = await auth_utils.isAvilable('UserTestAuthUtils');
    expect(data_addUser).toEqual(false)
})

//get details about users ->> should be equal to what was entered
test('unittest getUsers', async () => {
    const users = await auth_utils.getUsers('UserTestAuthUtils');
    expect(users).toEqual([
        {
          UserID: users[0].UserID,
          username: 'UserTestAuthUtils',
          password: hash_password,
          fullname: 'User Test',
          isFederation: null
        }
      ])
})

// delete the user we added
afterAll(async () => {
    await DButils.execQuery(
        "Delete from dbo.UsersTest where username='UserTestAuthUtils'"
      );
  });





    