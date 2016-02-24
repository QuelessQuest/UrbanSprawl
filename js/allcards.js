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

    var allCards = this;
    this.cardData = [];

    var init = function() {

        var loadAllCards = new LoadAllCards();
        loadAllCards.then(function(cardsReturned) {
            allCards.cardData = cardsReturned;
        });
    }

    init();
};
