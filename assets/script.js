// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //target DOM elements
  const container = $('#container-lg');
  const timeBlocks = container.children('div');
  const saveBtn = $('.saveBtn');
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.on('click', function() {
    let taskText = $(this).siblings('.description');
    let time = $(this).parent().attr('id'); 
    localStorage.setItem(time, taskText.val());
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
    //iterate over time blocks and add class based on current hour
    timeBlocks.each(function() {
      // Assign current time block jQuery object to currentBlock
      let currentBlock = $(this);
      // Get the hour value from the id of the current time block
      let currentBlockHour = currentBlock.attr('id').slice(5); 

      if (currentBlockHour < currentHour) {
        currentBlock.addClass('past');
        currentBlock.removeClass('present');
        currentBlock.removeClass('future');
      }  else if (currentBlockHour === currentHour) {
        currentBlock.removeClass('past');
        currentBlock.addClass('present');
      }  else if (currentBlockHour > currentHour) {
        currentBlock.removeClass('past');
        currentBlock.removeClass('present');
        currentBlock.addClass('future');
      }
    });
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // Display tasks that were saved to local storage
  function showTasks() {
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  }
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('MMM DD, YYYY [at] hh:mm a'));
  // call functions on page load
  showTasks();
  updateColor();
});
