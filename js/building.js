var Building = function(x, y, z, o) {

    this.owner = o;
    this.zone = z;
    var building = this;
    this.bX = x;
    this.bY = y;

    this.button = game.add.button(x, y, 'small', building.zone);

    var init = function () {
        building.button.events.onInputOut.add(rollOut, this);
        building.button.events.onInputOver.add(rollOver, this);
        building.button.events.onInputDown.add(click, this);
    };

    var rollOver = function () {
        var tween = game.add.tween(building.button);
        tween.to({x:building.bX-3, y:building.bY-3}, 100, Phaser.Easing.Exponential.easeOut);
        tween.start();
    };

    var rollOut = function () {
        var tween = game.add.tween(building.button);
        tween.to({x:building.bX, y:building.bY}, 100, Phaser.Easing.Exponential.easeOut);
        tween.start();
    };

    var click = function () {
        if (building.owner == 0) {
            var ownerSprite = game.make.button(7, 7, 'tokens', 0);
            building.button.addChild(ownerSprite);
            building.owner = playerActive;
            actionFlag = true;
        }

    };

    this.lock = function() {
        building.button.inputEnabled = false;
    };

    this.destroy = function() {
        building.button.destroy();
    };

    this.reveal = function () {

    };

    init();
};
