var express = require('express');
var router = express.Router();
var moment = require('moment');

require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

module.exports = (app)=>{

  // models/*.js 파일이름이 객체 이름이 된다.
    const { tbl_reply } = require('../models')

    router.post("/insert",function(req,res,next){

        console.log(req.body)
        tbl_reply.create({
		    // req.body
		
		    r_postId: req.body.b_id,
            r_writer: '홍길동',
            r_content: req.body.r_content
      
        })
        .then(function(result){
            res.redirect("/bbs/list")
        })
    })

    return router

}