var rowData = [];
var columnData = [];

var LoadBoard = function(gameId) {
    return new Promise(function(resolve, reject) {
        var cd = new Promise(function(resolve, reject) {
            $.get("http://localhost:8111/game/load/" + gameId + "/CityColumns", function(data) {
                columnData = data;
                resolve("Loaded");
            }).fail(function() {
               reject(Error("Sorry"));
            });
        });
        cd.then(function(response) {
            $.get("http://localhost:8111/game/load/" + gameId + "/CityRows", function (data) {
                rowData = data;
                resolve("Loaded");
            }).fail(function () {
                reject(Error("Sorry"));
            });
        });
    });
};
