var LoadCards = function (gameId, deck, items) {
    return new Promise(function (resolve, reject) {
        $.get("http://localhost:8111/game/load/" + gameId + "/Cards?deck=" + deck + "&items=" + items, function (data) {
            resolve(data);
        }).fail(function () {
            reject(Error("Sorry"));
        });
    });
};
