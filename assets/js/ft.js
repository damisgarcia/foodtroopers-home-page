$(document).ready(function(e){
  console.log("Ready!")

  // Detected User Browser
  var device = new MobileDetect(window.navigator.userAgent)
  // Browser Compatibilty
  $("body").addClass(device.userAgent().toString().toLowerCase())

  $('.ft-device').on('click',function(e){
    if(!$(this).hasClass(".active")){
      $('.ft-device').each(function(index,ele){
        $(ele).removeClass("active")
      })
      $(this).addClass("active")
    }
  })
})
