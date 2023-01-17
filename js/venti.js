$(function(){
    
    $('.gnb>ul').on('mouseenter focuIn',function(){
      $('.sub').stop().slideDown(350);
      $('.gnb_bg').stop().slideDown(350);
    });
    $('.gnb>ul').on('mouseleave focusOut',function(){
      $('.sub').stop().slideUp(350);
      $('.gnb_bg').stop().slideUp(350);
    });
    // 모바일도 추가하기.
    function bxslideBegin(){
		$('.slide ').bxSlider({
			autoControls:true,
			pager:false,
			auto:true,
			speed:300,
			controls:true,
      startSlide:1,
      autoControls:false,
		});
       
	}
  setTimeout(bxslideBegin,20);
    
    $('.bslide').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        /*
        autoplay:true,
        autoplaySpeed:2500,
        
        
        responsive: [ //반응형 옵션
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 640,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
        */
        
      });

}); 