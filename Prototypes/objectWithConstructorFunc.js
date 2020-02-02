function Bar() {
    //"this will point to the newly created Object"
    this.a = 10;
}

Bar.prototype.readA = function(){
    //"this" will point to the object ,in context of which,method is invoked
    return this.a;
}

Bar.prototype.writeA = function (a){
    this.a =a;
}

//Constructor function invocation requires "new" keyboard
let bar = new Bar();

console.log(bar.constructor === Bar); 
// true because, bar object points to Bar.prototype and Bar.prototype has a property called contructor which points 
//to Bar function.So constructor is inherited property for bar object through which it can access Bar function.
console.log(bar instanceof Bar); // true obviously because Bar function is the class from which bar is instantiated.
console.log(bar instanceof Object); // true , because bar is an object so  it inherits from Object.
console.log(bar.readA()) // 10, bar is an instanceOf Bar , and the Bar function is invoked in the context of bar object.
// bar points to Bar.prototype so it can access the property of Bar.prototype
bar.writeA(20);
console.log(bar.readA()); // 20
console.log(bar.a); // 20
// bar has its own property a, because this property is created every time Bar constructor is invoked. This behaviour
// allows to create different objects with their own property a, but inheriting "methods" from Bar.prototype.
                                     