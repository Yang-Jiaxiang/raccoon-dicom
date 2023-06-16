"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonMergePatch = exports.createJsonMergePatchProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link JsonMergePatch} interface.
 * All required methods in {@link JsonMergePatchInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createJsonMergePatchProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('javax.json.JsonMergePatch', methods, opts);
}
exports.createJsonMergePatchProxy = createJsonMergePatchProxy;
/**
 * Class javax.json.JsonMergePatch.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonMergePatchClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class JsonMergePatch extends (0, java_bridge_1.importClass)('javax.json.JsonMergePatch') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.JsonMergePatch = JsonMergePatch;
exports.default = JsonMergePatch;
//# sourceMappingURL=JsonMergePatch.js.map