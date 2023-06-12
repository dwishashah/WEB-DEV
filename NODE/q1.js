var http = require("http");

var server = http.createServer(function (req,res){
    if (req.url == '/'){
        res.writeHead(200,{ 'Content-type':'text/html'})

        res.write('<html><body> This is home page.</body></html>')
        res.end()
    }

    else if(req.url == '/student'){
        res.writeHead(200,{ 'Content-type':'text/html'})

        res.write('<html><body> This is student page.</body></html>')
        res.end()
    }

    else
        res.end("Invalid Request")
})

server.listen(3000, () => {
    console.log("Listening")
})


