$(function() {

	var b_id = $("td#b_id").attr("data-id")

	$("button#btn-update").click(function(){
		document.location.href = "/bbs/update?b_id=" + b_id
	})
	$("button#btn-delete").click(function(){
		if(confirm("정말 삭제할까요??")) {
			document.location.replace("/bbs/delete?b_id=" + b_id)
		}

	})
	$("span.r-delete").click(function(){
		let r_id = $(this).attr("data-r-id")
		let b_id = $(this).attr("data-b-id")
		if(confirm("댓글을 삭제합니다")) {
			document.location.href = "/reply/delete?r_id=" + r_id + "&b_id="+b_id
		}
	})
})