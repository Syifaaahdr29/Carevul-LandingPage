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