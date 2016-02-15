var Building = function(x, y, z, o, c) {

    this.owner = o;
    this.zone = z;
    var building = this;
    this.bX = x;
    this.bY = y;
    this.cost = c;
    this.popup = {};

    this.sprite = game.add.sprite(x, y, 'small', building.zone);

    var init = function () {
        building.sprite.events.onInputOut.add(rollOut, this);
        building.sprite.events.onInputOver.add(rollOver, this);
        building.sprite.events.onInputDown.add(click, this);
        building.popup = game.add.sprite(building.bX - 25, building.bY - 63, 'callouts', 0);
        building.popup.visible = false;
        var txt = game.make.text(10, 10, "$ " + building.cost, styleBlack);
        building.popup.addChild(txt);
        building.popup.bringToTop();
    };

    var rollOver = function () {
        building.popup.visible = true;
        var tween = game.add.tween(building.sprite);
        tween.to({x:building.bX-3, y:building.bY-3}, 100, Phaser.Easing.Exponential.easeOut);
        tween.start();

    };

    var rollOut = function () {
        var tween = game.add.tween(building.sprite);
        tween.to({x:building.bX, y:building.bY}, 100, Phaser.Easing.Exponential.easeOut);
        tween.start();
        building.popup.visible = false;
    };

    var click = function () {
        if (building.owner == 0) {
            building.sprite.inputEnabled = false;
            var ownerSprite = game.make.sprite(7, 7, 'tokens', 0);
            building.sprite.addChild(ownerSprite);
            building.owner = playerActive;
            building.popup.visible = false;
            playerStuff[activeIndex].wealth = playerStuff[activeIndex].wealth - building.cost;
            playerInfo.wealth[activeIndex].setText(playerStuff[activeIndex].wealth.toString());
            var tween = game.add.tween(building.sprite);
            tween.to({x:building.bX, y:building.bY}, 100, Phaser.Easing.Exponential.easeOut);
            tween.start();
            actionFlag = true;
        }

    };

    this.lock = function() {
        building.sprite.input.useHandCursor = false;
        building.sprite.inputEnabled = false;
    };

    this.destroy = function() {
        building.sprite.destroy();
    };

    this.reveal = function () {

    };

    init();
};
