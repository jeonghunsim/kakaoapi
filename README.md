# kakaoapi

Nodejs API

message.js
<message 생성>
	require('./message.js') 설정 후 
	텍스트 전송 시
		var message = require('./message.js');
		var text = message.text_message('text'); --> Text 전송 Text 키보드
		var text = message.text_message('text',[A,B,C]) --> Text 전송  Button 키보드
			
