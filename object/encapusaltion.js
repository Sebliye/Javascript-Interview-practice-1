
// encapuslating is hiding logic using getter and setter
class Employee{

     constructor(name,age){
          this.name=name;
          this.age=age;
     }

     setcolor(color){
          this.color=color;
     }
     getname(){
          return this.name;
     }

}
let emp1=new Employee('seble',26);

emp1.setcolor('black');
console.log(emp1);
let res=emp1.getname();
console.log(res)