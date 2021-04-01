

//there are three ways to create object

//1.object literal

let obj={
     name:'seble',
     age:48,
     cool:function(){
          console.log('hello'+this.name)
     }
}
console.log(obj)
console.log(obj.name);
obj.cool()

//2. Object.Create()

let person={
     ishuman:true,
     dance:()=>{
          console.log('can dance')
     }
}
let per1=Object.create(person);
per1.dance();
console.log(per1.ishuman);

//3. function constructor

function Human(name,age,color){
     this.name=name,
     this.age=age,
     this.color=color
}
let h1=new Human('seble','26','black',"fairfield");
Human.prototype.location="location"
console.log(h1);

//4. factory function


//5. class 

//syntax for crarting a class
// class ClassName {
//   constructor() { ... }
//   method_1() { ... }
//   method_2() { ... }
//   method_3() { ... }
// }


//constructor is used to initalize the object properties
class Person{

     constructor(name,age){
          this.name=name,
          this.age=age
     }

     dance(){
          console.log( this.name + "can dance")
     }
}

let pers=new Person("seble aygoda",26);
pers.dance();


//////



