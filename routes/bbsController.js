var express = require('express');
var router = express.Router();
var moment = require('moment');

require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

module.exports = (app)=>{

// 페이지네이션을 처리하기 위한 middleware
// https://github.com/expressjs/express-paginate
var paginate = require('express-paginate');

  app.use(paginate.middleware(10, 50));
  const { bbs } = require('../models')

  router.all(function (req, res, next) {
    // set default or minimum is 10 (as it was prior to v0.2.0)
    if (req.query.limit <= 10) req.query.limit = 10;
    // if (req.query.page < 1) req.query.page = 1;
    next();
  });




  const pageLimit = 10;

  router.get('/list', function (req, res, next) {
	console.log("query Page :" + req.query.page)
    bbs.findAndCountAll({
      order: [['b_id', 'DESC']],
      limit: pageLimit,
      offset: req.query.page - 1

    })
      .then(function (result) {

        // pagination을 구현하기 위한 배열 생성
        // .getArrayPages(limit, pageCount, currentPage)
        // 선택된 페이지를 중심으로 좌우로 limite 개수 만큼 페이지 번호 나열

        const pageArray = paginate.getArrayPages(req)(10, pageLimit,req.query.page)
        let pageCount = Math.ceil(result.count / pageLimit);

        console.log(result.count)
        res.render('bbsList', {
          BBS_LIST: result.rows,
          pageCount,
          itemCount: result.count,
          currentPage: req.query.page,
          pages: pageArray
        })
      })

      return router
  })


  router.get('/insert', function (req, res, next) {

	let BBsVO = {
		b_date: moment().format('YYYY[-]MM[-]DD'),
		b_time: moment().format('HH:mm:ss')
	}
	res.render('bbsWrite',{BBsVO:BBsVO})
  })


  /* POST insert */
  router.post('/insert', function (req, res, next) {
	console.log(req.body)
    bbs.create({
		// req.body
		
		b_id: 0,
		b_date: req.body.b_date,
		b_time: req.body.b_time,
		b_writer: req.body.b_writer,
		b_subject: req.body.b_subject,
		b_text: req.body.b_text
    })
      .then(result => {
		bbs.count({},function(result){
			console.log("INSERT : " + result)
		})  
        bbs.findAll({ order: [['b_id', 'DESC']] })
          .then(function (result) {
			// res.send(result)
			res.redirect('/bbs/list')
          })

      });
  });

  router.get('/view', function (req, res, next) {

	let b_id = req.query.b_id
	bbs.findOne({
		where : {b_id : b_id}
	})
	.then(function(result){
		// res.send(result)
		res.render('bbsView',{bbs:result})
	})
  })

  router.get('/update', function (req, res, next) {

	let b_id = req.query.b_id
	bbs.findOne({
		where : {b_id : b_id}
	})
	.then(function(result){
		// res.send(result)
		res.render('bbsWrite',{BBsVO:result})
	})
  })

  router.post('/update', function (req, res, next) {

	let b_id = req.query.b_id
	bbs.update(
		{
			b_date: req.body.b_date,
			b_time: req.body.b_time,
			b_writer: req.body.b_writer,
			b_subject: req.body.b_subject,
			b_text: req.body.b_text
		},
		{where : {b_id : b_id}
	})
	.then(function(result){
		// res.send(result)
		res.redirect('/bbs/view?b_id='+ b_id)
	})
  })

  router.get('/delete', function (req, res, next) {

	let b_id = req.query.b_id
	bbs.destroy({
		where : {b_id : b_id}
	})
	.then(function(result){
		// res.send(result)
		res.redirect('/bbs/list')
		
	})
  })



  return router;

}

 