function clearForm() {
    var myGoogleSheet = SpreadsheetApp.getActiveSpreadsheet(); //declare a variable and set with active google sheet 
    var UF = myGoogleSheet.getSheetByName("UF"); //declare a variable and set with the UF worksheet

    //to create the instance of the user-interface environment to use the alert features
    var ui = SpreadsheetApp.getUi();

    // Display a dialog box with a title, message, and "Yes" and "No" buttons. The user can also
    // close the dialog by clicking the close button in its title bar.
    var response = ui.alert("Reset Confirmation", 'Do you want to reset this form?', ui.ButtonSet.YES_NO);

    // Checking the user response and proceed with clearing the form if user selects Yes
    if (response == ui.Button.YES) {

        UF.getRange("C3").clear(); //Search Field
        UF.getRange("C4").clear(); //EMP ID
        UF.getRange("C5").clear(); // EMP Name
        UF.getRange("C7").clear(); // EMPGEN
        UF.getRange("C9").clear(); // EMAIL ID
        UF.getRange("C10").clear(); // Role
        UF.getRange("C11").clear(); // RM
        UF.getRange("C13").clear(); //Department
        UF.getRange("C15").clear(); //Rating1
        UF.getRange("C16").clear(); //Rating2
        UF.getRange("C17").clear(); //Rating3
        UF.getRange("C18").clear(); //Rating4
        UF.getRange("C20").clear(); //Comment
        //Assigning white as default background color
        UF.getRange("C3").setBackground('#FFFFFF'); //Search Field
        UF.getRange("C4").setBackground('#FFFFFF'); //EMP ID
        UF.getRange("C5").setBackground('#FFFFFF'); // EMP Name
        UF.getRange("C7").setBackground('#FFFFFF'); // EMPGEN
        UF.getRange("C9").setBackground('#FFFFFF'); // EMAIL ID
        UF.getRange("C10").setBackground('#FFFFFF'); // Role
        UF.getRange("C11").setBackground('#FFFFFF'); // RM
        UF.getRange("C13").setBackground('#FFFFFF'); //Department
        UF.getRange("C15").setBackground('#FFFFFF'); //Rating1
        UF.getRange("C16").setBackground('#FFFFFF'); //Rating2
        UF.getRange("C17").setBackground('#FFFFFF'); //Rating3
        UF.getRange("C18").setBackground('#FFFFFF'); //Rating4
        UF.getRange("C20").setBackground('#FFFFFF'); //Comment





        return true;

    }
}
//Declare a function to validate the entry made by user in UserForm
function validateEntry() {

    var myGooglSheet = SpreadsheetApp.getActiveSpreadsheet(); //declare a variable and set with active google sheet 
    var UF = myGooglSheet.getSheetByName("UF"); //delcare a variable and set with the UF worksheet

    //to create the instance of the user-interface environment to use the messagebox features
    var ui = SpreadsheetApp.getUi();

    //Assigning white as default background color

    UF.getRange("C3").setBackground('#FFFFFF'); //Search Field
    UF.getRange("C4").setBackground('#FFFFFF'); //EMP ID
    UF.getRange("C5").setBackground('#FFFFFF'); // EMP Name
    UF.getRange("C7").setBackground('#FFFFFF'); // EMPGEN
    UF.getRange("C9").setBackground('#FFFFFF'); // EMAIL ID
    UF.getRange("C10").setBackground('#FFFFFF'); // Role
    UF.getRange("C11").setBackground('#FFFFFF'); // RM
    UF.getRange("C13").setBackground('#FFFFFF'); //Department
    UF.getRange("C15").setBackground('#FFFFFF'); //Rating1
    UF.getRange("C16").setBackground('#FFFFFF'); //Rating2
    UF.getRange("C17").setBackground('#FFFFFF'); //Rating3
    UF.getRange("C18").setBackground('#FFFFFF'); //Rating4
    UF.getRange("C20").setBackground('#FFFFFF'); //Comment
    //this being used else if while useng if in the tutorial ! humanss!!


    //Validating Employee ID
    if (UF.getRange("C4").isBlank() == true) {
        ui.alert("Please enter Employee ID.");
        UF.getRange("C4").activate();
        UF.getRange("C4").setBackground('#FF0000');
        return false;
    }
    //Validating Name
    else if (UF.getRange("C5").isBlank() == true) {
        ui.alert("Please Enter valid data");
        UF.getRange("C5").activate();
        UF.getRange("C5").setBackground('#FF0000');
        return false;
    }
    //Validating GINGER
    else if (UF.getRange("C7").isBlank() == true) {
        ui.alert("Please Enter valid data.");
        UF.getRange("C7").activate();
        UF.getRange("C7").setBackground('#FF0000');
        return false;
    }
    //Validating Department
    else if (UF.getRange("C9").isBlank() == true) {
        ui.alert("Please Enter valid data");
        UF.getRange("C9").activate();
        UF.getRange("C9").setBackground('#FF0000');
        return false;
    }
    //Validating Address
    else if (UF.getRange("C10").isBlank() == true) {
        ui.alert("Please Enter valid data");
        UF.getRange("C10").activate();
        UF.getRange("C10").setBackground('#FF0000');
        return false;
    }
    //Validating Address
    else if (UF.getRange("C11").isBlank() == true) {
        ui.alert("Please Enter valid data");
        UF.getRange("C11").activate();
        UF.getRange("C11").setBackground('#FF0000');
        return false;
    }
    //Validating Address
    else if (UF.getRange("C13").isBlank() == true) {
        ui.alert("Please Enter valid data");
        UF.getRange("C13").activate();
        UF.getRange("C13").setBackground('#FF0000');
        return false;
    }
    //Validating Address
    else if (UF.getRange("C15").isBlank() == true) {
        ui.alert("Please Enter valid data");
        UF.getRange("C15").activate();
        UF.getRange("C15").setBackground('#FF0000');
        return false;
    }
    //Validating Address
    else if (UF.getRange("C16").isBlank() == true) {
        ui.alert("Please Enter valid data");
        UF.getRange("C16").activate();
        UF.getRange("C16").setBackground('#FF0000');
        return false;
    }
    //Validating Address
    else if (UF.getRange("C17").isBlank() == true) {
        ui.alert("Please Enter valid data");
        UF.getRange("C17").activate();
        UF.getRange("C17").setBackground('#FF0000');
        return false;
    }
    //Validating Address
    else if (UF.getRange("C18").isBlank() == true) {
        ui.alert("Please Enter valid data");
        UF.getRange("C18").activate();
        UF.getRange("C18").setBackground('#FF0000');
        return false;
    }
    //Validating Address
    else if (UF.getRange("C20").isBlank() == true) {
        ui.alert("Please Enter valid data");
        UF.getRange("C20").activate();
        UF.getRange("C20").setBackground('#FF0000');
        return false;
    }
    return true;
}

