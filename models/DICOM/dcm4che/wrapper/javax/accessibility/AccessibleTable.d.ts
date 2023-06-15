import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { Accessible as javax_accessibility_Accessible, AccessibleInterface as javax_accessibility_AccessibleInterface } from "./Accessible";
import { Integer as java_lang_Integer } from "./../../java/lang/Integer";
/**
 * This class just defines types, you should import {@link AccessibleTable} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AccessibleTableClass extends JavaClass {
    /**
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleCaption(): Promise<javax_accessibility_Accessible | null>;
    /**
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleCaptionSync(): javax_accessibility_Accessible | null;
    /**
     * @param var0 original type: 'javax.accessibility.Accessible'
     * @return original return type: 'void'
     */
    setAccessibleCaption(var0: javax_accessibility_Accessible | JavaInterfaceProxy<javax_accessibility_AccessibleInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.accessibility.Accessible'
     * @return original return type: 'void'
     */
    setAccessibleCaptionSync(var0: javax_accessibility_Accessible | JavaInterfaceProxy<javax_accessibility_AccessibleInterface> | null): void;
    /**
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleSummary(): Promise<javax_accessibility_Accessible | null>;
    /**
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleSummarySync(): javax_accessibility_Accessible | null;
    /**
     * @param var0 original type: 'javax.accessibility.Accessible'
     * @return original return type: 'void'
     */
    setAccessibleSummary(var0: javax_accessibility_Accessible | JavaInterfaceProxy<javax_accessibility_AccessibleInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.accessibility.Accessible'
     * @return original return type: 'void'
     */
    setAccessibleSummarySync(var0: javax_accessibility_Accessible | JavaInterfaceProxy<javax_accessibility_AccessibleInterface> | null): void;
    /**
     * @return original return type: 'int'
     */
    getAccessibleRowCount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getAccessibleRowCountSync(): number;
    /**
     * @return original return type: 'int'
     */
    getAccessibleColumnCount(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    getAccessibleColumnCountSync(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getAccessibleRowExtentAt(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getAccessibleRowExtentAtSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getAccessibleColumnExtentAt(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getAccessibleColumnExtentAtSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
    /**
     * @return original return type: 'javax.accessibility.AccessibleTable'
     */
    getAccessibleRowHeader(): Promise<AccessibleTable | null>;
    /**
     * @return original return type: 'javax.accessibility.AccessibleTable'
     */
    getAccessibleRowHeaderSync(): AccessibleTable | null;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleTable'
     * @return original return type: 'void'
     */
    setAccessibleRowHeader(var0: AccessibleTableClass | JavaInterfaceProxy<AccessibleTableInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleTable'
     * @return original return type: 'void'
     */
    setAccessibleRowHeaderSync(var0: AccessibleTableClass | JavaInterfaceProxy<AccessibleTableInterface> | null): void;
    /**
     * @return original return type: 'javax.accessibility.AccessibleTable'
     */
    getAccessibleColumnHeader(): Promise<AccessibleTable | null>;
    /**
     * @return original return type: 'javax.accessibility.AccessibleTable'
     */
    getAccessibleColumnHeaderSync(): AccessibleTable | null;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleTable'
     * @return original return type: 'void'
     */
    setAccessibleColumnHeader(var0: AccessibleTableClass | JavaInterfaceProxy<AccessibleTableInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleTable'
     * @return original return type: 'void'
     */
    setAccessibleColumnHeaderSync(var0: AccessibleTableClass | JavaInterfaceProxy<AccessibleTableInterface> | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleRowDescription(var0: java_lang_Integer | number): Promise<javax_accessibility_Accessible | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleRowDescriptionSync(var0: java_lang_Integer | number): javax_accessibility_Accessible | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'javax.accessibility.Accessible'
     * @return original return type: 'void'
     */
    setAccessibleRowDescription(var0: java_lang_Integer | number, var1: javax_accessibility_Accessible | JavaInterfaceProxy<javax_accessibility_AccessibleInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'javax.accessibility.Accessible'
     * @return original return type: 'void'
     */
    setAccessibleRowDescriptionSync(var0: java_lang_Integer | number, var1: javax_accessibility_Accessible | JavaInterfaceProxy<javax_accessibility_AccessibleInterface> | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleColumnDescription(var0: java_lang_Integer | number): Promise<javax_accessibility_Accessible | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleColumnDescriptionSync(var0: java_lang_Integer | number): javax_accessibility_Accessible | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'javax.accessibility.Accessible'
     * @return original return type: 'void'
     */
    setAccessibleColumnDescription(var0: java_lang_Integer | number, var1: javax_accessibility_Accessible | JavaInterfaceProxy<javax_accessibility_AccessibleInterface> | null): Promise<void>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'javax.accessibility.Accessible'
     * @return original return type: 'void'
     */
    setAccessibleColumnDescriptionSync(var0: java_lang_Integer | number, var1: javax_accessibility_Accessible | JavaInterfaceProxy<javax_accessibility_AccessibleInterface> | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'boolean'
     */
    isAccessibleSelected(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'boolean'
     */
    isAccessibleSelectedSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    isAccessibleRowSelected(var0: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    isAccessibleRowSelectedSync(var0: java_lang_Integer | number): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    isAccessibleColumnSelected(var0: java_lang_Integer | number): Promise<boolean>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    isAccessibleColumnSelectedSync(var0: java_lang_Integer | number): boolean;
    /**
     * @return original return type: 'int[]'
     */
    getSelectedAccessibleRows(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    getSelectedAccessibleRowsSync(): (number)[] | null;
    /**
     * @return original return type: 'int[]'
     */
    getSelectedAccessibleColumns(): Promise<(number)[] | null>;
    /**
     * @return original return type: 'int[]'
     */
    getSelectedAccessibleColumnsSync(): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleAt(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<javax_accessibility_Accessible | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleAtSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): javax_accessibility_Accessible | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createAccessibleTableProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface AccessibleTableInterface {
    /**
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleCaption(): javax_accessibility_Accessible | null;
    /**
     * @param var0 original type: 'javax.accessibility.Accessible'
     * @return original return type: 'void'
     */
    setAccessibleCaption(var0: javax_accessibility_Accessible | JavaInterfaceProxy<javax_accessibility_AccessibleInterface> | null): void;
    /**
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleSummary(): javax_accessibility_Accessible | null;
    /**
     * @param var0 original type: 'javax.accessibility.Accessible'
     * @return original return type: 'void'
     */
    setAccessibleSummary(var0: javax_accessibility_Accessible | JavaInterfaceProxy<javax_accessibility_AccessibleInterface> | null): void;
    /**
     * @return original return type: 'int'
     */
    getAccessibleRowCount(): number;
    /**
     * @return original return type: 'int'
     */
    getAccessibleColumnCount(): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getAccessibleRowExtentAt(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    getAccessibleColumnExtentAt(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
    /**
     * @return original return type: 'javax.accessibility.AccessibleTable'
     */
    getAccessibleRowHeader(): AccessibleTable | null;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleTable'
     * @return original return type: 'void'
     */
    setAccessibleRowHeader(var0: AccessibleTableClass | JavaInterfaceProxy<AccessibleTableInterface> | null): void;
    /**
     * @return original return type: 'javax.accessibility.AccessibleTable'
     */
    getAccessibleColumnHeader(): AccessibleTable | null;
    /**
     * @param var0 original type: 'javax.accessibility.AccessibleTable'
     * @return original return type: 'void'
     */
    setAccessibleColumnHeader(var0: AccessibleTableClass | JavaInterfaceProxy<AccessibleTableInterface> | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleRowDescription(var0: java_lang_Integer | number): javax_accessibility_Accessible | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'javax.accessibility.Accessible'
     * @return original return type: 'void'
     */
    setAccessibleRowDescription(var0: java_lang_Integer | number, var1: javax_accessibility_Accessible | JavaInterfaceProxy<javax_accessibility_AccessibleInterface> | null): void;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleColumnDescription(var0: java_lang_Integer | number): javax_accessibility_Accessible | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'javax.accessibility.Accessible'
     * @return original return type: 'void'
     */
    setAccessibleColumnDescription(var0: java_lang_Integer | number, var1: javax_accessibility_Accessible | JavaInterfaceProxy<javax_accessibility_AccessibleInterface> | null): void;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'boolean'
     */
    isAccessibleSelected(var0: java_lang_Integer | number, var1: java_lang_Integer | number): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    isAccessibleRowSelected(var0: java_lang_Integer | number): boolean;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'boolean'
     */
    isAccessibleColumnSelected(var0: java_lang_Integer | number): boolean;
    /**
     * @return original return type: 'int[]'
     */
    getSelectedAccessibleRows(): (number)[] | null;
    /**
     * @return original return type: 'int[]'
     */
    getSelectedAccessibleColumns(): (number)[] | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'javax.accessibility.Accessible'
     */
    getAccessibleAt(var0: java_lang_Integer | number, var1: java_lang_Integer | number): javax_accessibility_Accessible | null;
}
/**
 * Create a proxy for the {@link AccessibleTable} interface.
 * All required methods in {@link AccessibleTableInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createAccessibleTableProxy(methods: AccessibleTableInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<AccessibleTableInterface>;
declare const AccessibleTable_base: typeof AccessibleTableClass;
/**
 * Class javax.accessibility.AccessibleTable.
 *
 * This actually imports the java class for further use.
 * The class {@link AccessibleTableClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AccessibleTable extends AccessibleTable_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default AccessibleTable;
//# sourceMappingURL=AccessibleTable.d.ts.map