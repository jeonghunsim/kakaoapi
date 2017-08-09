/**
 * 
 */

exports.text_message = function(text_t,buttons){
	
	var keyboard_text = 'button';
	var content = {		
			message : {
				text : text_t
			},			
			Keyboard : {				
				type : keyboard_text,
				buttons
			}			
	};
				
	return content;

} //text message , keyboard button

exports.text_message = function(text_t){
	
	var keyboard_text = 'text';
	var content = {		
		message : {
			text : text_t
		},			
		Keyboard : {				
			type : keyboard_text
		}			
	}; 
				
	return content;
	
} //text message

exports.photo_message = function(url,text,keyboard,buttons){
	
} //text message

exports.message_button = function(message_button,url,text,keyboard,buttons){
	
	
} //button