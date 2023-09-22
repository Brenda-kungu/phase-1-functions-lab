// Code your solution in this file! 
function distanceFromHqInBlocks(pickUpLocation) {
    let distance;
    if (pickUpLocation >= 42){
        distance = pickUpLocation - 42;
    } else if (pickUpLocation < 42){
        distance = 42 - pickUpLocation;
    } return distance;

}

function distanceFromHqInFeet(pickUpLocation) {
    let distance;
    distanceFromHqInBlocks(pickUpLocation)
    if (pickUpLocation >= 42){
        distance = pickUpLocation - 42;
    } else if (pickUpLocation < 42){
        distance = 42 - pickUpLocation;
    } return distance*264;
}
function distanceTravelledInFeet(start,finish){
    let distance;
    if (start >= finish){
        distance = start - finish
    } else if (start < finish) {
        distance = finish - start
    } return distance*264

}

function calculatesFarePrice(start,finish) {
    let farePrice;
    let distance = distanceTravelledInFeet(start,finish)
    if (distance <= 400){
        return farePrice = 0;
    } else if (distance > 400 && distance <=2000) {
        return farePrice = (distance - 400)*2/100;
    } else if (distance > 2000 && distance <=2500) {
        return farePrice = 25;
    } else {
        return `cannot travel that far`
    }
}

