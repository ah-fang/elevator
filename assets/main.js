//main part of the script, calls all functions here
// import {call_to_floor, return_to_default_floor} from "./functions";


var current_floor = 0;
var valid_floors = [-1,0,1,2,3];
var default_floor = 0;
var dest_floor = 3;


//create box floor buttons will go in
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
var flrBtnA = document.createElement("button");
flrBtnA.textContent = valid_floors[0];
flrBtnA.id = `number${valid_floors[0]}`;
flrBtnA.className = "floor-button";

var flrBtnB = document.createElement("button");
flrBtnB.textContent = valid_floors[1];
flrBtnB.id = `number${valid_floors[1]}`;
flrBtnB.className = "floor-button";

var flrBtnC = document.createElement("button");
flrBtnC.textContent = valid_floors[2];
flrBtnC.id = `number${valid_floors[2]}`;
flrBtnC.className = "floor-button";

var flrBtnD = document.createElement("button");
flrBtnD.textContent = valid_floors[3];
flrBtnD.id = `number${valid_floors[3]}`;
flrBtnD.className = "floor-button";

var flrBtnE = document.createElement("button");
flrBtnE.textContent = valid_floors[4];
flrBtnE.id = `number${valid_floors[4]}`;
flrBtnE.className = "floor-button";

btnBox.append(flrBtnA,flrBtnB,flrBtnC,flrBtnD,flrBtnE);

function call_to_floor (current_floor, dest_floor){
    console.log('elevator has been called to floor ' + dest_floor);
    while(current_floor != dest_floor) {
        if (dest_floor < current_floor) {
            current_floor++;
            console.log("Elevator has moved to floor " + current_floor);
        }
        else {
            current_floor--;
            console.log("Elevator has moved to floor " + current_floor);
        }
        return current_floor;
    }
    console.log("Elevator is at " + current_floor);
};

function return_to_default_floor(current_floor, default_floor) {
    if (current_floor != default_floor) {
        console.log("Elevator is returning to default floor");
        while (current_floor != default_floor){
            if (current_floor < default_floor) {
                current_floor++;
            }
            else {
                current_floor--;
            }
        }
        return current_floor;
    }
    else {
        console.log("Elevator is on the default floor already");
    }
}; 

// export {call_to_floor, return_to_default_floor};
//reads number on button and calls elevator to that floor
flrBtn.addEventListener("click", () => {
    dest_floor = flrBtn.id;
    call_to_floor(current_floor, dest_floor);
});

console.log('elevator is now on floor ' + current_floor);
current_floor = call_to_floor(current_floor,dest_floor);
console.log('elevator is now on floor ' + current_floor);
return_to_default_floor(current_floor, default_floor);