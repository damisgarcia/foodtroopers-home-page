'use strict'
var API_KEY = "dUamEPAG9GhYnJk4rC9vWg"
var FROM = "damisgarcia@gmail.com"
var SUBJECT = "Nova Mensagem Enviada pelo Website."

function sendMessage(e){

  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': API_KEY,
      'message': {
        'from_email': FROM,
        'to': [
            {
              'email': $(e.target).find("#email").val(),
              'name': $(e.target).find("#name").val(),
              'type': 'to'
            }
          ],
        'autotext': 'true',
        'subject': SUBJECT,
        'html': $(e.target).find("#message").val()
      }
    }
   }).done(function(response) {
     console.log(response); // if you're into that sorta thing
   });

  return false;
}


$(document).ready(function(e){
  $("#contact").submit(sendMessage)
});
