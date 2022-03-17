// För att skapa Json-fil via NPM och Json-Server

// module.exports = () => {
//     let casual = require('casual');

//     const data = { pumps: [] };

//     for (let i = 1; i < 101; i++) {
//         let pumpName = casual.random_element(['Super', 'Extrem', 'Nukleär ', 'Ekonomisk ', 'Miljö', 'Automatisk ',]);
//         data.pumps.push({
//             name: pumpName + "pump " + i,
//             description: "Beskrivning " + i,
//             price: Math.floor((Math.random() * 30000) + 4000),
//             instCost: Math.floor((Math.random() * 30000) + 4000)
//         });

//     }
//     return data
// }
function loadPumps() {
    fetch('db-Pumps.json')
        .then(res => res.json())
        .then(data => {
            let pumps = data.pumps;
            renderPumps(pumps);
        })
}
function renderPumps(pumps) {
    for (let pump of pumps) {
        let row = document.createElement('tr');
        row.classList.add('items');

        let pumpNameTd = document.createElement('td');
        pumpNameTd.innerHTML = pump.name;
        let pumpDescriptionTd = document.createElement('td');
        pumpDescriptionTd.innerHTML = pump.description;
        let pumpPriceTd = document.createElement('td');
        pumpPriceTd.innerHTML = pump.price;
        let pumpInstCostTd = document.createElement('td');
        pumpInstCostTd.innerHTML = pump.instCost;

        row.appendChild(pumpNameTd);
        pumpNameTd.classList.add('name');
        row.appendChild(pumpDescriptionTd);
        pumpDescriptionTd.classList.add('description');
        row.appendChild(pumpPriceTd);
        pumpPriceTd.classList.add('price');
        row.appendChild(pumpInstCostTd);
        pumpInstCostTd.classList.add('instCost');
        siteContent.appendChild(row);

    }
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        loadPumps();
    }
}