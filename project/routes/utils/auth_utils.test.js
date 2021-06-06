const auth_utils = require("./auth_utils");

test('unittest isAvilable', async () => {
    const data = await auth_utils.isAvilable('ofek123');
    expect(data).toEqual(false)})

test('unittest isAvilable', async () => {
    const data = await auth_utils.isAvilable('liadse');
    expect(data).toEqual(true)})




// test('acceptence test addUser', async () => {
//     const data = await auth_utils.addUser('liadse');
//     expect(data).toEqual(true)})
    