// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select("tbody")


for (let i = 0; i < tableData.length; i++){
    var row = table.append("tr")
    for (const [key, value] of Object.entries(tableData[i])){
        var data = row.append("td");
        data.text(value)
    }
}


function click(){

    var userDate = d3.select("#datetime").property("value")

    if  (userDate) {
        var newTable = tableData.filter(x => x.datetime === userDate)
    }

    table.html("")
    for (let i=0; i< newTable.length; i++){
        var newRow = table.append('tr')
        for (const [key, value] of Object.entries(newTable[i])){

            var newData = newRow.append("td")
            newData.text(value)
        }
    }
}

d3.selectAll("#filter-btn").on("click", click);