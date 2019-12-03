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

$('.digita-testo input').keypress(function (event) {

  if (event.which > 0) {
    $('#microphone').removeClass('active');
    $('#paper-plane').addClass('active');

  }

})

$('.digita-testo .fas').click(function () {
  invioMessage();
  $('#paper-plane').removeClass('active');
  $('#microphone').addClass('active');
})

$('.digita-testo input').keypress(function (event) {
  if (event.which == 13) {
    invioMessage();
    $('#paper-plane').removeClass('active');
    $('#microphone').addClass('active');
  }
})
