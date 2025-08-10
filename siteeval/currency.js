//<!-- API -->

function currencyCtrl() {
    return window.currencyCmp.ctrl;
}

//<!-- Context -->

function CurrencyContext() {
    this._construct = function() {
        this.cbrRequest = null;
        this.cbrResponse = "";
        this.didLaunch = false;

        this.recentField = "";
    };
    this._construct();

    this.field = function(name) {
        if (name == "cbrRequest") {
            return this.cbrRequest;
        } else if (name == "cbrResponse") {
            return this.cbrResponse;
        } else if (name == "didLaunch") {
            return this.didLaunch;
        }

        return "unknown-field-name";
    };

    this.selfCopy = function() {
        let that = new CurrencyContext();
        that.cbrRequest = this.cbrRequest;
        that.cbrResponse = this.cbrResponse;
        that.didLaunch = this.didLaunch;

        that.recentField = this.recentField;
        return that;
    };

    this.setField = function(name, value) {
        if (name == "cbrRequest") {
            this.cbrRequest = value;
        } else if (name == "cbrResponse") {
            this.cbrResponse = value;
        } else if (name == "didLaunch") {
            this.didLaunch = value;
        }
    };
}

//<!-- Constants -->

let CURRENCY_URL = `http://167.17.178.89/cbr.xml`;
let CURRENCY_RATE_USD_ID = "rate-usd";
let CURRENCY_RATE_EUR_ID = "rate-eur";

//<!-- Component -->

function CurrencyComponent() {
    this._construct = function() {
        this.ctrl = new CLDController(new CurrencyContext());
        // Dbg.
        this.ctrl.registerCallback((c) => {
            console.log(`ИГР CurrencyC._construct ctrl key/value: '${c.recentField}'/'${c.field(c.recentField)}'`);
        });
        this.setupEvents();
        this.setupEffects();
        this.setupShoulds();
    };

    this.setupEffects = function() {
        let d = { 
            "cbrRequest": (c) => { currLoadCBR(c.cbrRequest); },
            "cbrResponse": (c) => { currDisplayCurrencies(c.cbrResponse); },
        }
        for (let field in d) {
            this.ctrl.registerFieldCallback(field, d[field]);
        }
    };

    this.setupEvents = function() {
        window.addEventListener("load", (e) => {
            this.ctrl.set("didLaunch", true);
        });
    };

    this.setupShoulds = function() {
        [
            currShouldLoadCBR,
        ].forEach((f) => {
            this.ctrl.registerFunction(f);
        });
    };
    
    this._construct();
}

//<!-- Shoulds -->

// Conditions:
// 1. Did launch
function currShouldLoadCBR(c) {
    if (c.recentField == "didLaunch") {
        c.cbrRequest = {
            body: "",
            method: "GET",
            url: CURRENCY_URL,
        };
        c.recentField = "cbrRequest";
        return c;
    }

    c.recentField = "none";
    return c;
}

//<!-- Other -->

function currDisplayCurrencies(xml) {
    console.log("ИГР CurrencyComponent/currDC xml: ", xml);
    let usd = deId(CURRENCY_RATE_USD_ID);
    if (usd != null) {
        usd.innerHTML = "USD?";
    }

    let eur = deId(CURRENCY_RATE_EUR_ID);
    if (eur != null) {
        eur.innerHTML = "EUR?";
    }
}

function currLoadCBR(p) {
    loadURL(p, (res) => {
        currencyCtrl().set("cbrResponse", res.responseText);
    });
}

//<!-- Setup -->

window.currencyCmp = new CurrencyComponent();
window.components.push(window.currencyCmp);
