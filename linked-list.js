class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
    
  }

  addToHead(val) {
    // Your code here
    let newList = new LinkedListNode(val);
    newList.next = this.head;
    this.head = newList
    this.length += 1;
  }

  addToTail(val) {
    // Your code here
    let newNode = new LinkedListNode(val);
    
    if(this.head == null) {
       this.head = newNode;
       this.length += 1;
    } else {
    let temp = this.head
    while(temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
    this.length += 1;
  }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;