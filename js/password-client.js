const login_email = document.getElementById('login_email')
const login_password = document.getElementById('login_password')
const login_confirmpassword = document.getElementById('login_confirmpassword')
const login_form = document.getElementById('login_form')
const pws_format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{6,12}$/
const email_format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const isvalid = false
login_form.addEventListener('submit', (e) => {
    e.preventDefault()
    // let messages = []
    if (login_email.value === '' || login_email.value == null) {
        alert('Eame is required');
        isvalid = true;
    }
    else if(!email_format.test(login_email.value)){
        alert('Invalid email format');
    }
    else if (login_password.value.length <= 5 || login_password.value.length >= 13) {
        alert('Password must be longer than 6 characters and Password must be less than 12 characters');
        // isvalid = true;
    }
    else if(!pws_format.test(login_password.value)&&(login_confirmpassword.value)){
        alert('Password must contain at least 1 lower case letter,1 uppercase letter,1 number and the following special charaters(!@#$%)');
    }

    // if (login_password.value.length >= 20) {
    //     confirm('Password must be less than 20 characters');
    // }
    else if (login_password.value!=login_confirmpassword.value) {
        alert('Password does not match');
    }
    else if(login_password.value ==login_confirmpassword.value) {
        alert('Login in successfull.');
        window.location.href="../html/booking.html";
    }
    return isvalid;
})

// ----------------register---------------------
const reg_form = document.getElementById('reg_form')
const reg_fname = document.getElementById('reg_fname')
const reg_lname = document.getElementById('reg_lname')
const reg_email = document.getElementById('reg_email')
const reg_pws = document.getElementById('reg_pws')
const reg_cpws = document.getElementById('reg_cpws')
const reg_ph_no = document.getElementById('reg_ph_no')
const reg_loc = document.getElementById('reg_loc');
const reg_pws_format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{6,12}$/
const reg_email_format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const isvalid = false
reg_form.addEventListener('submit', (e) => {
    e.preventDefault()
    // let messages = []
    if (reg_email.value == '' || reg_email.value == null) {
        alert('Name is required');
        // isvalid = true;
    }
    else if(!reg_email_format.test(reg_email.value)){
        alert('Invalid email format');
    }
    else if (reg_pws.value.length <= 5 || reg_pws.value.length >= 13) {
        alert('Password must be longer than 6 characters and Password must be less than 12 characters');
        // isvalid = true;
    }
    else if(!reg_pws_format.test(reg_pws.value)&&(reg_cpws.value)){
        alert('Password must contain at least 1 lower case letter,1 uppercase letter,1 number and the following special charaters(!@#$%)');
    }

    // if (login_password.value.length >= 20) {
    //     confirm('Password must be less than 20 characters');
    // }
    else if (reg_pws.value!=reg_pws.value) {
        alert('Password does not match');
    }
    else if(reg_pws.value ==reg_pws.value) {
        alert('Sign up successfull.Please sign in');
        window.location.href="../html/login_reg.html";
    }
    return isvalid;
})




// --------register --------














// function validation() {
//     var email_valid = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
//         password_valid= /^(=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%]){6,12}$/;
//     var isEmpty = false,
//         login_email= document.getElementById("login_email").value,      
//         login_confirmpassword = document.getElementById("login_confirmpassword").value,
//         login_password = document.getElementById("login_password").value;
//         login_form = document.getElementById("login_form").value;
//         login_form.addEventListener('submit', (e) => {
//             e.preventDefault();



//             if (login_email === "") {
//                 alert("Please Enter your Email");
//                 isEmpty = true;
//             }
//             else if (!login_email.test(email_valid)) {
//                 alert("Email should be correct format");
//                 isEmpty = true;
//             }
//             else if (login_password.value.match(password_valid)) {
//                 alert("Password must contain at least 1 lower caser letter,1uppercase letter,1 number and one of the folloing character !@#$%");
//                 isEmpty=true;
//             }else if (login_password === "") {
//                 alert("Please enter Confirm Password");
//                 isEmpty = true;
//             }else if (login_confirmpassword === "") {
//                 alert("Please enter Confirm Password");
//                 isEmpty = true;
//             }
//             return isEmpty
//         })
//     }


// function pwd(login_password){
//     return /^(=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%]){6,12}$/.test(login_password);
// }








// function validation() {
//     var email_valid = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     // var password_valid= /^(=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%]){6,12}$/;
//     var isEmpty = false,
//         login_email= document.getElementById("login_email").value,
//         login_password = document.getElementById("login_password").value,
//         login_confirmpassword = document.getElementById("login_confirmpassword").value;

//     if (login_email === "") {
//         alert("Please Enter your Email");
//         isEmpty = true;
//     } else if (!login_email.test(email_valid)) {
//         alert("Email should be correct format");
//         isEmpty = true;
//     }else if (!password_valid.test('A3b@C2dEF')) {
//         alert("Password must contain at least 1 lower caser letter,1uppercase letter,1 number and one of the folloing character !@#$%");
//     }else if (login_password === "") {
//         alert("Please enter Confirm Password");
//         isEmpty = true;
//     } else if (login_confirmpassword === "") {
//         alert("Please enter Confirm Password");
//         isEmpty = true;
//     }
//     return isEmpty
// }