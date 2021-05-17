const handleRequests = (req, res) => {
    const url = req.url
    const method = req.method;
    if (url === "/") {
        res.write("<head><title>My app</title></head>");
        res.write("<body><form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Send</button></form></body>")
        return res.end();
    }
    if (url === "/users") {
        res.write("<head><title>My app</title></head>");
        res.write("<body><ul><li>User1</li><li>User2</li></ul></body>");
        return res.end();
    }
    if (url === "/create-user" && method === "POST") {
        const body = [];
        req.on('data', chunk => body.push(chunk))
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split("=")[1]
            console.log(username)
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }
    res.write("<head><title>My app</title></head>");
    res.write("<body><h1>Oups, I don't know where I am</h1></body>")
    return res.end();
};

module.exports = handleRequests;