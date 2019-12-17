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
            r_writer: req.body.r_writer,
            r_content: req.body.r_content
      
        })
        .then(function(result){
            res.redirect("/bbs/view?b_id=" + req.body.b_id)
        })
    })

    router.get('/delete', function (req, res, next) {
        let b_id = req.query.b_id
        let r_id = req.query.r_id
        tbl_reply.destroy({
            where : {id : r_id}
        })
        .then(function(result){
            // res.send(result)
            res.redirect('/bbs/view?b_id=' + b_id)
            
        })
      })


    return router

}