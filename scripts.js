/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Apple.

Implement a queue using two stacks. Recall that a queue is a FIFO (first-in, first-out) data structure with the following methods: enqueue, which inserts an element into the queue, and dequeue, which removes it.
*/

class Stack{
  constructor(){
    this.stack = [];
  }

  enqueue(yourElement) {
    return this.queue.unshift(yourElement)
  }

  dequeue() {
    return this.queue.shift();
  }
}

class Queue{
  constructor(){
    this.data = new Stack()
    this.temp = new Stack()
  }

  enqueue(yourElement){
    return this.data.enqueue(yourElement)
  }

  dequeue(yourElement){
    
  }
}


$(document).ready(function() {

});
