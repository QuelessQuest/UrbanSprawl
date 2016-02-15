var Utils = function() {

    this.resetTurn = function() {
        log = "";
        boardSprite.destroy();
        board.destroy();
        for (var i = 0; i < 4; i++) {
            ptab[i].destroy();
        }
        if (playerPhase == "SETUP") actionFlag = true;
        location.reload(true);
    };

    this.endTurn = function() {
        ptab[activeIndex].sprite.removeChildAt(1);
        activeIndex++;
        if (activeIndex > 3) activeIndex = 0;
        playerActive = playerStuff[activeIndex].id;
        ptab[activeIndex].makeActive();
        ptab[activeIndex].select();
        rButton.visible = false;
    };
};
