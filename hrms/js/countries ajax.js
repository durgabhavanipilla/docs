function main(){
    getCountries();
}
async function getCountries(){
    let header = "<tr><th>Country_ID</th><th>country_Name</th><th>Region_ID</th></tr>";
    //create XMLHttpRequest Object
    let xhr = new XMLHttpRequest();
    console.log("after new readystate =" +xhr.readyState);
    //open the request to the server
    xhr.open("GET", "http://localhost:6010/countries/", true);
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
                let country_Id = responseArray[i].countryId;
                let country_Name = responseArray[i].countryName;
                let region_Id = responseArray[i].regionId;
                rows += "<tr><td>" +country_Id+ "</td><td>" +country_Name+ "</td><td>" +region_Id+ "</td></tr>";
                //rows = rows + row
            }
            console.log(rows);
            document.getElementById("countries").innerHTML = "<table>" +header+ "" +rows+ "</table>";
        }
    }
}