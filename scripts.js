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
    while ( this.data.stack.length > 0 ) {
      if ( yourElement == this.data.stack[0] ) {
        console.log('Delete ', this.data.stack[0])
        this.data.stack.shift();
        break;
      } else {
        this.temp.stack.unshift(this.data.stack.shift())
      }
      console.log('this.data.stack: ', this.data.stack)
      console.log('this.temp.stack: ', this.temp.stack)
      console.log('-----------------------------------')
    }
    while ( this.temp.stack.length > 0 ) {
      this.data.stack.unshift(this.temp.stack.shift())
      console.log('this.data.stack: ', this.data.stack)
      console.log('this.temp.stack: ', this.temp.stack)
      console.log('-----------------------------------')
    }
    return this.data.stack
  }
}

// let test0 = new Queue()
// test0.enqueue(0)
// test0.enqueue(1)
// test0.enqueue(2)
// test0.enqueue(3)
// test0.enqueue(4)
// test0.enqueue(5)
// test0.dequeue(3)
// console.log(test0)



$(document).ready(function() {
  let input1;
  let user = new Queue()
  $('#form1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    console.log(input1)
    user.enqueue(input1)
    $('#output-1').text(JSON.stringify(user.data.stack))
    //$('#output-2').text(JSON.stringify(user.data.temp))
  });
  $('#form2').submit(function(){
    event.preventDefault()
    input2 = $('#input-2').val()
    console.log(input2)
    user.dequeue(input2)
    $('#output-1').text(JSON.stringify(user.data.stack))
    //$('#output-2').text(JSON.stringify(user.data.temp))
  });
});
