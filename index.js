
/*
$("button").click(function(){
    $("button").css({"background-color":"red"})
})
*/




$(function () {
    function isEmail(email)
    {
        let pattern = /^\w@\w+\.\w$/;;
        return pattern.test(email);
    }
    
    $("#buton").click(function () {
        

        let errormessage = "";
        $("error").html("");


        if ($("#email").val() == "") {
            errormessage+= "<p>email alanı zorunlu alan</p>";
              
        }
        if(isEmail($("#email").val()==false)){
            errormessage+="<p>email alanaı doğru girilmedi</p>"
        }

        if ($("#phone").val() == "") {
            errormessage += "<p>telefon alanı zorunlu alan</p>";

        }

        if ($("#password").val() == "") {
            errormessage += "<p>password alanı zorunlu alan</p>";

        }

        if ($("#password").val() != $("#repassword").val()) {
            errormessage += "<p>parola alanları eşleşmiyor</p>";

        }

if ($("#password").val() == $("#repassword").val()) {
    $("#error").html("");

        }
        if (errormessage !="") {
            $("#error").html(errormessage);
        }
    })

})



/*$(function () {
    let errormessage = "";
    $("#buton").click(function () {
        if ($("#email").val() == "") {
            
               $('.email-error').css('display','block');
        }
        else{
            $(".email-error").hide();
        }

        if ($("#phone").val() == "") {
            $('.telefon-error').css('display','block');

        }
        else{
            $(".telefon-error").hide();
        }

        if ($("#password").val() == "") {
            $('.password-error').css('display','block');

        }
        else{
            $(".password-error").hide();
        }

        if ($("#password").val() != $("#repassword").val()) {
            $('.again-password-error').css('display','block');

        }
        else{
            $(".again-password-error").hide();
        }
        

        
    })

})
*/
