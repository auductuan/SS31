let fakefind = [1, 2, 3, 4, 5];
let a = b => b > 2;
let result;
for (let i = 0; i < fakefind.length; i++) {
    if (a(fakefind[i])) {
        result = fakefind[i];
        break;
    }
}
console.log(result); 
