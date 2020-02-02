//Simple object literal
let foo =  {
    a:10
};

//foo will be used as the prototype of bar , this means that foo is the parent of  bar
let bar = Object.create(foo,{b:{value:20}});

console.log(bar.__proto__) // foo ,coz foo is the parent of bar and __proto__ property makes the inheritance chain
console.log(bar.a); // 10 ,coz child can access the properties of the parent, Inherited property
console.log(bar.b);// 20, b is bar's own property
console.log(foo instanceof Object); // true because foo is inherited from Object
console.log(bar instanceof Object); // true because bar also inherits from Object