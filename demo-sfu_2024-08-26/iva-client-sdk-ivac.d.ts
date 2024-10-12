type Nullable<T> = T | null | undefined
export declare namespace ivac {
    function contactGetHexColor(text: string): string;
    function contactGetColorIndex(text: string, paletteSize: number): number;
    function contactGetColorPalette(): Array<string>;
}
export declare namespace ivac {
    function test_contactGetHexColor(): boolean;
    function test_contactGetColorIndex(): boolean;
    function test_contactGetColorPalette(): boolean;
}
export declare namespace ivac {
    interface ctx_Context {
        recentField: string;
        field(name: string): any;
        selfCopy(): ivac.ctx_Context;
        setField(name: string, value: any): void;
        readonly __doNotUseOrImplementIt: {
            readonly "ivac.ctx_Context": unique symbol;
        };
    }
    class ctx_Controller {
        constructor(context: ivac.ctx_Context);
        get context(): ivac.ctx_Context;
        set context(value: ivac.ctx_Context);
        get isProcessingQueue(): boolean;
        set isProcessingQueue(value: boolean);
        executeFunctions(): void;
        processQueue(): void;
        registerCallback(cb: (p0: ivac.ctx_Context) => void): void;
        registerFieldCallback(fieldName: string, cb: (p0: ivac.ctx_Context) => void): void;
        registerFunction(f: (p0: ivac.ctx_Context) => ivac.ctx_Context): void;
        reportContext(): void;
        set(fieldName: string, value: any): void;
    }
}
export declare namespace ivac {
    class example_Context implements ivac.ctx_Context {
        constructor(didLaunch?: boolean, host?: string, recentField?: string);
        get didLaunch(): boolean;
        set didLaunch(value: boolean);
        get host(): string;
        set host(value: string);
        get recentField(): string;
        set recentField(value: string);
        field(name: string): any;
        selfCopy(): ivac.ctx_Context;
        setField(name: string, value: any): void;
        copy(didLaunch?: boolean, host?: string, recentField?: string): ivac.example_Context;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: ivac.ctx_Context["__doNotUseOrImplementIt"];
    }
    function test_example_Context_field(): boolean;
    function test_example_Context_selfCopy(): boolean;
    function test_example_Context_setField(): boolean;
    function test_ctx_Controller_executeFunctions_set(): boolean;
    function test_ctx_Controller_processQueue(): boolean;
    function test_ctx_Controller_registerFieldCallback_match(): boolean;
    function test_ctx_Controller_registerFieldCallback_mismatch(): boolean;
}
export declare namespace ivac {
    class ios_diag_Context implements ivac.ctx_Context {
        constructor(appDidActivate?: boolean, appDidDeactivate?: boolean, depth?: number, didFinishSaving?: boolean, fps?: number, imageQuality?: number, isActive?: boolean, isAppActive?: boolean, isFeatureActive?: boolean, isSaving?: boolean, mayStartSaving?: boolean, takeImportantShot?: boolean, recentField?: string);
        get appDidActivate(): boolean;
        set appDidActivate(value: boolean);
        get appDidDeactivate(): boolean;
        set appDidDeactivate(value: boolean);
        get depth(): number;
        set depth(value: number);
        get didFinishSaving(): boolean;
        set didFinishSaving(value: boolean);
        get fps(): number;
        set fps(value: number);
        get imageQuality(): number;
        set imageQuality(value: number);
        get isActive(): boolean;
        set isActive(value: boolean);
        get isAppActive(): boolean;
        set isAppActive(value: boolean);
        get isFeatureActive(): boolean;
        set isFeatureActive(value: boolean);
        get isSaving(): boolean;
        set isSaving(value: boolean);
        get mayStartSaving(): boolean;
        set mayStartSaving(value: boolean);
        get takeImportantShot(): boolean;
        set takeImportantShot(value: boolean);
        get recentField(): string;
        set recentField(value: string);
        field(name: string): any;
        selfCopy(): ivac.ctx_Context;
        setField(name: string, value: any): void;
        copy(appDidActivate?: boolean, appDidDeactivate?: boolean, depth?: number, didFinishSaving?: boolean, fps?: number, imageQuality?: number, isActive?: boolean, isAppActive?: boolean, isFeatureActive?: boolean, isSaving?: boolean, mayStartSaving?: boolean, takeImportantShot?: boolean, recentField?: string): ivac.ios_diag_Context;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: ivac.ctx_Context["__doNotUseOrImplementIt"];
    }
    function ios_diag_createContext(): ivac.ios_diag_Context;
    function ios_diag_shouldTakeImportantShot(c: ivac.ios_diag_Context): ivac.ios_diag_Context;
    function ios_diag_shouldResetActivity(c: ivac.ios_diag_Context): ivac.ios_diag_Context;
    function ios_diag_shouldResetAppActivity(c: ivac.ios_diag_Context): ivac.ios_diag_Context;
    function ios_diag_shouldResetSaving(c: ivac.ios_diag_Context): ivac.ios_diag_Context;
}
export declare namespace ivac {
    function test_ios_diag_shouldResetActivity_false_isAppActive(): boolean;
    function test_ios_diag_shouldResetActivity_false_isFeatureActive(): boolean;
    function test_ios_diag_shouldResetActivity_false_isSaving(): boolean;
    function test_ios_diag_shouldResetActivity_true_isAppActive(): boolean;
    function test_ios_diag_shouldResetActivity_true_isFeatureActive(): boolean;
    function test_ios_diag_shouldResetAppActivity_false(): boolean;
    function test_ios_diag_shouldResetAppActivity_true(): boolean;
    function test_ios_diag_shouldResetActivity_true_isSaving(): boolean;
    function test_ios_diag_shouldResetSaving_false(): boolean;
    function test_ios_diag_shouldResetSaving_true(): boolean;
    function test_ios_diag_shouldTakeImportantShot_false(): boolean;
    function test_ios_diag_shouldTakeImportantShot_true(): boolean;
}
export declare namespace ivac {
    function l10nSetCurrentApplication(app: string): void;
    function l10nSetCurrentLanguage(lang: string): void;
    function l10nSetCurrentYear(year: number): void;
    function l10nGetTestSampleNewline(): string;
    function l10nGetSettCopyright(): string;
}
export declare namespace ivac {
    function test_l10nGetSettCopyrightConnect(): boolean;
    function test_l10nGetSettCopyrightVKURSE(): boolean;
}
export declare namespace ivac {
    class sfuAspectRatio {
        constructor(w: number, h: number);
        get w(): number;
        get h(): number;
        copy(w?: number, h?: number): ivac.sfuAspectRatio;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class sfuLayout {
        constructor(columns: number, rows: number, tileWidth: number, tileHeight: number);
        get columns(): number;
        get rows(): number;
        get tileWidth(): number;
        get tileHeight(): number;
        copy(columns?: number, rows?: number, tileWidth?: number, tileHeight?: number): ivac.sfuLayout;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class sfuTile {
        constructor(x: number, y: number, w: number, h: number);
        get x(): number;
        get y(): number;
        get w(): number;
        get h(): number;
        copy(x?: number, y?: number, w?: number, h?: number): ivac.sfuTile;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class sfuContext implements ivac.ctx_Context {
        constructor(areaSize?: Array<number>, defaultAreaSize?: Array<number>, defaultTilesCount?: number, didPressMouse?: boolean, didReleaseMouse?: boolean, fixedAreaSize?: Array<number>, inputTilesCount?: number, isMouseDown?: boolean, mousePos?: Array<number>, tileAspectRatio?: ivac.sfuAspectRatio, tileFit?: boolean, tiles?: Array<ivac.sfuTile>, tilesCount?: number, recentField?: string);
        get areaSize(): Array<number>;
        set areaSize(value: Array<number>);
        get defaultAreaSize(): Array<number>;
        set defaultAreaSize(value: Array<number>);
        get defaultTilesCount(): number;
        set defaultTilesCount(value: number);
        get didPressMouse(): boolean;
        set didPressMouse(value: boolean);
        get didReleaseMouse(): boolean;
        set didReleaseMouse(value: boolean);
        get fixedAreaSize(): Array<number>;
        set fixedAreaSize(value: Array<number>);
        get inputTilesCount(): number;
        set inputTilesCount(value: number);
        get isMouseDown(): boolean;
        set isMouseDown(value: boolean);
        get mousePos(): Array<number>;
        set mousePos(value: Array<number>);
        get tileAspectRatio(): ivac.sfuAspectRatio;
        set tileAspectRatio(value: ivac.sfuAspectRatio);
        get tileFit(): boolean;
        set tileFit(value: boolean);
        get tiles(): Array<ivac.sfuTile>;
        set tiles(value: Array<ivac.sfuTile>);
        get tilesCount(): number;
        set tilesCount(value: number);
        get recentField(): string;
        set recentField(value: string);
        field(name: string): any;
        selfCopy(): ivac.ctx_Context;
        setField(name: string, value: any): void;
        copy(areaSize?: Array<number>, defaultAreaSize?: Array<number>, defaultTilesCount?: number, didPressMouse?: boolean, didReleaseMouse?: boolean, fixedAreaSize?: Array<number>, inputTilesCount?: number, isMouseDown?: boolean, mousePos?: Array<number>, tileAspectRatio?: ivac.sfuAspectRatio, tileFit?: boolean, tiles?: Array<ivac.sfuTile>, tilesCount?: number, recentField?: string): ivac.sfuContext;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: ivac.ctx_Context["__doNotUseOrImplementIt"];
    }
    function sfuCreateContext(): ivac.sfuContext;
}
export declare namespace ivac {
    function sfuGenerateTiles(containerWidth: number, containerHeight: number, tilesCount: number, layout: ivac.sfuLayout): Array<ivac.sfuTile>;
}
export declare namespace ivac {
    function sfuShouldResetAreaSize(c: ivac.sfuContext): ivac.sfuContext;
    function sfuShouldResetMouseDown(c: ivac.sfuContext): ivac.sfuContext;
    function sfuShouldResetTiles(c: ivac.sfuContext): ivac.sfuContext;
    function sfuShouldResetTilesCount(c: ivac.sfuContext): ivac.sfuContext;
}
export declare namespace ivac {
    function test_sfuCalculateAspectRatioLayout(): boolean;
    function test_sfuCalculateAutoLayout(): boolean;
    function test_sfuGenerateTiles(): boolean;
    function test_sfuShouldResetAreaSize_default(): boolean;
    function test_sfuShouldResetAreaSize_fixed(): boolean;
    function test_sfuShouldResetAreaSize_mouse(): boolean;
    function test_sfuShouldResetMouseDown(): boolean;
    function test_sfuShouldResetTiles_areaSize(): boolean;
    function test_sfuShouldResetTiles_aspectRatio(): boolean;
    function test_sfuShouldResetTiles_tilesCount(): boolean;
    function test_sfuShouldResetTilesCount_default(): boolean;
    function test_sfuShouldResetTilesCount_input(): boolean;
}
export as namespace iva_client_sdk_ivac;