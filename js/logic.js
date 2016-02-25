var Logic = function() {

    this.performGamePhase = function(active, phase) {

        if (active && phase == "SETUP") {
            dialog.setText(phase + "\n\nIt is your turn.\nChoose an available building to purchase.\n");
            dialog.setButton(board.pickBuilding);
        }
        if (!active) {
            dialog.setText(phase + "\n\nIt is not your turn.\nYou have no pending actions to resolve.\n");
            dialog.setButton(dialog.close);
        }
    };

};
