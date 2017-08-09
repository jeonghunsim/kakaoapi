/**
 * Language Processing Part
 * 
 */
var resp = require('./response.js');
var message = require('./message.js');

exports.contents_input = function(res,t_user,type,content){

	// t_user : 착신자
	// content : content 유형
	// type : text or photo
	
	//text 형태 활성화	
	var text = message.text_message("hello");
	resp.response(res,text);			
}




