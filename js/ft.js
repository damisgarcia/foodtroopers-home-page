$(document).ready(function(e){
  // Browser Compatibilty
  var md = new MobileDetect(window.navigator.userAgent);

  if(md.is('iPhone')){
    $("body").addClass("iphone")
  } else{
    console.log(md.phone())
    if(md.phone()){
      $("body").addClass("android")
    }
  }

  $('.ft-device').on('click',function(e){
    if(!$(this).hasClass(".active") && !isMobile(md)){
      $('.ft-device').each(function(index,ele){
        $(ele).removeClass("active")
      })
      $(this).addClass("active")
    }
  })

  $('.ft-gallery').each(function(index,ele){
    var gallery_size = $(ele).find(".screen").size()
    var gallery_position = 1

    $(ele).find(".screen:first-child").addClass("active")

    setInterval(function(){
      gallery_size == gallery_position ? gallery_position = 1 : gallery_position++
      $(ele).find(".screen").removeClass('active')
      $(ele).find(".screen:nth-child("+gallery_position+")").addClass("active")
    },3000)
  })

  function isMobile(mobileDetect){
    return  mobileDetect.phone() || false
  }
})
