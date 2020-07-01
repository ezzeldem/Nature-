$(document).ready(function () {
    setTimeout(function () {
        $(".loding-page").fadeOut();
    }, 2000);


    $(".menu-icon > i").click(function () {
        $(".over-lay").show();
        $(".links").addClass("right0");
        $("body").addClass("over-layw");
    });

    $(".exite-icon > i, .over-lay").click(function () {
        $(" .over-lay").hide();
        $(".links").removeClass("right0");
        $("body").removeClass("over-layw");
    });

    $(".comment-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        outhight: true,
        autoplaySpeed: 1100,
        autoplay: true,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 997,
                settings: {
                    slidesToShow: 1,
                    prevArrow: false,
                    nextArrow: false,
                },
            },
            {
                breakpoint: 772,
                settings: {
                    slidesToShow: 1,
                    prevArrow: false,
                    nextArrow: false,
                },
            },
        ],
    });

    AOS.init();

    $(".burger-b").click(function () {
        $(this).removeClass("close-b");
        $(".open").removeClass("open-disdription-form");
        $("body").removeClass("over-layw");
    });

    $("#open-flwoer").click(function () {
        $(".open").addClass("open-disdription-form");
        $("body").addClass("over-layw");
        setTimeout(function () {
            $(".burger-b").toggleClass("close-b");
        }, 1000);
    });

    $(".audioDemo").bind("load", function () {
        $(".alert-success").html("Audio Loaded succesfully");
    });

    $("body").click(function () {
        $(".audioDemo").trigger("play");
    });
});
