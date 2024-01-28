function main(){
    getRegions();
}
async function getRegions(){
    let header = "<tr><th>Location_Id</th><th>Street_Address</th><th>Postal_Code</th><th>City</th><th>State_Provinance</th><th>Country_Code</th></tr>";
    //create XMLHttpRequest Object
    let xhr = new XMLHttpRequest();
    console.log("after new readystate =" +xhr.readyState);
    //open the request to the server
    xhr.open("GET", "http://localhost:6010/locations/", true);
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
                let locationId= responseArray[i].locationId;
                let streetAddress = responseArray[i].streetAddress;
                let postalCode = responseArray[i].postalCode;
                let city = responseArray[i].city;
                let stateProvinance = responseArray[i].stateProvinance;
                let countryId = responseArray[i].countryId;
                rows += "<tr><td>" +locationId+ "</td><td>" +streetAddress+ "</td><td>" +postalCode+ "</td><td>" +city+ "</td><td>" +stateProvinance+ "</td><td>" +countryId+ "</td></tr>";
                //rows = rows + row
            }
            console.log(rows);
            document.getElementById("locations").innerHTML = "<table>" +header+ "" +rows+ "</table>";
        }
    }
}