function receivesAFunction(callback) {
    callback()
};
//does not take arguments
function returnsANamedFunction() {
    return returnsANamedFunction;
}
function returnsAnAnonymousFunction() {
    return function () {}
}