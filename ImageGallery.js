$(document).ready(function () {

    $("#1").css("background-image", "url(Images/image1.jpg)");
    $("#2").css("background-image", "url(Images/image2.jpg)").hide();
    $("#3").css("background-image", "url(Images/image3.jpg)").hide();
    $("#4").css("background-image", "url(Images/image4.jpg)").hide();
    var slideNumber = 1;
    var next = $(".arrowNext");
    var previous = $(".arrowPrevious");
    var intreval = window.setInterval(inrevalAction, 3000);


    $(next).click(function () {
        clearInterval(intreval);
        if (slideNumber < 4) {
            slideNumber++;
            forwardSwitch();
        }
        else {
            slideNumber = 1;
            $("#4").hide();
            $("#1").fadeIn("slow");
        }   
        intreval=window.setInterval(inrevalAction, 3000);
    });

    
    $(previous).click(function () {
        clearInterval(intreval);
        if (slideNumber > 1) {
            slideNumber--;
            backwardSwitch();
        }
        else {
            slideNumber = 4;
            $("#1").hide();
            $("#4").fadeIn("slow");
        }
        intreval=window.setInterval(inrevalAction, 3000);
    });

    function forwardSwitch() {
        switch (slideNumber) {
            case 2:
                $("#1").hide();
                $("#2").fadeIn("slow");
                break;
            case 3:
                $("#2").hide();
                $("#3").fadeIn("slow");
                break;
            case 4:
                $("#3").hide();
                $("#4").fadeIn("slow");
                break;
        }

    }

    function backwardSwitch() {
        switch (slideNumber) {

            case 3:
                $("#4").hide();
                $("#3").fadeIn("slow");
                break;
            case 2:
                $("#3").hide();
                $("#2").fadeIn("slow");
                break;
            case 1:
                $("#2").hide();
                $("#1").fadeIn("slow");
                break;
        }
    }

    function inrevalAction(){
   
     if (slideNumber < 4) {
         slideNumber++;
         forwardSwitch();
     }
     else {
         slideNumber = 1;
         $("#4").hide();
         $("#1").fadeIn("slow");
     }
   
    }
});
