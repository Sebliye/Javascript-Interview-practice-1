function removeDuplicateString(str){
     let mystr=str.split('')
     let arr=[]
     for(let elem of mystr){
          if(arr.indexOf(elem)===-1){
               arr.push(elem)
          }
     }
     return arr.join('');
}
console.log(removeDuplicateString('hello this is seble'))
module.exports=removeDuplicateString


