'use strict';

fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
    .then(response => response.json())
    .then(function getDataFromApi(json) {
        let wrapper = document.createElement("section");
        wrapper.classList.add("wrapper");
        for (let item of json) {
            let singleCurrency = document.createElement("div");
            singleCurrency.classList.add("allCurrencies", "col-9");
            singleCurrency.innerHTML = `
                <p>За ${item.Cur_Scale}</p>
                <h4>${item.Cur_Name}</h4>
                <p>${item.Cur_OfficialRate}</p>
            `;
            wrapper.append(singleCurrency);        
        }
        document.querySelector("main").append(wrapper);
    });
      