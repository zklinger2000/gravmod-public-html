// TO DO:  Change "Edit" button to show "Save" when in .editMode

//=========
//VARIABLES
//=========

//the customer name text field
var add_customer = document.getElementById("add_customer");
//the party size option box
var add_party = document.getElementById("add_party");
//the button that adds jobs to the temporary list
var add_button = document.getElementById("add_order_btn");
//the <ol> of temporary jobs to add to Google Calendar
var queue_list = document.getElementById("queue_list");


//=========
//FUNCTIONS
//=========

//=========================================================================
var create_temp_order = function() {
//=========================================================================
  //VARIABLES
  var list_item = document.createElement("li");							//<li>
  var cust_label = document.createElement("label");					//<label>
  var edit_cust_label = document.createElement("input");		//<input>
  var party_label = document.createElement("label");				//<label>
	var edit_party = document.createElement("select");				//<select>
	var opt_value1 = document.createElement("option");				//<select>
	var opt_value2 = document.createElement("option");				//<select>
	var opt_value3 = document.createElement("option");				//<select>
	var opt_value4 = document.createElement("option");				//<select>
	var opt_value5 = document.createElement("option");				//<select>
	var opt_value6 = document.createElement("option");				//<select>
	var dollar_sign = document.createElement("text");					//<text> '$'
  var price_label = document.createElement("label");				//<label>
  var edit_button = document.createElement("button");				//<button>
  var delete_button = document.createElement("button");			//<button>

	//set up crew select group
	edit_party.type = "select";
	edit_party.id = "edit_party";
/*
	edit_crew.<optgroup label="Foreman">' + 
												'<option value="gary">Gary</option>' +
                  			'<option value="ken">Ken</option>' +
                 				'<option value="x_crew">The Incredible Bulk</option>' +
                				'</optgroup>' +
                				'<optgroup label="Everyone">' +
                 				'<option value="all_crews">All Crews</option>' +
                				'</optgroup>';
	*/

  //set up customer name label and input
	edit_text_input("cust", cust_label, edit_cust_label, add_customer);
	//set up '$'
	dollar_sign.className = "dollar";
	dollar_sign.innerText = "$";
	//set up 'Edit' button
  if (typeof edit_button.innerText === "undefined") {
    edit_button.textContent = "Edit";
  } else {
    edit_button.innerText = "Edit";
  }
  edit_button.className = "edit";
	//set up 'Delete' button
  if (typeof delete_button.innerText === "undefined") {
    delete_button.textContent = "Delete";
  } else {
    delete_button.innerText = "Delete";
  }
  delete_button.className = "delete";
  
  //Each element needs to be appended
  list_item.appendChild(cust_label);
  list_item.appendChild(edit_party);
  list_item.appendChild(edit_cust_label);
  list_item.appendChild(dollar_sign);
  list_item.appendChild(price_label);
  list_item.appendChild(edit_button);
  list_item.appendChild(delete_button);
  
  return list_item;
}

//=========================================================================
var edit_text_input = function(name, label, edit_label, element) {
//=========================================================================
  //set up label and input
  label.id = name + "_label";
  label.innerText = element.value;
	edit_label.type = "text";
	edit_label.id = "edit_" + name;
}

//=========================================================================
var add_temp_order = function() {
//=========================================================================
	console.log("CALLED add_temp_order");
	//VARIABLES
	var list_item = create_temp_order();	//temp <li> from "Add new jobs"
	
	//append list_item to temp_job_list
	queue_list.appendChild(list_item);
	bind_order_events(list_item);
	//clearing the fields after adding the job to the temp job list
	add_customer.value = "";
}

//Edit an existing task
//=========================================================================
var edit_temp_order = function() {
//=========================================================================
  console.log("Edit order...");
  
  var list_item = this.parentNode;
  var cust_label = list_item.querySelector("#cust_label");
  var edit_party = list_item.querySelector("#edit_party");
  var edit_cust = list_item.querySelector("#edit_cust");
  
  //if the class of the parent is .editMode
  if (list_item.classList.contains("edit_mode")) {
    //Switch from .editMode
    //label text becomes the input's value
    cust_label.innerText = edit_cust.value;
  } else {
    //Switch to .editMode
    //input value becomes the label's text
		//
		//edit_crew.value....
    edit_cust.value = cust_label.innerText;
  }
  //Toggle .editMode on the parent <li>
  list_item.classList.toggle("edit_mode");
}

//Delete an existing task
//=========================================================================
var delete_temp_order = function() {
//=========================================================================
  console.log("Delete order...");
  //Remove the parent list item from the ul
  var list_item = this.parentNode;
  var ul = list_item.parentNode;
  ul.removeChild(list_item);
}

//a test function to show how multiple events can be triggered
//=========================================================================
var ajaxRequest = function() {
//=========================================================================
  console.log("AJAX request"); 
}

//=========================================================================
var bind_order_events = function(list_item) {
//=========================================================================
  console.log("CALLED bind_job_events");
  //select job_list_item's children
  var edit_button = list_item.querySelector("button.edit");
  var delete_button = list_item.querySelector("button.delete");
  
  //bind edit_job to edit button
  edit_button.onclick = edit_temp_order;
  
  //bind delete_job to delete button
  delete_button.onclick = delete_temp_order;
}


//==========
//PAGE SETUP
//==========

//Set the click-handler to the addTask function
add_button.addEventListener("click", add_temp_order);
add_button.addEventListener("click", ajaxRequest);

console.log("queue.length: " + queue_list.children.length);
//cycle over temp_job_list <ol> list items (the li's)
for (var i = 0; i < queue_list.children.length; i++) {
  //bind events to list item's children (tasksIncomplete)
  bind_order_events(queue_list.children[i]);
}
