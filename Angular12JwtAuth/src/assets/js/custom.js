/*
--------------------------------------------------------------------------------------------------------
* Project    : Trezix                                                                                  *
* Author     : Keyconcepts (https://www.keyconcepts.co.in)                                             *  
*------------------------------------------------------------------------------------------------------- 
NOTE: This file contains all scripts for the actual Template.
*/

/*==============================================
[  Table of contents  ]
================================================
:: Document Ready 
	:: Tooltip 
    :: cursor
    :: slicknav
    :: sticky menu
    :: background image
    :: counters
    :: Contact Form Validation:: On Load
 	:: Loader
:: Page  Scroll 

================================================
[ End table content ]
==============================================*/  
 

(function ($) {
"use strict";	
	var PUS = {};
	/*==========================================
    		:: Tooltip
	==========================================*/
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

    /*==========================================
            :: Go To Top
    ==========================================*/
    PUS.gototop = function () {
        var $gototop = $("#back-to-top");
        $gototop.hide();
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) $gototop.fadeIn();
            else $gototop.fadeOut();
        });
        $gototop.on("click", function () {
            $("body,html").animate(
                {
                    scrollTop: 0,
                },
                1000
            );
            return false;
        });
    };  



    /*==========================================
            :: Header toggler
    ==========================================*/
    PUS.headertoggler = function () {
        $(".mob-header .toggler-menu").click(function(){
            $(".header-left").toggleClass("mobile-active");
            $(".mob-header .toggler-menu .close-icons").toggleClass("active");
        })
        $(".mob-header").click(function(){
            $(".header-left").addClass("hover-header-left");
        })

    };

    /*==========================================
            :: Header Hover
    ==========================================*/
    PUS.hoverheader = function () {
        $(".header-left").mouseenter(function(){
            $(this).addClass("hover-header-left");
            // $(this).toggleClass("hover-header-left"); 
        })
        $(".header-left").mouseleave(function(){
            $(this).removeClass("hover-header-left");
        })
    };

    /*==========================================
            :: filters
    ==========================================*/
    PUS.filters = function () {
        $(".flags-panel").click(function(){
            $(".right-panel-filter").removeClass("flags-active"); 
        });
        $(".toolbar-filter a.toolbar-link-filter").click(function(){
            $(".right-panel-filter").addClass("flags-active"); 
        });    
        $(".panel-overlay").click(function(){
            $(".right-panel-filter").removeClass("flags-active"); 
        });        
    }; 

    /*==========================================
            :: Customize Table
    ==========================================*/
    PUS.customizetable = function () {
        $(".customizetable-panel").click(function(){
            $(".right-panel-customizetable").removeClass("flags-active"); 
        });
        $(".toolbar-filter a.toolbar-link-customizetable").click(function(){
            $(".right-panel-customizetable").addClass("flags-active"); 
        });    
        $(".panel-overlay").click(function(){
            $(".right-panel-customizetable").removeClass("flags-active"); 
        });        
    }; 

    /*==========================================
            :: Right Panel add
    ==========================================*/ 
    PUS.add = function () {
        $(".add-panel").click(function(){
            $(".right-panel-add").removeClass("add-active"); 
        });
        $(".toolbar-add a.add-link").click(function(){
            $(".right-panel-add").addClass("add-active"); 
        });    
        $(".panel-overlay").click(function(){
            $(".right-panel-add").removeClass("add-active"); 
        });        
    };

    

    /*==========================================
            :: Datatable
    ==========================================*/
    PUS.datatable = function () { 
        $('.datatable').DataTable({
            "scrollX": true,
            "scrollCollapse": true
        }); 
    }; 

	/*==========================================
    		:: On Load 
	==========================================*/
	$(window).on('load', function(){
        // :: Loader 
        var loader = $(".preloader");
        loader.fadeOut(0); 
    });
	
    /*==========================================
    		:: Page  Scroll
	==========================================*/
	$(window).scroll(function() {   
	});

    
    // $(document).on("change", ":file", function() {
    //     var input = $(this),
    //     numFiles = input.get(0).files ? input.get(0).files.length : 1,
    //     label = input
    //     .val()
    //     .replace(/\\/g, "/")
    //     .replace(/.*\//, "");
    //     input.trigger("fileselect", [numFiles, label]);
    // });

	/*==========================================
    		:: Document Ready
	==========================================*/
    $(document).ready(function () {
        PUS.gototop(), // gototop
        PUS.headertoggler(), // header toggler
        PUS.hoverheader(), // hover header
        PUS.datatable(), // datatable
        PUS.filters(), // filters
        PUS.customizetable(), // Customize Table
        PUS.add() // add
                
        // Collapsible Card
        // $('a[data-action="collapse"]').on('click', function (e) {
        //     e.preventDefault();
        //     $(this).closest('.pus-card').children('.pus-card-content').collapse('toggle');
        //     $(this).closest('.pus-card').find('[data-action="collapse"] i').toggleClass('fa-plus fa-minus');
        // }); 

        // Close Card
        $('a[data-action="close"]').on('click', function () {
          $(this).closest('.pus-card').removeClass().slideUp('fast');
        }); 

        $('.select2').select2(); //initialize of select2

        // $('.select-select2').select2({});

        // $.fn.datepicker.defaults.format = "mm/dd/yyyy";
        // $('.datepicker').datepicker({
        //     startDate: '-3d'
        // });

        // $.fn.datepicker.defaults.format = "mm/dd/yyyy";
        // $('.rangpicker').daterangepicker({
        //     autoUpdateInput: true, 
        //     opens: 'left'
        // });

        // password show
        // $('.view-password').find('.input-password').each(function(index, input) {
        //     var $input = $(input);
        //     $input.parent().find('.icon-view').click(function() {
        //         var change = "";
        //         if ($(this).find('i').hasClass('fa-eye')) {
        //             $(this).find('i').removeClass('fa-eye')
        //             $(this).find('i').addClass('fa-eye-slash')
        //             change = "text";
        //         } else {
        //             $(this).find('i').removeClass('fa-eye-slash')
        //             $(this).find('i').addClass('fa-eye')
        //             change = "password";
        //         }
        //         var rep = $("<input type='" + change + "' />")
        //             .attr('id', $input.attr('id'))
        //             .attr('name', $input.attr('name'))
        //             .attr('class', $input.attr('class'))
        //             .val($input.val())
        //             .insertBefore($input);
        //         $input.remove();
        //         $input = rep;
        //     }).insertAfter($input);
        // });

        // Mobile number
        // var telInput = $(".phone-code")
        //     // initialise plugin
        //     telInput.intlTelInput({
        //     allowExtensions: true,
        //     formatOnDisplay: true,
        //     autoFormat: true,
        //     autoHideDialCode: true,
        //     autoPlaceholder: true,
        //     defaultCountry: "auto",
        //     ipinfoToken: "yolo",
        //     nationalMode: false,
        //     numberType: "MOBILE",
        //     //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        //     preferredCountries: ['sa', 'ae', 'qa','om','bh','kw','ma'],
        //     preventInvalidNumbers: true,
        //     separateDialCode: true,
        //     initialCountry: "auto",
        //     geoIpLookup: function(callback) {
        //     $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
        //         var countryCode = (resp && resp.country) ? resp.country : "";
        //         callback(countryCode);
        //     });
        // },
        //    utilsScript: "js/mobilecode/utils.js"
        // });

        var reset = function() {
          telInput.removeClass("error");
          // errorMsg.addClass("hide");
          // validMsg.addClass("hide");
        };
        // on blur: validate
        // telInput.blur(function() {
        //   reset();
        //   if ($.trim(telInput.val())) {
        //     if (telInput.intlTelInput("isValidNumber")) {
        //       validMsg.removeClass("hide");
        //     } else {
        //       telInput.addClass("error");
        //       errorMsg.removeClass("hide");
        //     }
        //   }
        // });
        // on keyup / change flag: reset
        // telInput.on("keyup change", reset);  

        // $('.box-po-tabs li a').on('click', function() {        
        //     var dashboard_menu_type = $(this).attr('data-bind');
        //     $('.details-po').hide();
        //     $('.box-po-tabs li a').removeClass('po-tabs-active');
        //     $('#' + dashboard_menu_type).show();
        //     $(this).addClass('po-tabs-active');
        // });
        // $('.box-application-tabs li a').on('click', function() {        
        //     var dashboard_menu_type = $(this).attr('data-bind');
        //     $('.details-application').hide();
        //     $('.box-application-tabs li a').removeClass('application-tabs-active');
        //     $('#' + dashboard_menu_type).show();
        //     $(this).addClass('application-tabs-active');
        // });
	}); 
})(jQuery);
