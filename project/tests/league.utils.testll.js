const league_utils = require("../routes/utils/league_utils");
const DButils = require("../routes/utils/DButils");
const bcrypt = require("bcryptjs");


//check if referee exists by id --> 87 is admin should be true
test('unittest AddRefToDb', async () => {
    const data_addRef = await league_utils.AddRefToDb(14,'expert level',1);
    const data= await DButils.execQuery(
        "Select * from dbo.RefereesTest where UserID=14"
    ) 
    expect(data).toEqual([
        {
            UserID: 14,
            training: 'expert level',
            isPrimary: 1
        }
    ])
})

afterAll(async () => {
    await DButils.execQuery(
        "Delete from dbo.RefereesTest where UserID=14"
    )
})