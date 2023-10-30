// ================conter app==================

let counter = 0

function negative() {
    counter = counter - 1
    document.querySelector('.counter').textContent = counter
    console.log(counter);


}

function positive() {
    counter = counter + 1
    document.querySelector('.counter').textContent = counter
    console.log(counter);



}

function reset() {
    counter = 0
    document.querySelector('.counter').textContent = counter
    console.log(counter);

}

// ====age app====================
function ageReset() {
    document.getElementById('age').innerHTML = ""
    document.getElementById('date').value = ""

}

function calAge() {
    var inputAge = document.getElementById('date').value.split('-');
    let year = 2023 - inputAge[0]





    if (inputAge[0] == 2023) {
        month = 10 - inputAge[1]
    } else {
        month = 12 - inputAge[1]
    }


    if (inputAge[1] == 1 || inputAge[1] == 3 || inputAge[1] == 5 || inputAge[1] == 7 || inputAge[1] == 8 || inputAge[1] == 10 || inputAge[1] == 12) {
        days = 31 - inputAge[2]
    } else if (inputAge[1] == 4 || inputAge[1] == 6 || inputAge[1] == 9 || inputAge[1] == 11) {
        days = 30 - inputAge[2]
    } else if (inputAge[1] == 2) {
        days = 28 - inputAge[2]
    }

    console.log(year, month, days);
    if (inputAge[0] < 2023 || (inputAge[0] == 2023 && inputAge[1] <= 10)) {
        document.getElementById('age').innerHTML = `your age is ${year} years old and ${month} months and ${days} days `
    } else {
        document.getElementById('age').innerHTML = "please select the date of birth  less then 31-10-2023"

    }

}
//=================== formapp=========================
//input fields
let FirstName = document.getElementById('FirstName')
let UserName = document.getElementById('UserName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let telephone = document.getElementById('telephone')
let Pan = document.getElementById('Pan')

// errors
let errorFirstName = document.getElementById('errorFirstName')
let errorUserName = document.getElementById('errorUserName')
let erroremail = document.getElementById('erroremail')
let errorpassword = document.getElementById('errorpassword')
let errortelephone = document.getElementById('errortelephone')
let errorPan = document.getElementById('errorPan')

// regual expressions
let FirstNameRegX = /^[a-zA-Z0-9_]{5,15}$/
let UserNameRegx = /^[a-zA-Z0-9_]{5,12}$/
let telephoneRegx = /^[6-9]\d{9}$/
let emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{1,}\.[a-zA-Z]{2,}$/
let passwordRegx = /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[@*#].*).{8,20}/gm
let PanRegx = /^[A-Z]{5}[0-9]{4}[A-Z]$/

// click functions
function validatephone() {
    if (telephone.value.match(telephoneRegx)) {
        telephone.style.borderColor = "green";
        errortelephone.textContent = ""
    } else {
        errortelephone.textContent = "telephone number should be a valid indian telephone number(10 digits)"
        telephone.style.borderColor = "red"
        errortelephone.style.color = "red"



    }
}


function validateFirstName() {
    if (FirstName.value.match(FirstNameRegX)) {
        FirstName.style.borderColor = "green"
        errorFirstName.textContent = ""
    } else {
        errorFirstName.textContent = "first name should contain 5-15 characters"
        errorFirstName.style.color = "red"
        FirstName.style.borderColor = "red"
    }
}


function validateUserName() {
    if (UserName.value.match(UserNameRegx)) {
        UserName.style.borderColor = "green"
        errorUserName.textContent = ""
    } else {
        errorUserName.textContent = "user name should contain 5-12 characters"
        errorUserName.style.color = "red"
        UserName.style.borderColor = "red"
    }

}

function validateemail() {
    if (email.value.match(emailRegx)) {
        email.style.borderColor = "green"
        erroremail.textContent = ""
    } else {
        erroremail.textContent = "Email should be valid address eg. 'me.my@domain.com"
        erroremail.style.color = "red"
        email.style.borderColor = "red"
    }

}

function validatepassword() {
    if (password.value.match(passwordRegx)) {
        password.style.borderColor = "green"
        errorpassword.textContent = ""
    } else {
        errorpassword.textContent = "password should be alphaNumberic(@ and - and other special characters are also allowed and be 8-20 characters)"
        errorpassword.style.color = "red"
        password.style.borderColor = "red"
    }
}

function validatepan() {
    if (Pan.value.match(PanRegx)) {

        Pan.style.borderColor = "green"
        errorPan.textContent = ""
    } else {
        errorPan.textContent = "should be valid pan card number for eg-ABCD1234E"
        errorPan.style.color = "red"
        Pan.style.borderColor = "red"
    }

}

function resetform() {
    Pan.value = ""
    email.value = ""
    password.value = ""
    FirstName.value = ""
    UserName.value = ""
    telephone.value = ""

    errorPan.textContent = ""
    errorPan.style.color = ""
    Pan.style.borderColor = ""
    errorpassword.textContent = ""
    errorpassword.style.color = ""
    password.style.borderColor = ""
    erroremail.textContent = ""
    erroremail.style.color = ""
    email.style.borderColor = ""
    errorUserName.textContent = ""
    errorUserName.style.color = ""
    UserName.style.borderColor = ""
    errorUserName.textContent = ""
    errorUserName.style.color = ""
    UserName.style.borderColor = ""
    errorFirstName.textContent = ""
    errorFirstName.style.color = ""
    FirstName.style.borderColor = ""
    errortelephone.textContent = ""
    telephone.style.borderColor = ""
    errortelephone.style.color = ""
}







// ========threebutton=======================

function counterApp() {
    document.querySelector('.hidden-counter').classList.remove('hidden')
    document.querySelector('.hidden-age').classList.add('hidden')
    document.querySelector('.hidden-form').classList.add('hidden')


}

function ageApp() {
    document.querySelector('.hidden-counter').classList.add('hidden')
    document.querySelector('.hidden-age').classList.remove('hidden')
    document.querySelector('.hidden-form').classList.add('hidden')

}

function formApp() {
    document.querySelector('.hidden-counter').classList.add('hidden')
    document.querySelector('.hidden-age').classList.add('hidden')
    document.querySelector('.hidden-form').classList.remove('hidden')

}
