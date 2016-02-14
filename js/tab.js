var Tab = function(i, name) {

    var styleBlack = { font: "16px Arial", fill: "#000000" };
    this.name = name;
    this.index = i;
    var tab = this;
    this.sprite = game.add.button(685 + (95 * tab.index), 18, 'tabs', utils.playerTabClick, this, 1, 2, 0);
    tab.sprite.addChild(game.make.text(5, 2, name, styleBlack));

    var init = function () {
        tab.sprite.events.onInputDown.add(click, this);
    };

    this.makeActive = function() {
        tab.sprite.addChild(game.make.sprite(70, 2, 'circles', 0));
    };

    var click = function() {
        for (var i = 0; i < ptab.length; i++) {
            if (i != tab.index) ptab[i].reset();
            tab.sprite.setFrames(0, 0, 0);
        }
    };

    this.reset = function() {
        tab.sprite.setFrames(1, 2, 0);
    };

    this.destroy = function() {
        tab.sprite.destroy();
    };

    init();

};
