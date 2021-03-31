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
