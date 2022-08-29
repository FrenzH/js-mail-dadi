console.log('JS!')


function getRandomInt() {
    return Math.floor(Math.random() * 6);

} 






const arr = [ 1, 2, 3, 4, 5, 6 ]


let index1;
let index2;


index1 = getRandomInt( 0, 5 );
index2 = getRandomInt( 0, 5 );





if(arr[index1]>arr[index2]){
    console.log('PLAYER1 WINS')
    
} else if(arr[index1] === arr[index2]){
    console.log('DRAW')

    
} else {
    console.log('COMPUTER WINS')
}

