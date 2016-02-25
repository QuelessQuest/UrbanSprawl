var Dialog = function() {

    var dialog = this;
    this.popup = null;
    this.words = null;
    this.ok = null;
    this.rst = null;
    this.ed = null;
    this.doit = null;

    var init = function() {
        dialog.popup = game.add.group();
        dialog.popup.x = 300;
        dialog.popup.y = 150;
        dialog.popup.addChild(game.make.image(0, 0, 'dialog'));
        dialog.words = game.make.text(0, 0, 'BLANK', styleWhite);
        dialog.words.setTextBounds(15, 26, 614, 162);
        dialog.words.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        dialog.popup.addChild(dialog.words);
        dialog.ok = game.make.button(300, 154, 'ok', dialog.click, this, 1, 0);
        dialog.popup.addChild(dialog.ok);
        dialog.ok.visible = false;
        dialog.rst = game.make.button(25, 155, 'btns', dialog.reset, this, 1, 0);
        dialog.popup.addChild(dialog.rst);
        dialog.rst.visibile = false;
        dialog.ed = game.make.button(560, 155, 'btns', dialog.end, this, 3, 2);
        dialog.popup.addChild(dialog.ed);
        dialog.ed.visible = false;
    };

    this.setText = function(text, o, r, e) {
        dialog.words.setText(text);
        dialog.ok.visible = (typeof o === 'undefined') ? true : o;
        dialog.rst.visible = (typeof r === 'undefined') ? false : r;
        dialog.ed.visible = (typeof e === 'undefined') ? false : e;
        dialog.popup.visible = true;
    };

    this.setButton = function(action) {
        dialog.doit = action;
    };

    this.click = function() {
        dialog.doit();
    };

    this.close = function() {
        dialog.popup.visible = false;
    };

    this.reset = function() {
        utils.resetTurn();
        dialog.popup.visible = false;
    };

    this.end = function() {
        utils.endTurn();
        dialog.popup.visible = false;
    };

    init();
};
