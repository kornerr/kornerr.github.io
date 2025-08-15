let http = require("http");
let srv = http.createServer((req, res) => {
    res.writeHead(
        200,
        {
            "Content-Type": "application/json;charset=UTF-8",
        }
    );
    res.end(
        JSON.stringify({
            result: "Success",
        })
    );
});

srv.listen(8001);
