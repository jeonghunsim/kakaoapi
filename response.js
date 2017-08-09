/**
 * 
 */


exports.response = function(res,content){
	
	res.set({
		'content-type' : 'application/json'
		}).send(JSON.stringify(content));
	
}