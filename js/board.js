
var x = 0;
var y = 0;
var drawBuildings = [];
var zoneColors = { "RES" : 3, "IND" : 1, "CIV" : 0, "COM" : 2 };
var d = 0;

function processBuilding(building, index, array) {
    if (building.name != "NONE") {
        var bX;
        var bY;
        if (index == 0 || index == 2) {
            bX = x;
        } else {
            bX = x + 24;
        }
        if (index == 2 || index == 3) {
            bY = y + 24;
        } else {
            bY = y;
        }

        drawBuildings[d] = new Building(bX, bY, zoneColors[building.zone], building.owner);
        d++;
    }
}

function processBlock(block, index, array) {
    x = 276 + (index * 60);
    block.buildings.forEach(processBuilding);
}

function processRow(row, index, array) {
    y = 177 + (index * 60);
    row.blocks.forEach(processBlock);
}

var Board = function (gameId) {

    var init = function() {
        $.get("http://localhost:8111/game/load/1/CityRows", function (data) {
            data.forEach(processRow);
        }).fail(function () {
            alert("Sorry");
        });
    };

    this.destroy = function() {
        for (var i = 0; i < drawBuildings.length; i++) {
            drawBuildings[i].destroy();
        }
        drawBuildings = [];
    };

    this.pickBuilding = function() {
        for (var i = 0; i < drawBuildings.length; i++) {
            if (drawBuildings[i].owner == 0) {
                drawBuildings[i].sprite.inputEnabled = true;
                drawBuildings[i].sprite.input.useHandCursor = true;
            }
        }
    };

    init();
};

