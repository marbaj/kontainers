const chai = require('chai');
const expect = chai.expect;
const Linkedlist = require('./../lib/linkedlist.js');

var data = {

}

var list = [{},{}]

describe('linkedlists test', function() {
  it('test 1', function(list) {  
    var ll = new Linkedlist(list);
console.log(ll.length())

    expect(ll.length()).to.equal(2);
  });

});