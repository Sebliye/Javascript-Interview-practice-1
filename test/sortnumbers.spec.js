let sortNum=require('../number/sortnumbers');
let assert=require('assert');
let {expect}=require('chai');



describe('sort array of num',()=>{
     it('number',()=>{
          expect(sortNum([10,2,7,0])).to.deep.equal([0,2,7,10])
     })
     it('no argument',()=>{
          expect(sortNum()).to.deep.equal(0)
     })
     it('empty array',()=>{
          expect(sortNum([])).to.deep.equal(0)
     })
})
