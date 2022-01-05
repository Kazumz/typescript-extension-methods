declare global {
    // TypeScript module augmentation.
    // This will merge with the built in 'String' interface when compiling and checking type usages.
    interface String {
        isEmpty: () => boolean;
    }
}

String.prototype.isEmpty = function isEmpty(): boolean {
    return this === '';
}

// Tell the TypeScript compiler that this is a module that should be included in the compilation.
export {};