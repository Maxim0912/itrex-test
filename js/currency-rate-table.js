'use strict';

let heads = [
    "Наименование иностранной валюты", 
    "Количество единиц иностранной валюты",
    "Официальный курс",
            
]

fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
    .then(response => response.json())
    .then(function generateTable(json) {
        let table = document.createElement("table");
        let captionRow = document.createElement("tr");
        for (let propertyName of heads) {
            let captionCell = document.createElement("th");
            captionCell.innerText = propertyName.toUpperCase();
            captionRow.append(captionCell);
        }
        table.append(captionRow);
    
        for (let element of json) {
            let row = table.insertRow();
            let cell0 = row.insertCell(0);
            cell0.innerText = element.Cur_Name;
            let cell1 = row.insertCell(1);
            cell1.innerText = element.Cur_Scale;
            let cell2 = row.insertCell(2);
            cell2.innerText = element.Cur_OfficialRate;
        }
        document.querySelector("main").append(table)
    });
