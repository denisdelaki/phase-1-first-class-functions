function receivesAFunction(callback) {
    callback()
};
//does not take arguments
function returnsANamedFunction() {
    
}
var fn = returnsANamedFunction()
fn.returnsANamedFunction;