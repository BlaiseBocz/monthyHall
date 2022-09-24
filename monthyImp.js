// month hall problem 




function montyHall(){
    let carPosition = Math.floor(Math.random() *3 );
    let doorSelector =Math.floor(Math.random() *3 );
    let chooseDoor = [0,1,2].find((door) => door !== carPosition && door !== doorSelector)

    return carPosition === [0,1,2].find((door) => door !== doorSelector && door !== chooseDoor);
}

function gameSim(num){
    let noOfWonGames=0;

    for (let i=0;i<num;i++){
        noOfWonGames += montyHall();
    }

    return noOfWonGames;
}

console.log(gameSim(100));
