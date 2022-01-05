"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./string-extensions");
var populatedString = "Example Populated String";
if (!populatedString.isEmpty()) {
    console.log(populatedString);
}
var emptyString = "";
if (!emptyString.isEmpty()) {
    console.error("Empty string didn't work!");
    console.error(emptyString);
}
