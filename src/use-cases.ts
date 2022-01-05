import './string-extensions';

const populatedString = "Example Populated String";
if (!populatedString.isEmpty()) {
    console.log(populatedString);
}

const emptyString = "";
if (!emptyString.isEmpty()) {
    console.error("Empty string didn't work!");
    console.error(emptyString);
}