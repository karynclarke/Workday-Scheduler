$(document).ready(function(){
    var currentDay = moment();
    console.log(currentDay)


    $(".saveBtn").on("click",function(){
        var activity = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time,activity);
        });
})



function hourUpdater() {
    var currentHour = moment().hours();
    console.log(currentHour)


    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockHour)
    
    
        
        //time issues
        if (blockHour < currentHour) {
            $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else { 
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
        
    hourUpdater();


// data from local storage - maybe make this a loop?
$("#hour-7 .description").val(localStorage.getItem("hour-7"));
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));
$("#hour-6 .description").val(localStorage.getItem("hour-6"));


// today on a page
 $("#currentDay").text(moment().format("MMMM Do YYYY"));







