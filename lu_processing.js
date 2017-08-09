/**
 * Language Processing Part
 * 
 */

var resp = require('./response.js');

let init_message_text = {};
init_message_text.Type = () => {
         return {
          type: 'text'          
         }
};

var test_message = function(){
	
	var text = {	
		message :{
			text : "Hello"
	    },
	    keyboard :{
	    	type : "text"
	    }
	};	
	return text;
}


exports.contents_input = function(res,t_user,type,content){

	// t_user : 착신자
	// content : content 유형
	// type : text or photo
	
	//text 형태 활성화	
		
	resp.response(res,test_message());			
}




