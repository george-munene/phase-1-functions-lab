// Code your solution in this file!

function distanceFromHqInBlocks(distValue){
    //returns the number if blocks in a given value


    if (distValue >= 42){
         return distValue - 42; 
    }
    else{
        return 42 - distValue;
    }
     
   
   
}

function distanceFromHqInFeet(dist) {
  const distInBlock = distanceFromHqInBlocks(dist);
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
  return distInBlock * 264;




}

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled

    if (destination > start){
        return (destination - start) * 264;
    }else{
        return (start - destination) * 264;
    }


    
  }
    function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const dist = distanceTravelledInFeet(start, destination);

    if( dist <= 400){
        return 0;
    }else if(dist >400 && dist <=2000){
        return 2.56;
    }else if (dist >2000 && dist <= 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
  }