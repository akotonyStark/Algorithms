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

let node1 = new Node(2)
let node2 = new Node(5)
node1.next = node2

//create linkedList
let list = new LinkedList(node1)

//accessing node
console.log(list.head.next.data)