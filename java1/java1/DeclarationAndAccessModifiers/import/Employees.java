import java.util.regex.Pattern;
import java.util.regex.Matcher;
public class Employees {
    public static void main(String[] args){
        String email = "shaiksalma31@outlook.com";
        String regex = "^[A-Za-z0-9+_. ]+@(.+)$";
        Pattern pattern = Pattern.compile(regex);
        Matcher macher = pattern.matcher(email);
        System.out.println(email +" is valid "+ macher.matches());
    }
}