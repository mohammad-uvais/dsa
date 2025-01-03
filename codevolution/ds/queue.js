/**
 * The queue data structure is a sequential collection of elements that follows the principal of FIFO.
 *
 * A queue of people. People enter the queue at one end (rear/tail) and leave the queue at the other end (front/head).
 *
 * Queue is an abstract data type. It is defined by its behaviour rather than being a mathematical model.
 *
 * The Queue data structure  supports two main operations
 * -- Enqueue, which adds an element to the rear/tail of the collection
 * -- Dequeue, which removes an element from the front/head of the collection
 */

/**
 * Queue usage
 * Printers
 * CPU task scheduling
 * Callback queue in JS runtime
 */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
