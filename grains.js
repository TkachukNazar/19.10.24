let n = prompt("Number of powers: ");
count = 1;

if(isNaN(n)){
    alert("Неправильно введено число");
}
else{
    let x = 1;
    console.log(`number 1 is ${x}`);
    for (let i = 2; i <= n; i++) {
        x *= 2;
        console.log(`number ${i} is ${x}`);
        count += x;
        console.log(`count = ${count}`);
    }
    alert(`Мудрець отримав би: ${count} зерен`);
    alert(`Мудрець отримав би: ${((count*0.065)/1000)} кг зерна`);
}
