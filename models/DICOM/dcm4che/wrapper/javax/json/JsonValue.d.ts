import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { JsonObject as javax_json_JsonObject, JsonObjectInterface as javax_json_JsonObjectInterface } from "./JsonObject";
import { JsonArray as javax_json_JsonArray, JsonArrayInterface as javax_json_JsonArrayInterface } from "./JsonArray";
import { JsonValue$ValueType as javax_json_JsonValue$ValueType } from "./JsonValue$ValueType";
/**
 * This class just defines types, you should import {@link JsonValue} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonValueClass extends JavaClass {
    /**
     * Original type: 'javax.json.JsonObject'
     */
    static readonly EMPTY_JSON_OBJECT: javax_json_JsonObject | JavaInterfaceProxy<javax_json_JsonObjectInterface> | null;
    /**
     * Original type: 'javax.json.JsonArray'
     */
    static readonly EMPTY_JSON_ARRAY: javax_json_JsonArray | JavaInterfaceProxy<javax_json_JsonArrayInterface> | null;
    /**
     * Original type: 'javax.json.JsonValue'
     */
    static readonly NULL: JsonValueClass | JavaInterfaceProxy<JsonValueInterface> | null;
    /**
     * Original type: 'javax.json.JsonValue'
     */
    static readonly TRUE: JsonValueClass | JavaInterfaceProxy<JsonValueInterface> | null;
    /**
     * Original type: 'javax.json.JsonValue'
     */
    static readonly FALSE: JsonValueClass | JavaInterfaceProxy<JsonValueInterface> | null;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'javax.json.JsonObject'
     */
    asJsonObject(): Promise<javax_json_JsonObject | null>;
    /**
     * @return original return type: 'javax.json.JsonObject'
     */
    asJsonObjectSync(): javax_json_JsonObject | null;
    /**
     * @return original return type: 'javax.json.JsonArray'
     */
    asJsonArray(): Promise<javax_json_JsonArray | null>;
    /**
     * @return original return type: 'javax.json.JsonArray'
     */
    asJsonArraySync(): javax_json_JsonArray | null;
    /**
     * @return original return type: 'javax.json.JsonValue$ValueType'
     */
    getValueType(): Promise<javax_json_JsonValue$ValueType | null>;
    /**
     * @return original return type: 'javax.json.JsonValue$ValueType'
     */
    getValueTypeSync(): javax_json_JsonValue$ValueType | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createJsonValueProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface JsonValueInterface {
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): string;
    /**
     * @return original return type: 'javax.json.JsonObject'
     */
    asJsonObject?(): javax_json_JsonObject | null;
    /**
     * @return original return type: 'javax.json.JsonArray'
     */
    asJsonArray?(): javax_json_JsonArray | null;
    /**
     * @return original return type: 'javax.json.JsonValue$ValueType'
     */
    getValueType(): javax_json_JsonValue$ValueType | null;
}
/**
 * Create a proxy for the {@link JsonValue} interface.
 * All required methods in {@link JsonValueInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createJsonValueProxy(methods: JsonValueInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<JsonValueInterface>;
declare const JsonValue_base: typeof JsonValueClass;
/**
 * Class javax.json.JsonValue.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonValueClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonValue extends JsonValue_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default JsonValue;
//# sourceMappingURL=JsonValue.d.ts.map