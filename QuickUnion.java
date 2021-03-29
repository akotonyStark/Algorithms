public class QuickUnion{

    private int[] id;

    public QuickUnion(int N){
        id = new int[N]
        for(int i = 0; i < N; i++){
            id[i] = i;
        }

        private int parent(int i){
            while (i != id[i]){
                i = id[i];
                return i;
            }
        }

        public boolean connected(int p, int q){
            return parent(p) == parent(q);
        }


        public void union(int q, int p){
            int i = parent(q);
            int j = parent(p);
            id[i] = j;
        }
    }
}