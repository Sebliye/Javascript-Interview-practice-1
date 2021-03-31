

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