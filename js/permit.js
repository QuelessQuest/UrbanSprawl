var Permit = function (x, y, zoom, r) {

    var permit = this;
    this.pGroup = null;
    this.x = x;
    this.y = y;
    this.wealth = null;
    this.elect = null;
    this.pCount = null;
    this.zoom = zoom;
    this.rotate = (typeof r === 'undefined') ? true : r;

    var init = function () {
        permit.pGroup = game.add.group();
        permit.pGroup.x = permit.x;
        permit.pGroup.y = permit.y;
        var scaledImage = game.make.sprite(0, 0, 'blankCard');
        scaledImage.scale = {x: .45, y: .45};
        scaledImage.inputEnabled = true;
        scaledImage.events.onInputOut.add(rollOut, this);
        scaledImage.events.onInputOver.add(rollOver, this);
        permit.pGroup.addChild(scaledImage);
        permit.pCount = game.make.text(40, 0, "0", styleBlack);
        permit.pGroup.addChild(permit.pCount);
        var wGroup = game.add.group();
        wGroup.x = 63;
        wGroup.y = 97;
        var cImage = game.make.image(0, 0, 'circles', 12);
        cImage.scale = {x:.80, y:.80};
        wGroup.addChild(cImage);
        permit.wealth = game.make.text(5, 1, "0", styleSmallBlack);
        wGroup.addChild(permit.wealth);
        permit.pGroup.addChild(wGroup);
        permit.elect = game.make.image(30, 97, 'circles', 13);
        permit.elect.scale = {x:.80, y:.80};
        permit.pGroup.addChild(permit.elect);
        if (permit.rotate) permit.pGroup.angle = -90;
    };

    var rollOver = function () {
        var tween = game.add.tween(permit.pGroup);
        tween.to({x:permit.x-3, y:permit.y-3}, 100, Phaser.Easing.Exponential.easeOut);
        tween.start();
        permit.zoom.show();
    };

    var rollOut = function () {
        var tween = game.add.tween(permit.pGroup);
        tween.to({x:permit.x, y:permit.y}, 100, Phaser.Easing.Exponential.easeOut);
        tween.start();
        permit.zoom.hide();
    };

    init();
};
