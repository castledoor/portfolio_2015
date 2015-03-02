$( document ).ready(function() {
    $("#header").arctext({radius: 940});
    var data = { loop: true, in: {effect: 'flipInX', sync: true, shuffle: false}, out: {effect: 'flipOutX', sync: true, shuffle: false} };
		$('.shifter').textillate(data);


		$('.gallery ul li a').click(function() {
		    var itemID = $(this).attr('href');
		    $('.gallery ul').addClass('item_open');
		    $(itemID).addClass('item_open');
		    return false;
		});
		$('.close').click(function() {
		    $('.port, .gallery ul').removeClass('item_open');
		    return false;
		});

		$(".gallery ul li a").click(function() {
		    $('html, body').animate({
		        scrollTop: parseInt($("#top").offset().top)
		    }, 400);
		});

		$('.single-item').slick();

		// $('.port-image').click(function(){
  //       $(this).css('width', function(_ , cur){
  //        return cur === '100px' ? '100%' : '100px'
  //      });  // original width is 500px 
  //  });
});