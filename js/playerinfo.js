var PlayerInfo = function() {

    var playerInfo = this;
    this.pColor = [];
    this.wealth = [];
    this.wCircle = game.add.sprite(720, 50, 'circles', 1);
    this.prestige = [];
    this.permits = [];

    var init = function() {
        for (var j = 0; j < 4; j++) {
            playerInfo.pColor[j] = game.add.sprite(700, 55, 'tokens', parseInt(playerStuff[j].color, 10));
            playerInfo.wealth[j] = game.make.text(30, 1, playerStuff[j].wealth.toString(), styleBlack);
            playerInfo.wCircle.addChild(playerInfo.wealth[j]);
            playerInfo.prestige[j] = game.add.sprite(score.values[playerStuff[j].prestige][j].x, score.values[playerStuff[j].prestige][j].y, 'tokens', parseInt(playerStuff[j].color, 10));
            var cards = playerStuff[j].cards.split(",");
            playerInfo.permits[j] = [];
            for (var k = 0; k < cards.length; k++) {
                if (cards[k] == 0) break;
                playerInfo.permits[j][k] = game.add.group();
                playerInfo.permits[j][k].x = 805 + (k * 45);
                playerInfo.permits[j][k].y = 51;
                playerInfo.permits[j][k].addChild(game.make.image(0, 0, 'playerpermits'));
                playerInfo.permits[j][k].addChild(game.make.text(16, 5, "0", styleSmallBlack));
                playerInfo.permits[j][k].addChild(game.make.text(16, 26, "0", styleBlack));
                var pv = game.make.image(5, 47, 'smallpermit', 0);
                if ($.inArray(2, allCards[cards[k]].permitType) < 0) {
                    pv.alpha = 0.25;
                }
                playerInfo.permits[j][k].addChild(pv);
                var pc = game.make.image(22, 47, 'smallpermit', 1);
                if ($.inArray(1, allCards[cards[k]].permitType) < 0) {
                    pc.alpha = 0.25;
                }
                playerInfo.permits[j][k].addChild(pc);
                var pi = game.make.image(5, 64, 'smallpermit', 2);
                if ($.inArray(3, allCards[cards[k]].permitType) < 0) {
                    pi.alpha = 0.25;
                }
                playerInfo.permits[j][k].addChild(pi);
                var pr = game.make.image(22, 64, 'smallpermit', 3);
                if ($.inArray(4, allCards[cards[k]].permitType) < 0) {
                    pr.alpha = 0.25;
                }
                playerInfo.permits[j][k].addChild(pr);
                playerInfo.permits[j][k].visible = false;
            }
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
                for (var k = 0; k < playerInfo.permits[i].length; k++) {
                    playerInfo.permits[i][k].visible = false;
                }
            }
        }
        playerInfo.pColor[index].visible = true;
        playerInfo.wealth[index].visible = true;
        for (var j = 0; j < playerInfo.permits[index].length; j++) {
            playerInfo.permits[index][j].visible = true;
        }
    };

    init();
};
