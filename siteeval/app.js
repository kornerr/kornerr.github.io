//<!-- API -->

function appCtrl() {
    return window.appCmp.ctrl;
}

//<!-- Context -->

function AppContext() {
    this._construct = function() {
        this.cbrRequest = null;
        this.cbrResponse = "";
        this.consultationRequest = null;
        this.consultationResponse = "";
        this.didAcceptConsultation = false;
        this.didClickSend = false;
        this.didLaunch = false;
        this.inputClientName = "";
        this.inputClientPhone = "";

        this.recentField = "";
    };
    this._construct();

    this.field = function(name) {
        if (name == "cbrRequest") {
            return this.cbrRequest;
        } else if (name == "cbrResponse") {
            return this.cbrResponse;
        } else if (name == "consultationRequest") {
            return this.consultationRequest;
        } else if (name == "consultationResponse") {
            return this.consultationResponse;
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
        }

        return "unknown-field-name";
    };

    this.selfCopy = function() {
        let that = new AppContext();
        that.cbrRequest = this.cbrRequest;
        that.cbrResponse = this.cbrResponse;
        that.consultationRequest = this.consultationRequest;
        that.consultationResponse = this.consultationResponse;
        that.didAcceptConsultation = this.didAcceptConsultation;
        that.didClickSend = this.didClickSend;
        that.didLaunch = this.didLaunch;
        that.inputClientName = this.inputClientName;
        that.inputClientPhone = this.inputClientPhone;

        that.recentField = this.recentField;
        return that;
    };

    this.setField = function(name, value) {
        if (name == "cbrRequest") {
            this.cbrRequest = value;
        } else if (name == "cbrResponse") {
            this.cbrResponse = value;
        } else if (name == "consultationRequest") {
            this.consultationRequest = value;
        } else if (name == "consultationResponse") {
            this.consultationResponse = value;
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
        }
    };
}

//<!-- Constants -->

let APP_CLIENT_NAME_ID = "client-name";
let APP_CLIENT_PHONE_ID = "client-phone";
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
        let d = { 
            "cbrRequest": (c) => { appLoadCBR(c.cbrRequest); },
            "cbrResponse": (c) => { appDisplayCurrencies(c.cbrResponse); },
            "consultationRequest": (c) => { appLoadConsultation(c.consultationRequest); },
            "didAcceptConsultation": (c) => { appHideConsultationDialog(); reportSuccess(APP_CONSULTATION_SUCCESS); },
        }
        for (let field in d) {
            this.ctrl.registerFieldCallback(field, d[field]);
        }
    };

    this.setupEvents = function() {
        window.addEventListener("load", (e) => {
            this.ctrl.set("didLaunch", true);
        });

        let clientName = deId(APP_CLIENT_NAME_ID);
        clientName.addEventListener("input", (e) => {
            this.ctrl.set("inputClientName", clientName.value);
        });

        let clientPhone = deId(APP_CLIENT_PHONE_ID);
        clientPhone.addEventListener("input", (e) => {
            this.ctrl.set("inputClientPhone", clientPhone.value);
        });
    };

    this.setupShoulds = function() {
        [
            appShouldAcceptConsultation,
            appShouldLoadCBR,
            appShouldLoadConsultation,
        ].forEach((f) => {
            this.ctrl.registerFunction(f);
        });
    };
    
    this._construct();
}

//<!-- Shoulds -->

// Conditions:
// 1. Consultation response is available
function appShouldAcceptConsultation(c) {
    if (
        c.recentField == "consultationResponse" &&
        c.consultationResponse == APP_EXPECTED_CONSULTATION_RESPONSE
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
function appShouldLoadCBR(c) {
    if (c.recentField == "didLaunch") {
        c.cbrRequest = {
            body: "",
            method: "GET",
            url: APP_URL_EXCHANGE_RATES,
        };
        c.recentField = "cbrRequest";
        return c;
    }

    c.recentField = "none";
    return c;
}

// Conditions:
// 1. `Send` button has been clicked
function appShouldLoadConsultation(c) {
    if (c.recentField == "didClickSend") {
        let body = appConsultBody(c.inputClientName, c.inputClientPhone);
        c.consultationRequest = {
            body: body,
            method: "POST",
            url: APP_URL_CONSULT,
        };
        c.recentField = "consultationRequest";
        return c;
    }

    c.recentField = "none";
    return c;
}

//<!-- Other -->

function appConsultBody(name, phone) {
    return `{"name":"${name}","phone":"${phone}"}`;
}

function appDisplayCurrencies(xml) {
    let usd = deId(APP_RATE_USD_ID);
    if (usd != null) {
        let value = appParseCurrency(xml, "USD");
        usd.innerHTML = `$${value.toFixed(2)}`;
    }

    let eur = deId(APP_RATE_EUR_ID);
    if (eur != null) {
        let value = appParseCurrency(xml, "EUR");
        eur.innerHTML = `€${value.toFixed(2)}`;
    }
}

function appHideConsultationDialog() {
    let dlg = deId(APP_CONSULTATION_DIALOG_ID);
    if (dlg != null) {
        UIkit.modal(dlg).hide();
    }
}

function appLoadCBR(p) {
    loadURL(p, (res) => {
        appCtrl().set("cbrResponse", res.responseText);
    });
}

function appLoadConsultation(p) {
    loadURL(p, (res) => {
        appCtrl().set("consultationResponse", res.responseText);
    });
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
