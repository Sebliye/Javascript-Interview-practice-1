const sumArray=require('../array/sumarray');
const assert=require('assert');
const {expect}=require('chai');


describe('test sumarray',()=>{
     it ('samelength',()=>{
          expect(sumArray([1,2,3],[0,1,1])).to.deep.equal([1,3,4])
     })
})