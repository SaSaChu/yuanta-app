$(function() {
	let sectionId = $('#ChangeBottom');
	let sectionBody = sectionId.find(".offcanvas-body");
	let sectionDownBtn = sectionId.find('.dropdown');
	let sectionUpBtn = sectionId.find('.dropup');
	let sectionSubmitBtn = sectionId.find('#ChangeBottomSubmit');

	function isScrollable(element) {
		return element[0].scrollHeight > element[0].clientHeight;
	};


	function dropButtonToggle(direction) {
		if(direction == 'up') {
			sectionDownBtn.hide();	
			sectionUpBtn.show();	
		} else if (direction == 'down') {
			sectionDownBtn.show();	
			sectionUpBtn.hide();		
		}
	}
	
	
	sectionId.on('shown.bs.offcanvas', function () {
		// 20230925 模擬畫面時會出現不用滑動的狀態，所以加上了判斷，如果不需要的話，留下"保留"區塊程式碼，其餘可刪
		if(isScrollable(sectionBody)) {
			// 保留 start
			sectionBody.scroll(function() {
				if (sectionBody.scrollTop() + sectionBody.innerHeight() >= sectionBody[0].scrollHeight) {
					dropButtonToggle('up');	
					sectionSubmitBtn.addClass('enabled').removeAttr('disabled');
				}
	
				if (sectionBody.scrollTop() + sectionBody.innerHeight() <= sectionBody.innerHeight()) {
					dropButtonToggle('down');
					sectionSubmitBtn.removeClass('enabled').attr('disabled','');
				}
			})
	
			sectionDownBtn.click(function() {
				sectionBody.animate({ scrollTop: sectionBody.height() }, 1000);
			})

			sectionUpBtn.click(function() {
				sectionBody.animate({ scrollTop: 0 }, 1000);
			})			
			// 保留 end
		} else {
			sectionDownBtn.hide();
			sectionSubmitBtn.addClass('enabled').removeAttr('disabled');
		}
		
		
		
		
	});
});