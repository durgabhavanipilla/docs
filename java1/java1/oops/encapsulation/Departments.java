public class Departments {
    public static void main(String[] args) {
        Employees employee = new Employee();
        employee.setFirstName("Salma");
        System.out.println(employee.getFirstName);
        employee.setlastName("Shaik");
        System.out.println(employee.getlastName);
        employee.setSalary("20000");
        System.out.println(employee.getSalary);
        employee.setCommissionPct("0.3");
        System.out.println(employee.getCommissionPct);
    }
}