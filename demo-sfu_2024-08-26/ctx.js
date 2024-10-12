// Вспомогательные функции рисования в контексте канвы.

function ctxClipRect(ctx, x, y, w, h) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + w, y);
    ctx.lineTo(x + w, y + h);
    ctx.lineTo(x, y + h);
    ctx.lineTo(x, y);
    ctx.closePath()
    ctx.clip();
}

function ctxDrawOutline(ctx, margin, x, y, w, h) {
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(x - margin, y - margin, w + margin * 2, h + margin * 2);
}

function ctxFillImage(ctx, img, x, y, w, h) {
    let iratio = img.height / img.width;
    let ratio = h / w;
    if (iratio < ratio) {
        ctxScaleImageByHeight(ctx, img, x, y, w, h);
    } else {
        ctxScaleImageByWidth(ctx, img, x, y, w, h);
    }
}

function ctxFitImage(ctx, img, x, y, w, h) {
    let iratio = img.height / img.width;
    let ratio = h / w;
    if (iratio > ratio) {
        ctxScaleImageByHeight(ctx, img, x, y, w, h);
    } else {
        ctxScaleImageByWidth(ctx, img, x, y, w, h);
    }
}

function ctxScaleImageByHeight(ctx, img, x, y, w, h) {
    let iw = img.width;
    let ih = img.height;
    let iratio = iw / ih;
    let dsth = h;
    let dstw = h * iratio;
    let offset = w / 2 - dstw / 2;
    ctx.save();
    ctxClipRect(ctx, x, y, w, h);
    ctx.drawImage(
        img,
        x + offset,
        y,
        dstw,
        dsth
    );
    ctx.restore();
}

function ctxScaleImageByWidth(ctx, img, x, y, w, h) {
    let iw = img.width;
    let ih = img.height;
    let iratio = ih / iw;
    let dstw = w;
    let dsth = w * iratio;
    let offset = dsth / 2 - h / 2;
    ctx.save();
    ctxClipRect(ctx, x, y, w, h);
    ctx.drawImage(
        img,
        x,
        y - offset,
        dstw,
        dsth
    );
    ctx.restore();
}
