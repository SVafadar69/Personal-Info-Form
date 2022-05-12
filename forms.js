var emailCheck = /^[\w-]+(.[\w-]+)@[\w-]+(.[\w-]+)(.[\D]{2,6})$/;
var emailInput = document.getElementById("email");
var form = document.getElementById('form');

form.addEventListener("submit", function (e) {
    console.log(form)
    e.preventDefault();

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var addy = document.getElementById('addy').value;
    var city = document.getElementById('city').value;
    var addy = document.getElementById('addy').value;
    var pcode = document.getElementById('pcode').value;
    var age = document.getElementById('age').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    var email = document.getElementById('email').value;
    console.log(password + ' ' + confirm)

    if (fname == '' || lname == '' || addy == '' || city == '' || pcode == '' || age == '' || password == '' || confirm == '' || email == '') {
        alert("Please Fill all required fields");
        // e.preventDefault();
    }
    else if (testCanadianPostalCode(pcode) === false) {
        alert("Postal code has invalid formatting");
    }
    else if (age < 18) {
        alert("You must be 18 to submit this form");
        // e.preventDefault();
    }

    else if (/.{8,}/.test(password) === false) {
        alert("Password must be at least 8 characters");
    } else if (/[A-Z]/.test(password) === false) {
        alert("Password must contain at least one upper case letter");
    } else if (/\d/.test(password) === false) {
        alert("Password must contain at least one number");
    } else if (password != confirm) {
        alert("Error: Passwords must match!");
        
    }
    else if (emailCheck.test(emailInput.value) === false) {
        alert("Email contains invalid characters");
    }
    

    else {
        alert("Form submission successful");

    }

})
function testCanadianPostalCode(postalCode)
{
    const postalCodeRegex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i);

    return postalCodeRegex.test(postalCode);
}
// else {
//     console.log("error")
//     alert("The password do not match!")

//
