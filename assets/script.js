$(function () {
  //target DOM elements
  const timeBlocks = $('.time-block');
  const saveBtn = $('.saveBtn');
  // Listen for save button clicks, then save task text to local storage
  saveBtn.on('click', function() {
    let taskText = $(this).siblings('.description');
    let time = $(this).parent().attr('id'); 
    localStorage.setItem(time, taskText.val());
  })

  function updateColor() {
    let currentHour = dayjs().hour();
    //iterate over time blocks and add class based on current hour
    timeBlocks.each(function() {
      // Assign current time block jQuery object to currentBlock
      let currentBlock = $(this);
      // Get the hour value from the id of the current time block
      let currentBlockHour = parseInt(currentBlock.attr('id').slice(5)); 
      // add and remove classes based on comparison to current time
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
  // display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('MMM DD, YYYY [at] hh:mm a'));
  // call functions on page load
  showTasks();
  updateColor();
});
