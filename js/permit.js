var Permit = function (x, y, zoom, a, r) {

    var permit = this;
    this.pGroup = null;
    this.x = x;
    this.y = y;
    this.wealth = null;
    this.elect = null;
    this.pCount = null;
    this.scaledImage = null;
    this.ap = (typeof a === 'undefined') ? 0 : a;
    this.zoom = zoom;
    this.rotate = (typeof r === 'undefined') ? true : r;

    var init = function () {
        permit.pGroup = game.add.group();
        permit.pGroup.x = permit.x;
        permit.pGroup.y = permit.y;
        permit.scaledImage = game.make.sprite(0, 0, 'blankCard');
        permit.scaledImage.scale = {x: .45, y: .45};
        if (permit.ap > 0) permit.scaledImage.inputEnabled = true;
        permit.scaledImage.events.onInputOut.add(rollOut, this);
        permit.scaledImage.events.onInputOver.add(rollOver, this);
        permit.scaledImage.events.onInputDown.add(click, this);
        permit.pGroup.addChild(permit.scaledImage);
        permit.pCount = game.make.text(40, 0, "0", styleBlack);
        permit.pGroup.addChild(permit.pCount);
        var wGroup = game.add.group();
        wGroup.x = 63;
        wGroup.y = 97;
        var cImage = game.make.image(0, 0, 'circles', 12);
        cImage.scale = {x: .80, y: .80};
        wGroup.addChild(cImage);
        permit.wealth = game.make.text(5, 1, "0", styleSmallBlack);
        wGroup.addChild(permit.wealth);
        permit.pGroup.addChild(wGroup);
        permit.elect = game.make.image(30, 97, 'circles', 13);
        permit.elect.scale = {x: .80, y: .80};
        permit.pGroup.addChild(permit.elect);
        if (permit.rotate) permit.pGroup.angle = -90;
    };

    var rollOver = function () {
        if (apCount >= permit.ap) {
            var tween = game.add.tween(permit.pGroup);
            tween.to({x: permit.x - 3, y: permit.y - 3}, 100, Phaser.Easing.Exponential.easeOut);
            tween.start();
            permit.zoom.show();
        } else {
            permit.scaledImage.inputEnabled = false;
        }
    };

    var rollOut = function () {
        var tween = game.add.tween(permit.pGroup);
        tween.to({x: permit.x, y: permit.y}, 100, Phaser.Easing.Exponential.easeOut);
        tween.start();
        permit.zoom.hide();
    };

    var click = function () {
        permit.scaledImage.inputEnabled = false;
        permit.zoom.hide();
        permit.pGroup.visible = false;
        apCount = apCount - permit.ap;
        aps.setText(apCount);
    };

    this.lock = function() {
        permit.scaledImage.inputEnabled = false;
    };

    init();
};
