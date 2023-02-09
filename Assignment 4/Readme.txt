##################### Nishant Patel ##########################
####################### 002796854 ############################


 Done   Add validations for the form
 Done   Use regex to validate phone number, email and zip code.
 Done   Validation should show a red color text along with each field and disappear on correcting particular field 
 Done   Create a single select list box which has 5 elements
 Done   Write an onChange event for the created list which adds checkbox that changes dynamically for each selection
 Done   If the checkbox is enabled, add a text field and make it mandatory and on disabling checkbox, text field should disappear
    On submit, create a html table which takes all the data from the previously submitted form and display results
 Done   On submit, make sure all the form fields gets cleared out
 Done   Add validation for email address (restrict the domain to @northeastern.edu)
 Done   Street address 2 is not a mandatory field, on submit click if the field is blank then its value in the table should be blank as well






#############################################################
<!doctype html>
<html lang="en">

<head>
	<title>Feedback</title>
	<style>
		label {
			float: left;
			width: 150px;
		}

		#container {
			width: 700px;
			margin: auto;
			background-color: beige;
		}

		main {
			padding: 50px;
		}
	</style>
</head>

<body>
	<div id="container">

		<main>
			<h2>Feeback</h2>
			<h3>Love something? Hate something? Let us know!</h3>
			Note : Fields marked with an asterisk(*) are mandatory
			<br><br>
			<form method="post" novalidate>
				<label>Title*:</label>
				<input type="radio" name="title" id="miss" value="miss" required="required" />Miss
				<input type="radio" name="title" id="mr" value="mr" required="required" />Mr.
				<input type="radio" name="title" id="mrs" value="mrs" required="required" />Mrs.
				<br><br>
				<label for="firstName">First Name*:</label>
				<input type="text" name="firstName" id="firstName" placeholder="First Name" />
				<br><br>

				<div id="error_firstName" style="display: none; color: red;">
					Invalid First Name, Please enter valid first name
					<br><br>
				</div>


				<!-- <label for="lastName">Last Name*:</label>
				<input type="text" name="lastName" id="lastName" placeholder="Last Name" />
				<br><br>

				<div id="error_lastName" style="display: none; color: red;">
					Invalid Last Name, Please enter valid Last name
					<br><br>
				</div> -->
				
				<label for="emailId">Email Id*:</label>
				<input type="text" name="emailId" id="emailId" placeholder="yourname@domain.com" />
				<br><br>

				<div id="error_emailId" style="display: none; color: red;">
					Invalid Email address, Please enter valid Email in user@domain.com
					<br><br>
				</div>

				<label for="phoneNumber">Phone Number*:</label>
				<input type="text" name="phoneNumber" id="phoneNumber" placeholder="xxx-xxx-xxxx" />
				<br><br>
				
				<div id="error_phoneNumber" style="display: none; color: red;">
					Invalid Phone Number, Please enter valid Phone Numder in XXX-XXX-XXXX
					<br><br>
				</div>
				
				<!-- <label for="streetAddress1">Street Address 1*:</label>
				<input type="text" name="streetAddress1" id="streetAddress1" placeholder="address" />
				<br><br>

				<label for="streetAddress2">Street Address 2:</label>
				<input type="text" name="streetAddress2" id="streetAddress2" placeholder="address" />
				<br><br>

				<label for="city">City*:</label>
				<input type="text" name="city" id="city" placeholder="city" />
				<br><br>

				<label for="state">State*:</label>
				<input type="text" name="state" id="state" placeholder="state" />
				<br><br>

				<label for="zipcode">ZipCode*:</label>
				<input type="text" name="zipcode" id="zipcode" placeholder="xxxxxx" />
				<br><br>

				<label for="zipcode">How did you hear*:</label>
				<input type='checkbox' name="source" value="facebook" /> Facebook
				<input type='checkbox' name="source" value="google" /> Google
				<input type='checkbox' name="source" value="yelp" /> Yelp
				<br><br>  -->

				<label for="comments">Comments*:</label>
				<textarea name="text" id="comments" placeholder="Your comments" rows="5" cols="25"></textarea>
				<br><br>

				<input type="submit" value="Submit My Form">
				<input type="Reset">
				<br><br>
			</form>
		</main>
	</div>

	<script>

		// Get form by element ID
		var form = document.getElementById("myForm");
        form.addEventListener("submit", submitted);

        // initially we are setting to false 
        var validName = false;
        var validEmail = false;
        var validPhone = false;

        // regular expressions for name, email and phone
        var regExName = /^[a-zA-Z]+$/;
        var regExEmail = /([\w\.]+)@(northeastern.edu)/;
        var regExPhone = /\d{3}-?\d{3}-\d{4}$/;

        //values 
        var firstName = document.getElementById("firstName");
        firstName.addEventListener("input", validate)

        var emailId = document.getElementById("emailId");
        emailId.addEventListener("input", validate)

        var phoneNumber = document.getElementById("phoneNumber");
        phoneNumber.addEventListener("input", validate)

        // write a function for validate
        function validate(e){
            var value = e.target.value;
            var type = this.id; // we are getting ID of the field
            var em = "error_" + type;

            switch(type){
                case "firstName":
                    if(!value.trim().match(regExName)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validName = false;
                        console.log("validname", validName)
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validName = true;
                        console.log("validname", validName)
                    }
                    break;

                case "emailId":
                    if(!value.trim().match(regExEmail)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validEmail = false;
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validEmail = true;
                    }
                    break;

                case "phoneNumber":
                    if(!value.trim().match(regExPhone)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validPhone = false;
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validPhone = true;
                    }
                    break;
            }

        }

        // write a function submitted
        function submitted(e){

            //e.preventDefault();
            console.log("validname", validName)
            if(validName && validEmail && validPhone){
                alert("Data entered succesfull");
                //window.location.href = "FeedbackComplete.html";
            }
            else{
                alert("Please enter valid details")
            }
        }


	</script>

</body>

</html>