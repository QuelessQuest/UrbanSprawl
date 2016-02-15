var rowData;
var columnData;

var LoadBoard = function() {
    return new Promise(function(resolve, reject) {
        var cd = new Promise(function(resolve, reject) {
            $.get("http://localhost:8111/game/load/1/CityColumns", function(data) {
                columnData = data;
                resolve("Loaded");
            }).fail(function() {
               reject(Error("Sorry"));
            });
        });
        cd.then(function(response) {
            $.get("http://localhost:8111/game/load/1/CityRows", function (data) {
                rowData = data;
                resolve("Loaded");
            }).fail(function () {
                reject(Error("Sorry"));
            });
        });
    });
};
