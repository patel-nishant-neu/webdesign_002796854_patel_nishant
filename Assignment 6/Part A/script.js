$(function () {

    var usernameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    var emailRegex = /^([\w-\.]+)@(northeastern.edu)$/;
    var strongPwdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#\$%\^&\*])(?=.{8,})");

    // To enable or disable login button
   $("#signinForm").bind('keyup', function (e) {
   
        var username = $("#username").val();
        var email=$("#email").val();
        var password=$("#password").val();
             
        if(usernameRegex.test(username)==true && emailRegex.test(email)==true && strongPwdRegex.test(password)==true)
        {
            $("#signin").attr('disabled',false);
        }
        else
        {
            $("#signin").attr('disabled',true);
        }
    });

    // To validate username
    $("#username").on("keyup", function (e) {
   
        var username=$("#username").val();
         
        if(username.length==0){
            $("#username_error").text("Enter Username");
        }
        else if(usernameRegex.test(username)==false)
        {
            $("#username_error").text("Invalid Username");
        }
        else
        {
            $("#username_error").text("");
        }             
    });

    // To validate email entry
   $("#email").on("keyup", function (e) {
   
        var email=$("#email").val();
         
        if(email.length==0){
            $("#email_error").text("Enter Email");
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
            $("#passsword_error").text("Enter Password");
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
      var username = $("#username").val();
      var email = $("#email").val();
      var password = $("#password").val();
      if (username ==="" || email === "" || password === "") {
        alert("Please fill in all fields");
      } else {

        //passing Variable as email

        // Redirect to calculator
        window.location.href = "calculator.html?username=" + encodeURIComponent(username);
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
    var username = getParameterByName("username");
    $("#greeting").text("Welcome, " + username + "!");
  });
  
function getParameterByName(username, url) {
    if (!url) url = window.location.href;
    username = username.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + username + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }