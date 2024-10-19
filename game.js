let x = Math.floor(Math.random() * 10);
console.log(x);
while(true){
    let n = prompt("Input n from 0 to 10");
    if (isNaN(n)) break;
    else if (n == x) {
        alert("You win!");
        break;
    }
    else if(x > n){
        alert("too small!");
    }
    else if (x < n) {
        alert("too big");
    }
}
alert("Game over!");