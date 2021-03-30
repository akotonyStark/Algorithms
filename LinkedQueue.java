public class LinkedQueue{
  
  private Node, first, last;
  
  private class Node{
    
  }
  
  
  public boolean isEmpty(){
    return first == null;
  }
  
  public void enqueue(String item){
    Node oldlast = last;
    last = new Node();
    last.item = item;
    last.next = null;
    if(isEmpty()){
      first = last;
    }
    else{
      oldlast.next = last;
    }
  }
  
  
