var numArray = [3, 5, -20, 4];
function submit() {
  //   var numArray = []; tạo ở đây sẽ bị ghi đè giá trị
  // lấy giá trị user nhập
  var number = document.querySelector("#number").value * 1;
  numArray.push(number);
  document.querySelector("#result").innerText = numArray;
  var tongSoChan = 0;
  // duyệt mảng
  var soLuongSoAm = 0;

  for (var i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
    if (numArray[i] % 2 == 0) {
      tongSoChan += numArray[i];
    }
    if (numArray[i] < 0) {
      soLuongSoAm++;
    }
  }
  document.querySelector("#result").innerHTML = `
  <p>${numArray}</p>
  <p>Tổng số chẵn: ${tongSoChan}</p>
  <p>Số lượng số âm: ${soLuongSoAm}</p>
  `;
}
submit();

// array có length là 4, phần tử cuối cùng trong mảng sẽ có index là 3 ( length -1)