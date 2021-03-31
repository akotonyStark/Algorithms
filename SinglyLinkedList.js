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
