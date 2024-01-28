function main(){
    getJobs();
}
async function getJobs(){
    let header = "<tr><th>Job_Id</th><th>Job_Title</th><th>Min_salary</th><th>Max_salary</th></tr>";
    //create XMLHttpRequest Object
    let xhr = new XMLHttpRequest();
    console.log("after new readystate =" +xhr.readyState);
    //open the request to the server
    xhr.open("GET", "http://localhost:6010/jobs/", true);
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
                let jobId = responseArray[i].jobId;
                let jobTitle = responseArray[i].jobTitle;
                let minSalary = responseArray[i].minSalary;
                let maxSalary = responseArray[i].maxSalary;
                rows += "<tr><td>" +jobId+ "</td><td>" +jobTitle+ "</td><td>" +minSalary+ "</td><td>" +maxSalary+ "</td></tr>";
                //rows = rows + row
            }
            console.log(rows);
            document.getElementById("jobs").innerHTML = "<table>" +header+ "" +rows+ "</table>";
        }
    }
}