function submitData() {

    var myGooglSheet = SpreadsheetApp.getActiveSpreadsheet(); //declare a variable and set with active google sheet 

    var UF = myGooglSheet.getSheetByName("UF"); //delcare a variable and set with the UF worksheet

    var datasheet = myGooglSheet.getSheetByName("Database"); ////delcare a variable and set with the Database worksheet

    //to create the instance of the user-interface environment to use the messagebox features
    var ui = SpreadsheetApp.getUi();

    // Display a dialog box with a title, message, and "Yes" and "No" buttons. The user can also
    // close the dialog by clicking the close button in its title bar.
    var response = ui.alert("Submit", 'Do you want to submit the data?', ui.ButtonSet.YES_NO);

    // Checking the user response and proceed with clearing the form if user selects Yes
    if (response == ui.Button.NO) {
        return; //exit from this function
    }
//checkr function needed

    //Validating the entry. If validation is true then proceed with transferring the data to Database sheet
    if (validateEntry() == true) {

        var blankRow = datasheet.getLastRow() + 1; //identify the next blank row

        datasheet.getRange(blankRow, 2).setValue(UF.getRange("C3").getValue()); //employee ID
        datasheet.getRange(blankRow, 3).setValue(UF.getRange("C5").getValue()); //EMPNAME
        datasheet.getRange(blankRow, 4).setValue(UF.getRange("C7").getValue()); //EMPGEN
        datasheet.getRange(blankRow, 5).setValue(UF.getRange("C9").getValue()); //EMAILID
        datasheet.getRange(blankRow, 6).setValue(UF.getRange("C10").getValue()); //ROLE
        datasheet.getRange(blankRow, 7).setValue(UF.getRange("C11").getValue()); //RM
        datasheet.getRange(blankRow, 8).setValue(UF.getRange("C13").getValue()); //Department
        datasheet.getRange(blankRow, 9).setValue(UF.getRange("C15").getValue()); //Rating1
        datasheet.getRange(blankRow, 10).setValue(UF.getRange("C16").getValue()); //Rating2
        datasheet.getRange(blankRow, 11).setValue(UF.getRange("C17").getValue()); //Rating3
        datasheet.getRange(blankRow, 12).setValue(UF.getRange("C18").getValue()); //Rating4
        datasheet.getRange(blankRow, 13).setValue(UF.getRange("C20").getValue()); //Comment

        //getting session values
        datasheet.getRange(blankRow, 1).setValue(new Date()).setNumberFormat('yyyy/mm/cc HH:MM'); //Date col 1
        datasheet.getRange(blankRow, 14).setValue(Session.getActiveUser().getEmail()); //who did the change?
        datasheet.getRange(blankRow, 15).setValue(Session.getActiveUser().getUserLoginId()); //who did the change?
        ui.alert('Data saved and recieved EMP#' + UF.getRange("C5").getValue()); //fix for popup mismatch  


        //Clearnign the data from the Data Entry Form

        UF.getRange("C3").clear(); //Search Field
        UF.getRange("C4").clear(); //EMP ID
        UF.getRange("C5").clear(); // EMP Name
        UF.getRange("C7").clear(); // EMPGEN
        UF.getRange("C9").clear(); // EMAIL ID
        UF.getRange("C10").clear(); // Role
        UF.getRange("C11").clear(); // RM
        UF.getRange("C13").clear(); //Department
        UF.getRange("C15").clear(); //Rating1
        UF.getRange("C16").clear(); //Rating2
        UF.getRange("C17").clear(); //Rating3
        UF.getRange("C18").clear(); //Rating4
        UF.getRange("C20").clear(); //Comment
    }
}

