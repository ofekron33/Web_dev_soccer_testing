const games_utils = require("../routes/utils/games_utils");
const DButils = require("../routes/utils/DButils");
const bcrypt = require("bcryptjs");


//check if referee exists by id --> 87 is admin should be true
test('unittest isRefereeByID', async () => {
    const data_isRefereeByID = await games_utils.isRefereeByID('180');
    expect(data_isRefereeByID).toEqual(true)})

//check if referee exists by id --> 33 doesnt exists should be false    
test('unittest isRefereeByID', async () => {
    const data_isRefereeByID = await games_utils.isRefereeByID('33');
    expect(data_isRefereeByID).toEqual(false)})    


    