public class Stack{

    public Stack(int N){
        s = new String[N];
    }


    public void push(String item){
        if(N == s.length){
            resize(2 * s.lenth)
        }
        s[N++] = item;
    }

    private void resize(int capacity){
        String[] copy = new String[capacity];
        for(int i = 0; i < N; i++){
            copy[i] == s[i];
            s = copy;
        }

    }

} 
