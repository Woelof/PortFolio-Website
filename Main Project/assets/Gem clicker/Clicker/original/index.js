let gem = document.querySelector(' .gem-cost');
let parsedGem = parseFloat(gem.innerHTML);

let gpcText = document.getElementById("gpc-text")
let gpsText = document.getElementById("gps-text")

let gpc = 1; 
let gps = 0;   

document.getElementById("clicker").addEventListener("click", buy.bind (this, 1.03, "gpc"));
document.getElementById("pickaxe").addEventListener("click", buy.bind (this, 1.04, "gps"));
document.getElementById("miner").addEventListener("click", buy.bind (this, 1.07, "gps"));

function incrementGem () {
    gem.innerHTML = Math.round(parsedGem += gpc);
}

function buy(inscreaseBy, gpc0rGps, upgrade) {
    let upgradeName       = upgrade.currentTarget.id;
    let cost              = document.querySelector(`.${upgradeName}-cost`);
    let parsedCost        = parseFloat(cost.innerHTML);
    let level             = document.querySelector(`.${upgradeName}-level`);
    let increase          = document.querySelector(`.${upgradeName}-increase`);
    console.log(increase)
    let parsedinscrease   = parseFloat(increase.innerHTML);

    if (parsedGem >= parsedCost) {
        gem.innerHTML = Math.round(parsedGem -= parsedCost);

        level.innerHTML ++

        parsedInscrease = parseFloat((parsedinscrease * inscreaseBy).toFixed(2));
        increase.innerHTML = parsedinscrease;
        gpc0rGps == "gps" ? gps+= parsedinscrease : gpc += parsedinscrease;

        parsedCost += 1.2;
        cost.innerHTML = Math.round(parsedCost)
    }
}


setInterval(() => {
    parsedGem += gps /10
    gem.innerHTML = Math.round (parsedGem)
    gpcText.innerHTML = Math.round(gpc);
    gpsText.innerHTML = Math.round(gps);
}, 100);

