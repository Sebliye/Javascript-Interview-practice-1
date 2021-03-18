const sortstr=require('../string/sort');
const assert=require('assert');
const {expect}=require('chai');

describe('sortstr',()=>{
     it('string',()=>{
          let result=sortstr(['b','a','k']);
          //assert.equal(result,['a','b','k'])
          expect(result).to.deep.equal(['a','b','k'])
     })
     
})