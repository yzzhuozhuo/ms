var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();

ECS = [
    globalContext,
    checkscopeContext,
    fContext
]

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();

ECS = [
    globalContext,
    checkscopeContext,
    
]