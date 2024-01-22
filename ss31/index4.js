let truncate = function(str, n) {
    if (str.length > n) {
        return str.slice(0, n) + "...";
    } else {
        return str;
    }
};
let a = "Hello world, I’m Peter";
let rutgon = 11;
let ketQua = truncate(a, rutgon);
console.log(ketQua); 
