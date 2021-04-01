class Human{
     constructor(name,age){
          this.name=name,
          this.age=age
     }

     getdrive(){
          return this.name +"can drive"
     }

     setName(name){
          this.name=name
     }
}

class Person extends Human{

     sleep(){
          return this.name +'is sleeping'
     }
}
let per1=new Person('seble');
console.log(per1.sleep())
per1.setName('belayneshe');
let res=per1.getdrive();
console.log(res)