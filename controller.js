function renderDssv(dssv) {
  var contentHTML = "";
  for (var i = 0; i < dssv.length; i++) {
    var data = dssv[i];
    var trString = `<tr> 
                        <td>${data.ma}</td>
                        <td>${data.ten}</td>
                        <td>${data.email}</td>
                        <td>${data.tinhDTB()}</td>
                        <td>
                          <button onclick="xoaSv('${data.ma}')"  class='btn btn-danger'>Xoá</button>
                          <button class='btn btn-warning' onclick="suaSv('${data.ma}')">Sửa</button>
                        </td>
                      </tr>`;
    contentHTML = contentHTML + trString;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
