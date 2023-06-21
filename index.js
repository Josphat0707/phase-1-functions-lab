function distanceFromHqInBlocks(pickupLocation){
    return Math.abs(pickupLocation - 42);
    }

function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) *264;
    }

function distanceTravelledInFeet(start, destination){
        let distance = Math.abs(start - destination) * 264;
        return distance;
    }

function calculatesFarePrice(start, destination){
    const distance = Math.abs(start - destination) * 264;
    let fare;

    if (distance <= 400){
        return fare = 0;
    }
    else if(distance > 400 && distance <= 2000){
        return fare = (distance - 400) *0.02;
    }
    else if (distance > 2000 && distance <= 2500){
        return fare = 25;
    }
    else if(distance > 2500){
        return fare = `cannot travel that far`;
    } 
}


    

    


