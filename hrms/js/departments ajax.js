function main(){
    getDepartments();
}
async function getDepartments(){
    let header = "<tr><th>Department_Id</th><th>Department_Name</th><th>Manager_Id</th><th>Loacation_ID</th></tr>";
    //create XMLHttpRequest Object
    let xhr = new XMLHttpRequest();
    console.log("after new readystate =" +xhr.readyState);
    //open the request to the server
    xhr.open("GET", "http://localhost:6010/departments/", true);
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
                let  departmentId = responseArray[i].departmentId;
                let departmentName = responseArray[i].departmentName;
                let managerId = responseArray[i].managerId;
                let locationId = responseArray[i].locationId;
                rows += "<tr><td>" +departmentId+ "</td><td>" +departmentName+ "</td><td>" +managerId+ "</td><td>"  +locationId+ "</td></tr>";
                //rows = rows + row
            }
            console.log(rows);
            document.getElementById("departments").innerHTML = "<table>" +header+ "" +rows+ "</table>";
        }
    }
}