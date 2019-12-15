$(function() {

	var b_id = $("td#b_id").attr("data-id")

	$("button#btn-update").click(function(){
		document.location.href = "/bbs/update?b_id=" + b_id
	})
	$("button#btn-delete").click(function(){
		document.location.href = "/bbs/update?b_id=" + b_id
	})
	$("button#btn-list").click(function(){
		document.location.href = "/bbs/list"
	})



})