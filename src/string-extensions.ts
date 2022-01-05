// Tell the TypeScript compiler that this is a module that should be included in the compilation.
export {};

declare global {
    interface String {
        isEmpty: () => boolean;
    }
}

String.prototype.isEmpty = function isEmpty(): boolean {
    return this === '';
}