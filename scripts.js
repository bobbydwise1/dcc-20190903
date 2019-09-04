/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Apple.

Implement a queue using two stacks. Recall that a queue is a FIFO (first-in, first-out) data structure with the following methods: enqueue, which inserts an element into the queue, and dequeue, which removes it.
*/

class Stack{
  constructor(){
    this.stack = [];
  }
}

class Queue{
  constructor(){
    this.data = new Stack()
    this.temp = new Stack()
  }

  enqueue(yourElement){
    return this.data.stack.unshift(yourElement)
  }

  dequeue(yourElement){
    let i;
    let j;
    while ( this.data.stack.length > 0 ) {
      if ( yourElement == this.data.stack[0] ) {
        this.data.stack.shift();
        while ( this.temp.stack.length > 0 ) {
          this.data.stack.unshift(this.temp.stack.shift())
        }
        break;
      } else {
        this.temp.stack.unshift(this.data.stack.shift())
      }
    }
    while ( this.temp.stack.length > 0 ) {
      this.data.stack.unshift(this.temp.stack.shift())
    }
    return this.data.stack
  }
}

let test0 = new Queue()
test0.enqueue(0)
test0.enqueue(1)
test0.enqueue(2)
test0.enqueue(3)
test0.enqueue(4)
test0.enqueue(5)
// console.log(test0)
test0.dequeue(9)
console.log(test0)

$(document).ready(function() {

});
