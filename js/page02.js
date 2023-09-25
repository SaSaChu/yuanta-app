$(function() {
	let sectionId = $('#industryBottom');
	
	sectionId.on('shown.bs.offcanvas', function () {
		$('.list-group-item').click(function() {
			$('.industrySpan').text($(this).text())
			$('input[name="industryInput"]').val($(this).attr('data-value'))
			sectionId.offcanvas('hide');	
		})
	});
});