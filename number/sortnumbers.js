
function sortNum(arr){
     if(arr==null || arr.length===0)return 0
   
     return arr.sort((a,b)=>a-b)
}
console.log(sortNum([2,7,9,1,0]));

module.exports=sortNum;