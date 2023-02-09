// Get form by element ID
// var form = document.getElementById("myForm");
// form.addEventListener("submit", setup);

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    setup();
  });

// initially we are setting to false
var validName = false;
var validEmail = false;
var validPhone = false;
var validAddress = false;
var validZipcode = false;

// regular expressions for name, email and phone
var regExName = /^[a-zA-Z]+$/;
var regExEmail = /([\w\.]+)@northeastern.edu/;
var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
var regexAddress = /[,#-\/\s\!\@\$.....]/;
var regExZipcode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

//values
var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate);

var lastName = document.getElementById("lastName");
lastName.addEventListener("input", validate);

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);

var streetAddress1 = document.getElementById("streetAddress1");
streetAddress1.addEventListener("input", validate);

var streetAddress2 = document.getElementById("streetAddress2");
streetAddress2.addEventListener("input", validate);

var city = document.getElementById("city");
city.addEventListener("input", validate);

var state = document.getElementById("state");
state.addEventListener("input", validate);

var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate);

// write a function for validate
function validate(e) {
  var value = e.target.value;
  var type = this.id; // we are getting ID of the field
  var em = "error_" + type;

  switch (type) {
    case "firstName":
    case "lastName":
    case "city":
    case "state":
      if (!value.trim().match(regExName)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validName = false;
        console.log("validname", validName);
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validName = true;
        console.log("validname", validName);
      }
      break;

    case "emailId":
      if (!value.trim().match(regExEmail)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validEmail = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validEmail = true;
      }
      break;

    case "phoneNumber":
      if (!value.trim().match(regExPhone)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validPhone = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validPhone = true;
      }
      break;

    case "streetAddress1":
    case "streetAddress2":
      if (!value.trim().match(regexAddress)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validAddress = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validAddress = true;
      }
      break;

    case "zipcode":
      if (!value.trim().match(regExZipcode)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validZipcode = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validZipcode = true;
      }
      break;
  }
}

// Reset a function
function resetFunction() {
  var element = document.getElementById("myForm");
  element.reset();
}

function getDetails(el) {
  var selectedString = el.options[el.selectedIndex].value;

  if (selectedString == 1) {
    document.getElementById("coffee").style.display = "block";
  } else {
    document.getElementById("coffee").style.display = "none";
  }

  if (selectedString == 2) {
    document.getElementById("lemonade").style.display = "block";
  } else {
    document.getElementById("lemonade").style.display = "none";
  }

  if (selectedString == 3) {
    document.getElementById("chocolate").style.display = "block";
  } else {
    document.getElementById("chocolate").style.display = "none";
  }

  if (selectedString == 4) {
    document.getElementById("milkshake").style.display = "block";
  } else {
    document.getElementById("milkshake").style.display = "none";
  }

  if (selectedString == 5) {
    document.getElementById("tea").style.display = "block";
  } else {
    document.getElementById("tea").style.display = "none";
  }
}
function showQuantity(e) {
  var coffeeCB = document.getElementById("cb_coffee");
  var lemonadeCB = document.getElementById("cb_lemonade");
  var chocolateCB = document.getElementById("cb_chocolate");
  var milkshakeCB = document.getElementById("cb_milkshake");
  var teaCB = document.getElementById("cb_tea");

  var text = document.getElementById("extraComments");

  if (
    coffeeCB.checked == true ||
    lemonadeCB.checked == true ||
    chocolateCB.checked == true ||
    milkshakeCB.checked == true ||
    teaCB.checked == true
  ) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}



