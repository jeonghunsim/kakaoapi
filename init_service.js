/**
  * Jeonghun-Sim Kakao-API nodejs
  * 17.08.03 
*/

//FILE UPLOAD
var language_understanding = require('./lu_processing.js');

//NPM
var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');

//Config
var LISTEN_PORT = '7777' // PORT SETTING

//express object	
var app = express();
	app.set('port', process.env.PORT || LISTEN_PORT );
	app.set('view engine','ejs');
	app.use(bodyParser.json());
	app.use(express.static('public'));

app.listen(app.get('port'), function(){
	
});

let init_message_button = {};
let init_message_text = {};

init_message_button.buttons = ['A','B','C',];
init_message_button.buttonsType = () => {
         return {
          type: 'buttons',
          buttons: message.buttons
         }
};


init_message_text.Type = () => {
         return {
          type: 'text'          
         }
};


app.get('/keyboard',function(req,rew){
	
	res.set({
	'content-type' : 'application/json'
	}).send(JSON.stringify(init_message_text.Type()));
	//.send(JSON.stringify(init_message_button.buttonsType())); --> button Key Type
	
});

app.get('/message', function(req, res){ //message input
	
	var data = req.body;
	var t_user_key = data.user_key; //" 착신 가입자(메시지 발신자) user key "
	var type = data.type;           //" text, photo "
	var content = data.content;     //" 자동 응답 명령어의 메시지 텍스트 혹은 미디어 파일 URI"
	
	// Message 처리에 대한 내용을 이후에 작성 
	
});
