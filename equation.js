let a = prompt("Enter number a: ");
let b = prompt("Enter number b: ")
let c = prompt("Enter number c: ")
let D = b*b-4*a*c
if (a == 0){
    x = c/b;
    alert(`x = ${x}.`);
}
else if (b == 0 && c == 0) {
    x = 0;
    alert(`x = ${x}.`);
}
else if (b == 0 && c != 0){
    if (-c/a > 0){
        x1 = Math.sqrt(-c/a);
        x2 = -Math.sqrt(-c/a);
        alert(`x1 = ${x1}; x2 = ${x2}.`);
    }
    else if (-c/a <0 ) alert("No routes");
}
else if (b != 0 && c == 0){
    x1 = 0;
    x2 = -b/a;
    alert(`x1 = ${x1};  x2 = ${x2}.`);
}
else if (a!=0 && b!= 0 && c!=0){
    if (D > 0){
        x1 = (-b+Math.sqrt(D))/2*a;
        x2 = (-b-Math.sqrt(D))/2*a;
        alert(`x1 = ${x1}; x2 = ${x2}.`);
    }
    else if (D == 0){
        x = -b/2*a;
        alert(`x = ${x}.`);
    }
    else{
        x = null;
        alert(`No routes`);
    }
}
