function main(){
    getJobhistory();
}
async function getJobhistory(){
    let header = "<tr><th>Employee_Id</th><th>Start_Date</th><th>End_Date</th><th>Job_Id</th><th>Department_Id</th></tr>";
    //create XMLHttpRequest Object
    let xhr = new XMLHttpRequest();
    console.log("after new readystate =" +xhr.readyState);
    //open the request to the server
    xhr.open("GET", "http://localhost:6010/jobhistory/", true);
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
                let startDate = responseArray[i].startDate;
                let endDate = responseArray[i].endDate;
                let jobId = responseArray[i].jobId;
                let departmentId = responseArray[i].departmentId;
                rows += "<tr><td>" +employeeId+ "</td><td>" +startDate+ "</td><td>" +endDate+ "</td><td>" +jobId+ "</td><td>" +departmentId+ "</td></tr>";
                //rows = rows + row
            }
            console.log(rows);
            document.getElementById("jobhistory").innerHTML = "<table>" +header+ "" +rows+ "</table>";
        }
    }
}