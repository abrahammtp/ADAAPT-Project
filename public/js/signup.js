$(document).ready(function () {
  console.log('This is the page');
  // Getting references to our form and input
  var emailInput = $('input#email');
  var passwordInput = $('input#password');
  var nicknameInput = $('input#nickname');
  var dobInput = $('input#dob');
  // When the signup button is clicked, we validate the email and password are not blank
  $('#submitButton').on('click', function (event) {
    console.log('This is the button');
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      nickname: nicknameInput.val().trim(),
      dob: dobInput.val().trim()
    };
    console.log('This is line 18' + userData);
    if (!userData.email || !userData.password || !userData.nickname || !userData.dob) {
      return;
    }
    console.log('This is line 22' + userData);
    // If we have an email and password, run the signUpUser function
    signUpUser(userData);
    emailInput.val('');
    passwordInput.val('');
    nicknameInput.val('');
    dobInput.val('');
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser (userData) {
    $.post('/api/signup', {
      email: userData.email,
      password: userData.password,
      nickname: userData.nickname,
      dob: userData.dob
    }).then(function (data) {
      window.location.replace('/');
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr (err) {
    $('#alert .msg').text(err.responseJSON);
    $('#alert').fadeIn(500);
  }
});
