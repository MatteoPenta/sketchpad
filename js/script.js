/*
  TO-DOs
  * Add New button
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

      break;
    default:

  }
}

function main() {
  var container = $('.grid-wrapper');
  var boxesPerLine = 16; // starting value for n of boxes per each line

  // gets the width of the container to set
  // an appropriate width for the boxes based on
  // their number.
  var containerWidth = container.css('width');
  // WARNING: parseInt needs control cases
  var boxDimension = parseInt(containerWidth) / boxesPerLine;


  /* draws a single line with all the boxes
   they will be split into different lines thanks to the flexbox */
  for (var i = 0; i < boxesPerLine*boxesPerLine; i++) {
    var box = $('<div class="box"></div>');
    box.css('width', boxDimension);
    box.css('height', boxDimension);

    $('.grid-wrapper').append(box);
  }

  /* Sets the state of the hovered box accordingly to
  its previous state */
  $('.box').hover(function() {
    if (state === 'hovered') {
      $(this).addClass('hovered');
    } else {
      $(this).removeClass('hovered');
    }
  });

  /* Button Click handlers */
  $('.button').on('click', buttonHandler);

}


$(document).ready(main());
