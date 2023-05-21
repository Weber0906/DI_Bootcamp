// function insertRow() {
//         let table = document.getElementById("sampleTable");
        

//         let row = table.insertRow(-1); // Insert row at the last position
//          // Insert row at the last position
      
//         let cell1 = row.insertCell(0);
//         let cell2 = row.insertCell(1);
      
//         cell1.innerHTML = "New Row cell1";
//         cell2.innerHTML = "New Row cell2";
//       }

function insertRow() {
        let tbody = document.getElementById("sampleTable").firstElementChild;
        let row = tbody.firstElementChild;
        const rownum = tbody.children.length;
        const newRow = row.cloneNode(true);
        newRow.firstElementChild.innerText = `Row${rownum+1} cell1`
        newRow.lastElementChild.innerText = `Row${rownum+1} cell2`
        tbody.appendChild(newRow);

}
