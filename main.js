function invioMessage() {
  var nuovo_testo = $('.digita-testo input').val();
  if (nuovo_testo.length != 0) {
    var template_testo = $('.template .message').clone();
    template_testo.children('.message-text').text(nuovo_testo);
    template_testo.addClass('sent');
    $('.area-conversazione').append(template_testo);

    $('.digita-testo input').val('');
  }
}

function rispostaComputer() {
  if (($('.area-conversazione').children().length) > 0 && !$('.area-conversazione').children().eq([-1]).hasClass('received')) {
    setTimeout(function () {
      var risposta_computer = 'OK';
      var template_testo = $('.template .message').clone();
      template_testo.children('.message-text').text(risposta_computer);
      template_testo.addClass('received');
      $('.area-conversazione').append(template_testo);
    },1000)
  }
}

$('.digita-testo input').keypress(function (event) {

  if (event.which > 0) {
    $('#microphone').removeClass('active');
    $('#paper-plane').addClass('active');

  }

})

$('.digita-testo input').keyup(function (event) {
  var nuovo_testo = $('.digita-testo input').val();
  if (nuovo_testo.length != 0) {
    $('#microphone').removeClass('active');
    $('#paper-plane').addClass('active');
  }
  else {
    $('#paper-plane').removeClass('active');
    $('#microphone').addClass('active');
  }
})

$('.digita-testo .fas').click(function () {
  invioMessage();
  rispostaComputer();
  $('#paper-plane').removeClass('active');
  $('#microphone').addClass('active');
})

$('.digita-testo input').keypress(function (event) {
  if (event.which == 13) {
    invioMessage();
    rispostaComputer();
    $('#paper-plane').removeClass('active');
    $('#microphone').addClass('active');
  }
})
console.log($('.area-conversazione').children().length);
