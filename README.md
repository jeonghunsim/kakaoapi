### 카카오톡 플러스 친구 Node.js 게발 Framework 0.0.1
이문서는 플러스 친구를 통하여 생성된 계정을 이용하기 위해 Nodejs 의 Framework 을 개발, 소스 설치 후 대화 엔진과, 내부 로직만 설계 될 수 있또록 구성
향후 Opensource 대화 엔진과 일부 차용할 수 있는 Template 로 확장하여 Bot Platform 으로 발전하는 것을 목표

### 1. Node.js API

## 1. message js
 1. message 생성
 	require('./message.js') 설정 후  텍스트 전송 시
 	var message = require('./message.js');
 	var text = message.text_message('text'); --> Text 전송 Text 키보드
 	var text = message.text_message('text',[A,B,C]) --> Text 전송  ㅠ키보드
			
