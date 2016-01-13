$(document).ready(function(e){
  console.log("Ready!")

  $('.ft-device').on('click',function(e){
    if(!$(this).hasClass(".active")){
      $('.ft-device').each(function(index,ele){
        $(ele).removeClass("active")
      })
      $(this).addClass("active")
    }
  })
})
