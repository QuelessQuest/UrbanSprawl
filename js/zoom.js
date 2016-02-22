var Zoom = function (x, y) {

    var zoom = this;
    this.zGroup = null;
    this.x = x;
    this.y = y;
    this.wealth = null;
    this.elect = null;
    this.pCount = null;

    var init = function () {
        zoom.zGroup = game.add.group();
        zoom.zGroup.x = zoom.x;
        zoom.zGroup.y = zoom.y;
        zoom.zGroup.addChild(game.make.sprite(0, 0, 'blankCard'));
        zoom.pCount = game.make.text(90, 115, "0", styleBigBlack);
        zoom.zGroup.addChild(zoom.pCount);
        var wGroup = game.add.group();
        wGroup.x = 145;
        wGroup.y = 225;
        wGroup.addChild(game.make.image(0, 0, 'circles', 12));
        zoom.wealth = game.make.text(5, 1, "0", styleBlack);
        wGroup.addChild(zoom.wealth);
        zoom.zGroup.addChild(wGroup);
        zoom.elect = game.make.image(30, 97, 'circles', 13);
        zoom.zGroup.addChild(zoom.elect);
        zoom.zGroup.visible = false;
    };

    this.show = function() {
        zoom.zGroup.visible = true;
    };

    this.hide = function() {
        zoom.zGroup.visible = false;
    };

    init();
};
