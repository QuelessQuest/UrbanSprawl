
var x = 0;
var y = 0;
var zoneColors = { "RES" : 3, "IND" : 1, "CIV" : 0, "COM" : 2, "NONE" : 4 };

/*
 [{"prestige":3,"value":0,"type":"PRESTIGE",
    "blocks":[
        {"row":0,"column":0,
            "buildings":[
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"},
                {"zone":"RES","size":1,"owner":0,"name":"StarterResOne"}],
            "wealth":1,"prestige":3},
       {"row":0,"column":1,
            "buildings":[
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"}],
            "wealth":4,"prestige":3},
       {"row":0,"column":2,
            "buildings":[
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"}],
            "wealth":5,"prestige":3},
       {"row":0,"column":3,
            "buildings":[
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"}],
            "wealth":6,"prestige":3},
       {"row":0,"column":4,
            "buildings":[
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"}],
            "wealth":3,"prestige":3},
       {"row":0,"column":5,
            "buildings":[
                {"owner":0,"name":"NONE"},
                {"owner":0,"name":"NONE"},
                {"zone":"RES","size":1,"owner":0,"name":"StarterResTwo"},
                {"owner":0,"name":"NONE"}],
            "wealth":2,"prestige":3}]},
   {"prestige":3,"value":0,"type":"PRESTIGE","blocks":[{"row":1,"column":0,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":1,"prestige":3},{"row":1,"column":1,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"zone":"IND","size":1,"owner":0,"name":"StarterIndOne"}],"wealth":4,"prestige":3},{"row":1,"column":2,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":5,"prestige":3},{"row":1,"column":3,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":6,"prestige":3},{"row":1,"column":4,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"zone":"COM","size":1,"owner":0,"name":"StarterComOne"},{"owner":0,"name":"NONE"}],"wealth":3,"prestige":3},{"row":1,"column":5,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":2,"prestige":3}]},{"prestige":1,"value":0,"type":"PRESTIGE","blocks":[{"row":2,"column":0,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":1,"prestige":1},{"row":2,"column":1,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":4,"prestige":1},{"row":2,"column":2,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"zone":"IND","size":1,"owner":0,"name":"StarterIndTwo"}],"wealth":5,"prestige":1},{"row":2,"column":3,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"zone":"COM","size":1,"owner":0,"name":"StarterComTwo"},{"owner":0,"name":"NONE"}],"wealth":6,"prestige":1},{"row":2,"column":4,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":3,"prestige":1},{"row":2,"column":5,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":2,"prestige":1}]},{"prestige":1,"value":0,"type":"PRESTIGE","blocks":[{"row":3,"column":0,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":1,"prestige":1},{"row":3,"column":1,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":4,"prestige":1},{"row":3,"column":2,"buildings":[{"owner":0,"name":"NONE"},{"zone":"COM","size":1,"owner":0,"name":"StarterComThree"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":5,"prestige":1},{"row":3,"column":3,"buildings":[{"zone":"CIV","size":1,"owner":0,"name":"StarterCivOne"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":6,"prestige":1},{"row":3,"column":4,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":3,"prestige":1},{"row":3,"column":5,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":2,"prestige":1}]},{"prestige":2,"value":0,"type":"PRESTIGE","blocks":[{"row":4,"column":0,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":1,"prestige":2},{"row":4,"column":1,"buildings":[{"owner":0,"name":"NONE"},{"zone":"COM","size":1,"owner":0,"name":"StarterComFour"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":4,"prestige":2},{"row":4,"column":2,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":5,"prestige":2},{"row":4,"column":3,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":6,"prestige":2},{"row":4,"column":4,"buildings":[{"zone":"CIV","size":1,"owner":0,"name":"StarterCivTwo"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":3,"prestige":2},{"row":4,"column":5,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":2,"prestige":2}]},{"prestige":2,"value":0,"type":"PRESTIGE","blocks":[{"row":5,"column":0,"buildings":[{"owner":0,"name":"NONE"},{"zone":"RES","size":1,"owner":0,"name":"StarterResThree"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":1,"prestige":2},{"row":5,"column":1,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":4,"prestige":2},{"row":5,"column":2,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":5,"prestige":2},{"row":5,"column":3,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":6,"prestige":2},{"row":5,"column":4,"buildings":[{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":3,"prestige":2},{"row":5,"column":5,"buildings":[{"zone":"RES","size":1,"owner":0,"name":"StarterResFour"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"},{"owner":0,"name":"NONE"}],"wealth":2,"prestige":2}]}]
 */

