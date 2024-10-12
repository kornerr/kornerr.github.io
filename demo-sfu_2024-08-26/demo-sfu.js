let ivac = window["iva-client-sdk:ivac"].ivac;

let areaSize = document.getElementById("areaSize");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let fixedSize = document.getElementById("fixedSize");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let inputTilesCount = document.getElementById("inputTilesCount");
let tileAspectRatio = document.getElementById("tileAspectRatio");
let tileFit = document.getElementById("tileFit");

let ctrl = new ivac.ctx_Controller(ivac.sfuCreateContext());
[
    ivac.sfuShouldResetAreaSize,
    ivac.sfuShouldResetMouseDown,
    ivac.sfuShouldResetTiles,
    ivac.sfuShouldResetTilesCount,
].forEach((f) => { ctrl.registerFunction(f) });


// Отладка.
ctrl.registerCallback((c) => {
    console.log(`ОТЛ ключ/знач.: '${c.recentField}'/'${c.field(c.recentField)}'`);
});

// Рисуем область.
function drawArea(c) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#dddddd";
    ctx.fillRect(0, 0, c.areaSize[0], c.areaSize[1]);
};

// Рисуем элементы плитки.
function drawTiles(c) {
    for (let i in c.tiles) {
        let t = c.tiles[i];
        let name = `${i}`;
        let midX = t.x + t.w / 2;
        let midY = t.y + t.h / 2;

        // Рамка.
        ctx.strokeStyle = "#000000";
        let margin = 2;
        ctx.strokeRect(t.x + margin, t.y + margin, t.w - margin, t.h - margin);


        let noImg = i % 3 == 0 && i != 0;

        if (noImg) {
            // Круг.
            let circleSide = Math.min(t.w, t.h) / 2 - 10;
            ctx.beginPath();
            ctx.arc(midX, midY, circleSide, 0, 2 * Math.PI);
            ctx.strokeStyle = ivac.contactGetHexColor(name);
            ctx.stroke();
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fill();

            // Текст.
            ctx.font = "40px serif";
            ctx.fillStyle = "#ffffff";
            ctx.fillText(name, midX - 13, midY + 13);
        } else {
            // Изображение.
            let img = i % 2 == 0 ? img1 : img2;
            if (c.tileFit) {
                ctxFitImage(ctx, img, t.x, t.y, t.w, t.h);
            } else {
                ctxFillImage(ctx, img, t.x, t.y, t.w, t.h);
            }
        }
    };
};

// Рисуем область и элементы.
ctrl.registerCallback((c) => {
    if (
        c.recentField == "areaSize" ||
        c.recentField == "tileFit" ||
        c.recentField == "tiles"
    ) {
        drawArea(c);
        drawTiles(c);
    }
});

// Выводим размер области.
ctrl.registerFieldCallback("areaSize", (c) => {
    areaSize.innerHTML = `Текущий размер: '${c.areaSize[0]} x ${c.areaSize[1]}'`;
});

// Слушаем мышь.
canvas.addEventListener("mousedown", (e) => {
    ctrl.set("didPressMouse", true);
});
canvas.addEventListener("mousemove", (e) => {
    ctrl.set("mousePos", [e.offsetX, e.offsetY]);
});
canvas.addEventListener("mouseup", (e) => {
    ctrl.set("didReleaseMouse", true);
});

// Задаём фиксированный размер области.
fixedSize.addEventListener("change", (e) => {
    let v = e.target.value.split("x");
    ctrl.set("fixedAreaSize", [Number(v[0]), Number(v[1])]);
});

// Задаём соотношение сторон элемента плитки.
tileAspectRatio.addEventListener("change", (e) => {
    let v = e.target.value.split("x");
    let ratio = new ivac.sfuAspectRatio(Number(v[0]), Number(v[1]));
    ctrl.set("tileAspectRatio", ratio);
});

// Задаём режим заполнения изображения в карточке.
tileFit.addEventListener("change", (e) => {
    let ok = (e.target.value == "1");
    ctrl.set("tileFit", ok);
});

// Задаём количество элементов.
inputTilesCount.addEventListener("change", (e) => {
    ctrl.set("inputTilesCount", Number(e.target.value));
});

// Значения по умолчанию.
ctrl.set("defaultAreaSize", [320, 568]);
ctrl.set("defaultTilesCount", 1);
