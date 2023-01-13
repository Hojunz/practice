const express = require('express')
const router = express.Router()
const { isLoggedIn, isNotLoggedIn } = require('../middlewares')
const fs = require('fs')
const multer = require('multer')
const path = require('path')
const {afterUploadImage, uploadPost} = require('../controllers/post')

try {
  fs.readdirSync('uploads')
} catch(error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.')
  fs.mkdirSync('uploads')
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb){
      cb(null, 'uploads/')
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname) // 이미지.png --> 이미지/123214213.png
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext)
    }
  }),
  limits: {fileSize: 10 * 1024 * 1024}
})
router.post('/img', isLoggedIn, upload.single('img'), afterUploadImage)

const upload2 = multer()
router.post('/', isLoggedIn, upload2.none(), uploadPost)

module.exports = router