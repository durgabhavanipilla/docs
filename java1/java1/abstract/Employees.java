public class Employees extends Users{
    public static void main(String[] args) {
        // Users user = new Users();
        // CE: Users is abstract; cannot be instantiated
        Employees emp = new Employees();
        String userName = emp.getUserName();
        String mobileNo = emp.getMobileNo();
        System.out.println(userName);
        System.out.println(mobileNo);
    }
    //override or overwrite
    public String getMobileNo() {
        //logic = implementations = defination
        return "9876543210";
    }
}
