$(function(){


	$("header.jumbotron").click(function(){
		document.location.href="/"
	})


	/* 게시판 글쓰기
	--------------------------------------*/
	var toolbar = [
		['style', ['bold', 'italic', 'underline', 'clear']],
		['font', ['strikethrough', 'superscript', 'subscript']],
		['fontsize', ['fontsize']],
		['Font Style', ['fontname']],
		['color', ['color']],
		['para', ['ul', 'ol', 'paragraph']],
		['height', ['height']],
		['table', ['table']],
		['insert', ['link', 'picture', 'hr']],
		['view', ['fullscreen', 'codeview']],
		['help', ['help']]
	];
	$('#summernote').summernote({
		lang: 'ko-KR',
		placeholder: '본문을 작성해 주세요',
		toolbar: toolbar,
		codemirror: { // codemirror options
			theme: 'monokai'
		},
		width:'100%',
		height:'300px',
	
	});




	/* 댓글작성
	--------------------------------------*/
	$('#b_repl').summernote({
	
		placeholder: '댓글을 작성해 주세요',
		tabsize: 10,
		lang: 'ko-KR',
		toolbar: [
			['Font Style', ['fontname']],
			['style', ['bold', 'italic', 'underline']],
			['font', ['strikethrough']],
			['fontsize', ['fontsize']],
			['color', ['color']],
			['para', ['paragraph']],
			['Insert', ['link']],
			['help', ['help']]
		],
		width:'95%'
	
	});

	
	/* 목록보기 공통코드
	-------------------------------------*/
	$("button#btn-list,.jumbotron").click(function(){
		document.location.href = "/bbs/list"
	})
	


})
