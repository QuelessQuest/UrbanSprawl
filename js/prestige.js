var Prestige = function() {

    var prestige = this;
    this.values = [];

    var init = function() {
        prestige.values[0] = [{"x": 210, "y": 567}, {"x": 217, "y": 566}, {"x": 224, "y": 564}, {"x": 231, "y": 562}];
        for (var i = 1; i < 25; i++) {
            prestige.values[i] = [
                {"x": 210, "y": (543 - ((i - 1) * 17))},
                {"x": 217, "y": (542 - ((i - 1) * 17))},
                {"x": 224, "y": (540 - ((i - 1) * 17))},
                {"x": 231, "y": (538 - ((i - 1) * 17))}];
        }
        prestige.values[25] = [{"x": 210, "y": 124}, {"x": 217, "y": 123}, {"x": 224, "y": 121}, {"x": 231, "y": 119}];
        for (var j = 26; j < 50; j++) {
            prestige.values[j] = [
                {"x": 246 + ((j - 26) * 17), "y": 112},
                {"x": 247 + ((j - 26) * 17), "y": 119},
                {"x": 249 + ((j - 26) * 17), "y": 126},
                {"x": 251 + ((j - 26) * 17), "y": 133}];
        }
        prestige.values[50] = [{"x": 0, "y": 0}, {"x": 0, "y": 0}, {"x": 0, "y": 0}, {"x": 0, "y": 0}];
        for (var k = 51; k < 75; k++) {

        }
        prestige.values[75] = [{"x": 0, "y": 0}, {"x": 0, "y": 0}, {"x": 0, "y": 0}, {"x": 0, "y": 0}];
        for (var m = 76; m < 100; m++) {

        }
    };

    init();
};
