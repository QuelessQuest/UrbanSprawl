var Building = function(x, y, z, o) {

    this.owner = o;
    this.zone = z;
    var building = this;
    this.bX = x;
    this.bY = y;

    this.sprite = game.add.sprite(x, y, 'small', building.zone);

    var init = function () {
        building.sprite.events.onInputOut.add(rollOut, this);
        building.sprite.events.onInputOver.add(rollOver, this);
        building.sprite.events.onInputDown.add(click, this);
    };

    var rollOver = function () {
        var tween = game.add.tween(building.sprite);
        tween.to({x:building.bX-3, y:building.bY-3}, 100, Phaser.Easing.Exponential.easeOut);
        tween.start();
    };

    var rollOut = function () {
        var tween = game.add.tween(building.sprite);
        tween.to({x:building.bX, y:building.bY}, 100, Phaser.Easing.Exponential.easeOut);
        tween.start();
    };

    var click = function () {
        if (building.owner == 0) {
            var ownerSprite = game.make.sprite(7, 7, 'tokens', 0);
            building.sprite.addChild(ownerSprite);
            building.owner = playerActive;
            actionFlag = true;
        }

    };

    this.lock = function() {
        building.sprite.inputEnabled = false;
    };

    this.destroy = function() {
        building.sprite.destroy();
    };

    this.reveal = function () {

    };

    init();
};
