
var viewDifferentDays;

var dayStart = 9;

var todaysDate = moment().format("MMMM Do YYYY");

var lengthOfWorkDay = 9;

startDay(todaysDate);

function startDay (today) {
    //set which day you are viewing
    viewDifferentDays = today;
    //add date at top of page
    $("#currentDay").text(today);
    //console.log(day);
    //get events already entered from local storage
    var calendar = [];
    if (localStorage.getItem(today)){
      calendar = JSON.parse(localStorage.getItem(today));
      console.log("initialize day calendar: " + calendar)
    }
    //get current time

    //create time blocks
    for (var i = 0; i < lengthOfWorkDay; i++){
      dispTime = dayStart + i;
      
      var container = $("<div>").attr("class", "input-group input-group-lg mb-2"); 
      $("#timeblocks").append(container);

      var itsShowTime = $("<div>").attr("class", "input-group-prepend");
      container.append(itsShowTime);
      var thisTime = $("<span>");
      thisTime.attr("id", "inputGroup-sizing-lg");
      thisTime.text(dispTime + ":00");
      itsShowTime.append(thisTime);

      var eventInput = $("<input>").attr("type", "text");
      eventInput.attr("class", "form-control");
      eventInput.attr("id", "event" + dispTime);
      if (calendar[i]){
        eventInput.attr("value", calendar[i]);
      }
      eventInput.attr("aria-label", "Large");
      eventInput.attr("aria-describedby", "inputGroup-sizing-sm");
      container.append(eventInput);

      var btnDiv = $("<div>").attr("class", "input-group-append");
      container.append(btnDiv);
      var sBtn = $("<button>");
      sBtn.attr("type", "button");
      sBtn.attr("id", ("sBtn" + dispTime));
      sBtn.attr("value", dispTime);
      sBtn.text("Save");
      btnDiv.append(sBtn);

    


    //   $("#sBtn" + dispTime).on("click", function () {
    //     updateLocalStorage(today, $(this).attr("value"), $(this).parent().parent().find("input").val())
    //   });

    }

}
// update local storage
function uls(day, time, event) {
  var newDay = [];
  //loop through the events currently on the page to create an array
  for (var i = 0; i < lengthOfWorkDay; i++){
    var getTime = dayStart + i;
    var getEvent = $("#event" + getTime).val();
    newDay[i] = getEvent;
  }
  
  //set localstorage
  console.log("saving array: " + newDay);
  localStorage.setItem(day, JSON.stringify(newDay));
}

function clearDay (){
  //clear out all of the events
  $("#timeblocks").empty();
}




