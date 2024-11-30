// Declare Module for Assets (Images, SVGs, GIFs, JPGs, JPEGs)
declare module "*.png" {
    const value: any;
    export default value;
}
/*
1."declare module"
    - This is a TypeScript directive that tells the compiler to declare a new module.
    - The declare keyword is used to declare the existence of a module, without providing an implementation.

2."*.png"
    - This is a glob pattern that matches file names with the specified extensions.
    - The * is a wildcard character that matches any file name.
    - The "png" part specifies the allowed file extensions.
    - This pattern will match files like "image.png"

3."const value: any;"
    - This declares a constant named value with the type any.
    - The any type is a TypeScript type that represents any value, including numbers, strings, objects, etc.
    - This means that the value constant can hold any type of value.

4."export default value;"
    - This exports the "value" constant as the default export of the module.
    - The "default" keyword specifies that this is the main export of the module.
    - When you import this module, you'll get the value constant as the default import.

*/

declare module "*.jpg" {
    const value: any;
    export default value;
}

declare module "*.jpeg" {
    const value: any;
    export default value;
}

declare module "*.svg" {
    const value: any;
    export default value;
}

declare module "*.gif" {
    const value: any;
    export default value;
}