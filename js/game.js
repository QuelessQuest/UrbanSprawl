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
var rButton;
var styleBlack = { font: "16px Arial", fill: "#000000" };

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
    },

    create: function () {
        var styleWhite = { font: "16px Arial", fill: "#fff",
            align: "left",
            boundsAlignH: "left",
            boundsAlignV: "top",
            wordWrap: true, wordWrapWidth: 300 };

        var loadBoard = new LoadBoard(gameId);
        loadBoard.then(function(response) {
            log = game.add.text(1, 701, "Loading\nBoard Loaded\n", styleWhite);
            log.setTextBounds(16, 16, 768, 568);
            player = new Player(gameId);
            utils = new Utils();

            boardSprite = game.add.button(0, 0, 'board');

            ptab = [];

            player.then(function (response) {
                log.setText(log.text + response);
                playerInfo = new PlayerInfo();

                board = new Board();
                board.create();

                markers = new Markers();

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

                var resp = "";
                if (playerActive == playerId) {
                    resp += "It is your turn\n";
                    activePlayer = true;
                } else {
                    resp += "You are not the active player\n";
                }

                return resp;

            }).then(function (response) {
                log.setText(log.text + response);

                game.add.sprite(780, 640, 'circles', 2);
                game.add.sprite(747, 258, 'backs', 0);
                game.add.sprite(747, 358, 'backs', 1);

                if (activePlayer && playerPhase == "SETUP") {
                    log.setText(log.text + "Choose an available building to purchase\n");
                    board.pickBuilding();
                }
            });
        });
    },

    update: function () {
        if (playerPhase == "SETUP" && actionFlag) {
            board.lock();
            actionFlag = false;
            log.setText(log.text + "Building purchased. End your turn\n");
        }
    },

    render: function() {
    }
};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
game.state.add(states.game, gameState);
game.state.start(states.game);
