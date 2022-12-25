// Bài tập 1
document.getElementById('btnKetqua').onclick = function () {
    // input
    let so1 = +document.getElementById('soThu1').value
    let so2 = +document.getElementById('soThu2').value
    let so3 = +document.getElementById('soThu3').value
    let total = 0;
    // progress
    if(so1 > so2){
        total = so1
        so1 = so2
        so2 = total
    }
    if(so1 > so3){
        total = so1 
        so1 = so3
        so3 = total
    }
    if(so2 > so3){
        total = so2
        so2 = so3
        so3 = total
    }
    let ketqua = so1 + "," + so2 + "," + so3;
    // output
    document.getElementById('ketqua').innerHTML = ketqua;
}

//Bài tập 2
document.getElementById('btnHello').onclick = function () {
    // input
    let giadinh = document.getElementById('giadinh').value;
    //progress
    if (giadinh === 'Bo') {
        giadinh = ' Bố !!';
    } else if (giadinh === 'Me') {
        giadinh = ' Mẹ !!';

    } else if (giadinh === 'At') {
        giadinh = ' Anh trai !!';
    } else if (giadinh === 'Eg') {
        giadinh = ' Em gái !!';
    } else if (giadinh === 'nguoila') {
        giadinh = ' Người lạ !!'
    }
    
    // output
    document.getElementById('xinchao').innerHTML = giadinh;
}

// Bài tạp 3
document.getElementById('btnDem').onclick = function (){
    //input
    let soThunhat = document.getElementById('soThunhat').value;
    let soThuhai = document.getElementById('soThuhai').value;
    let soThuba = document.getElementById('soThuba').value;
    let chan = 0;
    let le = 0;
    //progress
    if(soThunhat % 2 == 0) {
        chan += 1;

    } else{
        le += 1;
    }
    if(soThuhai % 2 == 0) {
        chan += 1;

    } else{
        le += 1;
    }
    if(soThuba % 2 == 0) {
        chan += 1;

    } else{
        le += 1;
    }
    let result = 'có ' +  chan + " số chẵn," + " " + 'có ' + le + ' số lẻ.';
    document.getElementById('ketqua2').innerHTML = result;
}

// Bài tập 4
document.getElementById('btnDem2').onclick = function (){
    //input
    let canh1 = +document.getElementById('canh1').value;
    let canh2 = +document.getElementById('canh2').value;
    let canh3 = +document.getElementById('canh3').value;
    let loaiTamGiac = "";
    //progress
    if(canh1 + canh2 > canh3 && canh1 + canh3 > canh2 && canh2 + canh3 > canh1){
        if(canh1 == canh2 && canh2 == canh3){
            loaiTamGiac = 'Tam giác đều'
        }else if (canh1 == canh2 || canh2 == canh3){
            loaiTamGiac =  'Tam giác cân'
        }else if (canh1 * canh1 == canh2 * canh2 + canh3 * canh3 || canh2 * canh2 == canh1 * canh1 + canh3 * canh3 || canh3 * canh3 == canh1 * canh1 + canh2 * canh2){
            loaiTamGiac = 'Tam giác vuông'
        }else{
            loaiTamGiac = 'Tam giác thường'
        }
    }else{
        loaiTamGiac = " Dữ liệu không phải là 3 cạnh của một tam giác"
    }

    //output
    document.getElementById('ketqua3').innerHTML = loaiTamGiac;
}   
