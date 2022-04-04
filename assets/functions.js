//note: time delay has not been implemented in this version
// function will be on each floor

function call_to_floor (current_floor, dest_floor){
    console.log('elevator has been called to floor ' + str(dest_floor))
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

export {call_to_floor, return_to_default_floor};