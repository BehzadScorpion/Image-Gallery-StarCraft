$(document).ready(function () {

    $("#1").css("background-image", "url(Images/image1.jpg)");
    $("#2").css("background-image", "url(Images/image2.jpg)").hide();
    $("#3").css("background-image", "url(Images/image3.jpg)").hide();
    $("#4").css("background-image", "url(Images/image4.jpg)").hide();
    var slideNumber = 1;
    var next = $(".arrowNext");
    var previous = $(".arrowPrevious");
    var interval = 4000;
    var fadeInterval = 1175;
    var timer = window.setInterval(intervalAction, interval);
    


    $(next).click(function () {
        clearInterval(timer);
        if (slideNumber < 4) {
            slideNumber++;
            forwardSwitch();
        }
        else {
            slideNumber = 1;
            $("#4").hide();
            $("#1").fadeIn(fadeInterval);
        }   
        timer = window.setInterval(intervalAction, interval);
    });

    
    $(previous).click(function () {
        clearInterval(timer);
        if (slideNumber > 1) {
            slideNumber--;
            backwardSwitch();
        }
        else {
            slideNumber = 4;
            $("#1").hide();
            $("#4").fadeIn(fadeInterval);
        }
        timer = window.setInterval(intervalAction, interval);
    });

    function forwardSwitch() {
        switch (slideNumber) {
            case 2:
                $("#1").hide();
                $("#2").fadeIn(fadeInterval);
                break;
            case 3:
                $("#2").hide();
                $("#3").fadeIn(fadeInterval);
                break;
            case 4:
                $("#3").hide();
                $("#4").fadeIn(fadeInterval);
                break;
        }

    }

    function backwardSwitch() {
        switch (slideNumber) {

            case 3:
                $("#4").hide();
                $("#3").fadeIn(fadeInterval);
                break;
            case 2:
                $("#3").hide();
                $("#2").fadeIn(fadeInterval);
                break;
            case 1:
                $("#2").hide();
                $("#1").fadeIn(fadeInterval);
                break;
        }
    }

    function intervalAction(){
   
     if (slideNumber < 4) {
         slideNumber++;
         forwardSwitch();
     }
     else {
         slideNumber = 1;
         $("#4").hide();
         $("#1").fadeIn(fadeInterval);
     }
   
    }
});
