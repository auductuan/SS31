const chuoiTest = ' ';
const cacTu = chuoiTest.split(' ');
let tuDaiNhat = '';
let doDaiTuDaiNhat = 0;
for (let i = 0; i < cacTu.length; i++) {
    if (cacTu[i].length > doDaiTuDaiNhat) {
        tuDaiNhat = cacTu[i];
        doDaiTuDaiNhat = cacTu[i].length;
    }
}
const ketQua = `${tuDaiNhat} (${doDaiTuDaiNhat})`;
console.log(ketQua);
