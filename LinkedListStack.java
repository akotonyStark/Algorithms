public class Stack<Item>{

    private Node first = null;


    private class Node{
      String item;
      Node next;
    }
  
  public boolean isEmpty(){
    return first == null;
  }
    
    public Item pop(){
        Item item = first.item;
        first = first.next;
        return item;
    }
  
  public void push(Item item){
        Node oldfirst = first;
        first = new Node();
        first.item = item;
        first.next = oldfirst;
    }


} 
