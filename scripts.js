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
    for ( i = 0; i < this.data.stack.length; i++ ) {
      console.log('this is i: ', i)
      if ( this.data.stack[0] == yourElement ) {
        this.data.stack.shift();
        for ( j = 0; j < this.temp.stack.length; j++ ) {
          this.data.stack.unshift(this.temp.stack.shift());
        }
        break;
      } else {
        this.temp.stack.unshift(this.data.stack.shift())
      }
      console.log('data/temp: ', this.data.stack, ' | ', this.temp.stack)
    }
    for ( j = 0; j < this.temp.stack.length+1; j++ ) {
      console.log('this is j: ', j)
      this.data.stack.unshift(this.temp.stack.shift());
    }
    return null
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
