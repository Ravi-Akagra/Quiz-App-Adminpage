
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var question = $('.validate-input textarea[name="question"]');
    var option1 = $('.validate-input input[name="option1"]');
    var option2 = $('.validate-input input[name="option2"]');
    var option3 = $('.validate-input input[name="option3"]');
    var option4 = $('.validate-input input[name="option4"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(question).val().trim() == ''){
            showValidate(question);
            check=false;
        }

        if($(option1).val().trim() == ''){
            showValidate(option1);
            check=false;
        }
        if($(option2).val().trim() == ''){
            showValidate(option2);
            check=false;
        }
        if($(option3).val().trim() == ''){
            showValidate(option3);
            check=false;
        }
        if($(option4).val().trim() == ''){
            showValidate(option4);
            check=false;
        }


        // if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        //     showValidate(email);
        //     check=false;
        // }

        return check;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);