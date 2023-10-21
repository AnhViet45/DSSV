
function kiemTraMaSv(id, dssv){
    var viTri = dssv.findIndex(function(item){
        return item.ma == id;
    });
    if (viTri != -1){
        document.getElementById("spanMaSV").innerText = "Mã sv đã được sử dụng";
        return false;//tìm thấy => true
    }else{
        document.getElementById("spanMaSV").innerText = "";
        return true;
    }
}
function kiemTraDoDai(value,idErr, min, max){
    var length = value.length;
    if(min<=length && length<=max){
        document.getElementById(idErr).innerText = "";
        return true;
    }else{
        document.getElementById(idErr).innerText = `Độ dài phải từ ${min} đến ${max} kí tự`;
        return false;
    }
}
function kiemEmail (email,){
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var isValid = re.test(email);
    if(isValid){
        document.getElementById("spanEmailSV").innerText = "";
        return true;
    }
    document.getElementById("spanEmailSV").innerText = "Email không hợp lệ";
    return false;
}