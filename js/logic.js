var Logic = function() {

    this.performGamePhase = function(active, phase) {

        if (active && phase == "SETUP") {
            log.setText(log.text + "Choose an available building to purchase\n");
            board.pickBuilding();
        }
    };

};
