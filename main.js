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
  if (($('.area-conversazione').children().length) > 0 && !$('.area-conversazione').children().eq(-1).hasClass('received')) {
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

$('.ricerca-left-color input').keyup(function () {
  var testo_ricerca = $(this).val();
  if (testo_ricerca.length != 0) {
    $('.conversazione-left').each(function () {
      var nome_conversazione = $(this).find('.nome').text();
      testo_ricerca = testo_ricerca.toLowerCase();
      nome_conversazione = nome_conversazione.toLowerCase();

      if (nome_conversazione.includes(testo_ricerca)) {

        $(this).show();
      }
      else {

        $(this).hide();
      }
    })
  }
  else {
    $('.conversazione-left').show();
  }
})
// da migliorare e finire il milestone 3 -Click sul contatto- ----------
$('.conversazione-left').click(function () {

  $('.conversazione-left').removeClass('messaggio-active');
  $(this).addClass('messaggio-active');
  $('.digita-testo-container').show();
  var utente_conversazione = $(this).find('.img-utente, .info-conversazione p:first-child span.nome').clone();
  $('.conversazione-attuale').append(utente_conversazione);

})
//  --------------------------------------------------------


$(document).on('click', '.fa-chevron-down',function () {

  $(this).siblings('.message-options').toggle();
})

$(document).on('click', '.message-delete',function () {
  var messaggio_eliminato = $(this).parents('.message').children('.message-text').html('<p><em>Hai eliminato questo messaggio</em></p>')
  $('.message .message-text p').css('margin-right','20px');
})
