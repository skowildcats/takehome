console.log('Welcome to HackerU-JustCode Assignment');
$(document).ready(function() {
    getRemoteData();
});
function getRemoteData() {
    // write your code here to fetch data from api.
    let table = document.getElementById("mytable")
    let tableHeaders = document.getElementsByTagName("th")
    let camelMapping = {
        "id": "id",
        "MethodName": "methodName",
        "Medium": "medium",
        "YearOfOrigin": "yearOfOrigin",
        "ModifiedOn": "modifiedOn"
    }
    fetch("https://www.justcode.com/dataservice/api/paymentMethod/list")
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                let row = table.insertRow(table.length)

                for (let j = 0; j < tableHeaders.length; j++) {
                    let cell = row.insertCell(j)

                    cell.innerHTML = data[i][camelMapping[tableHeaders[j].innerText]]
                }
            }
        })
        .catch((error) => {
            console.log("An error has occured " + error)
        });
}