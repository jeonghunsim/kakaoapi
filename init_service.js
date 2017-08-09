/**
  * Jeonghun-Sim Kakao-API nodejs
  * 17.08.03 
*/

//NPM
var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');

//Config
var LISTEN_PORT = '9999' // PORT SETTING

//express object	
var app = express();
	app.set('port', process.env.PORT || LISTEN_PORT );
	app.set('view engine','ejs');
	app.use(bodyParser.json());
	app.use(express.static('public'));

app.lissten(app.get('port'), function(){
	
});