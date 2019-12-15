$(function() {
	$("tr.bbs-row").click(function(){
		let b_id = $(this).attr('data-id')
		document.location.href = "/bbs/view?b_id=" + b_id
	})

	$("button#btn-insert").click(function(){
		document.location.href="/bbs/insert"
	})

})