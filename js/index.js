$(function(){
	Nav();
})

function Nav(){

  // 导航
  $('body').bind({
    'click': function(){
      $('.shownav').removeClass('hover').siblings('.nav').hide();
    },
    'touchmove': function(){
      $('.shownav').removeClass('hover').siblings('.nav').hide();
    }
  })
  $('#showNav').bind('click', function(){
    if($('#nav').is(':hidden')){
      $(this).addClass('active');
      $('#nav').stop().show(300);
    }else{
      $(this).removeClass('active');
      $('#nav').stop().hide(300);
      setTimeout(function(){
        $('#nav').stop().hide();
      }, 500)
    }
  });
}