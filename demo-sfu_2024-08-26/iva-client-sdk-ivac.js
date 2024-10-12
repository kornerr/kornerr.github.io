(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'iva-client-sdk:ivac'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'iva-client-sdk:ivac'.");
    }
    root['iva-client-sdk:ivac'] = factory(typeof this['iva-client-sdk:ivac'] === 'undefined' ? {} : this['iva-client-sdk:ivac'], this['kotlin-kotlin-stdlib']);
  }
}(globalThis, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var getStringHashCode = kotlin_kotlin.$_$.k;
  var abs = kotlin_kotlin.$_$.s;
  var protoOf = kotlin_kotlin.$_$.q;
  var initMetadataForInterface = kotlin_kotlin.$_$.n;
  var Unit_getInstance = kotlin_kotlin.$_$.c;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.b;
  var removeFirst = kotlin_kotlin.$_$.e;
  var initMetadataForClass = kotlin_kotlin.$_$.m;
  var VOID = kotlin_kotlin.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.u;
  var getBooleanHashCode = kotlin_kotlin.$_$.i;
  var defineProp = kotlin_kotlin.$_$.g;
  var equals = kotlin_kotlin.$_$.h;
  var getNumberHashCode = kotlin_kotlin.$_$.j;
  var contains = kotlin_kotlin.$_$.t;
  var isArray = kotlin_kotlin.$_$.o;
  var toString = kotlin_kotlin.$_$.r;
  var hashCode = kotlin_kotlin.$_$.l;
  var numberToInt = kotlin_kotlin.$_$.p;
  var contentDeepEquals = kotlin_kotlin.$_$.d;
  var println = kotlin_kotlin.$_$.f;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(ctx_Context, 'ctx_Context');
  initMetadataForClass(ctx_Controller, 'ctx_Controller');
  initMetadataForClass(example_Context, 'example_Context', example_Context, VOID, [ctx_Context]);
  initMetadataForClass(ios_diag_Context, 'ios_diag_Context', ios_diag_Context, VOID, [ctx_Context]);
  initMetadataForClass(l10nState, 'l10nState', l10nState);
  initMetadataForClass(sfuAspectRatio, 'sfuAspectRatio');
  initMetadataForClass(sfuLayout, 'sfuLayout');
  initMetadataForClass(sfuTile, 'sfuTile');
  initMetadataForClass(sfuContext, 'sfuContext', sfuContext, VOID, [ctx_Context]);
  //endregion
  function get_colorPalette() {
    _init_properties_contact_kt__4ysrny();
    return colorPalette;
  }
  var colorPalette;
  function contactGetHexColor(text) {
    _init_properties_contact_kt__4ysrny();
    var palette = contactGetColorPalette();
    var id = contactGetColorIndex(text, palette.length);
    return palette[id];
  }
  function contactGetColorIndex(text, paletteSize) {
    _init_properties_contact_kt__4ysrny();
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = getStringHashCode(text);
    return abs(this_0) % (paletteSize - 1 | 0) | 0;
  }
  function contactGetColorPalette() {
    _init_properties_contact_kt__4ysrny();
    return get_colorPalette();
  }
  var properties_initialized_contact_kt_oio9jk;
  function _init_properties_contact_kt__4ysrny() {
    if (!properties_initialized_contact_kt_oio9jk) {
      properties_initialized_contact_kt_oio9jk = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      colorPalette = ['#3399FF', '#66CC66', '#FF66CC', '#339966', '#FF9966', '#00CCCC', '#CC9933', '#D0C80B', '#66CC00', '#339999', '#FF6699', '#6699FF', '#CC9966', '#99CC33', '#999999', '#4DA9FE', '#CC6666', '#FF9999', '#9999FF', '#669999', '#FFE10A', '#FFFCAA'];
    }
  }
  function test_contactGetHexColor() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var known = [contactGetHexColor('\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447'), contactGetHexColor('\u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447'), contactGetHexColor('\u041F\u0451\u0442\u0440 \u0410\u043B\u0435\u043A\u0441\u0435\u0435\u0432\u0438\u0447'), contactGetHexColor('accountfortest@ivcs.su'), contactGetHexColor('AccountForTest3')];
    return known[0] === '#FF9966' && known[1] === '#339999' && known[2] === '#66CC00' && known[3] === '#CC6666' && known[4] === '#66CC66';
  }
  function test_contactGetColorIndex() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var known = [contactGetColorIndex('\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447', 22), contactGetColorIndex('\u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447', 22), contactGetColorIndex('\u041F\u0451\u0442\u0440 \u0410\u043B\u0435\u043A\u0441\u0435\u0435\u0432\u0438\u0447', 22), contactGetColorIndex('accountfortest@ivcs.su', 22), contactGetColorIndex('AccountForTest3', 22)];
    return known[0] === 4 && known[1] === 9 && known[2] === 8 && known[3] === 16 && known[4] === 1;
  }
  function test_contactGetColorPalette() {
    var colors = contactGetColorPalette();
    return colors.length === 22;
  }
  function ctx_Context() {
  }
  function ctx_Controller$registerFieldCallback$lambda($fieldName, $cb) {
    return function (c) {
      if (c.recentField === $fieldName)
        $cb(c);
      return Unit_getInstance();
    };
  }
  function ctx_Controller(context) {
    this.context = context;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.callbacks_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.functions_1 = ArrayList_init_$Create$();
    this.isProcessingQueue = false;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.queue_1 = ArrayList_init_$Create$();
  }
  protoOf(ctx_Controller).set_context_xlv8r5_k$ = function (_set____db54di) {
    this.context = _set____db54di;
  };
  protoOf(ctx_Controller).get_context_h02k06_k$ = function () {
    return this.context;
  };
  protoOf(ctx_Controller).set_callbacks_cn2dln_k$ = function (_set____db54di) {
    this.callbacks_1 = _set____db54di;
  };
  protoOf(ctx_Controller).get_callbacks_7hep4q_k$ = function () {
    return this.callbacks_1;
  };
  protoOf(ctx_Controller).set_functions_dn8vov_k$ = function (_set____db54di) {
    this.functions_1 = _set____db54di;
  };
  protoOf(ctx_Controller).get_functions_4y52jd_k$ = function () {
    return this.functions_1;
  };
  protoOf(ctx_Controller).set_isProcessingQueue_ex9c7y_k$ = function (_set____db54di) {
    this.isProcessingQueue = _set____db54di;
  };
  protoOf(ctx_Controller).get_isProcessingQueue_dg022z_k$ = function () {
    return this.isProcessingQueue;
  };
  protoOf(ctx_Controller).set_queue_gyisp_k$ = function (_set____db54di) {
    this.queue_1 = _set____db54di;
  };
  protoOf(ctx_Controller).get_queue_wdfrj1_k$ = function () {
    return this.queue_1;
  };
  protoOf(ctx_Controller).executeFunctions = function () {
    var c = removeFirst(this.queue_1);
    this.context.recentField = c.recentField;
    this.context.setField(c.recentField, c.field(c.recentField));
    var _iterator__ex2g4s = this.functions_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var func = _iterator__ex2g4s.next_20eer_k$();
      var ctx = func(this.context.selfCopy());
      if (!(ctx.recentField === 'none')) {
        this.queue_1.add_utx5q5_k$(ctx);
      }
    }
    this.reportContext();
  };
  protoOf(ctx_Controller).processQueue = function () {
    if (this.isProcessingQueue) {
      return Unit_getInstance();
    }
    this.isProcessingQueue = true;
    while (this.queue_1.get_size_woubt6_k$() > 0) {
      this.executeFunctions();
    }
    this.isProcessingQueue = false;
  };
  protoOf(ctx_Controller).registerCallback = function (cb) {
    this.callbacks_1.add_utx5q5_k$(cb);
  };
  protoOf(ctx_Controller).registerFieldCallback = function (fieldName, cb) {
    var tmp = this.callbacks_1;
    tmp.add_utx5q5_k$(ctx_Controller$registerFieldCallback$lambda(fieldName, cb));
  };
  protoOf(ctx_Controller).registerFunction = function (f) {
    this.functions_1.add_utx5q5_k$(f);
  };
  protoOf(ctx_Controller).reportContext = function () {
    var _iterator__ex2g4s = this.callbacks_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var cb = _iterator__ex2g4s.next_20eer_k$();
      cb(this.context);
    }
  };
  protoOf(ctx_Controller).set = function (fieldName, value) {
    var c = this.context.selfCopy();
    c.setField(fieldName, value);
    c.recentField = fieldName;
    this.queue_1.add_utx5q5_k$(c);
    this.processQueue();
  };
  function example_Context(didLaunch, host, recentField) {
    didLaunch = didLaunch === VOID ? false : didLaunch;
    host = host === VOID ? '' : host;
    recentField = recentField === VOID ? '' : recentField;
    this.didLaunch = didLaunch;
    this.host = host;
    this.recentField_1 = recentField;
  }
  protoOf(example_Context).set_didLaunch_x1bx8g_k$ = function (_set____db54di) {
    this.didLaunch = _set____db54di;
  };
  protoOf(example_Context).get_didLaunch_bo02hj_k$ = function () {
    return this.didLaunch;
  };
  protoOf(example_Context).set_host_sqck4b_k$ = function (_set____db54di) {
    this.host = _set____db54di;
  };
  protoOf(example_Context).get_host_wonf8x_k$ = function () {
    return this.host;
  };
  protoOf(example_Context).set_recentField_5jv888_k$ = function (_set____db54di) {
    this.recentField_1 = _set____db54di;
  };
  protoOf(example_Context).get_recentField_jy0xl6_k$ = function () {
    return this.recentField_1;
  };
  protoOf(example_Context).field = function (name) {
    if (name === 'didLaunch') {
      return this.didLaunch;
    } else if (name === 'host') {
      return this.host;
    }
    return 'unknown-field-name';
  };
  protoOf(example_Context).selfCopy = function () {
    return this.copy();
  };
  protoOf(example_Context).setField = function (name, value) {
    if (name === 'didLaunch') {
      var tmp = this;
      tmp.didLaunch = typeof value === 'boolean' ? value : THROW_CCE();
    } else if (name === 'host') {
      var tmp_0 = this;
      tmp_0.host = typeof value === 'string' ? value : THROW_CCE();
    }
  };
  protoOf(example_Context).component1_7eebsc_k$ = function () {
    return this.didLaunch;
  };
  protoOf(example_Context).component2_7eebsb_k$ = function () {
    return this.host;
  };
  protoOf(example_Context).component3_7eebsa_k$ = function () {
    return this.recentField_1;
  };
  protoOf(example_Context).copy_zcecfk_k$ = function (didLaunch, host, recentField) {
    return new example_Context(didLaunch, host, recentField);
  };
  protoOf(example_Context).copy = function (didLaunch, host, recentField, $super) {
    didLaunch = didLaunch === VOID ? this.didLaunch : didLaunch;
    host = host === VOID ? this.host : host;
    recentField = recentField === VOID ? this.recentField_1 : recentField;
    return this.copy_zcecfk_k$(didLaunch, host, recentField);
  };
  protoOf(example_Context).toString = function () {
    return 'example_Context(didLaunch=' + this.didLaunch + ', host=' + this.host + ', recentField=' + this.recentField_1 + ')';
  };
  protoOf(example_Context).hashCode = function () {
    var result = getBooleanHashCode(this.didLaunch);
    result = imul(result, 31) + getStringHashCode(this.host) | 0;
    result = imul(result, 31) + getStringHashCode(this.recentField_1) | 0;
    return result;
  };
  protoOf(example_Context).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof example_Context))
      return false;
    var tmp0_other_with_cast = other instanceof example_Context ? other : THROW_CCE();
    if (!(this.didLaunch === tmp0_other_with_cast.didLaunch))
      return false;
    if (!(this.host === tmp0_other_with_cast.host))
      return false;
    if (!(this.recentField_1 === tmp0_other_with_cast.recentField_1))
      return false;
    return true;
  };
  function test_example_Context_field() {
    var c = new example_Context();
    c.host = 'abc';
    return equals(c.host, c.field('host'));
  }
  function test_example_Context_selfCopy() {
    var c1 = new example_Context();
    c1.host = 'abc';
    var tmp = c1.selfCopy();
    var c2 = tmp instanceof example_Context ? tmp : THROW_CCE();
    c2.host = '123';
    return c1.host === 'abc';
  }
  function test_example_Context_setField() {
    var c = new example_Context();
    c.host = 'abc';
    c.setField('host', '123');
    return c.host === '123';
  }
  function test_ctx_Controller_executeFunctions_set() {
    var c = new example_Context();
    var ctrl = new ctx_Controller(c);
    ctrl.isProcessingQueue = true;
    ctrl.set('host', '123');
    ctrl.registerFunction(test_ctx_Controller_executeFunctions_set$lambda);
    ctrl.executeFunctions();
    ctrl.executeFunctions();
    return c.host === '123' && c.didLaunch === true;
  }
  function test_ctx_Controller_processQueue() {
    var c = new example_Context();
    var ctrl = new ctx_Controller(c);
    ctrl.registerFunction(test_ctx_Controller_processQueue$lambda);
    ctrl.set('host', '123');
    return c.didLaunch === true;
  }
  function test_ctx_Controller_registerFieldCallback_match() {
    var c = new example_Context();
    c.host = '123';
    c.recentField_1 = 'host';
    var callbackHost = {_v: ''};
    var ctrl = new ctx_Controller(c);
    ctrl.registerFieldCallback('host', test_ctx_Controller_registerFieldCallback_match$lambda(callbackHost));
    ctrl.reportContext();
    return c.host === callbackHost._v;
  }
  function test_ctx_Controller_registerFieldCallback_mismatch() {
    var c = new example_Context();
    c.host = '123';
    c.recentField_1 = 'host';
    var callbackHost = {_v: ''};
    var ctrl = new ctx_Controller(c);
    ctrl.registerFieldCallback('didLaunch', test_ctx_Controller_registerFieldCallback_mismatch$lambda(callbackHost));
    ctrl.reportContext();
    return callbackHost._v === '';
  }
  function test_ctx_Controller_executeFunctions_set$hostToDidLaunch(c) {
    if (c.recentField_1 === 'host') {
      c.didLaunch = true;
      c.recentField_1 = 'didLaunch';
      return c;
    }
    c.recentField_1 = 'none';
    return c;
  }
  function test_ctx_Controller_processQueue$hostToDidLaunch(c) {
    if (c.recentField_1 === 'host') {
      c.didLaunch = true;
      c.recentField_1 = 'didLaunch';
      return c;
    }
    c.recentField_1 = 'none';
    return c;
  }
  function test_ctx_Controller_executeFunctions_set$lambda(c) {
    return test_ctx_Controller_executeFunctions_set$hostToDidLaunch(c instanceof example_Context ? c : THROW_CCE());
  }
  function test_ctx_Controller_processQueue$lambda(c) {
    return test_ctx_Controller_processQueue$hostToDidLaunch(c instanceof example_Context ? c : THROW_CCE());
  }
  function test_ctx_Controller_registerFieldCallback_match$lambda($callbackHost) {
    return function (c) {
      $callbackHost._v = (c instanceof example_Context ? c : THROW_CCE()).host;
      return Unit_getInstance();
    };
  }
  function test_ctx_Controller_registerFieldCallback_mismatch$lambda($callbackHost) {
    return function (c) {
      $callbackHost._v = (c instanceof example_Context ? c : THROW_CCE()).host;
      return Unit_getInstance();
    };
  }
  function ios_diag_Context(appDidActivate, appDidDeactivate, depth, didFinishSaving, fps, imageQuality, isActive, isAppActive, isFeatureActive, isSaving, mayStartSaving, takeImportantShot, recentField) {
    appDidActivate = appDidActivate === VOID ? false : appDidActivate;
    appDidDeactivate = appDidDeactivate === VOID ? false : appDidDeactivate;
    depth = depth === VOID ? 60 : depth;
    didFinishSaving = didFinishSaving === VOID ? false : didFinishSaving;
    fps = fps === VOID ? 4 : fps;
    imageQuality = imageQuality === VOID ? 0.5 : imageQuality;
    isActive = isActive === VOID ? false : isActive;
    isAppActive = isAppActive === VOID ? false : isAppActive;
    isFeatureActive = isFeatureActive === VOID ? false : isFeatureActive;
    isSaving = isSaving === VOID ? false : isSaving;
    mayStartSaving = mayStartSaving === VOID ? false : mayStartSaving;
    takeImportantShot = takeImportantShot === VOID ? false : takeImportantShot;
    recentField = recentField === VOID ? '' : recentField;
    this.appDidActivate = appDidActivate;
    this.appDidDeactivate = appDidDeactivate;
    this.depth = depth;
    this.didFinishSaving = didFinishSaving;
    this.fps = fps;
    this.imageQuality = imageQuality;
    this.isActive = isActive;
    this.isAppActive = isAppActive;
    this.isFeatureActive = isFeatureActive;
    this.isSaving = isSaving;
    this.mayStartSaving = mayStartSaving;
    this.takeImportantShot = takeImportantShot;
    this.recentField_1 = recentField;
  }
  protoOf(ios_diag_Context).set_appDidActivate_pwtjdz_k$ = function (_set____db54di) {
    this.appDidActivate = _set____db54di;
  };
  protoOf(ios_diag_Context).get_appDidActivate_46h7ei_k$ = function () {
    return this.appDidActivate;
  };
  protoOf(ios_diag_Context).set_appDidDeactivate_6no7y2_k$ = function (_set____db54di) {
    this.appDidDeactivate = _set____db54di;
  };
  protoOf(ios_diag_Context).get_appDidDeactivate_rl48ed_k$ = function () {
    return this.appDidDeactivate;
  };
  protoOf(ios_diag_Context).set_depth_v0xlni_k$ = function (_set____db54di) {
    this.depth = _set____db54di;
  };
  protoOf(ios_diag_Context).get_depth_iq7qmy_k$ = function () {
    return this.depth;
  };
  protoOf(ios_diag_Context).set_didFinishSaving_97z286_k$ = function (_set____db54di) {
    this.didFinishSaving = _set____db54di;
  };
  protoOf(ios_diag_Context).get_didFinishSaving_aszs0z_k$ = function () {
    return this.didFinishSaving;
  };
  protoOf(ios_diag_Context).set_fps_nga9h8_k$ = function (_set____db54di) {
    this.fps = _set____db54di;
  };
  protoOf(ios_diag_Context).get_fps_18j5og_k$ = function () {
    return this.fps;
  };
  protoOf(ios_diag_Context).set_imageQuality_gotgtx_k$ = function (_set____db54di) {
    this.imageQuality = _set____db54di;
  };
  protoOf(ios_diag_Context).get_imageQuality_p7gxnx_k$ = function () {
    return this.imageQuality;
  };
  protoOf(ios_diag_Context).set_isActive_tpclnc_k$ = function (_set____db54di) {
    this.isActive = _set____db54di;
  };
  protoOf(ios_diag_Context).get_isActive_quafmh_k$ = function () {
    return this.isActive;
  };
  protoOf(ios_diag_Context).set_isAppActive_1vmugl_k$ = function (_set____db54di) {
    this.isAppActive = _set____db54di;
  };
  protoOf(ios_diag_Context).get_isAppActive_lmgl4c_k$ = function () {
    return this.isAppActive;
  };
  protoOf(ios_diag_Context).set_isFeatureActive_r818w0_k$ = function (_set____db54di) {
    this.isFeatureActive = _set____db54di;
  };
  protoOf(ios_diag_Context).get_isFeatureActive_t8czfb_k$ = function () {
    return this.isFeatureActive;
  };
  protoOf(ios_diag_Context).set_isSaving_2zm7m4_k$ = function (_set____db54di) {
    this.isSaving = _set____db54di;
  };
  protoOf(ios_diag_Context).get_isSaving_zc1bbh_k$ = function () {
    return this.isSaving;
  };
  protoOf(ios_diag_Context).set_mayStartSaving_llu7i9_k$ = function (_set____db54di) {
    this.mayStartSaving = _set____db54di;
  };
  protoOf(ios_diag_Context).get_mayStartSaving_sgn7a8_k$ = function () {
    return this.mayStartSaving;
  };
  protoOf(ios_diag_Context).set_takeImportantShot_z3ubur_k$ = function (_set____db54di) {
    this.takeImportantShot = _set____db54di;
  };
  protoOf(ios_diag_Context).get_takeImportantShot_x9wng4_k$ = function () {
    return this.takeImportantShot;
  };
  protoOf(ios_diag_Context).set_recentField_5jv888_k$ = function (_set____db54di) {
    this.recentField_1 = _set____db54di;
  };
  protoOf(ios_diag_Context).get_recentField_jy0xl6_k$ = function () {
    return this.recentField_1;
  };
  protoOf(ios_diag_Context).field = function (name) {
    switch (name) {
      case 'appDidActivate':
        return this.appDidActivate;
      case 'appDidDeactivate':
        return this.appDidDeactivate;
      case 'depth':
        return this.depth;
      case 'didFinishSaving':
        return this.didFinishSaving;
      case 'fps':
        return this.fps;
      case 'imageQuality':
        return this.imageQuality;
      case 'isActive':
        return this.isActive;
      case 'isAppActive':
        return this.isAppActive;
      case 'isFeatureActive':
        return this.isFeatureActive;
      case 'isSaving':
        return this.isSaving;
      case 'mayStartSaving':
        return this.mayStartSaving;
      case 'takeImportantShot':
        return this.takeImportantShot;
    }
    return 'unknown-field-name';
  };
  protoOf(ios_diag_Context).selfCopy = function () {
    return this.copy();
  };
  protoOf(ios_diag_Context).setField = function (name, value) {
    switch (name) {
      case 'appDidActivate':
        var tmp = this;
        tmp.appDidActivate = typeof value === 'boolean' ? value : THROW_CCE();
        break;
      case 'appDidDeactivate':
        var tmp_0 = this;
        tmp_0.appDidDeactivate = typeof value === 'boolean' ? value : THROW_CCE();
        break;
      case 'depth':
        var tmp_1 = this;
        tmp_1.depth = typeof value === 'number' ? value : THROW_CCE();
        break;
      case 'didFinishSaving':
        var tmp_2 = this;
        tmp_2.didFinishSaving = typeof value === 'boolean' ? value : THROW_CCE();
        break;
      case 'fps':
        var tmp_3 = this;
        tmp_3.fps = typeof value === 'number' ? value : THROW_CCE();
        break;
      case 'imageQuality':
        var tmp_4 = this;
        tmp_4.imageQuality = typeof value === 'number' ? value : THROW_CCE();
        break;
      case 'isActive':
        var tmp_5 = this;
        tmp_5.isActive = typeof value === 'boolean' ? value : THROW_CCE();
        break;
      case 'isAppActive':
        var tmp_6 = this;
        tmp_6.isAppActive = typeof value === 'boolean' ? value : THROW_CCE();
        break;
      case 'isFeatureActive':
        var tmp_7 = this;
        tmp_7.isFeatureActive = typeof value === 'boolean' ? value : THROW_CCE();
        break;
      case 'isSaving':
        var tmp_8 = this;
        tmp_8.isSaving = typeof value === 'boolean' ? value : THROW_CCE();
        break;
      case 'mayStartSaving':
        var tmp_9 = this;
        tmp_9.mayStartSaving = typeof value === 'boolean' ? value : THROW_CCE();
        break;
      case 'takeImportantShot':
        var tmp_10 = this;
        tmp_10.takeImportantShot = typeof value === 'boolean' ? value : THROW_CCE();
        break;
    }
  };
  protoOf(ios_diag_Context).component1_7eebsc_k$ = function () {
    return this.appDidActivate;
  };
  protoOf(ios_diag_Context).component2_7eebsb_k$ = function () {
    return this.appDidDeactivate;
  };
  protoOf(ios_diag_Context).component3_7eebsa_k$ = function () {
    return this.depth;
  };
  protoOf(ios_diag_Context).component4_7eebs9_k$ = function () {
    return this.didFinishSaving;
  };
  protoOf(ios_diag_Context).component5_7eebs8_k$ = function () {
    return this.fps;
  };
  protoOf(ios_diag_Context).component6_7eebs7_k$ = function () {
    return this.imageQuality;
  };
  protoOf(ios_diag_Context).component7_7eebs6_k$ = function () {
    return this.isActive;
  };
  protoOf(ios_diag_Context).component8_7eebs5_k$ = function () {
    return this.isAppActive;
  };
  protoOf(ios_diag_Context).component9_7eebs4_k$ = function () {
    return this.isFeatureActive;
  };
  protoOf(ios_diag_Context).component10_gazzfo_k$ = function () {
    return this.isSaving;
  };
  protoOf(ios_diag_Context).component11_gazzfn_k$ = function () {
    return this.mayStartSaving;
  };
  protoOf(ios_diag_Context).component12_gazzfm_k$ = function () {
    return this.takeImportantShot;
  };
  protoOf(ios_diag_Context).component13_gazzfl_k$ = function () {
    return this.recentField_1;
  };
  protoOf(ios_diag_Context).copy_u6xg0a_k$ = function (appDidActivate, appDidDeactivate, depth, didFinishSaving, fps, imageQuality, isActive, isAppActive, isFeatureActive, isSaving, mayStartSaving, takeImportantShot, recentField) {
    return new ios_diag_Context(appDidActivate, appDidDeactivate, depth, didFinishSaving, fps, imageQuality, isActive, isAppActive, isFeatureActive, isSaving, mayStartSaving, takeImportantShot, recentField);
  };
  protoOf(ios_diag_Context).copy = function (appDidActivate, appDidDeactivate, depth, didFinishSaving, fps, imageQuality, isActive, isAppActive, isFeatureActive, isSaving, mayStartSaving, takeImportantShot, recentField, $super) {
    appDidActivate = appDidActivate === VOID ? this.appDidActivate : appDidActivate;
    appDidDeactivate = appDidDeactivate === VOID ? this.appDidDeactivate : appDidDeactivate;
    depth = depth === VOID ? this.depth : depth;
    didFinishSaving = didFinishSaving === VOID ? this.didFinishSaving : didFinishSaving;
    fps = fps === VOID ? this.fps : fps;
    imageQuality = imageQuality === VOID ? this.imageQuality : imageQuality;
    isActive = isActive === VOID ? this.isActive : isActive;
    isAppActive = isAppActive === VOID ? this.isAppActive : isAppActive;
    isFeatureActive = isFeatureActive === VOID ? this.isFeatureActive : isFeatureActive;
    isSaving = isSaving === VOID ? this.isSaving : isSaving;
    mayStartSaving = mayStartSaving === VOID ? this.mayStartSaving : mayStartSaving;
    takeImportantShot = takeImportantShot === VOID ? this.takeImportantShot : takeImportantShot;
    recentField = recentField === VOID ? this.recentField_1 : recentField;
    return this.copy_u6xg0a_k$(appDidActivate, appDidDeactivate, depth, didFinishSaving, fps, imageQuality, isActive, isAppActive, isFeatureActive, isSaving, mayStartSaving, takeImportantShot, recentField);
  };
  protoOf(ios_diag_Context).toString = function () {
    return 'ios_diag_Context(appDidActivate=' + this.appDidActivate + ', appDidDeactivate=' + this.appDidDeactivate + ', depth=' + this.depth + ', didFinishSaving=' + this.didFinishSaving + ', fps=' + this.fps + ', imageQuality=' + this.imageQuality + ', isActive=' + this.isActive + ', isAppActive=' + this.isAppActive + ', isFeatureActive=' + this.isFeatureActive + ', isSaving=' + this.isSaving + ', mayStartSaving=' + this.mayStartSaving + ', takeImportantShot=' + this.takeImportantShot + ', recentField=' + this.recentField_1 + ')';
  };
  protoOf(ios_diag_Context).hashCode = function () {
    var result = getBooleanHashCode(this.appDidActivate);
    result = imul(result, 31) + getBooleanHashCode(this.appDidDeactivate) | 0;
    result = imul(result, 31) + this.depth | 0;
    result = imul(result, 31) + getBooleanHashCode(this.didFinishSaving) | 0;
    result = imul(result, 31) + this.fps | 0;
    result = imul(result, 31) + getNumberHashCode(this.imageQuality) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isActive) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isAppActive) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isFeatureActive) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isSaving) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.mayStartSaving) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.takeImportantShot) | 0;
    result = imul(result, 31) + getStringHashCode(this.recentField_1) | 0;
    return result;
  };
  protoOf(ios_diag_Context).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ios_diag_Context))
      return false;
    var tmp0_other_with_cast = other instanceof ios_diag_Context ? other : THROW_CCE();
    if (!(this.appDidActivate === tmp0_other_with_cast.appDidActivate))
      return false;
    if (!(this.appDidDeactivate === tmp0_other_with_cast.appDidDeactivate))
      return false;
    if (!(this.depth === tmp0_other_with_cast.depth))
      return false;
    if (!(this.didFinishSaving === tmp0_other_with_cast.didFinishSaving))
      return false;
    if (!(this.fps === tmp0_other_with_cast.fps))
      return false;
    if (!equals(this.imageQuality, tmp0_other_with_cast.imageQuality))
      return false;
    if (!(this.isActive === tmp0_other_with_cast.isActive))
      return false;
    if (!(this.isAppActive === tmp0_other_with_cast.isAppActive))
      return false;
    if (!(this.isFeatureActive === tmp0_other_with_cast.isFeatureActive))
      return false;
    if (!(this.isSaving === tmp0_other_with_cast.isSaving))
      return false;
    if (!(this.mayStartSaving === tmp0_other_with_cast.mayStartSaving))
      return false;
    if (!(this.takeImportantShot === tmp0_other_with_cast.takeImportantShot))
      return false;
    if (!(this.recentField_1 === tmp0_other_with_cast.recentField_1))
      return false;
    return true;
  };
  function ios_diag_createContext() {
    return new ios_diag_Context();
  }
  function ios_diag_shouldTakeImportantShot(c) {
    if (c.recentField_1 === 'isAppActive' && c.isFeatureActive && !c.isSaving) {
      c.takeImportantShot = true;
      c.recentField_1 = 'takeImportantShot';
      return c;
    }
    c.recentField_1 = 'none';
    return c;
  }
  function ios_diag_shouldResetActivity(c) {
    if (c.recentField_1 !== 'isAppActive' && c.recentField_1 !== 'isFeatureActive' && c.recentField_1 !== 'isSaving') {
      c.recentField_1 = 'none';
      return c;
    }
    if (!c.isActive && c.isAppActive && c.isFeatureActive && !c.isSaving) {
      c.isActive = true;
      c.recentField_1 = 'isActive';
      return c;
    }
    if (c.isActive && (!c.isAppActive || !c.isFeatureActive || c.isSaving)) {
      c.isActive = false;
      c.recentField_1 = 'isActive';
      return c;
    }
    c.recentField_1 = 'none';
    return c;
  }
  function ios_diag_shouldResetAppActivity(c) {
    if (c.recentField_1 === 'appDidActivate' && c.appDidActivate) {
      c.isAppActive = true;
      c.recentField_1 = 'isAppActive';
      return c;
    }
    if (c.recentField_1 === 'appDidDeactivate' && c.appDidDeactivate) {
      c.isAppActive = false;
      c.recentField_1 = 'isAppActive';
      return c;
    }
    c.recentField_1 = 'none';
    return c;
  }
  function ios_diag_shouldResetSaving(c) {
    if (c.recentField_1 !== 'didFinishSaving' && c.recentField_1 !== 'mayStartSaving') {
      c.recentField_1 = 'none';
      return c;
    }
    if (c.mayStartSaving && c.isActive && !c.isSaving) {
      c.isSaving = true;
      c.recentField_1 = 'isSaving';
      return c;
    }
    if (c.didFinishSaving && c.isSaving) {
      c.isSaving = false;
      c.recentField_1 = 'isSaving';
      return c;
    }
    c.recentField_1 = 'none';
    return c;
  }
  function test_ios_diag_shouldResetActivity_false_isAppActive() {
    var c = new ios_diag_Context();
    c.isAppActive = false;
    c.isFeatureActive = true;
    c.recentField = 'isAppActive';
    c = ios_diag_shouldResetActivity(c);
    return c.isActive === false;
  }
  function test_ios_diag_shouldResetActivity_false_isFeatureActive() {
    var c = new ios_diag_Context();
    c.isAppActive = true;
    c.isFeatureActive = false;
    c.recentField = 'isFeatureActive';
    c = ios_diag_shouldResetActivity(c);
    return c.isActive === false;
  }
  function test_ios_diag_shouldResetActivity_false_isSaving() {
    var c = new ios_diag_Context();
    c.isActive = false;
    c.isAppActive = true;
    c.isFeatureActive = true;
    c.isSaving = true;
    c.recentField = 'isSaving';
    c = ios_diag_shouldResetActivity(c);
    return c.isActive === false;
  }
  function test_ios_diag_shouldResetActivity_true_isAppActive() {
    var c = new ios_diag_Context();
    c.isAppActive = true;
    c.isFeatureActive = true;
    c.recentField = 'isAppActive';
    c = ios_diag_shouldResetActivity(c);
    return c.isActive;
  }
  function test_ios_diag_shouldResetActivity_true_isFeatureActive() {
    var c = new ios_diag_Context();
    c.isAppActive = true;
    c.isFeatureActive = true;
    c.recentField = 'isFeatureActive';
    c = ios_diag_shouldResetActivity(c);
    return c.isActive;
  }
  function test_ios_diag_shouldResetAppActivity_false() {
    var c = new ios_diag_Context();
    c.isActive = true;
    c.appDidDeactivate = true;
    c.recentField = 'appDidDeactivate';
    c = ios_diag_shouldResetAppActivity(c);
    return c.isAppActive === false;
  }
  function test_ios_diag_shouldResetAppActivity_true() {
    var c = new ios_diag_Context();
    c.isActive = true;
    c.appDidActivate = true;
    c.recentField = 'appDidActivate';
    c = ios_diag_shouldResetAppActivity(c);
    return c.isAppActive;
  }
  function test_ios_diag_shouldResetActivity_true_isSaving() {
    var c = new ios_diag_Context();
    c.isAppActive = true;
    c.isFeatureActive = true;
    c.isSaving = false;
    c.recentField = 'isSaving';
    c = ios_diag_shouldResetActivity(c);
    return c.isActive;
  }
  function test_ios_diag_shouldResetSaving_false() {
    var c = new ios_diag_Context();
    c.didFinishSaving = true;
    c.recentField = 'didFinishSaving';
    c = ios_diag_shouldResetSaving(c);
    return c.isSaving === false;
  }
  function test_ios_diag_shouldResetSaving_true() {
    var c = new ios_diag_Context();
    c.isActive = true;
    c.mayStartSaving = true;
    c.recentField = 'mayStartSaving';
    c = ios_diag_shouldResetSaving(c);
    return c.isSaving;
  }
  function test_ios_diag_shouldTakeImportantShot_false() {
    var c = new ios_diag_Context();
    c.isAppActive = false;
    c.isFeatureActive = false;
    c.recentField = 'isAppActive';
    c = ios_diag_shouldTakeImportantShot(c);
    return c.recentField === 'none';
  }
  function test_ios_diag_shouldTakeImportantShot_true() {
    var c = new ios_diag_Context();
    c.isAppActive = true;
    c.isFeatureActive = true;
    c.isSaving = false;
    c.recentField = 'isAppActive';
    c = ios_diag_shouldTakeImportantShot(c);
    return c.recentField === 'takeImportantShot';
  }
  function set_state(_set____db54di) {
    _init_properties_l10n_kt__dkjo3h();
    state = _set____db54di;
  }
  function get_state() {
    _init_properties_l10n_kt__dkjo3h();
    return state;
  }
  var state;
  function l10nSetCurrentApplication(app) {
    _init_properties_l10n_kt__dkjo3h();
    get_state().app_1 = app;
  }
  function l10nSetCurrentLanguage(lang) {
    _init_properties_l10n_kt__dkjo3h();
    get_state().lang_1 = lang;
  }
  function l10nSetCurrentYear(year) {
    _init_properties_l10n_kt__dkjo3h();
    get_state().year_1 = year;
  }
  function l10nGetTestSampleNewline() {
    _init_properties_l10n_kt__dkjo3h();
    var YEAR = get_state().year_1;
    if (get_state().lang_1 === 'ru') {
      return '\u0414\u0430\u0432\u0430\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u043C \u043D\u043E\u0432\u0443\u044E \u0441\u0442\u0440\u043E\u043A\u0443.\n\u0414\u0430, \u043F\u0440\u043E\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0435 \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.\n\u041B\u0435\u0433\u043A\u043E, \u043D\u0435 \u0442\u0430\u043A \u043B\u0438?';
    }
    return "Let's check a new line.\nYep, just use the corresponding string.\nEasy, isn't it?";
  }
  function l10nGetSettCopyright() {
    _init_properties_l10n_kt__dkjo3h();
    var YEAR = get_state().year_1;
    if (get_state().app_1 === 'CONN' && get_state().lang_1 === 'ru') {
      return '\xA9 2017\u2013' + YEAR + ' \u041F\u0410\u041E \xAB\u0418\u0412\u0410\xBB. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B';
    }
    if (get_state().app_1 === 'CONN' && get_state().lang_1 === 'en') {
      return 'Copyright \xA9 2017-' + YEAR + ' PJSC IVA. All rights reserved';
    }
    if (get_state().app_1 === 'VKUR' && get_state().lang_1 === 'ru') {
      return '\xA9 2021\u2013' + YEAR + ' \u0410\u041E \xAB\u0412\u041A\u0423\u0420\u0421\u0415\xBB. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B';
    }
    return 'Copyright \xA9 2021-' + YEAR + ' JSC VKURSE. All rights reserved';
  }
  function l10nState(app, lang, year) {
    app = app === VOID ? '' : app;
    lang = lang === VOID ? '' : lang;
    year = year === VOID ? 0 : year;
    this.app_1 = app;
    this.lang_1 = lang;
    this.year_1 = year;
  }
  protoOf(l10nState).set_app_5bstwm_k$ = function (_set____db54di) {
    this.app_1 = _set____db54di;
  };
  protoOf(l10nState).get_app_18j9e0_k$ = function () {
    return this.app_1;
  };
  protoOf(l10nState).set_lang_iwrtpb_k$ = function (_set____db54di) {
    this.lang_1 = _set____db54di;
  };
  protoOf(l10nState).get_lang_wopoon_k$ = function () {
    return this.lang_1;
  };
  protoOf(l10nState).set_year_fqme9e_k$ = function (_set____db54di) {
    this.year_1 = _set____db54di;
  };
  protoOf(l10nState).get_year_woy26e_k$ = function () {
    return this.year_1;
  };
  var properties_initialized_l10n_kt_lynghn;
  function _init_properties_l10n_kt__dkjo3h() {
    if (!properties_initialized_l10n_kt_lynghn) {
      properties_initialized_l10n_kt_lynghn = true;
      state = new l10nState();
    }
  }
  function test_l10nGetSettCopyrightConnect() {
    l10nSetCurrentApplication('CONN');
    var year = 2050;
    l10nSetCurrentYear(year);
    l10nSetCurrentLanguage('en');
    var txtEn = l10nGetSettCopyright();
    l10nSetCurrentLanguage('ru');
    var txtRu = l10nGetSettCopyright();
    return contains(txtEn, 'PJSC') && contains(txtEn, year.toString()) && contains(txtRu, '\u041F\u0410\u041E') && contains(txtRu, year.toString());
  }
  function test_l10nGetSettCopyrightVKURSE() {
    l10nSetCurrentApplication('VKUR');
    var year = 2050;
    l10nSetCurrentYear(year);
    l10nSetCurrentLanguage('en');
    var txtEn = l10nGetSettCopyright();
    l10nSetCurrentLanguage('ru');
    var txtRu = l10nGetSettCopyright();
    return contains(txtEn, 'JSC') && contains(txtEn, year.toString()) && contains(txtRu, '\u0410\u041E') && contains(txtRu, year.toString());
  }
  function sfuAspectRatio(w, h) {
    this.w = w;
    this.h = h;
  }
  protoOf(sfuAspectRatio).get_w_1mhr66_k$ = function () {
    return this.w;
  };
  protoOf(sfuAspectRatio).get_h_1mhr5r_k$ = function () {
    return this.h;
  };
  protoOf(sfuAspectRatio).component1_7eebsc_k$ = function () {
    return this.w;
  };
  protoOf(sfuAspectRatio).component2_7eebsb_k$ = function () {
    return this.h;
  };
  protoOf(sfuAspectRatio).copy_fhtu3_k$ = function (w, h) {
    return new sfuAspectRatio(w, h);
  };
  protoOf(sfuAspectRatio).copy = function (w, h, $super) {
    w = w === VOID ? this.w : w;
    h = h === VOID ? this.h : h;
    return this.copy_fhtu3_k$(w, h);
  };
  protoOf(sfuAspectRatio).toString = function () {
    return 'sfuAspectRatio(w=' + this.w + ', h=' + this.h + ')';
  };
  protoOf(sfuAspectRatio).hashCode = function () {
    var result = this.w;
    result = imul(result, 31) + this.h | 0;
    return result;
  };
  protoOf(sfuAspectRatio).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof sfuAspectRatio))
      return false;
    var tmp0_other_with_cast = other instanceof sfuAspectRatio ? other : THROW_CCE();
    if (!(this.w === tmp0_other_with_cast.w))
      return false;
    if (!(this.h === tmp0_other_with_cast.h))
      return false;
    return true;
  };
  function sfuLayout(columns, rows, tileWidth, tileHeight) {
    this.columns = columns;
    this.rows = rows;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
  }
  protoOf(sfuLayout).get_columns_gyzrhw_k$ = function () {
    return this.columns;
  };
  protoOf(sfuLayout).get_rows_wott7m_k$ = function () {
    return this.rows;
  };
  protoOf(sfuLayout).get_tileWidth_5on4dt_k$ = function () {
    return this.tileWidth;
  };
  protoOf(sfuLayout).get_tileHeight_tpmt4u_k$ = function () {
    return this.tileHeight;
  };
  protoOf(sfuLayout).component1_7eebsc_k$ = function () {
    return this.columns;
  };
  protoOf(sfuLayout).component2_7eebsb_k$ = function () {
    return this.rows;
  };
  protoOf(sfuLayout).component3_7eebsa_k$ = function () {
    return this.tileWidth;
  };
  protoOf(sfuLayout).component4_7eebs9_k$ = function () {
    return this.tileHeight;
  };
  protoOf(sfuLayout).copy_my5h57_k$ = function (columns, rows, tileWidth, tileHeight) {
    return new sfuLayout(columns, rows, tileWidth, tileHeight);
  };
  protoOf(sfuLayout).copy = function (columns, rows, tileWidth, tileHeight, $super) {
    columns = columns === VOID ? this.columns : columns;
    rows = rows === VOID ? this.rows : rows;
    tileWidth = tileWidth === VOID ? this.tileWidth : tileWidth;
    tileHeight = tileHeight === VOID ? this.tileHeight : tileHeight;
    return this.copy_my5h57_k$(columns, rows, tileWidth, tileHeight);
  };
  protoOf(sfuLayout).toString = function () {
    return 'sfuLayout(columns=' + this.columns + ', rows=' + this.rows + ', tileWidth=' + this.tileWidth + ', tileHeight=' + this.tileHeight + ')';
  };
  protoOf(sfuLayout).hashCode = function () {
    var result = this.columns;
    result = imul(result, 31) + this.rows | 0;
    result = imul(result, 31) + this.tileWidth | 0;
    result = imul(result, 31) + this.tileHeight | 0;
    return result;
  };
  protoOf(sfuLayout).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof sfuLayout))
      return false;
    var tmp0_other_with_cast = other instanceof sfuLayout ? other : THROW_CCE();
    if (!(this.columns === tmp0_other_with_cast.columns))
      return false;
    if (!(this.rows === tmp0_other_with_cast.rows))
      return false;
    if (!(this.tileWidth === tmp0_other_with_cast.tileWidth))
      return false;
    if (!(this.tileHeight === tmp0_other_with_cast.tileHeight))
      return false;
    return true;
  };
  function sfuTile(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  protoOf(sfuTile).get_x_1mhr67_k$ = function () {
    return this.x;
  };
  protoOf(sfuTile).get_y_1mhr68_k$ = function () {
    return this.y;
  };
  protoOf(sfuTile).get_w_1mhr66_k$ = function () {
    return this.w;
  };
  protoOf(sfuTile).get_h_1mhr5r_k$ = function () {
    return this.h;
  };
  protoOf(sfuTile).component1_7eebsc_k$ = function () {
    return this.x;
  };
  protoOf(sfuTile).component2_7eebsb_k$ = function () {
    return this.y;
  };
  protoOf(sfuTile).component3_7eebsa_k$ = function () {
    return this.w;
  };
  protoOf(sfuTile).component4_7eebs9_k$ = function () {
    return this.h;
  };
  protoOf(sfuTile).copy_my5h57_k$ = function (x, y, w, h) {
    return new sfuTile(x, y, w, h);
  };
  protoOf(sfuTile).copy = function (x, y, w, h, $super) {
    x = x === VOID ? this.x : x;
    y = y === VOID ? this.y : y;
    w = w === VOID ? this.w : w;
    h = h === VOID ? this.h : h;
    return this.copy_my5h57_k$(x, y, w, h);
  };
  protoOf(sfuTile).toString = function () {
    return 'sfuTile(x=' + this.x + ', y=' + this.y + ', w=' + this.w + ', h=' + this.h + ')';
  };
  protoOf(sfuTile).hashCode = function () {
    var result = this.x;
    result = imul(result, 31) + this.y | 0;
    result = imul(result, 31) + this.w | 0;
    result = imul(result, 31) + this.h | 0;
    return result;
  };
  protoOf(sfuTile).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof sfuTile))
      return false;
    var tmp0_other_with_cast = other instanceof sfuTile ? other : THROW_CCE();
    if (!(this.x === tmp0_other_with_cast.x))
      return false;
    if (!(this.y === tmp0_other_with_cast.y))
      return false;
    if (!(this.w === tmp0_other_with_cast.w))
      return false;
    if (!(this.h === tmp0_other_with_cast.h))
      return false;
    return true;
  };
  function sfuContext(areaSize, defaultAreaSize, defaultTilesCount, didPressMouse, didReleaseMouse, fixedAreaSize, inputTilesCount, isMouseDown, mousePos, tileAspectRatio, tileFit, tiles, tilesCount, recentField) {
    var tmp;
    if (areaSize === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [0, 0];
    } else {
      tmp = areaSize;
    }
    areaSize = tmp;
    var tmp_0;
    if (defaultAreaSize === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = [0, 0];
    } else {
      tmp_0 = defaultAreaSize;
    }
    defaultAreaSize = tmp_0;
    defaultTilesCount = defaultTilesCount === VOID ? 0 : defaultTilesCount;
    didPressMouse = didPressMouse === VOID ? false : didPressMouse;
    didReleaseMouse = didReleaseMouse === VOID ? false : didReleaseMouse;
    var tmp_1;
    if (fixedAreaSize === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = [0, 0];
    } else {
      tmp_1 = fixedAreaSize;
    }
    fixedAreaSize = tmp_1;
    inputTilesCount = inputTilesCount === VOID ? 0 : inputTilesCount;
    isMouseDown = isMouseDown === VOID ? false : isMouseDown;
    var tmp_2;
    if (mousePos === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = [0, 0];
    } else {
      tmp_2 = mousePos;
    }
    mousePos = tmp_2;
    tileAspectRatio = tileAspectRatio === VOID ? new sfuAspectRatio(0, 0) : tileAspectRatio;
    tileFit = tileFit === VOID ? false : tileFit;
    var tmp_3;
    if (tiles === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = [];
    } else {
      tmp_3 = tiles;
    }
    tiles = tmp_3;
    tilesCount = tilesCount === VOID ? 0 : tilesCount;
    recentField = recentField === VOID ? '' : recentField;
    this.areaSize = areaSize;
    this.defaultAreaSize = defaultAreaSize;
    this.defaultTilesCount = defaultTilesCount;
    this.didPressMouse = didPressMouse;
    this.didReleaseMouse = didReleaseMouse;
    this.fixedAreaSize = fixedAreaSize;
    this.inputTilesCount = inputTilesCount;
    this.isMouseDown = isMouseDown;
    this.mousePos = mousePos;
    this.tileAspectRatio = tileAspectRatio;
    this.tileFit = tileFit;
    this.tiles = tiles;
    this.tilesCount = tilesCount;
    this.recentField_1 = recentField;
  }
  protoOf(sfuContext).set_areaSize_1yy8kz_k$ = function (_set____db54di) {
    this.areaSize = _set____db54di;
  };
  protoOf(sfuContext).get_areaSize_bo69dj_k$ = function () {
    return this.areaSize;
  };
  protoOf(sfuContext).set_defaultAreaSize_8vetdy_k$ = function (_set____db54di) {
    this.defaultAreaSize = _set____db54di;
  };
  protoOf(sfuContext).get_defaultAreaSize_pt136i_k$ = function () {
    return this.defaultAreaSize;
  };
  protoOf(sfuContext).set_defaultTilesCount_rzzxhi_k$ = function (_set____db54di) {
    this.defaultTilesCount = _set____db54di;
  };
  protoOf(sfuContext).get_defaultTilesCount_p26qri_k$ = function () {
    return this.defaultTilesCount;
  };
  protoOf(sfuContext).set_didPressMouse_4jxvnz_k$ = function (_set____db54di) {
    this.didPressMouse = _set____db54di;
  };
  protoOf(sfuContext).get_didPressMouse_pwnavs_k$ = function () {
    return this.didPressMouse;
  };
  protoOf(sfuContext).set_didReleaseMouse_p2837v_k$ = function (_set____db54di) {
    this.didReleaseMouse = _set____db54di;
  };
  protoOf(sfuContext).get_didReleaseMouse_391fys_k$ = function () {
    return this.didReleaseMouse;
  };
  protoOf(sfuContext).set_fixedAreaSize_w4ar71_k$ = function (_set____db54di) {
    this.fixedAreaSize = _set____db54di;
  };
  protoOf(sfuContext).get_fixedAreaSize_80actj_k$ = function () {
    return this.fixedAreaSize;
  };
  protoOf(sfuContext).set_inputTilesCount_h7g0i9_k$ = function (_set____db54di) {
    this.inputTilesCount = _set____db54di;
  };
  protoOf(sfuContext).get_inputTilesCount_hf0lqj_k$ = function () {
    return this.inputTilesCount;
  };
  protoOf(sfuContext).set_isMouseDown_a4sjvv_k$ = function (_set____db54di) {
    this.isMouseDown = _set____db54di;
  };
  protoOf(sfuContext).get_isMouseDown_ryhimk_k$ = function () {
    return this.isMouseDown;
  };
  protoOf(sfuContext).set_mousePos_f99zg4_k$ = function (_set____db54di) {
    this.mousePos = _set____db54di;
  };
  protoOf(sfuContext).get_mousePos_xs5yh4_k$ = function () {
    return this.mousePos;
  };
  protoOf(sfuContext).set_tileAspectRatio_l2qenb_k$ = function (_set____db54di) {
    this.tileAspectRatio = _set____db54di;
  };
  protoOf(sfuContext).get_tileAspectRatio_fe3xuk_k$ = function () {
    return this.tileAspectRatio;
  };
  protoOf(sfuContext).set_tileFit_ij8wlt_k$ = function (_set____db54di) {
    this.tileFit = _set____db54di;
  };
  protoOf(sfuContext).get_tileFit_khadt2_k$ = function () {
    return this.tileFit;
  };
  protoOf(sfuContext).set_tiles_v7zt2a_k$ = function (_set____db54di) {
    this.tiles = _set____db54di;
  };
  protoOf(sfuContext).get_tiles_iz2wrg_k$ = function () {
    return this.tiles;
  };
  protoOf(sfuContext).set_tilesCount_7hkfmp_k$ = function (_set____db54di) {
    this.tilesCount = _set____db54di;
  };
  protoOf(sfuContext).get_tilesCount_lh4dm5_k$ = function () {
    return this.tilesCount;
  };
  protoOf(sfuContext).set_recentField_5jv888_k$ = function (_set____db54di) {
    this.recentField_1 = _set____db54di;
  };
  protoOf(sfuContext).get_recentField_jy0xl6_k$ = function () {
    return this.recentField_1;
  };
  protoOf(sfuContext).field = function (name) {
    switch (name) {
      case 'areaSize':
        return this.areaSize;
      case 'defaultAreaSize':
        return this.defaultAreaSize;
      case 'defaultTilesCount':
        return this.defaultTilesCount;
      case 'didPressMouse':
        return this.didPressMouse;
      case 'didReleaseMouse':
        return this.didReleaseMouse;
      case 'fixedAreaSize':
        return this.fixedAreaSize;
      case 'inputTilesCount':
        return this.inputTilesCount;
      case 'isMouseDown':
        return this.isMouseDown;
      case 'mousePos':
        return this.mousePos;
      case 'tileAspectRatio':
        return this.tileAspectRatio;
      case 'tileFit':
        return this.tileFit;
      case 'tiles':
        return this.tiles;
      case 'tilesCount':
        return this.tilesCount;
    }
    return 'unknown-field-name';
  };
  protoOf(sfuContext).selfCopy = function () {
    return this.copy();
  };
  protoOf(sfuContext).setField = function (name, value) {
    switch (name) {
      case 'areaSize':
        var tmp = this;
        tmp.areaSize = isArray(value) ? value : THROW_CCE();
        break;
      case 'defaultAreaSize':
        var tmp_0 = this;
        tmp_0.defaultAreaSize = isArray(value) ? value : THROW_CCE();
        break;
      case 'defaultTilesCount':
        var tmp_1 = this;
        tmp_1.defaultTilesCount = typeof value === 'number' ? value : THROW_CCE();
        break;
      case 'didPressMouse':
        var tmp_2 = this;
        tmp_2.didPressMouse = typeof value === 'boolean' ? value : THROW_CCE();
        break;
      case 'didReleaseMouse':
        var tmp_3 = this;
        tmp_3.didReleaseMouse = typeof value === 'boolean' ? value : THROW_CCE();
        break;
      case 'fixedAreaSize':
        var tmp_4 = this;
        tmp_4.fixedAreaSize = isArray(value) ? value : THROW_CCE();
        break;
      case 'inputTilesCount':
        var tmp_5 = this;
        tmp_5.inputTilesCount = typeof value === 'number' ? value : THROW_CCE();
        break;
      case 'isMouseDown':
        var tmp_6 = this;
        tmp_6.isMouseDown = typeof value === 'boolean' ? value : THROW_CCE();
        break;
      case 'mousePos':
        var tmp_7 = this;
        tmp_7.mousePos = isArray(value) ? value : THROW_CCE();
        break;
      case 'tileAspectRatio':
        var tmp_8 = this;
        tmp_8.tileAspectRatio = value instanceof sfuAspectRatio ? value : THROW_CCE();
        break;
      case 'tileFit':
        var tmp_9 = this;
        tmp_9.tileFit = typeof value === 'boolean' ? value : THROW_CCE();
        break;
      case 'tiles':
        var tmp_10 = this;
        tmp_10.tiles = isArray(value) ? value : THROW_CCE();
        break;
      case 'tilesCount':
        var tmp_11 = this;
        tmp_11.tilesCount = typeof value === 'number' ? value : THROW_CCE();
        break;
    }
  };
  protoOf(sfuContext).component1_7eebsc_k$ = function () {
    return this.areaSize;
  };
  protoOf(sfuContext).component2_7eebsb_k$ = function () {
    return this.defaultAreaSize;
  };
  protoOf(sfuContext).component3_7eebsa_k$ = function () {
    return this.defaultTilesCount;
  };
  protoOf(sfuContext).component4_7eebs9_k$ = function () {
    return this.didPressMouse;
  };
  protoOf(sfuContext).component5_7eebs8_k$ = function () {
    return this.didReleaseMouse;
  };
  protoOf(sfuContext).component6_7eebs7_k$ = function () {
    return this.fixedAreaSize;
  };
  protoOf(sfuContext).component7_7eebs6_k$ = function () {
    return this.inputTilesCount;
  };
  protoOf(sfuContext).component8_7eebs5_k$ = function () {
    return this.isMouseDown;
  };
  protoOf(sfuContext).component9_7eebs4_k$ = function () {
    return this.mousePos;
  };
  protoOf(sfuContext).component10_gazzfo_k$ = function () {
    return this.tileAspectRatio;
  };
  protoOf(sfuContext).component11_gazzfn_k$ = function () {
    return this.tileFit;
  };
  protoOf(sfuContext).component12_gazzfm_k$ = function () {
    return this.tiles;
  };
  protoOf(sfuContext).component13_gazzfl_k$ = function () {
    return this.tilesCount;
  };
  protoOf(sfuContext).component14_gazzfk_k$ = function () {
    return this.recentField_1;
  };
  protoOf(sfuContext).copy_g76nw4_k$ = function (areaSize, defaultAreaSize, defaultTilesCount, didPressMouse, didReleaseMouse, fixedAreaSize, inputTilesCount, isMouseDown, mousePos, tileAspectRatio, tileFit, tiles, tilesCount, recentField) {
    return new sfuContext(areaSize, defaultAreaSize, defaultTilesCount, didPressMouse, didReleaseMouse, fixedAreaSize, inputTilesCount, isMouseDown, mousePos, tileAspectRatio, tileFit, tiles, tilesCount, recentField);
  };
  protoOf(sfuContext).copy = function (areaSize, defaultAreaSize, defaultTilesCount, didPressMouse, didReleaseMouse, fixedAreaSize, inputTilesCount, isMouseDown, mousePos, tileAspectRatio, tileFit, tiles, tilesCount, recentField, $super) {
    areaSize = areaSize === VOID ? this.areaSize : areaSize;
    defaultAreaSize = defaultAreaSize === VOID ? this.defaultAreaSize : defaultAreaSize;
    defaultTilesCount = defaultTilesCount === VOID ? this.defaultTilesCount : defaultTilesCount;
    didPressMouse = didPressMouse === VOID ? this.didPressMouse : didPressMouse;
    didReleaseMouse = didReleaseMouse === VOID ? this.didReleaseMouse : didReleaseMouse;
    fixedAreaSize = fixedAreaSize === VOID ? this.fixedAreaSize : fixedAreaSize;
    inputTilesCount = inputTilesCount === VOID ? this.inputTilesCount : inputTilesCount;
    isMouseDown = isMouseDown === VOID ? this.isMouseDown : isMouseDown;
    mousePos = mousePos === VOID ? this.mousePos : mousePos;
    tileAspectRatio = tileAspectRatio === VOID ? this.tileAspectRatio : tileAspectRatio;
    tileFit = tileFit === VOID ? this.tileFit : tileFit;
    tiles = tiles === VOID ? this.tiles : tiles;
    tilesCount = tilesCount === VOID ? this.tilesCount : tilesCount;
    recentField = recentField === VOID ? this.recentField_1 : recentField;
    return this.copy_g76nw4_k$(areaSize, defaultAreaSize, defaultTilesCount, didPressMouse, didReleaseMouse, fixedAreaSize, inputTilesCount, isMouseDown, mousePos, tileAspectRatio, tileFit, tiles, tilesCount, recentField);
  };
  protoOf(sfuContext).toString = function () {
    return 'sfuContext(areaSize=' + toString(this.areaSize) + ', defaultAreaSize=' + toString(this.defaultAreaSize) + ', defaultTilesCount=' + this.defaultTilesCount + ', didPressMouse=' + this.didPressMouse + ', didReleaseMouse=' + this.didReleaseMouse + ', fixedAreaSize=' + toString(this.fixedAreaSize) + ', inputTilesCount=' + this.inputTilesCount + ', isMouseDown=' + this.isMouseDown + ', mousePos=' + toString(this.mousePos) + ', tileAspectRatio=' + this.tileAspectRatio.toString() + ', tileFit=' + this.tileFit + ', tiles=' + toString(this.tiles) + ', tilesCount=' + this.tilesCount + ', recentField=' + this.recentField_1 + ')';
  };
  protoOf(sfuContext).hashCode = function () {
    var result = hashCode(this.areaSize);
    result = imul(result, 31) + hashCode(this.defaultAreaSize) | 0;
    result = imul(result, 31) + this.defaultTilesCount | 0;
    result = imul(result, 31) + getBooleanHashCode(this.didPressMouse) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.didReleaseMouse) | 0;
    result = imul(result, 31) + hashCode(this.fixedAreaSize) | 0;
    result = imul(result, 31) + this.inputTilesCount | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isMouseDown) | 0;
    result = imul(result, 31) + hashCode(this.mousePos) | 0;
    result = imul(result, 31) + this.tileAspectRatio.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.tileFit) | 0;
    result = imul(result, 31) + hashCode(this.tiles) | 0;
    result = imul(result, 31) + this.tilesCount | 0;
    result = imul(result, 31) + getStringHashCode(this.recentField_1) | 0;
    return result;
  };
  protoOf(sfuContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof sfuContext))
      return false;
    var tmp0_other_with_cast = other instanceof sfuContext ? other : THROW_CCE();
    if (!equals(this.areaSize, tmp0_other_with_cast.areaSize))
      return false;
    if (!equals(this.defaultAreaSize, tmp0_other_with_cast.defaultAreaSize))
      return false;
    if (!(this.defaultTilesCount === tmp0_other_with_cast.defaultTilesCount))
      return false;
    if (!(this.didPressMouse === tmp0_other_with_cast.didPressMouse))
      return false;
    if (!(this.didReleaseMouse === tmp0_other_with_cast.didReleaseMouse))
      return false;
    if (!equals(this.fixedAreaSize, tmp0_other_with_cast.fixedAreaSize))
      return false;
    if (!(this.inputTilesCount === tmp0_other_with_cast.inputTilesCount))
      return false;
    if (!(this.isMouseDown === tmp0_other_with_cast.isMouseDown))
      return false;
    if (!equals(this.mousePos, tmp0_other_with_cast.mousePos))
      return false;
    if (!this.tileAspectRatio.equals(tmp0_other_with_cast.tileAspectRatio))
      return false;
    if (!(this.tileFit === tmp0_other_with_cast.tileFit))
      return false;
    if (!equals(this.tiles, tmp0_other_with_cast.tiles))
      return false;
    if (!(this.tilesCount === tmp0_other_with_cast.tilesCount))
      return false;
    if (!(this.recentField_1 === tmp0_other_with_cast.recentField_1))
      return false;
    return true;
  };
  function sfuCreateContext() {
    return new sfuContext();
  }
  function sfuGenerateTiles(containerWidth, containerHeight, tilesCount, layout) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tiles = [];
    // Inline function 'kotlin.math.ceil' call
    var x = tilesCount / layout.columns;
    var tmp$ret$3 = Math.ceil(x);
    var rowsInGrid = numberToInt(tmp$ret$3);
    var verticalSpacing = (containerHeight - imul(rowsInGrid, layout.tileHeight) | 0) / 2 | 0;
    var inductionVariable = 0;
    var last = layout.rows;
    if (inductionVariable < last)
      do {
        var row = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var a = tilesCount - imul(row, layout.columns) | 0;
        var b = layout.columns;
        var cellsInRow = Math.min(a, b);
        var horizontalSpacing = (containerWidth - imul(cellsInRow, layout.tileWidth) | 0) / 2 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < cellsInRow)
          do {
            var col = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (tiles.length < tilesCount) {
              // Inline function 'kotlin.collections.plus' call
              var this_0 = tiles;
              // Inline function 'kotlin.math.ceil' call
              var x_0 = horizontalSpacing + col * layout.tileWidth;
              var tmp$ret$5 = Math.ceil(x_0);
              var tmp = numberToInt(tmp$ret$5);
              // Inline function 'kotlin.math.ceil' call
              var x_1 = verticalSpacing + row * layout.tileHeight;
              var tmp$ret$6 = Math.ceil(x_1);
              // Inline function 'kotlin.js.asDynamic' call
              // Inline function 'kotlin.arrayOf' call
              // Inline function 'kotlin.js.unsafeCast' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$10 = [new sfuTile(tmp, numberToInt(tmp$ret$6), layout.tileWidth, layout.tileHeight)];
              tiles = this_0.concat(tmp$ret$10);
            }
          }
           while (inductionVariable_0 < cellsInRow);
      }
       while (inductionVariable < last);
    return tiles;
  }
  function sfuCalculateAspectRatioLayout(containerWidth, containerHeight, numCells, aspectRatio) {
    var bestWidth = 0;
    var bestHeight = 0;
    var bestCols = 0;
    var bestRows = 0;
    var minWaste = Infinity;
    var inductionVariable = 1;
    if (inductionVariable <= numCells)
      do {
        var rows = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.math.ceil' call
        var x = numCells / rows;
        var tmp$ret$0 = Math.ceil(x);
        var cols = numberToInt(tmp$ret$0);
        // Inline function 'kotlin.math.floor' call
        var x_0 = containerWidth / cols;
        var tmp$ret$1 = Math.floor(x_0);
        var cellWidth = numberToInt(tmp$ret$1);
        var cellHeight = numberToInt(cellWidth / aspectRatio.w * aspectRatio.h);
        if (cellHeight > (containerHeight / rows | 0)) {
          // Inline function 'kotlin.math.floor' call
          var x_1 = containerHeight / rows;
          var tmp$ret$2 = Math.floor(x_1);
          cellHeight = numberToInt(tmp$ret$2);
          cellWidth = numberToInt(cellHeight / aspectRatio.h * aspectRatio.w);
        }
        var totalCellWidth = imul(cols, cellWidth);
        var totalCellHeight = imul(rows, cellHeight);
        var wasteWidth = containerWidth - totalCellWidth | 0;
        var wasteHeight = containerHeight - totalCellHeight | 0;
        var waste = wasteWidth + wasteHeight | 0;
        if (waste < minWaste) {
          minWaste = waste;
          bestWidth = cellWidth;
          bestHeight = cellHeight;
          bestCols = cols;
          bestRows = rows;
        }
      }
       while (!(rows === numCells));
    return new sfuLayout(bestCols, bestRows, bestWidth, bestHeight);
  }
  function sfuCalculateAutoLayout(containerWidth, containerHeight, numCells) {
    var bestWidth = 0;
    var bestHeight = 0;
    var bestCols = 0;
    var bestRows = 0;
    var minWaste = Infinity;
    var inductionVariable = 1;
    if (inductionVariable <= numCells)
      do {
        var rows = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.math.ceil' call
        var x = numCells / rows;
        var tmp$ret$0 = Math.ceil(x);
        var cols = numberToInt(tmp$ret$0);
        // Inline function 'kotlin.math.floor' call
        var x_0 = containerWidth / cols;
        var tmp$ret$1 = Math.floor(x_0);
        var cellWidth = numberToInt(tmp$ret$1);
        // Inline function 'kotlin.math.floor' call
        var x_1 = containerHeight / rows;
        var tmp$ret$2 = Math.floor(x_1);
        var cellHeight = numberToInt(tmp$ret$2);
        var aspectRatioDiff = abs(cellWidth - cellHeight | 0);
        if (aspectRatioDiff < minWaste) {
          minWaste = aspectRatioDiff;
          bestWidth = cellWidth;
          bestHeight = cellHeight;
          bestCols = cols;
          bestRows = rows;
        }
      }
       while (!(rows === numCells));
    return new sfuLayout(bestCols, bestRows, bestWidth, bestHeight);
  }
  function sfuShouldResetAreaSize(c) {
    if ((c.recentField === 'isMouseDown' || c.recentField === 'mousePos') && c.isMouseDown) {
      c.areaSize = c.mousePos;
      c.recentField = 'areaSize';
      return c;
    }
    if (c.recentField === 'defaultAreaSize') {
      c.areaSize = c.defaultAreaSize;
      c.recentField = 'areaSize';
      return c;
    }
    if (c.recentField === 'fixedAreaSize') {
      c.areaSize = c.fixedAreaSize;
      c.recentField = 'areaSize';
      return c;
    }
    c.recentField = 'none';
    return c;
  }
  function sfuShouldResetMouseDown(c) {
    if (c.recentField === 'didPressMouse') {
      c.isMouseDown = true;
      c.recentField = 'isMouseDown';
      return c;
    }
    if (c.recentField === 'didReleaseMouse') {
      c.isMouseDown = false;
      c.recentField = 'isMouseDown';
      return c;
    }
    c.recentField = 'none';
    return c;
  }
  function sfuShouldResetTiles(c) {
    if (c.recentField !== 'areaSize' && c.recentField !== 'tileAspectRatio' && c.recentField !== 'tilesCount') {
      c.recentField = 'none';
      return c;
    }
    var width = c.areaSize[0];
    var height = c.areaSize[1];
    var tmp;
    if (!(c.tileAspectRatio.w === 0)) {
      tmp = sfuCalculateAspectRatioLayout(width, height, c.tilesCount, c.tileAspectRatio);
    } else {
      tmp = sfuCalculateAutoLayout(width, height, c.tilesCount);
    }
    var layout = tmp;
    c.tiles = sfuGenerateTiles(width, height, c.tilesCount, layout);
    c.recentField = 'tiles';
    return c;
  }
  function sfuShouldResetTilesCount(c) {
    if (c.recentField === 'defaultTilesCount') {
      c.tilesCount = c.defaultTilesCount;
      c.recentField = 'tilesCount';
      return c;
    }
    if (c.recentField === 'inputTilesCount') {
      c.tilesCount = c.inputTilesCount;
      c.recentField = 'tilesCount';
      return c;
    }
    c.recentField = 'none';
    return c;
  }
  function test_sfuCalculateAspectRatioLayout() {
    var aspectRatio = new sfuAspectRatio(3, 4);
    var layout = sfuCalculateAspectRatioLayout(730, 536, 6, aspectRatio);
    return layout.columns === 3 && layout.rows === 2 && layout.tileWidth === 201 && layout.tileHeight === 268;
  }
  function test_sfuCalculateAutoLayout() {
    var layout = sfuCalculateAutoLayout(730, 536, 6);
    return layout.columns === 3 && layout.rows === 2 && layout.tileWidth === 243 && layout.tileHeight === 268;
  }
  function test_sfuGenerateTiles() {
    var layout = new sfuLayout(3, 2, 201, 268);
    var tiles = sfuGenerateTiles(730, 536, 6, layout);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var expected = [new sfuTile(63, 0, 201, 268), new sfuTile(264, 0, 201, 268), new sfuTile(465, 0, 201, 268), new sfuTile(63, 268, 201, 268), new sfuTile(264, 268, 201, 268), new sfuTile(465, 268, 201, 268)];
    return contentDeepEquals(tiles, expected);
  }
  function test_sfuShouldResetAreaSize_default() {
    var c = sfuCreateContext();
    var tmp = c;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.defaultAreaSize = [10, 15];
    c.recentField = 'defaultAreaSize';
    c = sfuShouldResetAreaSize(c);
    return c.recentField === 'areaSize' && c.areaSize[0] === 10 && c.areaSize[1] === 15;
  }
  function test_sfuShouldResetAreaSize_fixed() {
    var c = sfuCreateContext();
    var tmp = c;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.fixedAreaSize = [10, 15];
    c.recentField = 'fixedAreaSize';
    c = sfuShouldResetAreaSize(c);
    return c.recentField === 'areaSize' && c.areaSize[0] === 10 && c.areaSize[1] === 15;
  }
  function test_sfuShouldResetAreaSize_mouse() {
    var c = sfuCreateContext();
    c.isMouseDown = true;
    var tmp = c;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.mousePos = [10, 15];
    c.recentField = 'mousePos';
    c = sfuShouldResetAreaSize(c);
    return c.recentField === 'areaSize' && c.areaSize[0] === 10 && c.areaSize[1] === 15;
  }
  function test_sfuShouldResetMouseDown() {
    var c = sfuCreateContext();
    c.didPressMouse = true;
    c.recentField = 'didPressMouse';
    var tmp = c.selfCopy();
    var c1 = sfuShouldResetMouseDown(tmp instanceof sfuContext ? tmp : THROW_CCE());
    c.didReleaseMouse = true;
    c.recentField = 'didReleaseMouse';
    var tmp_0 = c.selfCopy();
    var c2 = sfuShouldResetMouseDown(tmp_0 instanceof sfuContext ? tmp_0 : THROW_CCE());
    return c1.recentField === 'isMouseDown' && c1.isMouseDown === true && c2.recentField === 'isMouseDown' && c2.isMouseDown === false;
  }
  function test_sfuShouldResetTiles_areaSize() {
    var c = sfuCreateContext();
    c.tileAspectRatio = new sfuAspectRatio(0, 0);
    c.tilesCount = 1;
    var tmp = c;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.areaSize = [800, 800];
    c.recentField = 'areaSize';
    c = sfuShouldResetTiles(c);
    return c.recentField === 'tiles' && c.tiles[0].x === 0 && c.tiles[0].w === 800;
  }
  function test_sfuShouldResetTiles_aspectRatio() {
    var c = sfuCreateContext();
    var tmp = c;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.areaSize = [800, 800];
    c.tilesCount = 2;
    c.tileAspectRatio = new sfuAspectRatio(4, 3);
    c.recentField = 'tileAspectRatio';
    c = sfuShouldResetTiles(c);
    println(c.tiles[1].w);
    return c.recentField === 'tiles' && c.tiles.length === 2 && c.tiles[1].w === 533;
  }
  function test_sfuShouldResetTiles_tilesCount() {
    var c = sfuCreateContext();
    var tmp = c;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.areaSize = [800, 800];
    c.tileAspectRatio = new sfuAspectRatio(4, 3);
    c.tilesCount = 5;
    c.recentField = 'tilesCount';
    c = sfuShouldResetTiles(c);
    println(c.tiles[2].x);
    return c.recentField === 'tiles' && c.tiles.length === 5 && c.tiles[2].x === 46;
  }
  function test_sfuShouldResetTilesCount_default() {
    var c = sfuCreateContext();
    c.defaultTilesCount = 4;
    c.recentField = 'defaultTilesCount';
    c = sfuShouldResetTilesCount(c);
    return c.recentField === 'tilesCount' && c.tilesCount === 4;
  }
  function test_sfuShouldResetTilesCount_input() {
    var c = sfuCreateContext();
    c.inputTilesCount = 3;
    c.recentField = 'inputTilesCount';
    c = sfuShouldResetTilesCount(c);
    return c.recentField === 'tilesCount' && c.tilesCount === 3;
  }
  //region block: post-declaration
  defineProp(protoOf(example_Context), 'recentField', function () {
    return this.get_recentField_jy0xl6_k$();
  }, function (value) {
    this.set_recentField_5jv888_k$(value);
  });
  defineProp(protoOf(ios_diag_Context), 'recentField', function () {
    return this.get_recentField_jy0xl6_k$();
  }, function (value) {
    this.set_recentField_5jv888_k$(value);
  });
  defineProp(protoOf(sfuContext), 'recentField', function () {
    return this.get_recentField_jy0xl6_k$();
  }, function (value) {
    this.set_recentField_5jv888_k$(value);
  });
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $ivac = _.ivac || (_.ivac = {});
    $ivac.contactGetHexColor = contactGetHexColor;
    $ivac.contactGetColorIndex = contactGetColorIndex;
    $ivac.contactGetColorPalette = contactGetColorPalette;
    var $ivac = _.ivac || (_.ivac = {});
    $ivac.test_contactGetHexColor = test_contactGetHexColor;
    $ivac.test_contactGetColorIndex = test_contactGetColorIndex;
    $ivac.test_contactGetColorPalette = test_contactGetColorPalette;
    var $ivac = _.ivac || (_.ivac = {});
    $ivac.ctx_Controller = ctx_Controller;
    var $ivac = _.ivac || (_.ivac = {});
    $ivac.example_Context = example_Context;
    $ivac.test_example_Context_field = test_example_Context_field;
    $ivac.test_example_Context_selfCopy = test_example_Context_selfCopy;
    $ivac.test_example_Context_setField = test_example_Context_setField;
    $ivac.test_ctx_Controller_executeFunctions_set = test_ctx_Controller_executeFunctions_set;
    $ivac.test_ctx_Controller_processQueue = test_ctx_Controller_processQueue;
    $ivac.test_ctx_Controller_registerFieldCallback_match = test_ctx_Controller_registerFieldCallback_match;
    $ivac.test_ctx_Controller_registerFieldCallback_mismatch = test_ctx_Controller_registerFieldCallback_mismatch;
    var $ivac = _.ivac || (_.ivac = {});
    $ivac.ios_diag_Context = ios_diag_Context;
    $ivac.ios_diag_createContext = ios_diag_createContext;
    $ivac.ios_diag_shouldTakeImportantShot = ios_diag_shouldTakeImportantShot;
    $ivac.ios_diag_shouldResetActivity = ios_diag_shouldResetActivity;
    $ivac.ios_diag_shouldResetAppActivity = ios_diag_shouldResetAppActivity;
    $ivac.ios_diag_shouldResetSaving = ios_diag_shouldResetSaving;
    var $ivac = _.ivac || (_.ivac = {});
    $ivac.test_ios_diag_shouldResetActivity_false_isAppActive = test_ios_diag_shouldResetActivity_false_isAppActive;
    $ivac.test_ios_diag_shouldResetActivity_false_isFeatureActive = test_ios_diag_shouldResetActivity_false_isFeatureActive;
    $ivac.test_ios_diag_shouldResetActivity_false_isSaving = test_ios_diag_shouldResetActivity_false_isSaving;
    $ivac.test_ios_diag_shouldResetActivity_true_isAppActive = test_ios_diag_shouldResetActivity_true_isAppActive;
    $ivac.test_ios_diag_shouldResetActivity_true_isFeatureActive = test_ios_diag_shouldResetActivity_true_isFeatureActive;
    $ivac.test_ios_diag_shouldResetAppActivity_false = test_ios_diag_shouldResetAppActivity_false;
    $ivac.test_ios_diag_shouldResetAppActivity_true = test_ios_diag_shouldResetAppActivity_true;
    $ivac.test_ios_diag_shouldResetActivity_true_isSaving = test_ios_diag_shouldResetActivity_true_isSaving;
    $ivac.test_ios_diag_shouldResetSaving_false = test_ios_diag_shouldResetSaving_false;
    $ivac.test_ios_diag_shouldResetSaving_true = test_ios_diag_shouldResetSaving_true;
    $ivac.test_ios_diag_shouldTakeImportantShot_false = test_ios_diag_shouldTakeImportantShot_false;
    $ivac.test_ios_diag_shouldTakeImportantShot_true = test_ios_diag_shouldTakeImportantShot_true;
    var $ivac = _.ivac || (_.ivac = {});
    $ivac.l10nSetCurrentApplication = l10nSetCurrentApplication;
    $ivac.l10nSetCurrentLanguage = l10nSetCurrentLanguage;
    $ivac.l10nSetCurrentYear = l10nSetCurrentYear;
    $ivac.l10nGetTestSampleNewline = l10nGetTestSampleNewline;
    $ivac.l10nGetSettCopyright = l10nGetSettCopyright;
    var $ivac = _.ivac || (_.ivac = {});
    $ivac.test_l10nGetSettCopyrightConnect = test_l10nGetSettCopyrightConnect;
    $ivac.test_l10nGetSettCopyrightVKURSE = test_l10nGetSettCopyrightVKURSE;
    var $ivac = _.ivac || (_.ivac = {});
    $ivac.sfuAspectRatio = sfuAspectRatio;
    $ivac.sfuLayout = sfuLayout;
    $ivac.sfuTile = sfuTile;
    $ivac.sfuContext = sfuContext;
    $ivac.sfuCreateContext = sfuCreateContext;
    var $ivac = _.ivac || (_.ivac = {});
    $ivac.sfuGenerateTiles = sfuGenerateTiles;
    var $ivac = _.ivac || (_.ivac = {});
    $ivac.sfuShouldResetAreaSize = sfuShouldResetAreaSize;
    $ivac.sfuShouldResetMouseDown = sfuShouldResetMouseDown;
    $ivac.sfuShouldResetTiles = sfuShouldResetTiles;
    $ivac.sfuShouldResetTilesCount = sfuShouldResetTilesCount;
    var $ivac = _.ivac || (_.ivac = {});
    $ivac.test_sfuCalculateAspectRatioLayout = test_sfuCalculateAspectRatioLayout;
    $ivac.test_sfuCalculateAutoLayout = test_sfuCalculateAutoLayout;
    $ivac.test_sfuGenerateTiles = test_sfuGenerateTiles;
    $ivac.test_sfuShouldResetAreaSize_default = test_sfuShouldResetAreaSize_default;
    $ivac.test_sfuShouldResetAreaSize_fixed = test_sfuShouldResetAreaSize_fixed;
    $ivac.test_sfuShouldResetAreaSize_mouse = test_sfuShouldResetAreaSize_mouse;
    $ivac.test_sfuShouldResetMouseDown = test_sfuShouldResetMouseDown;
    $ivac.test_sfuShouldResetTiles_areaSize = test_sfuShouldResetTiles_areaSize;
    $ivac.test_sfuShouldResetTiles_aspectRatio = test_sfuShouldResetTiles_aspectRatio;
    $ivac.test_sfuShouldResetTiles_tilesCount = test_sfuShouldResetTiles_tilesCount;
    $ivac.test_sfuShouldResetTilesCount_default = test_sfuShouldResetTilesCount_default;
    $ivac.test_sfuShouldResetTilesCount_input = test_sfuShouldResetTilesCount_input;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=iva-client-sdk-ivac.js.map
