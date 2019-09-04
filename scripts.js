/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Apple.

Implement a queue using two stacks. Recall that a queue is a FIFO (first-in, first-out) data structure with the following methods: enqueue, which inserts an element into the queue, and dequeue, which removes it.
*/

class queue{
  constructor(){
    this.stack = [];
    this.store = [];
  }

  enqueue(yourElement) {
    return this.stack.unshift(yourElement)
  }

  dequeue() {
    return this.stack.shift()
  }
}

let test0 = new queue()
test0.enqueue(1)
test0.enqueue(2)
test0.enqueue(3)
test0.enqueue(4)
console.log(test0)
console.log(test0.dequeue())
console.log(test0)

$(document).ready(function() {

});
