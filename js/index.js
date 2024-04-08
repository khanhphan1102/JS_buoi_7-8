

let numberArray = [];

// THEMSO
function themSo() {

    let inputNumber = document.querySelector("#inputNumber").value * 1;
    numberArray.push(inputNumber);
    document.querySelector("#innerNumber").innerHTML = `👉 ${numberArray} `;
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
    }

}
