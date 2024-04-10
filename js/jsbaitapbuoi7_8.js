

// EX1 1. Tổng các số dương trong mảng.
function tongSoDuong(numberArray) {

    let tongSoDuong = 0;

    for (let i = 0; i < numberArray.length; i++) {

        if (numberArray[i] > 0) {

            tongSoDuong += numberArray[i];

        }
    }
    return tongSoDuong;
}


// EX2 2. Đếm có bao nhiêu số dương trong mảng.
function demSoDuong(numberArray) {

    let demSoDuong = 0;

    for (let i = 0; i < numberArray.length; i++) {

        if (numberArray[i] > 0) {

            demSoDuong += 1;
        }
    }
    return demSoDuong;
}


// EX3 3. Tìm số nhỏ nhất trong mảng.
function timSoNhoNhat(numberArray) {

    let soNhoNhat = numberArray[0];

    for (let i = 1; i < numberArray.length; i++) {

        if (numberArray[i] < soNhoNhat) {

            soNhoNhat = numberArray[i];
        }
    }
    return soNhoNhat;
}

// EX4 4. Tìm số dương nhỏ nhất trong mảng.
function timSoDuongNhoNhat(numberArray) {

    let soDuongNhoNhat;

    for (let i = 0; i < numberArray.length; i++) {

        if (numberArray[i] > 0 && (soDuongNhoNhat === undefined || numberArray[i] < soDuongNhoNhat)) {

            soDuongNhoNhat = numberArray[i];
        }
    }
    return soDuongNhoNhat;
}

//EX5 5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function timSoChanCuoiCung(numberArray) {

    let SoChanCuoiCung = -1;

    for (let i = numberArray.length - 1; i >= 0; i--) {

        if (numberArray[i] % 2 === 0) {

            SoChanCuoiCung = numberArray[i];

            break;
        }
    }
    return SoChanCuoiCung;
}

//EX6 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function doiChoHaiGiaTri(numberArray) {

    let inputViTri1 = document.getElementById('inputViTri1').value * 1;
    let inputViTri2 = document.getElementById('inputViTri2').value * 1;

    if (inputViTri1 < 0 || inputViTri1 >= numberArray.length || inputViTri2 < 0 || inputViTri2 >= numberArray.length) {

        numberArray = "Hãy nhập vị trí là số dương và không lớn hơn chiều dài của mảng ";

    } else {
        let doiViTri = numberArray[inputViTri1];

        numberArray[inputViTri1] = numberArray[inputViTri2];
    
        numberArray[inputViTri2] = doiViTri;
    }
    
    return numberArray;
}