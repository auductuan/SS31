function a(str, target) {
    let ketQua = str.endsWith(target);
    return ketQua;
}
let chuoiGoc = "Hello, World!";
let chuoiCon = "World!";
let ketQua = a(chuoiGoc, chuoiCon);
console.log(ketQua); 