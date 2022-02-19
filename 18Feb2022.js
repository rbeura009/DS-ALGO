function printAsArray() {
  let res = [];
  let current = this.head;
  if (!current) return res;
  while (current) {
    res.push(current.value);
    current = current.next;
  }
  return res;
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

//implement Stack
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(ele) {
    let node = new Node(ele);
    if (this.length) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  remove() {
    if (this.length <= 0) return null;
    let node = null;
    node = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return node;
  }
}

let stack = new Stack();
stack.insert(1);
stack.insert(2);
stack.insert(3);
stack.insert(4);
stack.insert(5);
stack.insert(6);
stack.insert(7);
stack.insert(8);
stack.remove();
stack.remove();
console.log(printAsArray.call(stack));

/************************************************************************************************************************/

//implement Queue
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  eneue(ele) {
    let node = new Node(ele);
    if (this.length) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  deque() {
    if (this.length <= 0) return null;
    let node = null;
    node = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return node;
  }
}

let queue = new Queue();
queue.eneue(1);
queue.eneue(2);
queue.eneue(3);
queue.eneue(4);
queue.eneue(5);
queue.eneue(6);
queue.eneue(7);
queue.eneue(8);
queue.deque();
queue.deque();
queue.deque();
console.log(printAsArray.call(queue));

//implement singly linked list

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.length) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length < 1) return null;
    let node = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      let prev = null;

      while (current.next) {
        prev = current;
        current = current.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.length--;
    return node;
  }

  unshift(val) {
    const node = new Node(val);
    if (this.length) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length < 1) return null;
    let node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    node.next = null;
    return node;
  }

  insert(val, pos) {
    if (pos === 0) return this.unshift(val);
    if (pos === this.length + 1) return this.push(val);

    let node = new Node(val);
    let current = this.head;
    let prev = null;
    let index = 0;
    while (index < pos) {
      prev = current;
      current = current.next;
      index++;
    }
    prev.next = node;
    node.next = current;
    this.length++;
    return this;
  }

  remove(pos) {
    if (pos === this.length + 1) return this.pop();
    if (pos === 0) return this.shift();

    let node = null;
    let current = this.head;
    let prev = null;
    let index = 0;
    while (index < pos) {
      prev = current;
      current = current.next;
      index++;
    }
    node = current;
    prev.next = current.next;
    node.next = null;
    this.length--;
    return node;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next = null;
    let prev = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}
