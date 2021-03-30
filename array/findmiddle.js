 function getMiddle(arr) {

      if (arr.length % 2 === 0) {
           let first=arr[arr.length/2]
           let second=arr[arr.length/2-1];
           let average = (first+second)/2
          console.log(average)
      } else {
           let middle_number = arr[Math.floor(arr.length / 2)];
           return middle_number;
      }

 }
 console.log(getMiddle([10, 20, 30,40]));


 const findmiddle=(arr)=>{
      
     if(arr.length%2===0){
          let first=arr.length/2;//2
          let second=first-1;//1
          let average=Math.floor((first+second)/2);//1+2/2 =1.5
          return arr[average];
     }else{
          let index=arr.length/2;
               index=Math.floor(index);
               return arr[index]

     }
 }
 console.log(findmiddle([10,26,3,50,60]))
 console.log(findmiddle([10,20,30,40]))