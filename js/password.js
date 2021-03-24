const login_email = document.getElementById('login_email')
const login_password = document.getElementById('login_password')
const login_confirmpassword = document.getElementById('login_confirmpassword')
const login_form = document.getElementById('login_form')
const reg = /^[A-Za-z0-9]\w{6,12}$/
const isvalid = false

login_form.addEventListener('submit', (e) => {
    e.preventDefault()
    let messages = []
    if (login_email.value === '' || login_email.value == null) {
        confirm('Name is required');
        // isvalid = true;
    }

    if (login_password.value.length <= 5 || login_password.value.length >= 13) {
        confirm('Password must be longer than 6 characters and Password must be less than 12 characters');
        // isvalid = true;
    }

    if(!reg.test(login_password)){
        confirm('Password must contain Aa1!.');
    }


    // if (login_password.value.length >= 20) {
    //     confirm('Password must be less than 20 characters');
    // }
    if (login_confirmpassword.value >= 'password') {
        confirm('Password does not match');
    }

    // if (messages.length > 0) {
    //     // e.preventDefault()
    //     errorElement.innerText = messages.join(', ')
    // }
    return isvalid;
})







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