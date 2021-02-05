//sets initial variables like prices for items and upgrades an how many owned
let juice = 0;

let juicerPrice = 50;
let juicerUpgradePrice = 50;
let juicerRate = 1;
let juiceUpgradeRate = 0.5;

let mumPrice = 500;
let mumUpgradePrice = 500;
let mumRate = 2;
let mumUpgradeRate = 0.5;

let juicefarmPrice = 1000;
let juicefarmUpgradePrice = 1000;
let juicefarmRate = 2.5;
let juicefarmUpgradeRate = 0.2;

let juicehousePrice = 5000;
let juicehouseUpgradePrice = 5000;
let juicehouseRate = 3;
let juicehouseUpgradeRate = 1;

let juicemachinePrice = 10000;
let juicemachineUpgradePrice = 10000;
let juicemachineRate = 4;
let juicemachineUpgradeRate = 2;

let juicerOwned = 0;
let juicerUpgradeOwnded = 0;
let mumOwnded = 0;
let mumUpgradeOwnded = 0;
let juicefarmOwnded = 0;
let juicefarmUpgradeOwnded = 0;
let juicehouseOwnded = 0;
let juicehouseUpgradeOwnded = 0;
let juicemachineOwnded = 0;
let juicemachineUpgradeOwnded = 0;



let totalRate = 0;
let clickRate = 1;

