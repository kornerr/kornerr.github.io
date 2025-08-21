// Shortcut to get document element by id
function deId(id) {
    return document.getElementById(id);
}

// Load arbitrary data over HTTP(S)
function loadURL(p, onload) {
    console.log(`ОТЛ loadURL p.url: '${p.url}'`);
    let req = new XMLHttpRequest();
    req.open(p.method, p.url);
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    /*
    if ("sessionId" in p) {
        req.setRequestHeader("Session", p.sessionId);
    }
    */

    req.onload = function() {
        if (
            req.readyState == 4 &&
            req.status == 200
        ) {
            onload(req);
        } else {
            console.log(`ERROR url/status: '${req.responseURL}'/'${req.status}'`);
        }
    };
    req.send(p.body);
};

// Report success as UIkit notification
//
// A tiny delay is used to overcome the conflict of UIkit and CLDController
function reportSuccess(text, timeout = 5000) {
    setTimeout(
        () => {
            UIkit.notification({
                message: text,
                status: "success",
                timeout: timeout,
            });
        },
        0
    );
}
