var gameProperties = {
    screenWidth: 1280,
    screenHeight: 960
};

var states = {
    game: "game"
};

var gameId = 1;
var playerId = 1;
var activePlayer = false;
var actionFlag = false;

var log = "Loading\n";
var player;
var board;
var boardSprite;
var ptab;
var utils;
var activeIndex;
var playerInfo;
var markers;
var score;
var rButton;
var aps;
var apCount;
var dialog;
var allCards = [];
var styleBlack = { font: "16px Arial", fill: "#000000" };
var styleSmallBlack = { font: "14px Arial", fill: "#000000" };
var styleBigBlack = { font: "32px Arial", fill: "#000000" };
var styleWhite = { font: "16px Arial", fill: "#fff",
    align: "center",
    boundsAlignH: "center",
    boundsAlignV: "top" };
var gameState = function(game){
    this.board;
    this.player;
    this.utils;
};

gameState.prototype = {

    preload: function () {
        playerId = game.net.getQueryString('player');
        if (typeof playerId === "object") playerId = 1;
        gameId = game.net.getQueryString('game');
        if (typeof gameId === "object") gameId = 1;

        game.load.image('board', 'images/board.png');
        game.load.spritesheet('tabs', 'images/tabs.png', 96, 29);
        game.load.spritesheet('circles', 'images/circles.png', 21, 21);
        game.load.spritesheet('small', 'images/smallbuildings.png', 24, 24);
        game.load.spritesheet('tokens', 'images/tokens.png', 12, 12);
        game.load.spritesheet('backs', 'images/backs.png', 120, 91);
        game.load.spritesheet('callouts', 'images/callout.png', 68, 63);
        game.load.spritesheet('ok', 'images/ok.png', 54, 22);
        game.load.spritesheet('btns', 'images/btns.png', 87, 21);
        game.load.image('blankCard', 'images/blankCard.png');
        game.load.image('playerpermits', 'images/playerpermits.png');
        game.load.spritesheet('smallpermit', 'images/smallpermit.png', 14, 14);
        game.load.image('dialog', 'images/dialog.png');
    },

    create: function () {
        var loadBoard = new LoadBoard(gameId);
        loadBoard.then(function(response) {
            log = game.add.text(1, 701, "Loading\nBoard Loaded\n", styleWhite);
            log.setTextBounds(16, 16, 768, 568);
            score = new Prestige();
            player = new Player(gameId);
            utils = new Utils();
            var ac = new AllCards();

            boardSprite = game.add.image(0, 0, 'board');
            ptab = [];
            ac.then(function (response) {
                player.then(function (response) {
                    log.setText(log.text + response);
                    playerInfo = new PlayerInfo();

                    board = new Board();
                    board.create();

                    markers = new Markers();

                    var zoom = new Zoom(1088, 5);

                    for (var i = 0; i < 4; i++) {
                        ptab[i] = new Tab(i, playerStuff[i].name);
                        if (playerActive == playerStuff[i].id) {
                            ptab[i].makeActive();
                            activeIndex = i;
                            ptab[i].select();
                        }
                    }

                    var eButton = game.add.button(607, 647, 'tabs', utils.endTurn, this, 1, 2, 0);
                    eButton.addChild(game.make.text(5, 3, "End Turn", styleBlack));
                    rButton = game.add.button(223, 647, 'tabs', utils.resetTurn, this, 1, 2, 0);
                    rButton.addChild(game.make.text(5, 3, "Reset Turn", styleBlack));

                    // Card Setup HERE
                    var permits = [];
                    for (var p = 0; p < 5; p++) {
                        permits[p] = new Permit(31, 668 - (p * 104), zoom, p + 1);
                        permits[p].lock();
                    }
                    permits[5] = new Permit(47, 15, zoom, 0, false);
                    permits[5].lock();

                    if (playerActive == playerId) {
                        activePlayer = true;
                    }

                    return "";

                }).then(function (response) {
                    log.setText(log.text + response);

                    game.add.sprite(780, 640, 'circles', 2);
                    game.add.sprite(747, 258, 'backs', 0);
                    game.add.sprite(747, 358, 'backs', 1);
                    game.add.sprite(747, 155, 'backs', 2);
                    aps = game.add.text(783, 507, '6', styleBigBlack);
                    apCount = 6;

                    dialog = new Dialog();

                    var logic = new Logic();
                    logic.performGamePhase(activePlayer, playerPhase);
                });
            });
        });
    },

    update: function () {
        if (playerPhase == "SETUP" && actionFlag) {
            board.lock();
            actionFlag = false;
            dialog.setText(playerPhase + "\n\nYou have purchased a building.\nYou may now end your turn.\n", false, true, true);
        }
    },

    render: function() {
    }
};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
game.state.add(states.game, gameState);
game.state.start(states.game);
