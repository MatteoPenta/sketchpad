/*
  TO-DOs
  * Adding columns
  etc.
*/

function main() {
  var container = $('.container');
  var boxesPerLine = 16; // starting value for n of boxes per each line

  // gets the width of the container to set
  // an appropriate width for the boxes based on
  // their number.
  var containerWidth = container.css('width');
  // WARNING: parseInt needs control cases
  var boxDimension = parseInt(containerWidth) / boxesPerLine;

  console.log(boxDimension);

  for (var i = 0; i < boxesPerLine; i++) {
    var box = $('<div class="box"></div>');
    box.css('width', boxDimension);
    box.css('height', boxDimension);

    $('.container').append(box);
  }

}

$(document).ready(main());
