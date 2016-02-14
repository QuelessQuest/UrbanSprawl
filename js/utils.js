var Utils = function() {

    this.resetTurn = function () {
        log = "";
        boardSprite.destroy();
        board.destroy();
        for (var i = 0; i < 4; i++) {
            ptab[i].destroy();
        }
        if (playerPhase == "SETUP") actionFlag = true;
        location.reload(true);
    };

    this.playerTabClick = function() {

        for (var i = 0; i < ptab.length; i++) {

        }
    };
};
