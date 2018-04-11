var mousePositionDisplay = $('.mousePosition');
var mouseMove = function(event) {
  // set the text of our element to the x and y positions of our mouse
  mousePositionDisplay.text('X: ' + event.pageX + ', Y: ' + event.pageY);
  // change the position of our element using the event object passed as an argument
  // to this function automatically by jquery
  mousePositionDisplay.css({
    top: event.pageY,
    left: event.pageX
  });
}


// here we are listening to `mousemove` events that occur on the document
// when your mouse moves the `mouseMove` function will be called
$(document).on('mousemove', mouseMove);