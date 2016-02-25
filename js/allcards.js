//http://localhost:8111/game/load/1/AllCards
/*
 [{"name":"Clinic","permits":1,"election":false,"wealth":0,"prestige":1,
    "vocations":[{"name":"Public Service","value":1}],"effect":" ","permitType":[2]},
  {"name":"Courthouse","permits":2,"election":false,"wealth":0,"prestige":0,
    "vocations":[{"name":"NONE","value":0}],"effect":" ","permitType":[2]},
  {"name":"Fire Station","permits":1,"election":false,"wealth":0,"prestige":0,
  "vocations":[{"name":"Public Service","value":1}],"effect":" ","permitType":[2]}]
 */
var AllCards = function() {

    return new Promise(function (resolve, reject) {
        $.get("http://localhost:8111/game/load/1/AllCards", function (data) {
            allCards = data;
            resolve("Loaded");
        }).fail(function () {
            reject(Error("Sorry"));
        });
    });
};
