"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonWriterFactory = exports.createJsonWriterFactoryProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link JsonWriterFactory} interface.
 * All required methods in {@link JsonWriterFactoryInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createJsonWriterFactoryProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('javax.json.JsonWriterFactory', methods, opts);
}
exports.createJsonWriterFactoryProxy = createJsonWriterFactoryProxy;
/**
 * Class javax.json.JsonWriterFactory.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonWriterFactoryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class JsonWriterFactory extends (0, java_bridge_1.importClass)('javax.json.JsonWriterFactory') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.JsonWriterFactory = JsonWriterFactory;
exports.default = JsonWriterFactory;
//# sourceMappingURL=JsonWriterFactory.js.map