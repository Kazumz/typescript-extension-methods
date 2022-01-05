"use strict";
var populatedString = "Example Populated String";
if (!populatedString.isEmpty) {
    console.log(populatedString);
}
var emptyString = "";
if (!emptyString.isEmpty) {
    console.error(emptyString);
}
