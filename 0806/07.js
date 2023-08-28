function foo() {
    getName = function () { console.log (1); }; 
            //这里的getName 将创建到全局window上
    return this;
}
foo.getName = function () { console.log(2);};   
        //这个getName和上面的不同，是直接添加到foo上的
foo.prototype.getName = function () { console.log(3);}; 
        // 这个getName直接添加到foo的原型上，在用new创建新对象时将直接添加到新对象上 
var getName = function () { console.log(4);}; 
        // 和foo函数里的getName一样, 将创建到全局window上
function getName () { console.log(5);}    
        // 同上，但是这个函数不会被使用，因为函数声明的提升优先级最高，所以上面的函数表达式将永远替换
        // 这个同名函数，除非在函数表达式赋值前去调用getName()，但是在本题中，函数调用都在函数表达式
        // 之后，所以这个函数可以忽略了
        
        // 通过上面对 getName的分析基本上答案已经出来了

foo.getName ();                // 2
                               // 下面为了方便，我就使用输出值来简称每个getName函数
                               // 这里有小伙伴疑惑是在 2 和 3 之间，觉得应该是3 , 但其实直接设置
                               // foo.prototype上的属性，对当前这个对象的属性是没有影响的,如果要使
                               // 用的话，可以foo.prototype.getName() 这样调用 ，这里需要知道的是
                               // 3 并不会覆盖 2，两者不冲突 ( 当你使用new 创建对象时，这里的
                               // Prototype 将自动绑定到新对象上，即用new 构造调用的第二个作用)
                               
getName ();                    // 4 
                               // 这里涉及到函数提升的问题，不知道的小伙伴只需要知道 5 会被 4 覆盖，
                               // 虽然 5 在 4 的下面，其实 js 并不是完全的自上而下，想要深入了解的
                               // 小伙伴可以看文章最后的链接
                               
foo().getName ();              // 1 
                               // 这里的foo函数执行完成了两件事, 1. 将window.getName设置为1,
                               // 2. 返回window , 故等价于 window.getName(); 输出 1
getName ();                    // 1
                               // 刚刚上面的函数刚把window.getName设置为1,故同上 输出 1
                               
new foo.getName ();            // 2
                               // new 对一个函数进行构造调用 , 即 foo.getName ,构造调用也是调用啊
                               // 该执行还是执行，然后返回一个新对象，输出 2 (虽然这里没有接收新
                               // 创建的对象但是我们可以猜到，是一个函数名为 foo.getName 的对象
                               // 且__proto__属性里有一个getName函数，是上面设置的 3 函数)
                               
new foo().getName ();          // 3
                               // 这里特别的地方就来了,new 是对一个函数进行构造调用,它直接找到了离它
                               // 最近的函数,foo(),并返回了应该新对象,等价于 var obj = new foo();
                               // obj.getName(); 这样就很清晰了,输出的是之前绑定到prototype上的
                               // 那个getName  3 ,因为使用new后会将函数的prototype继承给 新对象
                               
new new foo().getName ();      // 3
                               // 哈哈，这个看上去很吓人，让我们来分解一下：
                               // var obj = new foo();
                               // var obj1 = new obj.getName();
                               // 好了，仔细看看, 这不就是上两题的合体吗,obj 有getName 3, 即输出3
                               // obj 是一个函数名为 foo的对象,obj1是一个函数名为obj.getName的对象
