const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })

    const out = {
        name: 'Luis',
        age: '26',
        url: req.url
    }

    res.write(JSON.stringify(out))
    res.end();
}).listen(8080)

console.log('Server running in port 8080...')