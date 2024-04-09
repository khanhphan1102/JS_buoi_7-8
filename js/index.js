

let numberArray = [];

// THEMSO
function themSo() {

    let inputNumber = document.querySelector("#inputNumber").value * 1;
    numberArray.push(inputNumber);
    document.querySelector("#innerNumber").innerHTML = `👉 ${numberArray} `;
}

//ANHIENINPUTEX6
function AnHienInputEx6() {
    let chonChucNang = document.getElementById('chonChucNang').value;
    let inputViTri1 = document.getElementById('inputViTri1');
    let inputViTri2 = document.getElementById('inputViTri2');

    if (chonChucNang === '6') {
        inputViTri1.style.display = 'inline-block';
        inputViTri2.style.display = 'inline-block';
    } else {
        inputViTri1.style.display = 'none';
        inputViTri2.style.display = 'none';
    }
}

//TIMSO
function timSo() {

    let outPutNumber = 0;
    let chonChucNang = document.getElementById('chonChucNang').value;

    switch (chonChucNang) {
        case "0":
            outPutNumber = "Hãy chọn chức năng";
            document.querySelector('#innerTinhSo').innerHTML = `👉${outPutNumber}`;
            break;
        case "1":
            outPutNumber = tongSoDuong(numberArray);
            document.querySelector('#innerTinhSo').innerHTML = `👉  Tổng số dương :  ${outPutNumber}`;
            break;
        case "2":
            outPutNumber = demSoDuong(numberArray);
            document.querySelector('#innerTinhSo').innerHTML = `👉 Số dương : ${outPutNumber}`;
            break;
        case "3":
            outPutNumber = timSoNhoNhat(numberArray);
            document.querySelector('#innerTinhSo').innerHTML = `👉 Số nhỏ nhất : ${outPutNumber}`;
            break;
        case "4":
            outPutNumber = timSoDuongNhoNhat(numberArray);
            document.querySelector('#innerTinhSo').innerHTML = `👉 Số dương nhỏ nhất : ${outPutNumber}`;
            break;
        case "5":
            outPutNumber = timSoChanCuoiCung(numberArray);
            document.querySelector('#innerTinhSo').innerHTML = `👉 Số chẵn cuối cùng : ${outPutNumber}`;
            break;
        case "6":
            outPutNumber = doiChoHaiGiaTri(numberArray, inputViTri1, inputViTri2);
            document.querySelector('#innerTinhSo').innerHTML = `👉 Mảng sau  khi đổi : ${outPutNumber}`;
            break;
    }

}
