const DButils = require("./DButils");


async function isAvilable(username) {
  const users = await DButils.execQuery(
    "SELECT username FROM dbo.UsersTest"
  );

  if (users.find((x) => x.username ===username)){
    return false;
  }
  return true;
}


async function addUser(username, password, fullName ) {
  return await DButils.execQuery(
    `INSERT INTO dbo.UsersTest (username, password,fullname) VALUES ('${username}', '${password}','${fullName}');`
  );
}


async function getUsers(username) {
  const users=  await DButils.execQuery(
    `SELECT * FROM dbo.UsersTest WHERE username = '${username}'`);
  return users
}



exports.isAvilable = isAvilable;
exports.getUsers = getUsers;
exports.addUser = addUser;