function searchRecord() {

    var myGooglSheet = SpreadsheetApp.getActiveSpreadsheet(); //declare a variable and set with active google sheet 
    var UF = myGooglSheet.getSheetByName("UF"); //delcare a variable and set with the UF worksheet
    var datasheet = myGooglSheet.getSheetByName("Database"); ////delcare a variable and set with the Database worksheet

    var str = UF.getRange("C4").getValue();
    var values = datasheet.getDataRange().getValues(); //getting the entire values from the used range and assigning it to values variable (md array example
    var valuesFound = false; //variable to store boolean value

    for (var i = 0; i < values.length; i++) {
        var rowValue = values[i]; //declaraing a variable and storing the value

        //checking the first value of the record is equal to search item
        if (rowValue[0] == str) {

            UF.getRange("C5").setValue(rowValue & [0]);
            UF.getRange("C7").setValue(rowValue & [1]);
            UF.getRange("C9").setValue(rowValue & [2]);
            UF.getRange("C10").setValue(rowValue & [3]);
            UF.getRange("C11").setValue(rowValue & [4]);
            UF.getRange("C13").setValue(rowValue & [5]);
            UF.getRange("C15").setValue(rowValue & [6]);
            UF.getRange("C16").setValue(rowValue & [7]);
            UF.getRange("C17").setValue(rowValue & [8]);
            UF.getRange("C18").setValue(rowValue & [9]);
            UF.getRange("C20").setValue(rowValue & [10]);
            return; //come out from the search function

        }
    }

    if (valuesFound == false) {
        //to create the instance of the user-interface environment to use the messagebox features
        var ui = SpreadsheetApp.getUi();
        ui.alert("No record found!");
    }

}
//Function to delete the record
function deleteRow() {

    var myGooglSheet = SpreadsheetApp.getActiveSpreadsheet(); //declare a variable and set with active google sheet 
    var UF = myGooglSheet.getSheetByName("UF"); //delcare a variable and set with the UF worksheet
    var datasheet = myGooglSheet.getSheetByName("Database"); ////delcare a variable and set with the Database worksheet

    //to create the instance of the user-interface environment to use the messagebox features
    var ui = SpreadsheetApp.getUi();

    // Display a dialog box with a title, message, and "Yes" and "No" buttons. The user can also
    // close the dialog by clicking the close button in its title bar.
    var response = ui.alert("Submit", 'Do you want to delete the record?', ui.ButtonSet.YES_NO);

    // Checking the user response and proceed with clearing the form if user selects Yes
    if (response == ui.Button.NO) {
        return; //exit from this function
    }

    var str = UF.getRange("C3").getValue();
    var values = datasheet.getDataRange().getValues(); //getting the entire values from the used range and assigning it to values variable

    var valuesFound = false; //variable to store boolean value to validate whether values found or not

    for (var i = 0; i < values.length; i++) {
        var rowValue = values & [i]; //declaraing a variable and storing the value

        //checking the first value of the record is equal to search item
        if (rowValue & [0] == str) {

            var iRow = i + 1; //identify the row number
            datasheet.deleteRow(iRow); //deleting the row

            //message to confirm the action
            ui.alert(' "Record deleted for Emp #' + UF.getRange("C3").getValue() + ' "');

            //Clearing the UF
            UF.getRange("C3").clear(); //Search Field
            UF.getRange("C4").clear(); //EMP ID
            UF.getRange("C5").clear(); // EMP Name
            UF.getRange("C7").clear(); // EMPGEN
            UF.getRange("C9").clear(); // EMAIL ID
            UF.getRange("C10").clear(); // Role
            UF.getRange("C11").clear(); // RM
            UF.getRange("C13").clear(); //Department
            UF.getRange("C15").clear(); //Rating1
            UF.getRange("C16").clear(); //Rating2
            UF.getRange("C17").clear(); //Rating3
            UF.getRange("C18").clear(); //Rating4
            UF.getRange("C20").clear(); //Comment

            valuesFound = true;
            return; //come out from the search function
        }
    }

    if (valuesFound == false) {
        //to create the instance of the user-interface environment to use the messagebox features
        var ui = SpreadsheetApp.getUi();
        ui.alert("No record found!");
    }

}
function editRecord() {
 
 var myGooglSheet= SpreadsheetApp.getActiveSpreadsheet(); //declare a variable and set with active google sheet 
 var UF= myGooglSheet.getSheetByName("UF"); //delcare a variable and set with the User Form worksheet
 var datasheet = myGooglSheet.getSheetByName("Database"); ////delcare a variable and set with the Database worksheet

 //to create the instance of the user-interface environment to use the messagebox features
 var ui = SpreadsheetApp.getUi();
 
 // Display a dialog box with a title, message, and "Yes" and "No" buttons. The user can also
 // close the dialog by clicking the close button in its title bar.
 var response = ui.alert("Submit", 'Do you want to edit the data?',ui.ButtonSet.YES_NO);

// Checking the user response and proceed with clearing the form if user selects Yes
if (response == ui.Button.NO) 
{return;//exit from this function
} 
   
 var str       = UF.getRange("C4").getValue();
 var values    = datasheet.getDataRange().getValues(); //getting the entire values from the used range and assigning it to values variable
 
 var valuesFound=false; //variable to store boolean value to validate whether values found or not
 
 for (var i = 0; i < values.length; i++) 
   {
   var rowValue = values[i]; //declaraing a variable and storing the value
  
   //checking the first value of the record is equal to search item
   if (rowValue[0] == str) {
     
     var  iRow = i+1; //identify the row number

        datasheet.getRange(iRow, 2).setValue(UF.getRange("C3").getValue()); //employee ID
        datasheet.getRange(iRow, 3).setValue(UF.getRange("C5").getValue()); //EMPNAME
        datasheet.getRange(iRow, 4).setValue(UF.getRange("C7").getValue()); //EMPGEN
        datasheet.getRange(iRow, 5).setValue(UF.getRange("C9").getValue()); //EMAILID
        datasheet.getRange(blankRow, 6).setValue(UF.getRange("C10").getValue()); //ROLE
        datasheet.getRange(iRow, 7).setValue(UF.getRange("C11").getValue()); //RM
        datasheet.getRange(iRow, 8).setValue(UF.getRange("C13").getValue()); //Department
        datasheet.getRange(iRow, 9).setValue(UF.getRange("C15").getValue()); //Rating1
        datasheet.getRange(iRow, 10).setValue(UF.getRange("C16").getValue()); //Rating2
        datasheet.getRange(iRow, 11).setValue(UF.getRange("C17").getValue()); //Rating3
        datasheet.getRange(iRow, 12).setValue(UF.getRange("C18").getValue()); //Rating4
        datasheet.getRange(iRow, 13).setValue(UF.getRange("C20").getValue()); //Comment

        //getting session values
        datasheet.getRange(blankRow, 1).setValue(new Date()).setNumberFormat('yyyy/mm/cc HH:MM'); //Date col 1
        datasheet.getRange(blankRow, 14).setValue(Session.getActiveUser().getEmail()); //who did the change?
        datasheet.getRange(blankRow, 15).setValue(Session.getActiveUser().getUserLoginId()); //who did the change?
        ui.alert('Data saved and recieved EMP#' + UF.getRange("C5").getValue()); //fix for popup mismatch 
   

 
   //Clearnign the data from the Data Entry Form

            UF.getRange("C3").clear(); //Search Field
            UF.getRange("C4").clear(); //EMP ID
            UF.getRange("C5").clear(); // EMP Name
            UF.getRange("C7").clear(); // EMPGEN
            UF.getRange("C9").clear(); // EMAIL ID
            UF.getRange("C10").clear(); // Role
            UF.getRange("C11").clear(); // RM
            UF.getRange("C13").clear(); //Department
            UF.getRange("C15").clear(); //Rating1
            UF.getRange("C16").clear(); //Rating2
            UF.getRange("C17").clear(); //Rating3
            UF.getRange("C18").clear(); //Rating4
            UF.getRange("C20").clear(); //Comment


     valuesFound=true;
     return; //come out from the search function
     }
 }

 if(valuesFound==false){
 //to create the instance of the user-interface environment to use the messagebox features
 var ui = SpreadsheetApp.getUi();
 ui.alert("No record found!");
}

}