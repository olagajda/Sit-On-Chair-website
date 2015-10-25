/**
 * Created by aleksandragajda on 16.10.15.
 */

$(function(){


    // Dropdown menu:


    var menuButton = $(".main-menu a");
    var mySubmenu = $(".submenu");

    menuButton.on("mouseenter", function(event){

        $(this).parent().find(".submenu-triangle").slideDown(500);
        $(this).parent().find(".submenu").slideDown(500);

    });

    mySubmenu.on("mouseleave", function(event){

        $(this).parent().find(".submenu-triangle").slideUp(500);
        $(this).parent().find(".submenu").slideUp(500);


    });

    var otherSections = $(".area");

    otherSections.on("click", function(event){

        var submenu = $(this).parent().find(".submenu");
        var submenuTriangle = $(this).parent().find(".submenu-triangle");

        if (submenu.is(":visible") === true){

            submenu.slideUp(500);
            submenuTriangle.slideUp(500);

        }

    });



    // Hiding see-through panels on photographs:

    var boxes = $(".box12");

    boxes.on("mouseenter", function(event){

        $(this).find(".panel").fadeOut(300);

    });

    boxes.on("mouseleave", function(event){

        $(this).find(".panel").fadeIn(300);

    });



    // Slider:

    var arrows = $(".arrow");
    var images = $(".slide");
    var visibleImage = 0;

    images.eq(visibleImage).show();


    arrows.on("click", function(event){


        var directHide = "right";
        var directShow = "left";



        if($(this).hasClass("arrow-right")) {

            images.eq(visibleImage).hide("slide", {
                direction: directHide
            }, 500);

            visibleImage++;
        }


        else {

            directHide = "left";

            images.eq(visibleImage).hide("slide", {
                direction: directHide
            }, 500);

            visibleImage--;
        }



        if( visibleImage >= images.length) {
            visibleImage = 0;
        }

        if( visibleImage < 0) {
            visibleImage = images.length-1;
        }


        if($(this).hasClass("arrow-right")) {

            images.eq(visibleImage).delay(501).show("slide", {
                direction: directShow
            }, 500);

        }


        else {

            directShow = "right";

            images.eq(visibleImage).delay(501).show("slide", {
                direction: directShow

            }, 500);

        }



    });



    // Dropdown compose-your-chair form and prices table:


    var formArrow = $(".blue-arrow");
    var dropdownChoice = $(".dropdown li");
    var empty = 0;
    $("#chair-price").text(empty);
    $("#color-price").text(empty);
    $("#fabric-price").text(empty);




    formArrow.on("click", function(event){

        $(this).parent().parent().find("dd").slideToggle(500);

    });


    var empty = 0;
    $("#chair-price").text(empty).css("color", "white");
    $("#color-price").text(empty).css("color", "white");
    $("#fabric-price").text(empty).css("color", "white");

    dropdownChoice.on("click", function(event){


        console.log("hejki");
        var chairChoice = $(this).data("chair");
        var colorChoice = $(this).data("color");
        var fabricChoice = $(this).data("fabric");
        var chairPrice = $(this).data("chair-price");
        var colorPrice = $(this).data("color-price");
        var fabricPrice = $(this).data("fabric-price");

        $(this).parents().find("#chair-name").text(chairChoice);
        $(this).parents().find("#chair-price").text(chairPrice).css("color", "#27c7ab");
        $(this).parents().find("#chair-color").text(colorChoice);
        $(this).parents().find("#color-price").text(colorPrice).css("color", "#27c7ab");
        $(this).parents().find("#chair-fabric").text(fabricChoice);
        $(this).parents().find("#fabric-price").text(fabricPrice).css("color", "#27c7ab");

        $(this).parent().parent().parent().find("dt span").text($(this).text());

        $(this).parent().parent().slideUp(500);

        $(this).parents().find("#chair-sum").text( ( parseInt($(this).parents().find("#chair-price").text()) ) + ( parseInt($(this).parents().find("#transport-price p").text()) ) + ( parseInt($(this).parents().find("#color-price").text()) ) + ( parseInt($(this).parents().find("#fabric-price").text()) )).css("color", "#27c7ab").show(0);


    });


    $('#transport').click(function() {
        $(this).parents().find("#transport-yes p").toggle();
        $(this).parents().find("#transport-price p").toggle();


        var text =  $(this).parents().find("#transport-price p").text();

        console.log(text);

        if (text === "0") {
            $(this).parents().find("#transport-price p").text("200") ;
        }
        else {
            $(this).parents().find("#transport-price p").text("0");
        }

        $(this).parents().find("#chair-sum").text( ( parseInt($(this).parents().find("#chair-price").text()) ) + ( parseInt($(this).parents().find("#transport-price p").text()) ) + ( parseInt($(this).parents().find("#color-price").text()) ) + ( parseInt($(this).parents().find("#fabric-price").text()) )).css("color", "#27c7ab").show(0);


    });


});

