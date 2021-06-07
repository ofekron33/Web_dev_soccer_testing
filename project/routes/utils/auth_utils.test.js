const auth_utils = require("./auth_utils");
const DButils = require("./DButils");

beforeAll(async () => {
    await DButils.execQuery(
        "Delete from dbo.UsersTest"
      );
  });

test('unittest isAvilable', async () => {
    const data_isAvilable = await auth_utils.isAvilable('UserTest');
    expect(data_isAvilable).toEqual(true)})

test('unittest addUser', async () => {
    const user = await auth_utils.addUser('UserTest', '1234', 'User Test');
    const data_addUser = await auth_utils.isAvilable('UserTest');
    expect(data_addUser).toEqual(false)
})

test('unittest getUsers', async () => {
    const users = await auth_utils.getUsers('UserTest');
    expect(users).toEqual([
        {
          UserID: users[0].UserID,
          username: 'UserTest',
          password: '1234',
          fullname: 'User Test',
          isFederation: null
        }
      ])
})
// test('unittest isAvilable', async () => {
//     const data = await auth_utils.isAvilable('liadse1');
//     expect(data).toEqual(false)})



    