var Permits = function() {

    var permit = this;
    this.permitGroups = [];

    var init = function() {
        for (var p = 0; p < 5; p++) {
            permit.permitGroups[p] = game.add.group();
            permit.permitGroups[p].x = 31;
            permit.permitGroups[p].y = 668 - (p * 104);
            var scaledImage = game.make.image(0, 0, 'blankCard');
            scaledImage.scale = {x :.45, y :.45};
            scaledImage.angle = -90;
            permit.permitGroups[p].addChild(scaledImage);
            var pCount = game.make.text(40, 60, "0", styleBlack);
            pCount.angle = -90;
            permit.permitGroups[p].addChild(pCount);
        }
        permit.permitGroups[5] = game.add.group();
        permit.permitGroups[5].x = 47;
        permit.permitGroups[5].y = 15;
        var sImage = game.make.image(0, 0, 'blankCard');
        sImage.scale = {x :.45, y :.45};
        permit.permitGroups[5].addChild(sImage);
        permit.permitGroups[5].addChild(game.make.text(45, 60, "0", styleBlack));
    };

    init();
};
