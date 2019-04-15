$(document).ready(function () {
  $('select').formSelect();
  // Getting references to our form and input
  var signUpForm = $('form.signup');
  var emailInput = $('input#email');
  var passwordInput = $('input#password');
  var nicknameInput = $('input#nickname');
  var dobInput = $('input#dob');
  var locationInput = $('select#location');
  var genderInput = $('select#gender');
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on('submit', function (event) {
    event.preventDefault();
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
    console.log(userData);
    // If we have an email and password, run the signUpUser function
    signUpUser(userData);
    emailInput.val('');
    passwordInput.val('');
    nicknameInput.val('');
    dobInput.val('');
    locationInput.val('');
    genderInput.val('');
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser (userData) {
    $.post('/api/signup', {
      email: userData.email,
      password: userData.password,
      nickname: userData.nickname,
      dob: userData.dob,
      location: userData.location,
      gender: userData.gender
    }).then(function (data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr (err) {
    $('#alert .msg').text(err.responseJSON);
    $('#alert').fadeIn(500);
  }
});
