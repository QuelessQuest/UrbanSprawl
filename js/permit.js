var Permit = function (x, y, r) {

    var permit = this;
    this.pGroup = null;
    this.x = x;
    this.y = y;
    this.rotate = (typeof r === 'undefined') ? true : r;

    var init = function () {
        permit.pGroup = game.add.group();
        permit.pGroup.x = permit.x;
        permit.pGroup.y = permit.y;
        permit.pGroup.hitArea = new Phaser.Rectangle(permit.x, permit.y, 115, 82);
        var scaledImage = game.make.sprite(0, 0, 'blankCard');
        scaledImage.scale = {x: .45, y: .45};
        if (permit.rotate) scaledImage.angle = -90;
        scaledImage.inputEnabled = true;
        scaledImage.events.onInputOut.add(rollOut, this);
        scaledImage.events.onInputOver.add(rollOver, this);
        permit.pGroup.addChild(scaledImage);
        var pCount = game.make.text(40, 0, "0", styleBlack);
        if (permit.rotate) pCount.angle = -90;
        permit.pGroup.addChild(pCount);
    };

    var rollOver = function () {
        var tween = game.add.tween(permit.pGroup);
        tween.to({x:permit.x-3, y:permit.y-3}, 100, Phaser.Easing.Exponential.easeOut);
        tween.start();
    };

    var rollOut = function () {
        var tween = game.add.tween(permit.pGroup);
        tween.to({x:permit.x, y:permit.y}, 100, Phaser.Easing.Exponential.easeOut);
        tween.start();
    };

    init();
};
