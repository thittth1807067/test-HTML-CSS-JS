var btnSubmit = document.forms["register-form"]["btn-submit"];
btnSubmit.onclick = function(){
    // Username
    var txtUsername = document.forms["register-form"]["username"];
    var msgUsername = txtUsername.nextElementSibling;
    if (txtUsername == null || txtUsername.value.length == 0){
        msgUsername.innerHTML = "* Vui lòng nhập tên";
        msgUsername.classList.remove("hidden-text");
    } else if (txtUsername.value.length < 5){
        msgUsername.innerHTML = "* Tên quá ngắn";
        msgUsername.classList.remove("hidden-text");
    } else if (txtUsername.value.length > 20) {
        msgUsername.innerHTML = "* Tên quá dài";
        msgUsername.classList.remove("hidden-text");
    } else {
        msgUsername.innerHTML = "* Tên hợp lệ";
        msgUsername.classList.remove("hidden-text");
        msgUsername.classList.remove("danger-text");
        msgUsername.classList.add("success-text");
    }

    var txtphone = document.forms["register-form"]["phone"];
    var msgphone = txtphone.nextElementSibling;
    if ( txtphone == null || txtphone.value.length == 0){
        msgphone.innerHTML = "* Vui lòng nhập số điện thoại";
        msgphone.classList.remove("hidden-text");
    } else{
        msgphone.innerHTML = "* Tên hợp lệ";
        msgphone.classList.remove("hidden-text");
        msgphone.classList.remove("danger-text");
        msgphone.classList.add("success-text");
    }
    var txtEmail = document.forms["register-form"]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    var valueTxtEmail = txtEmail.value
    if (txtEmail == null || txtEmail.value.length == 0) {
        msgEmail.innerHTML = "* Vui lòng nhập email";
        msgEmail.classList.remove("hidden-text");
    } else {
        if (valueTxtEmail.search('@') == -1) {
            msgEmail.innerHTML = "* Email không hợp lệ";
            msgEmail.classList.remove("hidden-text");
        } else {
            msgEmail.innerHTML = "* Email hợp lệ";
            msgEmail.classList.remove("hidden-text");
            msgEmail.classList.remove("danger-text");
            msgEmail.classList.add("success-text");
        }
    }

    document.getElementById('dang ki').innerHTML = content;
};
xmlHttpRequest.open('GET', MY_API, true);
xmlHttpRequest.send();
