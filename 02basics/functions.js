"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //return "hello world"
}
function getUpper(st) {
    return st.toUpperCase();
}
function signUp(name, email, isPaid) {
}
var logInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var value = addTwo(5);
getUpper("parth 4");
signUp("parth", "munjal@gmail.com", true);
logInUser("parth", "munjal@gmail.com");
var sayHello = function (s) {
    return "Hello";
};
// const heros=["iron","thor","spider"];
var heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
