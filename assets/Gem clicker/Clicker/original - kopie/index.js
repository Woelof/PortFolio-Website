let gem = document.querySelector(' .gem-cost');
let parsedGem = parseFloat(gem.innerHTML);

//eerste clicker upgrade schema clicker// 

let clickerCost = document.querySelector('.clicker-cost');
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

//2e upgrade schema pickaxe// 

let pickaxeCost = document.querySelector('.pickaxe-cost');
let parsedPickaxeCost = parseFloat(pickaxeCost.innerHTML);
let pickaxeLevel = document.querySelector(".pickaxe-level")
let pickaxeIncrease = document.querySelector(".pickaxe-increase")
let parsedPickaxeIncrease = parseFloat(pickaxeIncrease.innerHTML)

//3e upgrade schema// 
let minerCost = document.querySelector('.miner-cost');
let parsedMinerCost = parseFloat(minerCost.innerHTML);
let minerLevel = document.querySelector(".miner-level")
let minerIncrease = document.querySelector(".miner-increase")
let parsedMinerIncrease = parseFloat(minerIncrease.innerHTML)

let gpcText = document.getElementById("gpc-text")
let gpsText = document.getElementById("gps-text")

let gpc = 1; 

let gps = 0;   

function incrementGem () {
    gem.innerHTML = Math.round(parsedGem += gpc);
}

//clicker function// 

function buyClicker(){
    if (parsedGem >= parsedClickerCost) {

        console.log(clickerCost)
        console.log(parsedClickerCost)
        gem.innerHTML = Math.round(parsedGem -= parsedClickerCost);

        clickerLevel.innerHTML ++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2));
        clickerIncrease.innerHTML =parsedClickerIncrease
        gpc += parsedClickerIncrease

        parsedClickerCost *= 1.2;
        clickerCost.innerHTML =Math.round(parsedClickerCost)
    }
}

//pickaxe function//

function buyPickaxe(){
    if  (parsedGem >= parsedPickaxeCost) {
        gem.innerHTML = Math.round(parsedGem -= parsedPickaxeCost);

        pickaxeLevel.innerHTML ++

        parsedPickaxeIncrease = parseFloat((parsedPickaxeIncrease * 1.04).toFixed(2));
        pickaxeIncrease.innerHTML =parsedPickaxeIncrease
        gps += parsedPickaxeIncrease

        parsedPickaxeCost *= 1.2;
        pickaxeCost.innerHTML =Math.round(parsedPickaxeCost)
    }
}


//miner function//

function buyMiner(){
    if  (parsedGem >= parsedMinerCost) {
        gem.innerHTML = Math.round(parsedGem -= parsedMinerCost);

        minerLevel.innerHTML ++

        parsedMinerIncrease = parseFloat((parsedMinerIncrease * 1.07).toFixed(2));
        minerIncrease.innerHTML =parsedMinerIncrease
        gps += parsedMinerIncrease

        parsedMinerCost *= 1.2;
        minerCost.innerHTML =Math.round(parsedMinerCost)
    }
}

setInterval(() => {
    parsedGem += gps /10
    gem.innerHTML = Math.round (parsedGem)
    gpcText.innerHTML = Math.round(gpc);
    gpsText.innerHTML = Math.round(gps);
}, 100);