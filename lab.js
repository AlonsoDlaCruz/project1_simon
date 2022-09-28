let gameArray = [1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1];
let remain = 5;
let count = 0;
let PCturn = true;
intervalId = 0;


function gameTurn() {

    if(count == remain -1) {
        console.log("this happen")
        clearInterval(start);
        PCturn = false
    }

    console.log("init: gameTurn")
    PCturn=true;
    switch (gameArray[count])  {                
        case 1:
            console.log("selected: button green")
            break;
        case 2:
            console.log("selected: button green")
            break;
        case  3:
            console.log("selected: button blue")
            break;
        case 4:
            console.log("selected: button yellow")
            break;
        default:
            console.log("Number in arr not valid");
    }
    console.log(count)
    count++
}

let start = setInterval(gameTurn, 1000)

gameTurn()