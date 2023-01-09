const mongoose = require("mongoose");  // mongoose 패키지에서 가져온거 mongoose에 할당

const connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/gifchat")  //  실제연결  mongodb://주소:포트번호/db이름
    .catch(err => console.log(err));      // 에러발생시 작동
};

mongoose.connection.on("error", err => {  // mongoose로 커넥션했을시 에러발생시 동작
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;  //connect 익명함수 밖으로 내보내기


// const mongoose = require('mongoose');

// const connect = () => {
//   if (process.env.NODE_ENV !== 'production') {
//     mongoose.set('debug', true);
//   }
//   mongoose.connect(`mongodb://${process.env.MONGO_ID}:${process.env.MONGO_PASSWORD}@127.0.0.1:27017/admin`, {
//     dbName: 'gifchat',
//     useNewUrlParser: true,
//   }, (error) => {
//     if (error) {
//       console.log('몽고디비 연결 에러', error);
//     } else {
//       console.log('몽고디비 연결 성공');
//     }
//   });
// };

// mongoose.connection.on('error', (error) => {
//   console.error('몽고디비 연결 에러', error);
// });
// mongoose.connection.on('disconnected', () => {
//   console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
//   connect();
// });

// module.exports = connect;