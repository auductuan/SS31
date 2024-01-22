function chunkArrayInGroups(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let a = 3;

let ketQua = chunkArrayInGroups(arr, a);
console.log(ketQua); 
