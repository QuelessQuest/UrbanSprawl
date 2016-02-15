var PlayerInfo = function() {

    var playerInfo = this;
    this.pColor = [];
    this.wealth = [];
    this.wCircle = game.add.sprite(720, 50, 'circles', 1);

    var init = function() {
        for (var j = 0; j < 4; j++) {
            playerInfo.pColor[j] = game.add.sprite(700, 55, 'tokens', parseInt(playerStuff[j].color, 10));
            playerInfo.wealth[j] = game.make.text(30, 1, playerStuff[j].wealth.toString(), styleBlack);
            playerInfo.wCircle.addChild(playerInfo.wealth[j]);
        }

        for (var i = 0; i < playerInfo.pColor.length; i++) {
            playerInfo.pColor[i].visible = false;
            playerInfo.wealth[i].visible = false;
        }
    };

    this.update = function(index) {
        for (var i = 0; i < playerInfo.pColor.length; i++) {
            if (i != index) {
                playerInfo.pColor[i].visible = false;
                playerInfo.wealth[i].visible = false;
            }
        }
        playerInfo.pColor[index].visible = true;
        playerInfo.wealth[index].visible = true;
    };

    init();
};
