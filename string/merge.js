
// write a function named merge which accepts two 
// inputs strings and returns a new string which is a
//  result of appending the shorter to longer strings as follows.
// merge(“a”,”bbb”) the output will be “abbba”
// merge(“aaa”,”b”) the output will be “baaab”

function merge(str1,str2){
     let newstr='';
     if(str1.length>str2.length){
          newstr=str2+str1+str2
     }else{
          newstr=str1+str2+str1;
     }
     return newstr;
}
console.log(merge('aaaa','bb'))

module.exports=merge;