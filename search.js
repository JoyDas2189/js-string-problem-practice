const word = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// const doesExists = word.includes("the");
// console.log(doesExists);

// const searchString = "nisi";
// const doesExists2 = word.includes(searchString);
// console.log(doesExists2);

// const line = word.toLowerCase();


// const searchString = "Lorem".toLowerCase();


// const doesExists = line.includes(searchString);
// console.log(doesExists);


if(word.indexOf("This") !== -1) {
    console.log("Exists in the string");
}
else {
    console.log("Doesn't exists in the list");
}