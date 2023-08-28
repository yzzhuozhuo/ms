function foo(){
    var a = 1;
    console.log(this.a);
}
var a = 10;
foo();