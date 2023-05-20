//target DOM elements
const container = $('#container-lg');
const timeBlocks = container.children('div');
const saveBtn = $('.saveBtn');
//create variables to store dayJS
let today = dayjs();


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.on('click', function() {
    let taskText = $(this).siblings('textarea');
    let time = $(this).parent().attr('id'); 
    localStorage.setItem(taskText.val(), time);
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function updateColor() {
    let currentHour = dayjs().hour();
    //need to figure out how to get id from time blocks to compare to current hour
    //for loop to iterate over time blocks and add class
    for (let i = 0; i < timeBlocks.length; i++) {
      // Assign current time block jQuery object to currentBlock
      let currentBlock = $(timeBlocks.get(i));
      // Get the hour value from the id of the current time block
      let currentBlockHour = currentBlock.attr('id').slice(5); 
      console.log(currentBlockHour);

      if (currentBlockIndex < currentHour) {
        currentBlock.addClass('past');
      }  else if (currentBlockIndex === currentHour) {
        currentBlock.removeClass('past');
        currentBlock.addClass('present');
      }  else if (currentBlockIndex > currentHour) {
        currentBlock.removeClass('past');
        currentBlock.removeClass('present');
        currentBlock.addClass('future');
      }
      console.log('testing')
    }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('MMM DD, YYYY [at] hh:mm a'));
  // call functions on page load

  updateColor();
});
