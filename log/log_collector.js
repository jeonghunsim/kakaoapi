/**
 * 
 */

var fs = require('fs');
var path = "./app/log/logfile.log";
var gLog = require("./log.js");

exports.write_file = function(text){
  fs.open(path,'a+',function(err,fd){
    if(err) throw err;
    if(fd =='9'){ gLog.L("Log File Create");
    }else {
      fs.appendFile(path,text+"\n",function(err){
        if(err) throw err;
      });
    }
  });
}

