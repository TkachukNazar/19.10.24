let count = prompt("Number of bottles: ");
document.write(`<h2>Song about ${count} bottles of beer</h2>`);

let count2 = count;
for (let i = 1; i < count; i++) {
    count2--
    if(count2 == 1){
        document.write(`<br>${count2} bottle of beer on the wall,`);
        document.write(`<br>${count2} bottle of beer,`);
    }
    else{
        document.write(`<br>${count2} bottles of beer on the wall,`);
        document.write(`<br>${count2} bottles of beer,`);
    }
    document.write(`<br>If one of those bottles should happen to fall`);
}

document.write(`<br>No more bottles of beer on the wall, no more bottles of beer.
<br>There's nothing else to fall, because there's no more bottles of beer on the wall.`);