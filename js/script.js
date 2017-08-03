function initAnimations() {
    jQuery('.animated').appear(function () {
        var el = jQuery(this);
        var animation = el.data('animation');
        var delay = el.data('delay');
        if (delay) {
            setTimeout(function () {
                el.addClass(animation);
                el.addClass('showing');
                el.removeClass('hiding');
            }, delay);
        } else {
            el.addClass(animation);
            el.addClass('showing');
            el.removeClass('hiding');
        }
    }, {
        accY: -60
    });

    // Service hover animation
	jQuery('.service').hover(function(){
		jQuery('i', this).addClass('animated tada');
	},function(){	
        jQuery('i', this).removeClass('animated tada');
	});
}

jQuery(document).ready(function () {
    initAnimations();
});


$(function () {
    $("input#gform_submit_button_5").click( function (e) {
        e.preventDefault();
        
        let userName = $("input#input_5_10").val(),
            userPhone = $("input#input_5_3").val(),
            userEmail = $("input#input_5_2").val(),
            userService = $("select#input_5_5").val(),
            userMessage = $("textarea#input_5_6").val();

        if(userName != "" && userPhone != "" && userName != " " && userPhone != " ") {
            $("input#input_5_10, input#input_5_3").removeClass("error");
            $.ajax({
                type: "POST",
                url: "sendemail.php",
                data: {
                    name: userName,
                    phone: userPhone,
                    email: userEmail,
                    service: userService,
                    message: userMessage
                },

                success: function() {
                    setTimeout(function() {
                        $(".form-success").fadeIn("slow");    
                    }, 700);
                    setTimeout(function() {
                        $(".form-success").fadeOut("slow");
                    }, 4000);

                    $("input#input_5_10, input#input_5_3, input#input_5_2, textarea#input_5_6").val("");  
                }
            });
        } else {
            if(userName == "" || userName == " ") {
                $("input#input_5_10").addClass("error");
            }
            if(userPhone == "" || userPhone == " ") {
                $("input#input_5_3").addClass("error");
            }
        }

    });

    $("input#gform_submit_button_4").click( function (e) {
        e.preventDefault();
        
        let userName = $("input#input_4_9").val(),
            userPhone = $("input#input_4_4").val(),
            userEmail = $("input#input_4_2").val(),
            userService = $("select#input_4_5").val(),
            userMessage = $("textarea#input_4_6").val();

        if(userName != "" && userPhone != "" && userName != " " && userPhone != " ") {
            $("input#input_4_9, input#input_4_4").removeClass("error");
            $.ajax({
                type: "POST",
                url: "sendemail.php",
                data: {
                    name: userName,
                    phone: userPhone,
                    email: userEmail,
                    service: userService,
                    message: userMessage
                },

                success: function() {
                    setTimeout(function() {
                        $(".form-success").fadeIn("slow");    
                    }, 700);
                    setTimeout(function() {
                        $(".form-success").fadeOut("slow");
                    }, 4000);

                    $("input#input_4_9, input#input_4_4, input#input_4_2, textarea#input_4_6").val("");  
                }
            });
        } else {
            if(userName == "" || userName == " ") {
                $("input#input_4_9").addClass("error");
            }
            if(userPhone == "" || userPhone == " ") {
                $("input#input_4_4").addClass("error");
            }
        }

    });
});



