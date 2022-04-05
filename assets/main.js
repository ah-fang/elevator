var current_floor = 0;
var valid_floors = [-1,0,1,2,3];
var default_floor = 0;
var dest_floor;
var floor_ids = ["A", "B", "C", "D", "E"];

//create box the floor buttons will go in
var btnBox = document.createElement("div");
document.querySelector("#btnBox").appendChild(btnBox);
btnBox.className = "button-box";


/*BROKEN: This for loop does not produce the buttons as desired.
Looks right, but only final entry will be responsive.
Possible solution:
Another array, var names for each button?*/ 
//loop that SHOULD create buttons and put them in the button box 
// for(i = valid_floors[0]; i < valid_floors.length; i++) {
//     var flrBtn = document.createElement("button");
//     flrBtn.textContent = valid_floors[i];
//     flrBtn.id = `number${valid_floors[i]}`;
//     btnBox.append(flrBtn); 
// }

//defining each button separately
flrBtnA = document.createElement("button");
flrBtnA.textContent = valid_floors[0];
flrBtnA.className = "floor-button";
flrBtnA.id = floor_ids[0];
flrBtnA.addEventListener("click", () => {
    dest_floor = valid_floors[0];
    current_floor = call_to_floor(current_floor,dest_floor);
    current_floor = return_to_default_floor(current_floor, default_floor);
});

var flrBtnB = document.createElement("button");
flrBtnB.textContent = valid_floors[1];
flrBtnB.className = "floor-button";
flrBtnB.id = floor_ids[1];
flrBtnB.addEventListener("click", () => {
    dest_floor = valid_floors[1];
    current_floor = call_to_floor(current_floor,dest_floor);
    current_floor = return_to_default_floor(current_floor, default_floor);
});

var flrBtnC = document.createElement("button");
flrBtnC.textContent = valid_floors[2];
flrBtnC.className = "floor-button";
flrBtnC.id = floor_ids[2];
flrBtnC.addEventListener("click", () => {
    dest_floor = valid_floors[2];
    current_floor = call_to_floor(current_floor,dest_floor);
    return_to_default_floor(current_floor, default_floor);
});

var flrBtnD = document.createElement("button");
flrBtnD.textContent = valid_floors[3];
flrBtnD.className = "floor-button";
flrBtnD.id = floor_ids[3];
flrBtnD.addEventListener("click", () => {
    dest_floor = valid_floors[3];
    current_floor = call_to_floor(current_floor,dest_floor);
    return_to_default_floor(current_floor, default_floor);
});

var flrBtnE = document.createElement("button");
flrBtnE.textContent = valid_floors[4];
flrBtnE.className = "floor-button";
flrBtnE.id = floor_ids[4];
flrBtnE.addEventListener("click", () => {
    dest_floor = valid_floors[4];
    current_floor = call_to_floor(current_floor,dest_floor);
    return_to_default_floor(current_floor, default_floor);
});

btnBox.append(flrBtnA,flrBtnB,flrBtnC,flrBtnD,flrBtnE);

function call_to_floor (current_floor, dest_floor){
    console.log('Elevator has been called to floor ' + dest_floor);
    if (current_floor != dest_floor) {
        if (dest_floor < current_floor) {
            while (dest_floor < current_floor) {
                current_floor--;
                console.log("Elevator has moved to floor " + current_floor);
            }
        }
        else {
            while (dest_floor > current_floor) {
                current_floor++;
                console.log("Elevator has moved to floor " + current_floor);
            }
        }
    }
    else {
        console.log("Already there. Ding!");
    }    
    return current_floor;
};

function return_to_default_floor(current_floor, default_floor) {
    console.log(current_floor);
    if (current_floor != default_floor) {
        console.log("Elevator is returning to default floor");
        while (current_floor != default_floor){
            if (current_floor < default_floor) {
                current_floor++;
                console.log("Elevator has moved to floor " + current_floor);
            }
            else {
                current_floor--;
                console.log("Elevator has moved to floor " + current_floor);
            }
        }
    }
    return current_floor;
}; 

////////////////////////CANVAS SECTION////////////////////////
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var rectH = 60;
var rectW = 10;
var rectX = (canvas.width - rectW)/2;
var windowRowCount = 5;
var windowColumnCount = 3;
var windowWidth = 10;
var windowHeight = 30;
var windowPadding = 10;
var windowOffsetTop = 30;
var windowOffsetLeft = 30;
var windows = [];
         
//building
function drawBuilding() {
    ctx.beginPath();
    ctx.rect(rectX, canvas.height-rectH, rectW, rectH);
    ctx.fillStyle = "#3300AA";
    ctx.fill();
    ctx.closePath();
}

//windows
function drawWindows() {
    ctx.beginPath();
    for(var c=0; c<windowColumnCount; c++) {
        window[c] = [];
        for(var r=0; r<windowRowCount; r++) {
        window[c][r] = { x: 0, y: 0, status: 1 };
        }
    }
}

function draw() {
    drawBuilding();
    drawWindows();
}










//reads button id and calls elevator to that floor
// document.querySelector(".floor-button").addEventListener("click", (clicked_id) => {
//     switch(clicked_id) {
//         case "A":
//             dest_floor = valid_floors[0];
//             break;

//         case "B":
//             dest_floor = valid_floors[1];
//             break;
        
//         case "C":
//             dest_floor = valid_floors[2];
//             break;
        
//         case "D":
//             dest_floor = valid_floors[3];
//             break;
        
//         case "E":
//             dest_floor = valid_floors[4];
//             break;
                    
//     }
//     call_to_floor(current_floor, dest_floor);
// });
// console.log('elevator is now on floor ' + current_floor);
// current_floor = call_to_floor(current_floor,dest_floor);
// console.log('elevator is now on floor ' + current_floor);
// return_to_default_floor(current_floor, default_floor);