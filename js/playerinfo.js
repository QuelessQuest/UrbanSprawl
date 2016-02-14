var PlayerInfo = function() {

    var playerInfo = this;
    this.pColor = [];
    game.add.sprite(720, 50, 'circles', 1);

    var init = function() {
        playerInfo.pColor[0] = game.add.sprite(700, 55, 'tokens', parseInt(playerStuff[0].color, 10));
        playerInfo.pColor[1] = game.add.sprite(700, 55, 'tokens', parseInt(playerStuff[1].color, 10));
        playerInfo.pColor[2] = game.add.sprite(700, 55, 'tokens', parseInt(playerStuff[2].color, 10));
        playerInfo.pColor[3] = game.add.sprite(700, 55, 'tokens', parseInt(playerStuff[3].color, 10));
        for (var i = 0; i < playerInfo.pColor.length; i++) {
            playerInfo.pColor[i].visible = false;
        }
    };

    this.update = function(index) {
        for (var i = 0; i < playerInfo.pColor.length; i++) {
            if (i != index) {
                playerInfo.pColor[i].visible = false;
            }
        }
        playerInfo.pColor[index].visible = true;
    };

    init();
};
