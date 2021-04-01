let arr=[1,2,2]
let set=[...new Set(arr)];
console.log(set)

let coll=[
     {name:'do',age:2},
     {name:'do',age:2},
     {name:'do',age:2},
     {name:'dod',age:3},
     {name:'dod',age:3},
]

/////////////////////////
let res=coll.map(val=>JSON.stringify(val));
let set1=[...new Set(res)];
set1=set1.map(val=>JSON.parse(val));
console.log(set1)