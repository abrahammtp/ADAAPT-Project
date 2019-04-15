$(document).ready(function () {
    console.log("I'm connected");
    var signUpForm = $("form.signup");
    var emailInput = $("input#email");
    var passwordInput = $("input#password");
    var nicknameInput = $("input#nickname");
    var dobInput = $("input#dob");
    var locationInput = $("input#location");
    var genderInput = $("input#gender");

    signUpForm.on("click"), function (event) {
        event.preventDefault();
        console.log("THIS IS LINE 11");

        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            nickname: nicknameInput.val().trim(),
            dob: dobInput.val().trim(),
            location: locationInput.val().trim(),
            gender: genderInput.val().trim()
        };
        if (!userData.email || !userData.password || !userData.nickname || !userData.dob || !userData.location || !userData.gender) {
            return;
        }
        // signUpUser(userData);
        console.log("line 26" + userData);
    }
        function signUpUser(userData) {
         
            $.post("/api/signup2", {
                email: userData.email,
                password: userData.password,
                nickname: userData.nickname,
                dob: userData.dob,
                location: userData.location,
                gender: userData.gender
            }).then(function (data) {
                window.location.replace(data);
                console.log(userData + "THIS IS LINE 37");

            }).catch(handleLoginErr);
        };
    

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    };
});

