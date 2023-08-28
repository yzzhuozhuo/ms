var obj= {
        that : this,
        bar : function(){
            return ()=>{
                console.log(this);
            }
        },
        baz : ()=>{
            console.log(this);
        }
    }
    console.log(obj.that);  
    obj.bar()();            
    obj.baz();              