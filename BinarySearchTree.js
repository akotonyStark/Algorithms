// Node class
class Node
{
	constructor(data)
	{
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

// Binary Search tree class
class BinarySearchTree
{
    constructor()
    {
        // root of a binary seach tree
        this.root = null;
    }
  
	// helper method which creates a new node to
	// be inserted and calls insertNode
	insert(data)
	{
		// Creating a node and initailising
		// with data
		var newNode = new Node(data);

		// root is null then node will
		// be added to the tree and made root.
		if(this.root === null)
			this.root = newNode;
		else

			// find the correct position in the
			// tree and add the node
			this.insertNode(this.root, newNode);
	}

	// Method to insert a node in a tree
	// it moves over the tree to find the location
	// to insert a node with a given data
	insertNode(node, newNode)
	{
		// if the data is less than the node
		// data move left of the tree
		if(newNode.data < node.data)
		{
			// if left is null insert node here
			if(node.left === null)
				node.left = newNode;
			else

				// if left is not null recur until
				// null is found
				this.insertNode(node.left, newNode);
		}

		// if the data is more than the node
		// data move right of the tree
		else
		{
			// if right is null insert node here
			if(node.right === null)
				node.right = newNode;
			else

				// if right is not null recur until
				// null is found
				this.insertNode(node.right,newNode);
		}
	}
	
	//finding a specific node
	contains(value){
	  if(value === data){
	    return(true);
	  }
	  else if(value < data){
	    if(this.left == null){
	      return false;
	    }
	    else{
	      return this.left.contains(value)
	    }
	  }
	  else{
	    if(this.right == null){
	      return false
	    }
	    else{
	      return this.right.contains(value);
	    }
	  }
	}

	
	// Performs inorder traversal of a tree
	printInorder(node)
	{
		if(node !== null)
		{
			this.printInorder(node.left);
			console.log(node.data);
			this.printInorder(node.right);
		}
	}
	
	// Performs preorder traversal of a tree	
	printPreorder(node)
	{
		if(node !== null)
		{
			console.log(node.data);
			this.printPreorder(node.left);
			this.printPreorder(node.right);
		}
	}


// Helper function
    // remove(data)               
    // insertNode(node, newNode)
    // contains(node)
    // findMinNode()
    // getRootNode()
    // printInorder(node)
    // preorder(node)               
    // postorder(node)
    // search(node, data)
}

