import { JavaClass, BasicOrJavaType, JavaInterfaceProxy } from "java-bridge";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { ImageObserver as java_awt_image_ImageObserver, ImageObserverInterface as java_awt_image_ImageObserverInterface } from "./ImageObserver";
import { ImageProducer as java_awt_image_ImageProducer } from "./ImageProducer";
import { WritableRaster as java_awt_image_WritableRaster } from "./WritableRaster";
import { Raster as java_awt_image_Raster } from "./Raster";
import { Rectangle as java_awt_Rectangle } from "./../Rectangle";
import { SampleModel as java_awt_image_SampleModel } from "./SampleModel";
import { Boolean as java_lang_Boolean } from "./../../lang/Boolean";
import { Graphics2D as java_awt_Graphics2D } from "./../Graphics2D";
import { ColorModel as java_awt_image_ColorModel } from "./ColorModel";
import { Graphics as java_awt_Graphics } from "./../Graphics";
import { Vector as java_util_Vector } from "./../../util/Vector";
import { TileObserver as java_awt_image_TileObserver, TileObserverInterface as java_awt_image_TileObserverInterface } from "./TileObserver";
import { Point as java_awt_Point } from "./../Point";
import { ImageCapabilities as java_awt_ImageCapabilities } from "./../ImageCapabilities";
import { GraphicsConfiguration as java_awt_GraphicsConfiguration } from "./../GraphicsConfiguration";
import { Float as java_lang_Float } from "./../../lang/Float";
import { Image as java_awt_Image } from "./../Image";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Class as java_lang_Class } from "./../../lang/Class";
import { IndexColorModel as java_awt_image_IndexColorModel } from "./IndexColorModel";
import { Hashtable as java_util_Hashtable } from "./../../util/Hashtable";
/**
 * This class just defines types, you should import {@link BufferedImage} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BufferedImageClass extends JavaClass {
    /**
     * Original type: 'int'
     */
    static readonly TYPE_CUSTOM: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_INT_RGB: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_INT_ARGB: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_INT_ARGB_PRE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_INT_BGR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_3BYTE_BGR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_4BYTE_ABGR: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_4BYTE_ABGR_PRE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_USHORT_565_RGB: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_USHORT_555_RGB: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_BYTE_GRAY: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_USHORT_GRAY: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_BYTE_BINARY: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TYPE_BYTE_INDEXED: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly OPAQUE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly BITMASK: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly TRANSLUCENT: java_lang_Integer | number;
    /**
     * Original type: 'java.lang.Object'
     */
    static readonly UndefinedProperty: BasicOrJavaType | null;
    /**
     * Original type: 'int'
     */
    static readonly SCALE_DEFAULT: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCALE_FAST: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCALE_SMOOTH: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCALE_REPLICATE: java_lang_Integer | number;
    /**
     * Original type: 'int'
     */
    static readonly SCALE_AREA_AVERAGING: java_lang_Integer | number;
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
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.awt.image.ImageObserver'
     * @return original return type: 'java.lang.Object'
     */
    getProperty(var0: string | null, var1: java_awt_image_ImageObserver | JavaInterfaceProxy<java_awt_image_ImageObserverInterface> | null): Promise<BasicOrJavaType | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.awt.image.ImageObserver'
     * @return original return type: 'java.lang.Object'
     */
    getPropertySync(var0: string | null, var1: java_awt_image_ImageObserver | JavaInterfaceProxy<java_awt_image_ImageObserverInterface> | null): BasicOrJavaType | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'int'
     */
    getType(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getTypeSync(): number;
    /**
     * @return original return type: 'java.awt.image.ImageProducer'
     */
    getSource(): Promise<java_awt_image_ImageProducer | null>;
    /**
     * @return original return type: 'java.awt.image.ImageProducer'
     */
    getSourceSync(): java_awt_image_ImageProducer | null;
    /**
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    getRaster(): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    getRasterSync(): java_awt_image_WritableRaster | null;
    /**
     * @return original return type: 'java.awt.image.Raster'
     */
    getData(): Promise<java_awt_image_Raster | null>;
    /**
     * @return original return type: 'java.awt.image.Raster'
     */
    getDataSync(): java_awt_image_Raster | null;
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
     * @return original return type: 'int'
     */
    getHeight(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getHeightSync(): number;
    /**
     * @param var0 original type: 'java.awt.image.ImageObserver'
     * @return original return type: 'int'
     */
    getHeight(var0: java_awt_image_ImageObserver | JavaInterfaceProxy<java_awt_image_ImageObserverInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.awt.image.ImageObserver'
     * @return original return type: 'int'
     */
    getHeightSync(var0: java_awt_image_ImageObserver | JavaInterfaceProxy<java_awt_image_ImageObserverInterface> | null): number;
    /**
     * @param var0 original type: 'java.awt.image.ImageObserver'
     * @return original return type: 'int'
     */
    getWidth(var0: java_awt_image_ImageObserver | JavaInterfaceProxy<java_awt_image_ImageObserverInterface> | null): Promise<number>;
    /**
     * @param var0 original type: 'java.awt.image.ImageObserver'
     * @return original return type: 'int'
     */
    getWidthSync(var0: java_awt_image_ImageObserver | JavaInterfaceProxy<java_awt_image_ImageObserverInterface> | null): number;
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
     * @return original return type: 'boolean'
     */
    isAlphaPremultiplied(): Promise<boolean>;
    /**
     * @return original return type: 'boolean'
     */
    isAlphaPremultipliedSync(): boolean;
    /**
     * @return original return type: 'int'
     */
    getTransparency(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getTransparencySync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getRGB(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getRGBSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int'
     * @return original return type: 'int[]'
     */
    getRGB(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null, var5: java_lang_Integer | number, var6: java_lang_Integer | number): Promise<(number)[] | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int'
     * @return original return type: 'int[]'
     */
    getRGBSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null, var5: java_lang_Integer | number, var6: java_lang_Integer | number): (number)[] | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    coerceData(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    coerceDataSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    getAlphaRaster(): Promise<java_awt_image_WritableRaster | null>;
    /**
     * @return original return type: 'java.awt.image.WritableRaster'
     */
    getAlphaRasterSync(): java_awt_image_WritableRaster | null;
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
     * @return original return type: 'java.awt.Graphics2D'
     */
    createGraphics(): Promise<java_awt_Graphics2D | null>;
    /**
     * @return original return type: 'java.awt.Graphics2D'
     */
    createGraphicsSync(): java_awt_Graphics2D | null;
    /**
     * @return original return type: 'java.awt.image.ColorModel'
     */
    getColorModel(): Promise<java_awt_image_ColorModel | null>;
    /**
     * @return original return type: 'java.awt.image.ColorModel'
     */
    getColorModelSync(): java_awt_image_ColorModel | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    setRGB(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'void'
     */
    setRGBSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int'
     * @return original return type: 'void'
     */
    setRGB(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null, var5: java_lang_Integer | number, var6: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @param var4 original type: 'int[]'
     * @param var5 original type: 'int'
     * @param var6 original type: 'int'
     * @return original return type: 'void'
     */
    setRGBSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number, var4: (java_lang_Integer | number)[] | null, var5: java_lang_Integer | number, var6: java_lang_Integer | number): void;
    /**
     * @return original return type: 'java.awt.Graphics'
     */
    getGraphics(): Promise<java_awt_Graphics | null>;
    /**
     * @return original return type: 'java.awt.Graphics'
     */
    getGraphicsSync(): java_awt_Graphics | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    getSubimage(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<BufferedImage | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    getSubimageSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_lang_Integer | number): BufferedImage | null;
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
     * @return original return type: 'void'
     */
    flush(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    flushSync(): void;
    /**
     * @param var0 original type: 'java.awt.GraphicsConfiguration'
     * @return original return type: 'java.awt.ImageCapabilities'
     */
    getCapabilities(var0: java_awt_GraphicsConfiguration | null): Promise<java_awt_ImageCapabilities | null>;
    /**
     * @param var0 original type: 'java.awt.GraphicsConfiguration'
     * @return original return type: 'java.awt.ImageCapabilities'
     */
    getCapabilitiesSync(var0: java_awt_GraphicsConfiguration | null): java_awt_ImageCapabilities | null;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'void'
     */
    setAccelerationPriority(var0: java_lang_Float | number): Promise<void>;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'void'
     */
    setAccelerationPrioritySync(var0: java_lang_Float | number): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.awt.Image'
     */
    getScaledInstance(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<java_awt_Image | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.awt.Image'
     */
    getScaledInstanceSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): java_awt_Image | null;
    /**
     * @return original return type: 'float'
     */
    getAccelerationPriority(): Promise<number>;
    /**
     * @return original return type: 'float'
     */
    getAccelerationPrioritySync(): number;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    wait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    waitSync(): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.image.IndexColorModel'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    static newInstanceAsync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_image_IndexColorModel | null): Promise<BufferedImage>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    static newInstanceAsync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<BufferedImage>;
    /**
     * @param var0 original type: 'java.awt.image.ColorModel'
     * @param var1 original type: 'java.awt.image.WritableRaster'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'java.util.Hashtable'
     * @return original return type: 'java.awt.image.BufferedImage'
     */
    static newInstanceAsync(var0: java_awt_image_ColorModel | null, var1: java_awt_image_WritableRaster | null, var2: java_lang_Boolean | boolean, var3: java_util_Hashtable | null): Promise<BufferedImage>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @param var3 original type: 'java.awt.image.IndexColorModel'
     */
    constructor(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number, var3: java_awt_image_IndexColorModel | null);
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     */
    constructor(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: java_lang_Integer | number);
    /**
     * @param var0 original type: 'java.awt.image.ColorModel'
     * @param var1 original type: 'java.awt.image.WritableRaster'
     * @param var2 original type: 'boolean'
     * @param var3 original type: 'java.util.Hashtable'
     */
    constructor(var0: java_awt_image_ColorModel | null, var1: java_awt_image_WritableRaster | null, var2: java_lang_Boolean | boolean, var3: java_util_Hashtable | null);
}
declare const BufferedImage_base: typeof BufferedImageClass;
/**
 * Class java.awt.image.BufferedImage.
 *
 * This actually imports the java class for further use.
 * The class {@link BufferedImageClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class BufferedImage extends BufferedImage_base {
}
export default BufferedImage;
//# sourceMappingURL=BufferedImage.d.ts.map