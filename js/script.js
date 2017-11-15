/*
  TO-DOs
  * Draw only when key pressed
*/

var state = 'hovered';

/* Behaves accordingly to the name of the button clicked
*/
function buttonHandler() {
  var buttonClicked = $(this).attr('name');

  switch (buttonClicked) {
    case "drawEraseToggle":
      /*
      Retrieves the current text of the button.
      Cases:
        > 'Erase'-> change to 'Draw', sets state to 'white';
        > 'Draw'->change to 'Erase', sets state to 'hovered'.
      */
      var drawEraseCurrentState = $(this).text();

      if (drawEraseCurrentState == "Erase") {
        state = 'white';
        $(this).text('Draw');
      } else {
        state = 'hovered';
        $(this).text('Erase');
      }

      break;
    case "new":

      newBoxesPerLine = prompt("How many squares per side?");

      // Input control
      if (!isNaN(newBoxesPerLine)) {
        eraseGrid();
        drawGrid(newBoxesPerLine);
        hoverListener();
      } else {
        alert("Please insert a valid value.");
      }

      break;
    default:

  }
}

function eraseGrid() {
  $('.grid-wrapper').text("");
}

function drawGrid(boxesPerLine) {
  var container = $('.grid-wrapper');

  // gets the width of the container to set
  // an appropriate width for the boxes based on
  // their number.
  var containerWidth = container.css('width');
  // WARNING: parseInt needs control cases
  var boxDimension = parseInt(containerWidth) / boxesPerLine;


  /* draws a single line with all the boxes
   they will be split into different lines thanks to the flexbox */

  var box = $('<div class="box"></div>');

  for (var i = 0; i < boxesPerLine*boxesPerLine; i++) {
    box.css('width', boxDimension);
    box.css('height', boxDimension);
    $('.grid-wrapper').append(box);
    box = $('<div class="box"></div>');
  }
}


function hoverListener() {

  /* Sets the state of the hovered box accordingly to
  its previous state */
  $('.box').hover(function() {
    if (state === 'hovered') {
      $(this).addClass('hovered');

      // TO-DO
      // creates a color variable with random RGB values
      var color = "rgb("+ Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ")";
      // $(this).filter('.hovered').css('background-color', color);
    } else {
      $(this).removeClass('hovered');
    }
  });

}

function main() {

  drawGrid(16);
  hoverListener();
  /* Button Click handlers */
  $('.button').on('click', buttonHandler);


}


$(document).ready(main());
