function timSoLonNhat(...cacMaNg) {
    let ketQua = [];
    for (let i = 0; i < cacMaNg.length; i++) {
        let soLonNhat = Math.max(...cacMaNg[i]);
        ketQua.push(soLonNhat);
    }
    return ketQua;
}
const ketQua = timSoLonNhat([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(ketQua);
