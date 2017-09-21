let express = require('express')
let bodyParser = require('body-parser')


let app = express()


app.get('/hello', function(req, res){
	res.status(200).send("Hello World")
})

let port = process.env.port || 8080
app.listen(port, function(){
	console.log('App listening on port %s', port)
	console.log('Press Ctrl+C to quit.')
})

module.exports = app
