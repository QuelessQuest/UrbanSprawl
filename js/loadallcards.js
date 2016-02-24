var LoadAllCards = function() {
    return new Promise(function (resolve, reject) {
        $.get("http://localhost:8111/game/load/1/AllCards", function (data) {
            resolve(data);
        }).fail(function () {
            reject(Error("Sorry"));
        });
    });
};
