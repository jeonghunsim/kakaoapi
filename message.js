/**
 * 
 */

exports.text_message = function(text_t,keyboard,buttons){
	
	var keyboard_text;
	
	switch(keyboard){
	
		case 0: keyboard_text = 'text';
				var content = {		
					message : {
						text : text_t
					},			
					Keyboard : {				
						type : keyboard_text
					}			
				}; break;
				
		case 1: keyboard_text = 'button';
				var content = {		
						message : {
							text : text_t
						},			
						Keyboard : {				
							type : keyboard_text
						}			
					}; break;
				
	return content;
	
	}	
	
} //text message

exports.photo_message = function(url,text,keyboard,buttons){
	
} //text message

exports.message_button = function(message_button,url,text,keyboard,buttons){
	
	
} //button