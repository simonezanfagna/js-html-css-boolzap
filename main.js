var conversazione_contatti = {
  'cc1': [
    {
      'testoMessaggio': 'Ciao Michele',
      'testoDirezione': 'sent'
    },
    {
      'testoMessaggio': 'Ciao Simone',
      'testoDirezione': 'received'
    },
  ],
  'cc2': [
    {
      'testoMessaggio': 'Ciao Fabio',
      'testoDirezione': 'sent'
    },
    {
      'testoMessaggio': 'Ciao Simone',
      'testoDirezione': 'received'
    },
  ],
  'cc3': [
    {
      'testoMessaggio': 'Ciao Samuele',
      'testoDirezione': 'sent'
    },
    {
      'testoMessaggio': 'Ciao Simone',
      'testoDirezione': 'received'
    },
  ],
  'cc4': [
    {
      'testoMessaggio': 'Ciao Alessandro',
      'testoDirezione': 'sent'
    },
    {
      'testoMessaggio': 'Ciao Simone',
      'testoDirezione': 'received'
    },
  ],
  'cc5': [
    {
      'testoMessaggio': 'Ciao Maria',
      'testoDirezione': 'sent'
    },
    {
      'testoMessaggio': 'Ciao Simone',
      'testoDirezione': 'received'
    },
  ]
};

for (var codice_conversazione_contatto in conversazione_contatti) {
  var contenitore_conversazione = '<div data-conversazione-contatto ="'+ codice_conversazione_contatto + '" class="area-conversazione"></div>';
  $('.container-area-conversazione').append(contenitore_conversazione);

  var messaggi = conversazione_contatti[codice_conversazione_contatto];
  for (var i = 0; i < messaggi.length; i++) {

    var messaggio_conversazione = messaggi[i];
    var testo_messaggio_conversazione = messaggio_conversazione.testoMessaggio;
    var direzione_messaggio_conversazione = messaggio_conversazione.testoDirezione;
    var template_nuovo_messaggio = $('.template .message').clone();
    template_nuovo_messaggio.children('.message-text').text(testo_messaggio_conversazione);
    template_nuovo_messaggio.addClass(direzione_messaggio_conversazione);
    $('.area-conversazione[data-conversazione-contatto ="'+ codice_conversazione_contatto + '"]').append(template_nuovo_messaggio);

  }
}



function invioMessage() {
  var nuovo_testo = $('.digita-testo input').val();
  if (nuovo_testo.length != 0) {
    var template_testo = $('.template .message').clone();
    template_testo.children('.message-text').text(nuovo_testo);
    template_testo.addClass('sent');
    $('.area-conversazione.active').append(template_testo);

    $('.digita-testo input').val('');
  }
}

function rispostaComputer() {
  if (($('.area-conversazione.active').children().length) > 0 && !$('.area-conversazione.active').children().eq(-1).hasClass('received')) {
    setTimeout(function () {
      var risposta_computer = 'OK';
      var template_testo = $('.template .message').clone();
      template_testo.children('.message-text').text(risposta_computer);
      template_testo.addClass('received');
      $('.area-conversazione.active').append(template_testo);
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


$('.conversazione-left').click(function () {

  var conversazione_contatto = $(this).attr('data-conversazione-contatto');
  $('.area-conversazione').removeClass('active');
  $('.area-conversazione[data-conversazione-contatto="'+ conversazione_contatto +'"]').addClass('active');


  $('.conversazione-left').removeClass('messaggio-active');
  $(this).addClass('messaggio-active');
  $('.digita-testo-container').show();
  var nome = $(this).find('.nome').text();
  var immagine_nome = $(this).find('img').attr('src');
  $('.conversazione-attuale').find('.nome').text(nome);
  $('.conversazione-attuale').find('img').attr('src', immagine_nome);
  $('.conversazione-attuale').addClass('active');


})








$(document).on('click', '.fa-chevron-down',function () {

  $(this).siblings('.message-options').toggle();
})

$(document).on('click', '.message.sent .message-delete',function () {
  var messaggio_eliminato = $(this).parents('.message').children('.message-text').html('<p><em>Hai eliminato questo messaggio</em></p>')
  $('.message .message-text p').css('margin-right','20px');
})




console.log(conversazione_contatti);
