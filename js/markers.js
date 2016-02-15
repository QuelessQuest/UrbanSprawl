var Markers = function() {

    var markers = this;
    this.wealth = [];
    this.prestige = [];

    var init = function() {
        for (var i = 0; i < 6; i++) {
            markers.wealth[i] = game.add.image(433 + (i*26), 657, 'circles', i + 3);
        }
        for (var j = 0; j < 3; j++) {
            markers.prestige[j] = game.add.image(348 + (j*26), 657, 'circles', j + 9);
        }
    };

    init();
};
