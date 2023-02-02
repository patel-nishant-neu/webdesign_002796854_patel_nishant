//Title constructor function that creates a Title object
function Title(t1) 
{ 
	this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
	return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

/* My JS */
var totalCount = 0;
document.addEventListener("DOMContentLoaded", () => {
	totalCount = document.getElementsByClassName("student").length + 1;
});

function addNewRow() {
	//var table = document.getElementById("myTable");
	var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

	/* Main Row */
	var tdNode = document.createElement("tr");
	tdNode.setAttribute("class", "student");
	tdNode.setAttribute("id", "row_"+totalCount);
		
	var trCheckBoxCell = document.createElement("td");
	trCheckBoxCell.innerHTML =
	`<input id="checkbox" type="checkbox" onclick="onCheckboxClick(this,${totalCount})"/><br /><br /><img src="down.png" width="25px" onclick="studentMoreDetails(${totalCount})"/>`;
	
	var trStudentCell = document.createElement("td");
	trStudentCell.innerHTML = "Student  " + totalCount;
	
	var trTeacherCell = document.createElement("td");
	trTeacherCell.innerHTML = "Teacher " + totalCount;

	var trStatusCell = document.createElement("td");
	trStatusCell.innerHTML = dynamicData('award_status');

	var trSemesterCell = document.createElement("td");
	trSemesterCell.innerHTML = dynamicData('semester');

	var trTypeCell = document.createElement("td");
	trTypeCell.innerHTML = "TA";

	var trBudgetCell = document.createElement("td");
	trBudgetCell.innerHTML = randomInteger(1000,25000);

	var trPercentageCell = document.createElement("td");
	trPercentageCell.innerHTML = randomInteger(25,100)+"%";

	//var trBtnCell = document.createElement("td");
	//trBtnCell.innerHTML = "";

	//Appending inside tr
	tdNode.appendChild(trCheckBoxCell);
	tdNode.appendChild(trStudentCell);
	tdNode.appendChild(trTeacherCell);
	tdNode.appendChild(trStatusCell);
	tdNode.appendChild(trSemesterCell);
	tdNode.appendChild(trTypeCell);
	tdNode.appendChild(trBudgetCell);
	tdNode.appendChild(trPercentageCell);
	//tdNode.appendChild(trBtnCell);

	//appending inside tbody
	tbodyRef.appendChild(tdNode);
	
	/******* Child Row *******/
	var tdNode = document.createElement("tr");
	tdNode.setAttribute("class", "dropDownTextArea");
	tdNode.setAttribute("id", "row_child_"+totalCount);
	tdNode.setAttribute("style", "display:none;");

	var trChildCell = document.createElement("td");
	trChildCell.setAttribute("colspan", "8");
	trChildCell.innerHTML =
				`Advisor:<br /><br />
				Award Details<br />
				Summer 1-2014(TA)<br />
				Budget Number: <br />
				Tuition Number: <br />
				Comments:<br /><br /><br />
				Award Status:<br /><br /><br />`;

	//Appending inside child tr
	tdNode.appendChild(trChildCell);
	//appending inside tbody
	tbodyRef.appendChild(tdNode);

	totalCount++;
}

/* Get Random Number for */
function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dynamicData(flag) {
	var arr = [];
		arr["semester"] = ["Fall", "Pass"];
		arr["award_status"] = ["Approved", "Pending"];
	return arr[flag][Math.floor(Math.random() * arr[flag].length)];
}

function studentMoreDetails(rowId){
	var childTr = document.getElementById("row_child_"+rowId);
	console.log(childTr);
	childTr.style.display = childTr.style.display === 'none' ? '' : 'none';
}

function onCheckboxClick(checkbox,rowId) {
	//console.log(checkbox); //input reference
	//console.log(rowId);
	var rowSelect = document.getElementById("row_"+rowId)//tr
	
	if (checkbox.checked == true) {
		rowSelect.style.backgroundColor = "yellow";

		//Deleting
		var deleteButton = document.createElement("td");
		deleteButton.setAttribute("id", "deletetd_"+rowId);
		deleteButton.innerHTML =
		`<button id="delete" type="button" onclick="deleteRow(${rowId})">Delete</button> <button type="button" onclick="editRow(${rowId})">Edit</button>`;
		rowSelect.appendChild(deleteButton);
	} else {
		rowSelect.style.backgroundColor = "#fff";
		document.getElementById('deletetd_'+rowId).remove();
	}

	/* check if any checkbox selected or not */
	var checkboxs=document.querySelectorAll('input[type="checkbox"]');
    var okay=false;
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {
            okay=true;
            break;
        }
    }
    if(okay) {
		document.getElementById('awardsBtn').setAttribute("class", "active_btn");
	} else {
		document.getElementById('awardsBtn').setAttribute("class", "btn");
	}
}

function deleteRow(rowId) {
	if(confirm("Are you sure? you want to delete this student?"))
	{
		document.getElementById("row_"+rowId).remove();
		document.getElementById("row_child_"+rowId).remove();
		//totalCount--;

		if(document.getElementsByClassName("student").length <= 0){
			totalCount = 1;
		}

		alert("Student deleted successfully!");
	}
}

function editRow(rowId) {
	var name = window.prompt("Edit the details.", "");
}