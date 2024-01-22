class Employees {
    public String employeeId;
    public String email;
    public String phoneNumber;
    public Employees() {
        System.out.println("No org Constructor");
    }
    public Employees(String employeeId, String email, String phoneNumber) {
        this.employeeId = employeeId;
        this.email = email;
        this.phoneNumber = phoneNumber;
        System.out.println("Org Constructor");
    }
    public static void main(String[] args) {
        Employees emp1 = new Employees();
        System.out.println(emp1.employeeId);
        System.out.println(emp1.email);
        System.out.println(emp1.phoneNumber);
        Employees emp2 = new Employees("101","salma.shaik@gmail.com","9876543210");
        System.out.println(emp2.employeeId);
        System.out.println(emp2.email);
        System.out.println(emp2.phoneNumber);
    }
}