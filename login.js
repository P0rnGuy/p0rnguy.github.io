function login() {

    var username = document.getElementById("Uname");
    var pass = document.getElementById("Pass");

    if (username.value == "") {

        alert("请输入用户名");

    } else if (pass.value == "") {

        alert("请输入密码");

    } else if (username.value == "admin" && pass.value == "fuckyou") {

        window.location.href = "secret.html";

    } else {

        alert("请输入正确的用户名和密码！")

    }
}