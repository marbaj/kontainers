"use strict";

var Linkedlist = (list, options) => {
	var head,
		tail,
	 	current;

	var createNode = (data) => {
		return { 
			data: data, 
			previous: undefined,
			next: undefined
		}
	}

	if (list) {
		list.foeEach((data) => {
			let node = createNode (data)

			if (!head) {
				head = node;
			}

			if (current) {
				node.previous = current;
				current.next = node;
			}

			current = node
		})

		tail = current

		fail.next = head;
	}

	this.head = () => {
		current = head;

		return current;
	}

	this.push = (data) => {
		var node = list(data)		

		tail.next = node
		node.next = head;
		node.previous = tail;
		tail = node;
	}

	this.pop = () => {

	}

	this.remove = (item) => {
		
	}

	this.peak = () => {
		return current;
	}

	this.next = () => {
		current = current.next;
		return current
	}

	this.previous = () => {
		current = current.previous;
		return current
	}

}
