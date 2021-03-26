// ------host login------
const login_admin_hst_emil = document.getElementById('login_admin_hst_emil')
const login_admin_pws = document.getElementById('login_admin_pws')
const login_admin_abn = document.getElementById('login_admin_abn')
const admin_log_form = document.getElementById('admin_log_form')
const login_host_form = document.getElementById('login_host_form')
const host_pws_format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{6,12}$/
const host_email_format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const ABN_valid=/^(\d *?){11}$/
const isvalid = false
admin_log_form.addEventListener('submit', (e) => {
    e.preventDefault()
    // let messages = []
    if (login_admin_hst_emil.value === '' || login_admin_hst_emil.value == null) {
        alert('Please enter Email Address!');
        isvalid = true;
    }
    else if(!host_email_format.test(login_admin_hst_emil.value)){
        alert('Invalid email format');
    }
    else if (login_admin_pws.value.length <= 5 || login_admin_pws.value.length >= 13) {
        alert('Password must be longer than 6 characters and Password must be less than 12 characters.Also it must contain at least 1 lower case letter,1 uppercase letter,1 number and the following special charaters(!@#$%)');
        // isvalid = true;
    }
    else if(!host_pws_format.test(login_admin_pws.value)){
        alert('Password must contain at least 1 lower case letter,1 uppercase letter,1 number and the following special charaters(!@#$%)');
    }
    else if(!ABN_valid.test(login_admin_abn.value)){
        alert('Please check your ABN number,it must be 11 numbers');
        // isvalid= true;
    }
    // if (login_admin_pws.value.length >= 20) {
    //     confirm('Password must be less than 20 characters');
    // }
    else if(host_pws_format.test(login_admin_pws.value) && host_email_format.test(login_admin_hst_emil.value)) {
        alert('Login in successfull.');
        window.location.href="../html/host_dashboard.html";
    }
    return isvalid;
})







// ------host login------
const login_admin_sys_email = document.getElementById('login_admin_sys_email')
const login_admin_sys_pws = document.getElementById('login_admin_sys_pws')
// const admin_log_form = document.getElementById('admin_log_form')
const sys_pws_format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{6,12}$/
const sys_email_format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// const isvalid = false
admin_log_form.addEventListener('submit', (e) => {
    e.preventDefault()
    // let messages = []
    if (login_admin_sys_email.value === '' || login_admin_sys_email.value == null) {
        alert('Please enter Email Address!');
        isvalid = true;
    }
    else if(!sys_email_format.test(login_admin_sys_email.value)){
        alert('Invalid email format');
    }
    else if (login_admin_sys_pws.value.length <= 5 || login_admin_sys_pws.value.length >= 13) {
        alert('Password must be longer than 6 characters and Password must be less than 12 characters.Also it must contain at least 1 lower case letter,1 uppercase letter,1 number and the following special charaters(!@#$%)');
        // isvalid = true;
    }
    else if(!sys_pws_format.test(login_admin_sys_pws.value)){
        alert('Password must contain at least 1 lower case letter,1 uppercase letter,1 number and the following special charaters(!@#$%)');
    }
        // isvalid= true;
    
    // if (login_admin_pws.value.length >= 20) {
    //     confirm('Password must be less than 20 characters');
    // }
    else if(sys_pws_format.test(login_admin_sys_email.value) && sys_email_format.test(login_admin_sys_email.value)) {
        alert('Login in successfull.');
        window.location.href="../html/dashboard.html";
    }
    return isvalid;
})





// ----------------host register---------------------
const reg_sys_fname = document.getElementById('reg_sys_fname')
const reg_sys_lname = document.getElementById('reg_sys_lname')
const reg_sys_email = document.getElementById('reg_sys_email')
const reg_sys_pws = document.getElementById('reg_sys_pws')
const reg_sys_conpws = document.getElementById('reg_sys_conpws')
const reg_sys_pws_format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{6,12}$/
const reg_sys_email_format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// const isvalid = false
reg_form.addEventListener('submit', (e) => {
    e.preventDefault()
    // let messages = []
    if (reg_sys_email.value == '' || reg_sys_email.value == null) {
        alert('Name is required');
        // isvalid = true;
    }
    else if(!reg_sys_email_format.test(reg_sys_email.value)){
        alert('Invalid email format');
    }
    else if (reg_host_pws.value.length <= 5 || reg_host_pws.value.length >= 13) {
        alert('Password must be longer than 6 characters and Password must be less than 12 characters');
        // isvalid = true;
    }
    else if(!reg_sys_pws_format.test(reg_sys_pws.value)&&(reg_sys_conpws.value)){
        alert('Password must contain at least 1 lower case letter,1 uppercase letter,1 number and the following special charaters(!@#$%)');
    }

    // if (login_password.value.length >= 20) {
    //     confirm('Password must be less than 20 characters');
    // }
    else if (reg_sys_pws.value!=reg_sys_conpws.value) {
        alert('Password does not match');
    }
    else if(reg_sys_pws.value ==reg_sys_conpws.value) {
        alert('Sign up successfull.Please sign in');
        window.location.href="../html/login_admin.html";
    }
    return isvalid;
})


// ---------systemer regiter------









// -------------select show different content---------















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
//