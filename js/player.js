var playerStuff = [];
//var playerName = [];
var playerActive = "";
var playerPhase = "";
//var playerColor = [];

var Player = function (gameId) {

    return new Promise(function(resolve, reject) {

        $.get("http://localhost:8111/game/load/1/Players", function (data) {
            /*
             {"activePlayer":1,
             "phase":"SETUP",
             "players":[{"name":"Larry","id":1,"color":0,"wealth":0,"prestige":0,"vocations":"0","cards":"0","politicians":"0","favor":0},
             {"name":"John","id":2,"color":1,"wealth":0,"prestige":0,"vocations":"0","cards":"0","politicians":"0","favor":0},
             {"name":"Mark","id":3,"color":2,"wealth":0,"prestige":0,"vocations":"0","cards":"0","politicians":"0","favor":0},
             {"name":"JD","id":4,"color":3,"wealth":0,"prestige":0,"vocations":"0","cards":"0","politicians":"0","favor":0}]}
             */
            playerActive = data.activePlayer;
            playerPhase = data.phase;
            playerStuff = data.players;
            resolve("Players Loaded\n");
        })
            .fail(function () {
                reject(Error("Sorry"));
            });
    });
};

