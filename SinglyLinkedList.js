class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

//create some nodes
let node1 = new Node(9)
let node2 = new Node(12)
let node3 = new Node(1)

node1.next = node2
node2.next = node3


//create linkedList
let list = new LinkedList(node1)

//accessing node
console.log(list.head.next.data)

function size() {
    let count = 0;
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}

//getting node count from head node
function getNodeCount(head){
  let count = 1
  let curr = head
  if(head.next == null){
    return 1
  }

  while(curr.next != null){
    curr = curr.next
    count++
  }
  return count
}

function clear() {
    this.head = null;
}

function getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}

function getFirst() {
    return this.head;
}

//deleting is the simplest
function deleteNode(node){
  node.next = null
}


//insert node at tail
function insertNodeAtTail(data){
  let curr = head
  let newNode = new Node(data)
    while(curr.next !== null){
        curr = curr.next
    }
    curr.next = newNode   
 return head
}
