let n = prompt("Введіть число");
if (isNaN(n)){
    alert("Ви ввели не число");
}
else{
let y = 1;
let i = 1;
while (i <= n){
    y *= i;
    i++;
}
alert(`Факторіал числа ${n}:  ${y}`);
}