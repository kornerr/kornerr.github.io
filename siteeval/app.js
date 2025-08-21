//<!-- API -->

function appCtrl() {
    return window.appCmp.ctrl;
}

//<!-- Context -->

function AppContext() {
    this._construct = function() {
        this.currencies = [];
        this.didAcceptConsultation = false;
        this.didClickSend = false;
        this.didLaunch = false;
        this.inputClientName = "";
        this.inputClientPhone = "";
        this.request = null;
        this.response = null;

        this.recentField = "";
    };
    this._construct();

    this.field = function(name) {
        if (name == "currencies") {
            return this.currencies;
        } else if (name == "didAcceptConsultation") {
            return this.didAcceptConsultation;
        } else if (name == "didLaunch") {
            return this.didLaunch;
        } else if (name == "didClickSend") {
            return this.didClickSend;
        } else if (name == "inputClientName") {
            return this.inputClientName;
        } else if (name == "inputClientPhone") {
            return this.inputClientPhone;
        } if (name == "request") {
            return this.request;
        } else if (name == "response") {
            return this.response;
        }

        return "unknown-field-name";
    };

    this.selfCopy = function() {
        let that = new AppContext();
        that.currencies = this.currencies;
        that.didAcceptConsultation = this.didAcceptConsultation;
        that.didClickSend = this.didClickSend;
        that.didLaunch = this.didLaunch;
        that.inputClientName = this.inputClientName;
        that.inputClientPhone = this.inputClientPhone;
        that.request = this.request;
        that.response = this.response;

        that.recentField = this.recentField;
        return that;
    };

    this.setField = function(name, value) {
        if (name == "currencies") {
            this.currencies = value;
        } else if (name == "didAcceptConsultation") {
            this.didAcceptConsultation = value;
        } else if (name == "didClickSend") {
            this.didClickSend = value;
        } else if (name == "didLaunch") {
            this.didLaunch = value;
        } else if (name == "inputClientName") {
            this.inputClientName = value;
        } else if (name == "inputClientPhone") {
            this.inputClientPhone = value;
        } else if (name == "request") {
            this.request = value;
        } else if (name == "response") {
            this.response = value;
        }
    };
}

//<!-- Constants -->

let APP_CONSULTATION_SUCCESS = "Thank you. Our manager will contact you soon";
let APP_CONSULTATION_DIALOG_ID = "contact-us";
let APP_CURRENCY_RAW_DELIMITER = "</Valute>";
let APP_EXPECTED_CONSULTATION_RESPONSE = '{"code":4}';
let APP_RATE_USD_ID = "rate-usd";
let APP_RATE_EUR_ID = "rate-eur";
let APP_URL_CONSULT = `http://167.17.178.89/api/consult`;
let APP_URL_EXCHANGE_RATES = `http://167.17.178.89/cbr.xml`;

//<!-- Component -->

function AppComponent() {
    this._construct = function() {
        this.ctrl = new CLDController(new AppContext());
        // Dbg.
        this.ctrl.registerCallback((c) => {
            console.log(`ИГР AppC._construct ctrl key/value: '${c.recentField}'/'${c.field(c.recentField)}'`);
        });
        this.setupEvents();
        this.setupEffects();
        this.setupShoulds();
    };

    this.setupEffects = function() {
        this.ctrl.registerFieldCallback("request", (c) => {
            loadURL(c.request, (res) => {
                let r = {
                    contents: res.responseText,
                    status: res.status,
                    url: res.responseURL,
                }
                this.ctrl.set("response", r);
            });
        });

        let oneliners = [ 
            "currencies", (c) => { appDisplayCurrencies(c.currencies); },
            "didAcceptConsultation", (c) => { appHideConsultationDialog(); },
            "didAcceptConsultation", (c) => { reportSuccess(APP_CONSULTATION_SUCCESS); },
        ];
        let halfCount = oneliners.length / 2;
        for (let i = 0; i < halfCount; ++i) {
            let field = oneliners[i * 2];
            let cb = oneliners[i * 2 + 1];
            this.ctrl.registerFieldCallback(field, cb);
        }
    };

    this.setupEvents = function() {
        window.addEventListener("load", (e) => {
            this.ctrl.set("didLaunch", true);
        });
    };

    this.setupShoulds = function() {
        [
            appShouldAcceptConsultation,
            appShouldLoad,
            appShouldResetCurrencies,
        ].forEach((f) => {
            this.ctrl.registerFunction(f);
        });
    };
    
    this._construct();
}

//<!-- Shoulds -->

// Conditions:
// 1. Expected consultation response is available
function appShouldAcceptConsultation(c) {
    if (
        c.recentField == "response" &&
        c.response.url == APP_URL_CONSULT &&
        c.response.contents == APP_EXPECTED_CONSULTATION_RESPONSE
    ) {
        c.didAcceptConsultation = true;
        c.recentField = "didAcceptConsultation";
        return c;
    }

    c.recentField = "none";
    return c;
}

// Conditions:
// 1. Did launch
// 1. Use did click `Send` button
function appShouldLoad(c) {
    if (c.recentField == "didLaunch") {
        c.request = {
            body: "",
            method: "GET",
            url: APP_URL_EXCHANGE_RATES,
        };
        c.recentField = "request";
        return c;
    }

    if (c.recentField == "didClickSend") {
        let body = appConsultBody(c.inputClientName, c.inputClientPhone);
        c.request = {
            body: body,
            method: "POST",
            url: APP_URL_CONSULT,
        };
        c.recentField = "request";
        return c;
    }

    c.recentField = "none";
    return c;
}

// Conditions:
// 1. CBR response
function appShouldResetCurrencies(c) {
    if (
        c.recentField == "response" &&
        c.response.url == APP_URL_EXCHANGE_RATES
    ) {
        let usd = appParseCurrency(c.response.contents, "USD");
        let eur = appParseCurrency(c.response.contents, "EUR");
        c.currencies = [usd, eur];
        c.recentField = "currencies";
        return c;
    }

    c.recentField = "none";
    return c;
}

//<!-- Other -->

function appConsultBody(name, phone) {
    return `{"name":"${name}","phone":"${phone}"}`;
}

function appDisplayCurrencies(values) {
    let usd = deId(APP_RATE_USD_ID);
    if (usd != null) {
        let vusd = values[0];
        usd.innerHTML = `$${vusd.toFixed(2)}`;
    }

    let eur = deId(APP_RATE_EUR_ID);
    if (eur != null) {
        let veur = values[1];
        eur.innerHTML = `€${veur.toFixed(2)}`;
    }
}

function appHideConsultationDialog() {
    let dlg = deId(APP_CONSULTATION_DIALOG_ID);
    if (dlg != null) {
        UIkit.modal(dlg).hide();
    }
}

function appParseCurrency(raw, currency) {
    let lines = raw.split(APP_CURRENCY_RAW_DELIMITER);
    for (let i in lines) {
        let ln = lines[i];
        if (ln.includes(currency)) {
            let parts = ln.split(/Value>(.*)<\/Value/);
            let value = parts[1].replaceAll(",", ".");
            return Number(value);
        }
    }

    return -1;
}

//<!-- Setup -->

window.appCmp = new AppComponent();
window.components.push(window.appCmp);
