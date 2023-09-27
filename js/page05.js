$(function() {
	// 要增加或減少修改(n+4)的數字即可，預設值有改的話 css 也要修改 -->

	$('.list-toggle').click(function() {
		if($('.list-group-item.lgi').is(':hidden')){
			$('.list-group-item.lgi:nth-of-type(n+4)').slideDown(500, function() {
				$(this).css({'display':'block'}); 
			})
			$(this).find('.list-toggle-text').text('收合');
			$(this).find('i').removeClass('bi-chevron-down').addClass('bi-chevron-up');
		} else {
			$('.list-group-item.lgi:nth-of-type(n+4)').slideUp(500)
			$(this).find('.list-toggle-text').text('查看更多');
			$(this).find('i').removeClass('bi-chevron-up').addClass('bi-chevron-down');
		}
		
	});
          
});