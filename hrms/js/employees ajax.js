function main(){
    getEmployees();
}
async function getEmployees(){
    let header = "<tr><th>Employee_Id</th><th>First_Name</th><th>Last_Name</th><th>Email</th><th>Phone_Number</th><th>Hire_Date</th><th>Job_Id</th><th>Salary</th><th>Commision</th><th>Manager_Id</th><th>Department_Id</th></tr>";
    //create XMLHttpRequest Object
    let xhr = new XMLHttpRequest();
    console.log("after new readystate =" +xhr.readyState);
    //open the request to the server
    xhr.open("GET", "http://localhost:6010/employees/", true);
    console.log("after open readystate" +xhr.readyState);
    //send the XMLHttpRequest to the server
    xhr.send();
    //has to wait( javascript won't because javascript is synchrounous)
    console.log("after send readystate" +xhr.readyState);
    //callback function. when the state will change, the below function will be executed.
    xhr.onreadystatechange = function(){
        console.log("onreadystatechange readystate" +xhr.readyState);
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("this.readyState" +xhr.readyState);
            const responseObject = JSON.parse(xhr.response);
            const responseArray = responseObject.result;
            console.log(responseArray);
            let rows = "";
            for(let i = 0; i<responseArray.length; i++){
                let employeeId = responseArray[i].employeeId;
                let firstName = responseArray[i].firstName;
                let lastName = responseArray[i].lastName;
                let email = responseArray[i].email;
                let phoneNumber = responseArray[i].phoneNumber;
                let hireDate = responseArray[i].hireDate;
                let jobId = responseArray[i].jobId;
                let salary = responseArray[i].salary;
                let commision = responseArray[i].commision;
                let managerId = responseArray[i].managerId;
                let departmentId = responseArray[i].departmentId;
                rows += "<tr><td>" +employeeId+ "</td><td>" +firstName+ "</td> <td>" +lastName+ "</td><td>"+email+ "</td><td>" +phoneNumber+ "</td><td>" +hireDate+ "</td><td>" +jobId+ "</td><td>"+salary+ "</td><td>" +commision+ "</td><td>" +managerId+ "</td><td>" +departmentId+ "</td></tr>";
                //rows = rows + row
            }
            console.log(rows);
            document.getElementById("employees").innerHTML = "<table>" +header+ "" +rows+ "</table>";
        }
    }
}