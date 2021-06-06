const games_utils = require("./games_utils");




// test('the data is peanut butter', async () => {
//     await expect(games_utils.getEvents(4)).resolves.toBe('peanut butter');
// });

test('acceptence test getEvent', async () => {
    const data = await games_utils.getEvents('42');
    expect(data).toStrictEqual([
        {
            "eventType": "goal",
            "game_id": "42",
            "gameDate": "20210601",
            "gameTime": "22:30:0",
            "inGameMinute": 4,
            "eventDescription": "goal by Karlo Bartolec"
        },
        {
            "eventType": "red card",
            "game_id": "42",
            "gameDate": "20210601",
            "gameTime": "22:30:0",
            "inGameMinute": 43,
            "eventDescription": "red card for Lirim Qamili"
        },
        {
            "eventType": "yellow card",
            "game_id": "42",
            "gameDate": "20210601",
            "gameTime": "22:30:0",
            "inGameMinute": 71,
            "eventDescription": "yellow card for Casper Tengstedt"
        }]);
});
test('acceptence test getEvent', async () => {//TODO change name
    const data = await games_utils.getEvents('15616');
    expect(data).toEqual([]);
});
test('acceptence test getGameCheck', async () => { 
    const data = await games_utils.getGameCheck('293','85','5');
    expect(data).toStrictEqual([{
        "stage": 5,
        "homeTeam": 293,
        "awayTeam": 85,
    }])
});

test('acceptence test getGameCheck', async () => { 
    const data = await games_utils.getGameCheck('850202','211','14');
    expect(data).toEqual([]);

});