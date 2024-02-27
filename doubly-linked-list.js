class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    let newList = new DoublyLinkedListNode(val);
    if(this.head == null) {
      this.head = newList;
      this.tail = newList
      
    }; 
    newList.next = this.head;
    this.head.prev = newList;
    newList.next = this.head;
    this.head = newList
    
    this.length += 1;
  }

  addToTail(val) {
    // Your code here
    let newNode = new DoublyLinkedListNode(val);
    
    if(this.head == null) {
       this.head = newNode;
       this.tail = newNode;
       this.length += 1;
    } else {
    let temp = this.head
    while(temp.next !== null) {
      temp = temp.next;
    }
    
    this.head.prev = null;
    temp.next = newNode;
    newNode.prev = temp;
    this.tail = newNode;
    this.length += 1;
  }

}

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;