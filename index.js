
$(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();

    if(scrollPosition <= 900 && scrollPosition > 400) {
        $('.projectsOption').css("color", "#FFA900");
        $('.aboutOption').css("color", "white");
        $('.contactOption').css("color", "white");
    }

    else if (scrollPosition <= 1400 && scrollPosition > 900){
        $('.aboutOption').css("color", "#FFA900");
        $('.projectsOption').css("color", "white");
        $('.contactOption').css("color", "white");
    }

    else if (scrollPosition <= 2000 && scrollPosition > 1400){
        $('.aboutOption').css("color", "white");
        $('.projectsOption').css("color", "white");
        $('.contactOption').css("color", "#FFA900");
    }

    else {
        $('.projectsOption').css("color", "white");
        $('.aboutOption').css("color", "white");
        $('.contactOption').css("color", "white");
    }
    
});


$('#gamegrid').click(() => {
    $('body').css("overflow", "hidden");
    $('.websiteInfo').css("top", 0);
    $(".gamegridLogo").css("top", "25px");
    $(".gContent").css("top", "100px");
    $(".gSide").css("top", "200px");
    $(".skillsSideG").css("top", "330px");

});

$('#letmecook').click(() => {
    $('body').css("overflow", "hidden");
    $('.websiteInfo').css("top", 0);
    $(".letmecookLogo").css("top", "25px");
    $(".lContent").css("top", "100px");
    $(".lSide").css("top", "260px");
    $(".skillsSideL").css("top", "370px");
});

$('.closeButton').click(() => {
    $('body').css("overflow-y", "scroll");
    $('.websiteInfo').css("top", "100%");
    $(".letmecookLogo").css("top", "100%");
    $(".gamegridLogo").css("top", "100%");
    $(".gContent").css("top", "100%");
    $(".lContent").css("top", "100%");
    $(".gSide").css("top", "100%");
    $(".lSide").css("top", "100%");
    $(".skillsSideG").css("top", "100%");
    $(".skillsSideL").css("top", "100%");
});