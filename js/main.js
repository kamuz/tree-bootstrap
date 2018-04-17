$(document).ready(function() {
	/*
	 * 这段代码好像没什么用处
    if ($('.main-menu .parent.active > .trigger > .glyphicon').hasClass('glyphicon-plus')) {
        $('.main-menu .parent.active > .trigger > .glyphicon').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    };
    */
   
   /**
    * 如果使用下面的代码点击完，左边的树会回到原来初始的样子，所以注释掉
    
    $('li a').click(function(){
    		var url = this.href;
    		$('#main').remove();
    		
    		$('#main').load(url + ' #main').fadeIn('slow');
    })
    */
   
   $("#u1").click(function(){
   		$("#main").load("content1.html");
   });
   
   $("#u2").click(function(){
   		$("#main").load("content2.html");
   });

   $("#u3").click(function(){
   		$("#main").load("content3.html");
   });
});

$(document).on('click', '.trigger', function(e) {
	
	/* 同级的ul隐藏 
    $(this).parent().siblings().find('ul').slideUp();
    $(this).parent().siblings().find('.glyphicon-minus').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    */
    $(this).next('ul').slideToggle();
    var icon = $(this).children('.glyphicon');
    if (icon.hasClass('glyphicon-minus')) {
        icon.removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        icon.removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});


