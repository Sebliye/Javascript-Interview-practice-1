const evenOddCounter=require('../array/arrayquestions');
const assert=require('assert');

describe('evenOddCounter',()=>{
     it ('array of num',()=>{
     let res=evenOddCounter([1,2,3,4]);
     assert.ok(res,{even:2,odd:2})
     })
    
})