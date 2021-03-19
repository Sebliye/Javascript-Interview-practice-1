let fibonacci=require('../number/fibonacci');
const assert =require('assert');
const {expect}=require('chai');


describe('test fibonacci',()=>{
     it('number ',()=>{
          let result=fibonacci(5);
         // assert.strictEqual(result,[0,1,1,2,3])
         expect(result).to.deep.equal([0,1,1,2,3,5])
     })
     it('test if the num is 2',()=>{
          let result=fibonacci(2);
          expect(result).to.deep.equal([0,1,1])
     })
     it('test if num is less than 1',()=>{
          expect(fibonacci(1)).to.deep.equal(1);
          expect(fibonacci(0)).to.deep.equal(1);
          expect(fibonacci(-1)).to.deep.equal(1);
     })
     it('test if num is empty',()=>{
           expect(fibonacci()).to.deep.equal(0);
     })
     it('test if num is not anumber',()=>{
           expect(fibonacci('seb')).to.deep.equal(NaN);
     })
})