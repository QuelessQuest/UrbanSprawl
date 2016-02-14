var playerNum = [];
var playerName = [];
var playerActive = "";
var playerPhase = "";
var playerColor = [];

var Player = function (gameId) {

    return new Promise(function(resolve, reject) {

        $.get("http://localhost:8111/game/load/1/Players", function (data) {
            playerNum[0] = data.playerOne;
            playerNum[1] = data.playerTwo;
            playerNum[2] = data.playerThree;
            playerNum[3] = data.playerFour;
            playerActive = data.activePlayer;
            playerName[0] = data.p1Name;
            playerName[1] = data.p2Name;
            playerName[2] = data.p3Name;
            playerName[3] = data.p4Name;
            playerPhase = data.state;
            playerColor[0] = data.colorOne;
            playerColor[1] = data.colorTwo;
            playerColor[2] = data.colorThree;
            playerColor[3] = data.colorFour;
            resolve("Players Loaded\n");
        })
            .fail(function () {
                reject(Error("Sorry"));
            });
    });
};