////////////////////////////////// New table ////////////////////////////////
function setup() {
    //"use strict";
    console.log("Function called")
var myForm = document.getElementById("myForm");
var title = document.getElementsByName("title");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("emailId");
var phone = document.getElementById("phoneNumber");
var streetAddress1 = document.getElementById("streetAddress1");
var streetAddress2 = document.getElementById("streetAddress2");
var city = document.getElementById("city");
var state = document.getElementById("state");
var zipcode = document.getElementById("zipcode");
var source = document.getElementsByName("source");    
var comments = document.getElementById("comments");
var drinks = document.getElementById("drinks");
var drink = document.getElementsByName("drink");
var select = document.getElementById("drinks");
var extraComments = document.getElementById("excom");
var table = document.getElementById("myTable");

var selectedTitle = '';
var selectedSource = [];
var selectedDrink = [];
var result ='';

const selectedIndex = select.selectedIndex;
const selectedValue = select.value;
const selectedText = select.options[selectedIndex].text;

var selection = document.querySelector('select');
selection.addEventListener('change', () => {
    result = selection.options[selection.selectedIndex].text;
});    

//document.getElementById("submit").addEventListener("click", function() {
    for(var i = 0; i < title.length; i++) {
        if(title[i].checked)
          selectedTitle = title[i].value;
     }
     
     for(var i = 0; i < source.length; i++) {
        if(source[i].checked)
          selectedSource.push(source[i].value);
     }

     for(var i = 0; i < drink.length; i++) {
        if(drink[i].checked)
        selectedDrink=drink[i].value;
     }


    var newRow = table.insertRow(-1);
    var newCell = newRow.insertCell(0);
    var newText = document.createTextNode(selectedTitle);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(1);
    newText = document.createTextNode(firstName.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(2);
    newText = document.createTextNode(lastName.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(3);
    newText = document.createTextNode(email.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(4);
    newText = document.createTextNode(phone.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(5);
    newText = document.createTextNode(streetAddress1.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(6);
    newText = document.createTextNode(streetAddress2.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(7);
    newText = document.createTextNode(city.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(8);
    newText = document.createTextNode(state.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(9);
    newText = document.createTextNode(zipcode.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(10);
    newText = document.createTextNode(selectedSource.toString());
    newCell.appendChild(newText);
    newCell = newRow.insertCell(11);
    newText = document.createTextNode(comments.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(12);
    newText = document.createTextNode(selectedText.toString());
    newCell.appendChild(newText);
    newCell = newRow.insertCell(13);
    newText = document.createTextNode(selectedDrink.toString());
    newCell.appendChild(newText);
    newCell = newRow.insertCell(14);
    newText = document.createTextNode(extraComments.value);
    newCell.appendChild(newText);
    
    myForm.reset();
    selectedTitle = "";
    selectedSource = [];
    
//  });
}
//setup();

// write a function submitted
function submitted(e) {
    //e.preventDefault();
    //console.log("validname", validName);
    console.log(validName, validEmail, validPhone, validAddress, validZipcode);
    if (validName && validEmail && validPhone && validZipcode) {
      setup();
      alert("Data entered succesfull");
      //window.location.href = "FeedbackComplete.html";
    } else {
      alert("Please enter valid details");
    }
    return false;
  }

// //////////////////////////// Script for Table /////////////////////////////////

// var totalCount = 0;
// document.addEventListener("DOMContentLoaded", () => {
//   totalCount = document.getElementsByClassName("feedback").length + 1;
// });

// function addNewRow() {
//   //var table = document.getElementById("myTable");
//   var tbodyRef = document
//     .getElementById("myTable")
//     .getElementsByTagName("tbody")[0];

//   /* Main Row */
//   var tdNode = document.createElement("tr");
//   tdNode.setAttribute("class", "feedback");
//   tdNode.setAttribute("id", "row_" + totalCount);

//   var trCheckBoxCell = document.createElement("td");
//   trCheckBoxCell.innerHTML = `<input id="checkbox" type="checkbox" onclick="onCheckboxClick(this,${totalCount})"/><br /><br /><img src="down.png" width="25px" onclick="feedbackMoreDetails(${totalCount})"/>`;

//   var trNameCell = document.createElement("td");
//   trNameCell.innerHTML = firstName + " " + lastName;

//   var trEmailCell = document.createElement("td");
//   trEmailCell.innerHTML = emailId;

//   var trPhoneCell = document.createElement("td");
//   trPhoneCell.innerHTML = phoneNumber;

//   var trAddressCell = document.createElement("td");
//   trAddressCell.innerHTML =
//     streetAddress1 + ", " + streetAddress2 + ", " + city + ", " + state;

//   var trzipcodeCell = document.createElement("td");
//   trzipcodeCell.innerHTML = zipcode;

//   var trSourceCell = document.createElement("td");
//   trSourceCell.innerHTML = "Source";

//   var trSelectionCell = document.createElement("td");
//   trSelectionCell.innerHTML = "Selection";

//   var trCommentsCell = document.createElement("td");
//   trCommentsCell.innerHTML = document
//     .getElementById("comment")
//     .addEventListener("input", validate);

//   //Appending inside tr
//   tdNode.appendChild(trCheckBoxCell);
//   tdNode.appendChild(trNameCell);
//   tdNode.appendChild(trEmailCell);
//   tdNode.appendChild(trPhoneCell);
//   tdNode.appendChild(trAddressCell);
//   tdNode.appendChild(trzipcodeCell);
//   tdNode.appendChild(trSourceCell);
//   tdNode.appendChild(trSelectionCell);
//   tdNode.appendChild(trCommentsCell);

//   //appending inside tbody
//   tbodyRef.appendChild(tdNode);

//   totalCount++;
// }