const merge=require('../string/merge');
const assert=require('assert');



describe('test merge',()=>{
     it('two string',()=>{
          let res=merge('aa','bbb')
     assert.strictEqual(res,'aabbbaa')
     })
})