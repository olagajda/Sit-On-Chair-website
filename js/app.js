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



    // Hiding see-through panels on photogrsphs:

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



    // Dropdown compose-your-chair form:


    var formArrow = $(".blue-arrow");

    formArrow.on("click", function(event){

        console.log("hejki");

        $(this).parent().parent().find("dd").slideToggle(500);



    });


























});

