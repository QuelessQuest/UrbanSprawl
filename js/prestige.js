var Prestige = function() {

    var prestige = this;
    this.values = [];

    var init = function() {
        for (var i = 1; i < 25; i++) {
            prestige.values[i] = [{"x": 210, "y": (543 - ((i - 1) * 17))},
                {"x": 217, "y": (542 - ((i - 1) * 17))}, {"x": 224, "y": (540 - ((i - 1) * 17))},
                {"x": 231, "y": (538 - ((i - 1) * 17))}];
        }
    };

    init();
};
