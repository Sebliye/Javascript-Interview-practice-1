function fibonacci(num){
     if(num<=1){
          return 1
     }
     if(num==null){
          return 0
     }
     if(typeof(num)=='string'){
          return NaN
     }
     let arr=[0,1];
     let sum;
     for(let i=2;i<=num;i++){
          sum=arr[i-1]+arr[i-2]
          arr.push(sum)
     }
     return arr;
}
console.log(fibonacci(8));
//time complexity O(n) times

module.exports=fibonacci







