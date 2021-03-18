//

function palindrome(str){

     if(str==null){
          return 0;
     }
     let rev=str.split('').reverse().join('');
     if(str===rev){
          return 'palindrome'
     }
     return 'not palindrome'
}

module.exports=palindrome;