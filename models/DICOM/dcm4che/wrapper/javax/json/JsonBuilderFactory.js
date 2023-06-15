"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonBuilderFactory = exports.createJsonBuilderFactoryProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link JsonBuilderFactory} interface.
 * All required methods in {@link JsonBuilderFactoryInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createJsonBuilderFactoryProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('javax.json.JsonBuilderFactory', methods, opts);
}
exports.createJsonBuilderFactoryProxy = createJsonBuilderFactoryProxy;
/**
 * Class javax.json.JsonBuilderFactory.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonBuilderFactoryClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class JsonBuilderFactory extends (0, java_bridge_1.importClass)('javax.json.JsonBuilderFactory') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.JsonBuilderFactory = JsonBuilderFactory;
exports.default = JsonBuilderFactory;
//# sourceMappingURL=JsonBuilderFactory.js.map