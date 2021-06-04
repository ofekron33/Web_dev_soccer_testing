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

test('acceptence test getEvent', async () => {
    const data = await games_utils.getEvents('15616');
    expect(data).toEqual([]);
});
