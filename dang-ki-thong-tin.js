var btnSubmit = document.forms["register-form"]["btn-submit"];
btnSubmit.onclick = function () {
    var txtUsername = document.forms["register-form"] ["username"];
    var msgUsername = txtUsername.nextElementSibling;
    if (txtUsername == null || txtUsername.value.length == 0) {
        msgUsername.innerHTML = "*Vui lòng nhập tên của bạn.";
        msgUsername.classList.remove("hidden-text");
    }
    else if (txtUsername.value.length < 5) {
        msgUsername.innerHTML = "*tên của bạn quá ngắn.";
        msgUsername.classList.remove("hidden-text");
    } else if (txtUsername.value.length > 20) {
        msgUsername.innerHTML = "*tên của bạn quá dài.";
        msgUsername.classList.remove("hidden-text");
    } else {
        msgUsername.innerHTML = "* Tên hợp lệ";
        msgUsername.classList.remove("hidden-text");
        msgUsername.classList.remove("danger-text");
        msgUsername.classList.add("success-text");
    }
    var txtemail = document.forms["register-form"]["email"];
    var msgemail = txtemail.nextElementSibling;
    var valuetxtemail = txtemail.value;
    if (txtemail == null || txtemail.value.length == 0) {
        msgemail.innerHTML = "* Vui lòng nhập email";
        msgemail.classList.remove("hidden-text");
        msgemail.classList.add("danger-text");
    } else {
        if (valuetxtemail.search('@') == -1) {
            msgemail.innerHTML = "* Email không hợp lệ";
            msgemail.classList.remove("hidden-text");
            msgemail.classList.add("danger-text");
        } else {
            msgemail.innerHTML = "* Email hợp lệ";
            msgemail.classList.remove("hidden-text");
            msgemail.classList.remove("danger-text");
            msgemail.classList.add("success-text");
        }
    }
    var txtphone = document.forms["register-form"]["phone"];
    var msgphone = txtphone.nextElementSibling;
    if (txtphone == null || txtphone.value.length == 0) {
        msgphone.innerHTML = "* Vui lòng nhập số điện thoại";
        msgphone.classList.remove("hidden-text");
        msgphone.classList.add("danger-text");
    } else {
        msgphone.innerHTML = "* Số điện thoại hợp lệ";
        msgphone.classList.remove("hidden-text");
        msgphone.classList.remove("danger-text");
        msgphone.classList.add("success-text");
    }
}