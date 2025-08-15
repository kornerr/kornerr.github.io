let http = require("http");

let URL_CONSULT = "/api/consult";

let srv = http.createServer((req, res) => {
    // POST
    if (req.method == "POST") {
        var dat = "";
        req.on("data", (chunk) => {
            dat += chunk;
        });
        req.on("end", () => {
            // /api/consult
            if (isConsultationRequestValid(req, dat)) {
                //processConsultation(dat);
                returnSuccess(res);
            } else {
                returnError(res);
            }
        });
    } else {
        returnError(res);
    }
});

function isConsultationRequestValid(req, dat) {
    var json = {};
    try {
        json = JSON.parse(dat);
    } catch (e) {
        //console.log("ERR isCRV error:", e);
    }

    if (
        req.url == URL_CONSULT &&
        req.method == "POST" &&
        "name" in json &&
        "phone" in json
    ) {
        return true;
    }

    return false;
}

function returnError(res) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`<html>
<head><title>404 Not Found</title></head>
<body>
<center><h1>404 Not Found</h1></center>
<hr><center>nginx/1.24.0 (Ubuntu)</center>
</body>
</html>`);
}

function returnSuccess(res) {
    res.writeHead(200, { "Content-Type": "application/json;charset=UTF-8" });
    let dat = { code: 4 };
    res.end(JSON.stringify(dat));
}

// Launch.
srv.listen(8001);
