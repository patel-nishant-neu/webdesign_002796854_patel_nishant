$(function () {

    var emailRegex = /^([\w-\.]+)@(northeastern.edu)$/;
    var strongPwdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#\$%\^&\*])(?=.{8,})");

    // To enable or disable login button
   $("#signinForm").bind('keyup', function (e) {
   
        var email=$("#email").val();
        var password=$("#password").val();
             
        if(emailRegex.test(email)==true && strongPwdRegex.test(password)==true)
        {
            $("#signin").attr('disabled',false);
        }
        else
        {
            $("#signin").attr('disabled',true);
        }
    });


    // To validate email entry
   $("#email").on("keyup", function (e) {
   
        var email=$("#email").val();
         
        if(email.length==0){
            $("#email_error").text("");
        }
        else if(emailRegex.test(email)==false)
        {
            $("#email_error").text("Invalid email");
        }
        else
        {
            $("#email_error").text("");
        }             
    });


    // To validate password entry
   $("#password").on("keyup", function (e) {
   
        var passwordValue=$("#password").val();
        
        if(passwordValue.length==0){
            $("#passsword_error").text("");
        }
        else if(passwordValue.length<10)
        {
            $("#passsword_error").text("8 characters at least");
        }
        else if(strongPwdRegex.test(passwordValue)==false)
        {
            $("#passsword_error").text("Unsecured password");
        }
        else
        {
            $("#passsword_error").text("");
        }             
    });

    
});


// Login page redirect to Calculator
$(document).ready(function() {
    $("#signin").click(function(event) {
      event.preventDefault();
      var email = $("#email").val();
      var password = $("#password").val();
      if (email === "" || password === "") {
        alert("Please fill in all fields");
      } else {

        //passing Variable as email

        // Redirect to calculator
        window.location.href = "calculator.html?email=" + encodeURIComponent(email);
      }
    });
  });
  

// Calculator
$(document).ready(function() {
    // Arithmetic button click event
    $("#add, #subtract, #multiply, #divide").click((event) => {
        event.preventDefault();
        const num1 = parseFloat($("#num1").val());
        const num2 = parseFloat($("#num2").val());
        const operation = event.target.id;
        const result = operation === "add" ? num1 + num2 :
                       operation === "subtract" ? num1 - num2 :
                       operation === "multiply" ? num1 * num2 :
                       operation === "divide" ? num1 / num2 : NaN;
        $("#result").val(result);
    });
});


// Passing email in Calculator page: 
$(document).ready(function() {
    var email = getParameterByName("email");
    $("#greeting").text("Welcome, " + email + "!");
  });
  
function getParameterByName(email, url) {
    if (!url) url = window.location.href;
    email = email.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + email + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }