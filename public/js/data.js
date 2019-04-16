$(document).ready(function () {
  $('select').formSelect();
  var concertInput = $('input#artist');
  var placeInput = $('input#place');
  var restaurantInput = $('input#restaurant');
  var movieInput = $('input#movie');
  var bookInput = $('input#book');
  var activityInput = $('input#activity');
  var goalInput = $('input#goal');

  $('#addingGoals').on('click', function (event) {
    event.preventDefault();
    var userAnswers = {
      concert: concertInput.val().trim(),
      place: placeInput.val().trim(),
      restaurant: restaurantInput.val().trim(),
      movie: movieInput.val().trim(),
      book: bookInput.val().trim(),
      activity: activityInput.val().trim(),
      goal: goalInput.val().trim()
    };

    if (!userAnswers.concert || !userAnswers.place || !userAnswers.restaurant || !userAnswers.movie || !userAnswers.book || !userAnswers.activity || !userAnswers.goal) {
      return;
    }

    submitAnswers(userAnswers);
    concertInput.val('');
    placeInput.val('');
    restaurantInput.val('');
    movieInput.val('');
    bookInput.val('');
    activityInput.val('');
    goalInput.val('');
  });

  function submitAnswers (userAnswers) {
    $.post('/api/data', {
      concert: userAnswers.concert,
      place: userAnswers.place,
      restaurant: userAnswers.restaurant,
      movie: userAnswers.movie,
      book: userAnswers.book,
      activity: userAnswers.activity,
      goal: userAnswers.goal
    }).then(function (data) {
      window.location.replace('/');
    }).catch(handleAnswersErr);
  }

  function handleAnswersErr (err) {
    $('#alert .msg').text(err.responseJSON);
    $('#alert').fadeIn(500);
  }
});
