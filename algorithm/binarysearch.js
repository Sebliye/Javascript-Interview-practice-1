

function BinarySearch(arr,val){
     let sortedarr=arr.sort((a,b)=>a-b);
     let lower=0;//0
     let upper=sortedarr.length-1;//4
     while(lower<=upper){//0<4 t
          let middle=lower+Math.floor((upper-lower)/2);//1-1
           if(val===sortedarr[middle]){
                return arr[middle] +"index"+middle
           }
           else if(val>sortedarr[middle]){
                lower=middle+1
           }else if(val<sortedarr[middle]){//2<20 t
                upper=middle-1//1-1=0 0<=0 t //m 02==2
           }
     }
     return -1;
}
console.log(BinarySearch([2,20,1,3,6],20));


function Binaryser(arr,val){
     let sortedarr=arr.sort((a,b)=>a-b);
     //console.log(sortedarr)
     let left=0;//0
     let right=sortedarr.length-1;//3
     for(let i=0;i<sortedarr.length-1;i++){
          let middle=Math.floor((left+right)/2)//1
          console.log(middle)
          if(val===sortedarr[middle]){//3===1 f
               return middle +"elem" +sortedarr[middle]
          }else if(val>sortedarr[middle]){ //3>1 l=1+2 3===3 
               left=middle+1
          }else{
               right=middle-1
          }
     }
     return -1;
}
console.log(Binaryser([1,10,3,0],3));//[0,1,3,10]
