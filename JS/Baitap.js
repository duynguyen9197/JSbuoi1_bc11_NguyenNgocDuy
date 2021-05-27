console.log('BaitapJS1')
// Tính lương nhân viên

document.getElementById("Tính").onclick=function(){
    const NGAYCONG =100000;
console.log(NGAYCONG);
var Day = document.getElementById("Day").value ;
console.log(Day);
    var tienLương = Day*NGAYCONG;
    console.log(tienLương);
 document.getElementById("tienLuong").innerHTML="Tiền lương của bạn là :" + tienLương +"vnd";
   
}
// Bài 2:Tính giá trị trung bình
/* 3 khối
đầu vào:Nhập 5 số
Xử lý:
tạo biến chứa 5 số
tạo biến tính tổng
lấy tổng chia 5
Đầu ra :giá trị trung bình
*/

document.getElementById("Tinh").onclick=function(){
    var num_1 = document.getElementById("Number1").value;
    var num_2 = document.getElementById("Number2").value;
    var num_3 = document.getElementById("Number3").value;
    var num_4 = document.getElementById("Number4").value;
    var num_5 = document.getElementById("Number5").value;
    var TB = ( parseInt(num_1) + parseInt(num_2) + parseInt(num_3) + parseInt(num_4) +parseInt(num_5))/5
    console.log(TB);
    document.getElementById("TB").innerHTML=TB;
}
// Đổi tiền USD
/*
đầu vào :
hằng số USD
số tiền USD
Xử Lí:
tạo hằng số USD = 23500
tạo biến chứa số USD nhập vào
Số tiền Việt = USD* số USD
Đầu ra:Số tiền Việt
 */
document.getElementById("Change").onclick=function(){
    const USD =23500;
    var Dola =document.getElementById("amount").value;
    var Vnd =Dola*USD;
    document.getElementById("VND").innerHTML=Vnd +" VND";
}
// Tính diên tích,chu vi Hình chữ nhật
/*
đầu vào :
chiều dài
chiều rộng
Xử lí:
tạo 2 biến chứa chiều dài và chiều rộng
tạo biến tính diện tích
tạo biến tính chu vi
Đầu ra :
xuất kết quả
 */
document.getElementById("Calculate").onclick= function (){
    var rong = document.getElementById("Rong").value;
    var dai = document.getElementById("Dai").value;
    var dienTich = rong*dai;
    console.log(dienTich);
    console.log(rong);
    console.log(dai);
    var Chuvi = 2*( parseInt(rong) + parseInt(dai));
    document.getElementById("Dientich").innerHTML=dienTich;
    document.getElementById("Chuvi").innerHTML=Chuvi;
}
// Tổng 2 ký số
/*
đầu vào:
số có 2 chữ số
xử lí :
tạo biến  chứa số: xy 
tách số hàng chục: xy/10=x
tách số hàng đơn vị: xy%10=y
tạo biến chứa tổng:z=x+y 
đầu ra :xuất z
*/
document.getElementById("tong2kyso").onclick=function(){
    var xy=document.getElementById("So").value;
    var x = Math.floor(xy/10);
    var y= xy%10;
    var z=x+y;
    document.getElementById("Sum").innerHTML=z;
}
