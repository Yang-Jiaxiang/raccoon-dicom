import { JavaClass, BasicOrJavaType, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Raster as java_awt_image_Raster } from "./Raster";
import { TileObserver as java_awt_image_TileObserver, TileObserverInterface as java_awt_image_TileObserverInterface } from "./TileObserver";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Point as java_awt_Point } from "./../Point";
import { WritableRaster as java_awt_image_WritableRaster } from "./WritableRaster";
import { Rectangle as java_awt_Rectangle } from "./../Rectangle";
import { SampleModel as java_awt_image_SampleModel } from "./SampleModel";
import { ColorModel as java_awt_image_ColorModel } from "./ColorModel";
import { Vector as java_util_Vector } from "./../../util/Vector";
/**
 * This class just defines types, you should import {@link WritableRenderedImage} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class WritableRenderedImageClass extends JavaClass {
    /**
     * @param var0 original type: 'java.awt.image.Raster'
     * @return original return type: 'void'
     */
    setData(var0: java_awt_image_Raster | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.image.Raster'
     * @return original return type: 'void'
     */
    setDataSync(var0: java_awt_image_Raster | null): void;
    /**
     * @param var0 original type: 'java.awt.image.TileObserver'
     * @return original return type: 'void'
     */
    addTileObserver(var0: java_awt_image_TileObserver | JavaInterfaceProxy<java_awt_image_TileObserverInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.image.TileObserver'
     * @return original return type: 'void'
     */
    addTileObserverSync(var0: java_awt_image_TileObserver | JavaInterfaceProxy<java_awt_image_TileObserverInterface> | null): void;
    /**
     * @param var0 original type: 'java.awt.image.TileObserver'
     * @return original return type: 'void'
     */
    removeTileObserver(var0: java_awt_image_TileObserver | JavaInterfaceProxy<java_awt_image_TileObserverInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'java.awt.image.TileObserver'
     * @return original return type: 'void'
     */
    removeTileObserverSync(var0: java_awt_image_TileObserver | JavaInterfaceProxy<java_awt_image_TileObserverInterface> | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'boolean'
     */
    isTileWritable(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'boolean'
     */
    isTileWritableSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): boolean;
    /**
     * @return original return type: 'java.awt.Point[]'
     */
    getWritableTileIndices(): Promise<(java_awt_Point | null)[] | null>;
    /**
     * @return original return type: 'java.awt.Point[]'
     */
    getWritableTileIndicesSync(): (java_awt_Point | null)[] | null;
    /**
     * @return original return type: 'boolean'
     */
    hasTileWriters(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    hasTileWritersSync(): boolean;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    getWritableTile(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    getWritableTileSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): java_awt_image_WritableRaster | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    releaseWritableTile(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    releaseWritableTileSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getProperty(var0: string | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getPropertySync(var0: string | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'java.awt.image.Raster'
     */
    getData(var0: java_awt_Rectangle | null): Promise<java_awt_image_Raster | null>;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'java.awt.image.Raster'
     */
    getDataSync(var0: java_awt_Rectangle | null): java_awt_image_Raster | null;
    /**
     * @return original return type: 'java.awt.image.Raster'
     */
    getData(): Promise<java_awt_image_Raster | null>;
    /**
     * @return original return type: 'java.awt.image.Raster'
     */
    getDataSync(): java_awt_image_Raster | null;
    /**
     * @return original return type: 'int'
     */
    getHeight(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getHeightSync(): number;
    /**
     * @return original return type: 'int'
     */
    getWidth(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getWidthSync(): number;
    /**
     * @return original return type: 'java.awt.image.SampleModel'
     */
    getSampleModel(): Promise<java_awt_image_SampleModel | null>;
    /**
     * @return original return type: 'java.awt.image.SampleModel'
     */
    getSampleModelSync(): java_awt_image_SampleModel | null;
    /**
     * @return original return type: 'int'
     */
    getMinX(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMinXSync(): number;
    /**
     * @return original return type: 'int'
     */
    getMinY(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMinYSync(): number;
    /**
     * @return original return type: 'java.awt.image.ColorModel'
     */
    getColorModel(): Promise<java_awt_image_ColorModel | null>;
    /**
     * @return original return type: 'java.awt.image.ColorModel'
     */
    getColorModelSync(): java_awt_image_ColorModel | null;
    /**
     * @return original return type: 'java.util.Vector'
     */
    getSources(): Promise<java_util_Vector | null>;
    /**
     * @return original return type: 'java.util.Vector'
     */
    getSourcesSync(): java_util_Vector | null;
    /**
     * @return original return type: 'java.lang.String[]'
     */
    getPropertyNames(): Promise<(string | null)[] | null>;
    /**
     * @return original return type: 'java.lang.String[]'
     */
    getPropertyNamesSync(): (string | null)[] | null;
    /**
     * @return original return type: 'int'
     */
    getNumXTiles(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getNumXTilesSync(): number;
    /**
     * @return original return type: 'int'
     */
    getNumYTiles(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getNumYTilesSync(): number;
    /**
     * @return original return type: 'int'
     */
    getMinTileX(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMinTileXSync(): number;
    /**
     * @return original return type: 'int'
     */
    getMinTileY(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getMinTileYSync(): number;
    /**
     * @return original return type: 'int'
     */
    getTileWidth(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getTileWidthSync(): number;
    /**
     * @return original return type: 'int'
     */
    getTileHeight(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getTileHeightSync(): number;
    /**
     * @return original return type: 'int'
     */
    getTileGridXOffset(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getTileGridXOffsetSync(): number;
    /**
     * @return original return type: 'int'
     */
    getTileGridYOffset(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getTileGridYOffsetSync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.image.Raster'
     */
    getTile(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<java_awt_image_Raster | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.image.Raster'
     */
    getTileSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): java_awt_image_Raster | null;
    /**
     * @param var0 original type: 'java.awt.image.WritableRaster'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    copyData(var0: java_awt_image_WritableRaster | null): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @param var0 original type: 'java.awt.image.WritableRaster'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    copyDataSync(var0: java_awt_image_WritableRaster | null): java_awt_image_WritableRaster | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createWritableRenderedImageProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface WritableRenderedImageInterface {
    /**
     * @param var0 original type: 'java.awt.image.Raster'
     * @return original return type: 'void'
     */
    setData(var0: java_awt_image_Raster | null): void;
    /**
     * @param var0 original type: 'java.awt.image.TileObserver'
     * @return original return type: 'void'
     */
    addTileObserver(var0: java_awt_image_TileObserver | JavaInterfaceProxy<java_awt_image_TileObserverInterface> | null): void;
    /**
     * @param var0 original type: 'java.awt.image.TileObserver'
     * @return original return type: 'void'
     */
    removeTileObserver(var0: java_awt_image_TileObserver | JavaInterfaceProxy<java_awt_image_TileObserverInterface> | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'boolean'
     */
    isTileWritable(var0: java_lang_Integer | number, var1: java_lang_Integer | number): boolean;
    /**
     * @return original return type: 'java.awt.Point[]'
     */
    getWritableTileIndices(): (java_awt_Point | null)[] | null;
    /**
     * @return original return type: 'boolean'
     */
    hasTileWriters(): boolean;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    getWritableTile(var0: java_lang_Integer | number, var1: java_lang_Integer | number): java_awt_image_WritableRaster | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    releaseWritableTile(var0: java_lang_Integer | number, var1: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Object'
     */
    getProperty(var0: string | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.awt.Rectangle'
     * @return original return type: 'java.awt.image.Raster'
     */
    getData(var0: java_awt_Rectangle | null): java_awt_image_Raster | null;
    /**
     * @return original return type: 'java.awt.image.Raster'
     */
    getData(): java_awt_image_Raster | null;
    /**
     * @return original return type: 'int'
     */
    getHeight(): number;
    /**
     * @return original return type: 'int'
     */
    getWidth(): number;
    /**
     * @return original return type: 'java.awt.image.SampleModel'
     */
    getSampleModel(): java_awt_image_SampleModel | null;
    /**
     * @return original return type: 'int'
     */
    getMinX(): number;
    /**
     * @return original return type: 'int'
     */
    getMinY(): number;
    /**
     * @return original return type: 'java.awt.image.ColorModel'
     */
    getColorModel(): java_awt_image_ColorModel | null;
    /**
     * @return original return type: 'java.util.Vector'
     */
    getSources(): java_util_Vector | null;
    /**
     * @return original return type: 'java.lang.String[]'
     */
    getPropertyNames(): (string | null)[] | null;
    /**
     * @return original return type: 'int'
     */
    getNumXTiles(): number;
    /**
     * @return original return type: 'int'
     */
    getNumYTiles(): number;
    /**
     * @return original return type: 'int'
     */
    getMinTileX(): number;
    /**
     * @return original return type: 'int'
     */
    getMinTileY(): number;
    /**
     * @return original return type: 'int'
     */
    getTileWidth(): number;
    /**
     * @return original return type: 'int'
     */
    getTileHeight(): number;
    /**
     * @return original return type: 'int'
     */
    getTileGridXOffset(): number;
    /**
     * @return original return type: 'int'
     */
    getTileGridYOffset(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.awt.image.Raster'
     */
    getTile(var0: java_lang_Integer | number, var1: java_lang_Integer | number): java_awt_image_Raster | null;
    /**
     * @param var0 original type: 'java.awt.image.WritableRaster'
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    copyData(var0: java_awt_image_WritableRaster | null): java_awt_image_WritableRaster | null;
}
/**
 * Create a proxy for the {@link WritableRenderedImage} interface.
 * All required methods in {@link WritableRenderedImageInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createWritableRenderedImageProxy(methods: WritableRenderedImageInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<WritableRenderedImageInterface>;
declare const WritableRenderedImage_base: typeof WritableRenderedImageClass;
/**
 * Class java.awt.image.WritableRenderedImage.
 *
 * This actually imports the java class for further use.
 * The class {@link WritableRenderedImageClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class WritableRenderedImage extends WritableRenderedImage_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default WritableRenderedImage;
//# sourceMappingURL=WritableRenderedImage.d.ts.map