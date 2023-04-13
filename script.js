// No. 6 handleGetFormData
let btnSubmit = document.getElementById("submit-form")
let warning = document.getElementById("warning")

function handleGetFormData () {
    let domName = document.getElementById("name").value
    let domEmail = document.getElementById("email").value
    let domCity = document.getElementById("city").value
    let domZipcode = document.getElementById("zip-code").value
    let domStatus = document.getElementById("status").checked
  
    let result = {
        name : domName, 
        email : domEmail, 
        city : domCity,
        zipCode : domZipcode,
        status : domStatus
    }
    return result
}

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(handleGetFormData());
    console.log(!handleGetFormData === null);
    console.log(validateFormData(handleGetFormData()));
});

// No.7 isNan
function isNumber(string) {
    return !isNaN(string) ? true : false;
}

// No. 8 Validate Checkbox
function checkboxIsChecked() {
    return document.getElementById("status").checked == true ? true : false;
}