//calls the progress bar
move()
//moves the progress bar, increases 100% every 1000ms (1% = 10ms) when the  bar is full it counts the totalrate to the juice and updates it. then it resets
function move() {
    var i = 0;
    if (i == 0) {
        i = 0;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                elem.style.width = 0
                juice += totalRate;
                UpdateJuice();
                move()
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

//updates juice in the dom
function UpdateJuice() {
    document.getElementById("juice-display").innerHTML = juice;
}


//updates juice, totalRate
function refreshValues() {
    document.getElementById("juice-display").innerHTML = juice;
    document.getElementById("rate-display").innerHTML = totalRate + " Juice/sec";
};

//updates juice, totalRate juicerOwned and juicerUpgradeOwned to the dom
function writeJuicerToDom() {
    refreshValues();
    document.getElementById("juicer-owned").innerHTML = juicerOwned + " clicker upgrades owned";
    document.getElementById("juicer-upgrades-owned").innerHTML = juicerUpgradeOwnded + " upgrades owned";
}

//updates juice, totalRate mumOwned and mumUpgradeOwned to the dom
function writeMumToDom() {
    refreshValues();
    document.getElementById("mum-owned").innerHTML = mumOwnded + " clicker upgrades owned";
    document.getElementById("mum-upgrades-owned").innerHTML = mumUpgradeOwnded + " upgrades owned";
}

//updates juice, totalRate juicefarmOwned and juicefarmUpgradeOwned to the dom
function writeJuicefarmToDom() {
    refreshValues();
    document.getElementById("juicefarm-owned").innerHTML = juicefarmOwned + " clicker upgrades owned";
    document.getElementById("juicefarm-upgrades-owned").innerHTML = juicefarmUpgradeOwnded + " upgrades owned";
}

//updates juice, totalRate juicehouseOwned and juicehouseUpgradeOwned to the dom
function writeJuicehouseToDom() {
    refreshValues();
    document.getElementById("juicehouse-owned").innerHTML = juicehouseOwned + " clicker upgrades owned";
    document.getElementById("juicehouse-upgrades-owned").innerHTML = juicehouseUpgradeOwnded + " upgrades owned";
}

//updates juice, totalRate juicemachineOwned and juicemachineUpgradeOwned to the dom
function writeJuicemachineToDom() {
    refreshValues();
    document.getElementById("juicemachine-owned").innerHTML = juicemachineOwned + " clicker upgrades owned";
    document.getElementById("juicemachine-upgrades-owned").innerHTML = juicemachineUpgradeOwnded + " upgrades owned";
}

//when the main icon is clicked it is increased and updated
document.getElementById("btn-main").addEventListener("click", () => {
    juice += clickRate;
    UpdateJuice()
});

//when juicer is bought it checks for funds then handles the costs, clickRate and juicerOwned and then updates all the entries
document.getElementById("btn-buy-juicer").addEventListener("click", () => {
    if (juice > juicerPrice) {
        juice -= juicerPrice;
        clickRate += juicerRate;
        juicerOwned++;
        writeJuicerToDom();
    }
});

//when juicerupgrade is bought it checks for funds then handles the costs, totalRate and juicerOwned and then updates all the entries
document.getElementById("btn-upgrade-juicer").addEventListener("click", () => {
    if (juice > juicerPrice) {
        juice -= juicerUpgradePrice;
        totalRate += juiceUpgradeRate;
        juicerUpgradeOwnded++;
        writeJuicerToDom();
    }
});


//when mum is bought it checks for funds then handles the costs, clickRate and mumOwned and then updates all the entries
document.getElementById("btn-buy-mum").addEventListener("click", () => {
    if (juice > mumPrice) {
        juice -= mumPrice;
        clickRate += mumRate;
        mumOwnded++;
        writeMumToDom();
    }
});

//when mumUpgrade is bought it checks for funds then handles the costs, clickRate and mumUpgradeOwned and then updates all the entries
document.getElementById("btn-upgrade-mum").addEventListener("click", () => {
    if (juice > mumUpgradePrice) {
        juice -= mumUpgradePrice;
        totalRate += mumUpgradeRate;
        mumUpgradeOwnded++;
        writeMumToDom();
        initBar()
    }
});

//when juicefarm is bought it checks for funds then handles the costs, clickRate and juiceOwned and then updates all the entries
document.getElementById("btn-buy-juicefarm").addEventListener("click", () => {
    if (juice > juicefarmPrice) {
        juice -= juicefarmPrice;
        clickRate += juicefarmRate;
        juicefarmOwnded++;
        writeJuicefarmToDom();
    }
});

//when juicefarmUpgrade is bought it checks for funds then handles the costs, clickRate and juicefarmUpgradeOwned and then updates all the entries
document.getElementById("btn-upgrade-juicefarm").addEventListener("click", () => {
    if (juice > juicefarmUpgradePrice) {
        juice -= juicefarmUpgradePrice;
        totalRate += juicefarmUpgradeRate;
        juicefarmUpgradeOwnded++;
        writeJuicefarmToDom();
        initBar()
    }
});

//when juicehouse is bought it checks for funds then handles the costs, clickRate and juiceOwned and then updates all the entries
document.getElementById("btn-buy-juicehouse").addEventListener("click", () => {
    if (juice > juicehousePrice) {
        juice -= juicehousePrice;
        clickRate += juicefarmRate;
        juicehouseOwnded++;
        writeJuicehouseToDom();
    }
});

//when juicehouseUpgrade is bought it checks for funds then handles the costs, clickRate and juicehouseUpgradeOwned and then updates all the entries
document.getElementById("btn-upgrade-juicehouse").addEventListener("click", () => {
    if (juice > juicehousepgradePrice) {
        juice -= juicehouseUpgradePrice;
        totalRate += juicehouseUpgradeRate;
        juicehouseUpgradeOwnded++;
        writeJuicehouseToDom();
        initBar()
    }
});

//when juicemachine is bought it checks for funds then handles the costs, clickRate and juiceOwned and then updates all the entries
document.getElementById("btn-buy-juicemachine").addEventListener("click", () => {
    if (juice > juicemachinePrice) {
        juice -= juicemachinePrice;
        clickRate += juicemachineRate;
        juicemachineOwnded++;
        writeJuicemachineToDom();
    }
});

//when juicemachineUpgrade is bought it checks for funds then handles the costs, clickRate and juicemachineUpgradeOwned and then updates all the entries
document.getElementById("btn-upgrade-juicemachine").addEventListener("click", () => {
    if (juice > juicemachinepgradePrice) {
        juice -= juicemachineUpgradePrice;
        totalRate += juicemachineUpgradeRate;
        juicemachineUpgradeOwnded++;
        writeJuicehouseToDom();
        initBar()
    }
});
