const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://116.62.169.175')

let msg, msg2;
let msg3, msg4;

client.on('connect', function () {
  client.subscribe('/typeNow')
  client.subscribe('/typeAll')

})

client.on('message', function (topic, message) {
  // message is Buffer
  //msg2 = message.toString()
  //msg = JSON.parse(msg2, null, 4)
  //console.log(msg, 'msg')

  if(topic == '/typeNow'){
  	msg2 = message.toString()
  	msg = JSON.parse(msg2, null, 4)
  	// console.log(msg, 'msg')
  	// console.log(msg.length)
  	// console.log('topic111', topic)
  }else if(topic == '/typeAll'){
  	msg3 = message.toString()
  	msg4 = JSON.parse(msg3, null, 4)
  	console.log(msg4, 'msg4')

  	// console.log(msg4.length)
  	// console.log('topic2222', topic)
  }

})

// {
//  type: 'ssh',
// 	val: 'true'
// }

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){

	console.log('success')
	res.render('index2',{
	    list: msg,
	    listAll: msg4
	})

})

app.listen(3004, function(){
	console.log('lisening in 3004')
})