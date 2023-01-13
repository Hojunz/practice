const passport = require('passport')
const local = require('./localStrategy')
const kakao = require('./kakaoStrategy') 
const User = require('../models/user')

 module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    // 세션 { 12390123412: 1}   { 세션쿠키: 유저아이디 } --> 메모리 저장돼요.

    passport.deserializeUser( (id, done) => { // id: 1
        User.findOne({
          where: {id},
          include: [
            {
              model: User,
              attributes: ['id', 'nick'],
              as: 'Followers'
            }
          ]
        })
        .then(user => done(null, user)) // req.user, req.session 생성
        .catch(err => done(err))
    })

    local()
    kakao()
}