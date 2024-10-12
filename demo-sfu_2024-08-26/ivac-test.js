ivac = window["iva-client-sdk:ivac"].ivac;

contact = [
    ivac.test_contactGetHexColor,
    ivac.test_contactGetColorIndex,
    ivac.test_contactGetColorPalette,
];

ctx = [
    ivac.test_example_Context_field,
    ivac.test_example_Context_selfCopy,
    ivac.test_example_Context_setField,
    ivac.test_ctx_Controller_executeFunctions_set,
    ivac.test_ctx_Controller_processQueue,
    ivac.test_ctx_Controller_registerFieldCallback_match,
    ivac.test_ctx_Controller_registerFieldCallback_mismatch,
];

ios_diag = [
    ivac.test_ios_diag_shouldResetActivity_false_isAppActive,
    ivac.test_ios_diag_shouldResetActivity_false_isFeatureActive,
    ivac.test_ios_diag_shouldResetActivity_false_isSaving,
    ivac.test_ios_diag_shouldResetActivity_true_isAppActive,
    ivac.test_ios_diag_shouldResetActivity_true_isFeatureActive,
    ivac.test_ios_diag_shouldResetActivity_true_isSaving,
    ivac.test_ios_diag_shouldResetAppActivity_false,
    ivac.test_ios_diag_shouldResetAppActivity_true,
    ivac.test_ios_diag_shouldResetSaving_false,
    ivac.test_ios_diag_shouldResetSaving_true,
    ivac.test_ios_diag_shouldTakeImportantShot_false,
    ivac.test_ios_diag_shouldTakeImportantShot_true,
];

l10n = [
    ivac.test_l10nGetSettCopyrightConnect,
    ivac.test_l10nGetSettCopyrightVKURSE,
];

sfu = [
    ivac.test_sfuCalculateAspectRatioLayout,
    ivac.test_sfuCalculateAutoLayout,
    ivac.test_sfuGenerateTiles,
    ivac.test_sfuShouldResetAreaSize_default,
    ivac.test_sfuShouldResetAreaSize_fixed,
    ivac.test_sfuShouldResetAreaSize_mouse,
    ivac.test_sfuShouldResetMouseDown,
    ivac.test_sfuShouldResetTiles_areaSize,
    ivac.test_sfuShouldResetTiles_aspectRatio,
    ivac.test_sfuShouldResetTiles_tilesCount,
    ivac.test_sfuShouldResetTilesCount_default,
    ivac.test_sfuShouldResetTilesCount_input,
];

function funcName(func) {
    return func.toString().split(" ")[1];
}

QUnit.module('ivac', () => {
    QUnit.test("contact", (assert) => {
        contact.forEach((f) => { assert.true(f(), funcName(f)); });
    });
    QUnit.test("ctx", (assert) => {
        ctx.forEach((f) => { assert.true(f(), funcName(f)); });
    });
    QUnit.test("ios_diag", (assert) => {
        ios_diag.forEach((f) => { assert.true(f(), funcName(f)); });
    });
    QUnit.test("l10n", (assert) => {
        l10n.forEach((f) => { assert.true(f(), funcName(f)); });
    });
    QUnit.test("sfu", (assert) => {
        sfu.forEach((f) => { assert.true(f(), funcName(f)); });
    });
});
