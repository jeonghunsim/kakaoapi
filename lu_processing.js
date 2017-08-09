/**
 * Language Processing Part
 * 
 */

let init_message_text = {};
init_message_text.Type = () => {
         return {
          type: 'text'          
         }
};

exports.contents_input = function(res,t_user,type,content){

	// t_user : 착신자
	// content : content 유형
	// type : text or photo
	
	//text 형태 활성화	
	res.set({
		'content-type' : 'application/json'
		}).send(JSON.stringify(init_message_text.Type()));
		//.send(JSON.stringify(init_message_button.buttonsType())); --> button Key Type
		
		//log.L('Text_Mode Activate...',filename,59);		
}




