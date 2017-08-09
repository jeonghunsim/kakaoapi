/**
 * Log File 
 */

require('date-utils');
var colors = require('colors/safe'); // does not alter string prototype
var file = require('./log_collector.js');


exports.L = function(text,filename,line){
	var t = new Date();
	var time = t.toFormat('YYYY-MM-DD HH24:MI:SS');
	var log = colors.grey('['+ time +']') +' : '+ text +',' + filename +'.js'+', LINE : ' +line ;
	console.log(log);
	file.write_file(log);		
}

exports.error = function(text,filename,line){
	var t = new Date();
	var time = t.toFormat('YYYY-MM-DD HH24:MI:SS');
	var log = colors.grey('['+ time +']') +' : '+ colors.red(text)+',' + filename +'.js'+', LINE : ' +line ;
	console.log(log);
	file.write_file(log);		
}