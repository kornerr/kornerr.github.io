let fs = require("fs");
let http = require("http");

//let DST_DIR = "/var/log";
let DST_DIR = "/tmp";
let TEMPLATE_FILE_NAME = "%DIR%/consult_%UUID%";
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
                saveUserContacts(dat);
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

function saveUserContacts(dat) {
    let fileName = TEMPLATE_FILE_NAME
        .replaceAll("%DIR%", DST_DIR)
        .replaceAll("%UUID%", uuidString());
    fs.writeFile(fileName, dat, (err) => {
        console.log("ИГР saveUC fileN/err:", fileName, err);
    });
}

// https://stackoverflow.com/a/2117523
function uuidString() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function(c)
        {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }
    );
}

// Launch.
srv.listen(8001);
