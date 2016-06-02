const chai = require('chai');
const expect = chai.expect;
const Linkedlist = require('.././lib/linkedlist');

var list = [{ a: 0}, { a: 1}, { a: 2}]

function addObj(obj) {
	if (obj) {
		return '' + obj.a;
	} else {
		return '';
	}
}

describe('Linkedlist test:', function() {
	it('test constructor', function() {
	    var ll = new Linkedlist(list);
	    expect(ll.length()).to.equal(list.length);
	});

	it('add elements', function() {
	    var ll = new Linkedlist();
	    list.forEach((l) => {
	    	ll.push(l)
	    });
	    expect(ll.length()).to.equal(list.length);
	});

	it('list all elements', function() {
	    var ll = new Linkedlist();
	    list.forEach((l) => {
	    	ll.push(l)
	    });

	    var res = addObj(ll.peak());

	    while (ll.next()) {
	    	res += addObj(ll.peak());
	    }

	    list.forEach((l) => {
	    	ll.push(l)
	    });

	    while (ll.next()) {
	    	res += addObj(ll.peak());
	    }

	    expect(res).to.equal('012012');
	});

	it('pop element', function() {
	    var ll = new Linkedlist();
	    list.forEach((l) => {
	    	ll.push(l)
	    });

	    ll.pop()

	    var res = addObj(ll.peak());

	    while (ll.next()) {
	    	res += addObj(ll.peak());
	    }

	    expect(res).to.equal('01');
	});

	it('2 x pop element', function() {
	    var ll = new Linkedlist();
	    list.forEach((l) => {
	    	ll.push(l)
	    });

	    ll.pop(); 
	    ll.pop()

	    var res = addObj(ll.peak());

	    while (ll.next()) {
	    	res += addObj(ll.peak());
	    }
		
	    expect(res).to.equal('0');
	});

	it('pop all elements', function() {
		var ll = new Linkedlist();
	    list.forEach((l) => {
	    	ll.push(l)
	    });

	    ll.pop(); ll.pop(); ll.pop()

	    var res = addObj(ll.peak());

	    while (ll.next()) {
	    	res += addObj(ll.peak());
	    }

	    expect(res).to.equal('');
	  });

	it('clear all elements', function() {
		var ll = new Linkedlist();
	    list.forEach((l) => {
	    	ll.push(l)
	    });

	    ll.clear()

	    var res = addObj(ll.peak());

	    while (ll.next()) {
	    	res += addObj(ll.peak());
	    }

	    expect(res).to.equal('');
	});

	it('insert element', function() {
		var ll = new Linkedlist();
	    list.forEach((l) => {
	    	ll.push(l)
	    });

	    ll.insert({ a: 't'}, ll.peak())

	    var res = addObj(ll.peak());

	    while (ll.next()) {
	    	res += addObj(ll.peak());
	    }

	    console.log(res)

	    expect(res).to.equal('0t12');
	});
  
});

