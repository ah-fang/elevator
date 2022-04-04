//main part of the script, calls all functions here
import {call_to_floor, return_to_default_floor} from "./functions";
//will be an integer between 0 - 4
var current_floor = 0;
var valid_floors = [-1,0,1,2,3];
var default_floor = 0;
var dest_floor = 3;

//create box floor buttons will go in
var btnBox = document.createElement("div");
document.getElementById("btnBox").appendChild(btnBox);
btnBox.textContent = "text";

//reads number on button and calls elevator to that floor
flrBtn.addEventListener("click", () => {
    dest_floor = flrBtn.id;
    call_to_floor(current_floor, dest_floor);
});

console.log('elevator is now on floor ' + current_floor);
current_floor = call_to_floor(current_floor,dest_floor);
console.log('elevator is now on floor ' + current_floor);
return_to_default_floor(current_floor, default_floor);