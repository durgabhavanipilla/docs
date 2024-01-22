public class NonStatic{
    public static void main(String[] args){
        //main();
        //error: non-static method main() cannot be referenced from a static content
        NonStatic ns = new NonStatic();
        ns.add(2,3);
    }
    public void add(int a, int b){
        System.out.println("This is non static method add = " +(a+b));
    }
}