class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    let prev;
    let current = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      while (current.next) {
        prev = current;
        current = current.next;
        this.tail = prev;
      }
      prev.next = null;
    }
    this.length--;

    return current;
  }

  reverse() {
    let node = this.head;

    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    while (node) {
      next = node.next;
      node.next = prev;

      prev = node;
      node = next;
    }
  }

  print() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
    return arr;
  }
}

function findMiddle() {
  let current = this.head;
  let result = this.head;

  while (current && current.next) {
    //current.next should be truthy else we might get error on #7
    result = result.next; //increment result once (slow pointer)
    current = current.next.next; //increment current twice (fast pointer)
  }
  console.log(result);
}

let list = new LinkedList();
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
findMiddle.bind(list);
