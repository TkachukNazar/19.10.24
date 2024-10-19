let n = prompt("Введіть к-сть степенів двійки: ");
let x = 2;
for (let i = 1; i <= n; i++) {
    alert(`Number ${i} is ${x}`);
    console.log(`Number ${i} is ${x}`);
    x *= 2;
}