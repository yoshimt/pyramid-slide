

function outputUpdate(vol) {
    document.querySelector("#rangeNum").value = vol;
}


function userInput() {
    var heightElem = document.getElementById("height").value;
    var symbolElem = symbol.options[symbol.selectedIndex].value;
    height = parseInt(heightElem);
    drawPyramid(height, symbolElem);
}

function drawPyramid(height, symbol) {

    document.getElementById("pyramid").innerHTML = "";
    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);


    }
}
