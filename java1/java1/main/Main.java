public class Main{
    public static void main(String[] args){
        System.out.println("This is JVM known main method");
    }
    /*
    private static void main(String[] args){
        System.out.println("This is not JVM known main method");
    }
    // RE: Main method not found in class Main, please define the main method as:
   //public static void main(String[] args)
    //or a JavaFX application class must extend javafx.application.Application
    public void main(String[] args){
        System.out.println("This is not JVM known main method");
    }
    // RE:  Main method is not static in class Main, please define the main method as:
   //public static void main(String[] args)
    
    public static int main(String[] args){
        System.out.println("This is not JVM known main method");
        return 0;
    }
    // RE: Main method must return a value of type void in class Main, please
    //define the main method as:
    //public static void main(String[] args)

    public static int main(String args){
        System.out.println("This is JVM known main method");
        return 0;
    }
    //Main method not found in class Main, please define the main method as:
    //public static void main(String[] args)
    //or a JavaFX application class must extend javafx.application.Application
    */
}