function processBuildings(buildings, wealth, prestige) {

    var processedBuildings = [];
    var zone = "";
    var bX;
    var bY;

    for (var i = 0; i < buildings.length; i++) {
        zone = "NONE";
        bX = 0;
        bY = 0;
        if (buildings[i].name != "NONE") {
            if (i == 0 || i == 2) {
                bX = x;
            } else {
                bX = x + 24;
            }
            if (i == 2 || i == 3) {
                bY = y + 24;
            } else {
                bY = y;
            }
            zone = buildings[i].zone;
        }
        processedBuildings[i] = new Building(bX, bY, zoneColors[zone], buildings[i].owner, wealth + prestige);
    }

    return processedBuildings;
}

function processBlocks(blocks) {

    var processedBlocks = [];
    /*
     {"row":0,"column":0,
     "buildings":[
           {"owner":0,"name":"NONE"},
            {"owner":0,"name":"NONE"},
            {"owner":0,"name":"NONE"},
            {"zone":"RES","size":1,"owner":0,"name":"StarterResOne"}],
     "wealth":1,"prestige":3},
     */
    for (var i = 0; i < blocks.length; i++) {
        x = 276 + (i * 60);
        processedBlocks[i] = {};
        processedBlocks[i].row = blocks[i].row;
        processedBlocks[i].column = blocks[i].column;
        processedBlocks[i].wealth = blocks[i].wealth;
        processedBlocks[i].prestige = blocks[i].prestige;
        processedBlocks[i].buildings = processBuildings(blocks[i].buildings, processedBlocks[i].wealth, processedBlocks[i].prestige);
    }

    return processedBlocks;
}

var Board = function() {

    var board = this;
    this.row = [];

    this.create = function() {
        for (var i = 0; i < rowData.length; i++) {
            y = 177 + (i * 60);
            board.row[i] = {};
            board.row[i].prestige = rowData[i].prestige;
            board.row[i].type = rowData[i].type;
            board.row[i].value = rowData[i].value;
            board.row[i].blocks = processBlocks(rowData[i].blocks);
        }
    };

    this.destroy = function() {
        for (var r = 0; r < board.row.length; r++) {
            for (var b = 0; b < board.row[r].blocks.length; b++) {
                for (var bd = 0; bd < board.row[r].blocks[b].buildings.length; bd++) {
                    board.row[r].blocks[b].buildings[bd].destroy();
                    board.row[r].blocks[b].buildings[bd] = [];
                }
            }
        }
    };

    this.lock = function() {
        for (var r = 0; r < board.row.length; r++) {
            for (var b = 0; b < board.row[r].blocks.length; b++) {
                for (var bd = 0; bd < board.row[r].blocks[b].buildings.length; bd++) {
                    board.row[r].blocks[b].buildings[bd].lock();
                }
            }
        }
    };

    this.pickBuilding = function() {
        dialog.popup.visible = false;
        for (var r = 0; r < board.row.length; r++) {
            for (var b = 0; b < board.row[r].blocks.length; b++) {
                for (var bd = 0; bd < board.row[r].blocks[b].buildings.length; bd++) {
                    if (board.row[r].blocks[b].buildings[bd].owner == 0 &&
                        (board.row[r].blocks[b].wealth + board.row[r].blocks[b].prestige <= playerStuff[activeIndex].wealth)) {
                        board.row[r].blocks[b].buildings[bd].sprite.inputEnabled = true;
                        board.row[r].blocks[b].buildings[bd].sprite.input.useHandCursor = true;
                    }
                }
            }
        }
    };

    this.availableBuilding = function() {
        for (var r = 0; r < board.row.length; r++) {
            for (var b = 0; b < board.row[r].blocks.length; b++) {
                for (var bd = 0; bd < board.row[r].blocks[b].buildings.length; bd++) {
                    if (board.row[r].blocks[b].buildings[bd].owner == 0 &&
                        (board.row[r].blocks[b].wealth + board.row[r].blocks[b].prestige <= playerStuff[activeIndex].wealth)) {
                            return true;
                    }
                }
            }
        }
        return false;
    }
};
