function main(){
    getRegions();
}
async function getRegions(){
    let header = "<tr><th>Region_ID</th><th>Region_Name</th></tr>";
    //create XMLHttpRequest Object
    let xhr = new XMLHttpRequest();
    console.log("after new readystate =" +xhr.readyState);
    //open the request to the server
    xhr.open("GET", "http://localhost:6010/regions/", true);
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
            const responseArray = JSON.parse(xhr.response);
            console.log(responseArray);
            let rows = "";
            for(let i = 0; i<responseArray.length; i++){
                let region_ID = responseArray[i].regionid;
                let region_Name = responseArray[i].regionName;
                rows += "<tr><td>" +region_ID+ "</td><td>" +region_Name+ "</td></tr>";
                //rows = rows + row
            }
            console.log(rows);
            document.getElementById("regions").innerHTML = "<table>" +header+ "" +rows+ "</table>";
        }
    }
}