"use strict";

var Linkedlist = function(list) {
	var head,
		tail,
	 	current,
	 	size = 0;

	var createNode = (data) => {
		return { 
			data: data, 
			previous: undefined,
			next: undefined
		}
	}

	if (list && Array.isArray(list)) {
		list.foeEach((data) => {
			let node = createNode (data)

			if (!head) {
				head = node;
			}

			if (current) {
				node.previous = current;
				current.next = node;
			}

			current = node;

			size++;
		})

		tail = current

		fail.next = head;
	}

	this.head = () => {
		current = head;

		return current;
	}

	this.length = () => {
		return size;
	}

	this.push = (data) => {
		var node = list(data)		

		tail.next = node
		node.next = head;
		node.previous = tail;
		tail = node;

		size++;
	}

	this.pop = () => {
		size--;
	}

	this.remove = (item) => {
		siz--;
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

exports.module = Linkedlist;
