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
