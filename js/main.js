/**
 * BÀI 1 - QUẢN LÝ TUYỂN SINH
 * KHỐI 1
 * nhập biến điểm 3 môn: monA, monB, monC
 * điểm chuẩn : diemChuan = 25; <= giả sử 
 * khuVuc
 * doiTuong
 * KHỐI 2
 * 
 * KHỐI 3
 * thông báo trúng tuyển: thiDau = "Bạn đã trúng tuyển"
 */

document.getElementById("tinhDiem").onclick = function () {
    const KV1 = 2;
    const KV2 = 1;
    const KV3 = 0.5;
    const KV4 = 0;

    const DT1 = 2.5;
    const DT2 = 1.5;
    const DT3 = 1;
    const DT4 = 0;


    var monA = Number(document.getElementById("monA").value);
    var monB = Number(document.getElementById("monB").value);
    var monC = Number(document.getElementById("monC").value);
    var diemThi = 0;

    var kv1 = document.getElementById("kv1");
    var kv2 = document.getElementById("kv2");
    var kv3 = document.getElementById("kv3");
    var kv4 = document.getElementById("kv4");

    var dt1 = document.getElementById("dt1");
    var dt2 = document.getElementById("dt2");
    var dt3 = document.getElementById("dt3");
    var dt4 = document.getElementById("dt4");

    var diemKhuVuc = "";
    var diemDoiTuong = "";
    var thiDau = "";
    var tongDiem = 0;
    // Điểm liệt
    if (monA == 0 || monB == 0 || monC || 0) {
        console.log("Bạn đã rớt do có môn bị 0 điểm")
        return;
    }
    // Điểm khu vực 
    if (kv1.checked) {
        diemKhuVuc = KV1;
    } else if (kv2.checked) {
        diemKhuVuc = KV2;
    } else if (kv3.checked) {
        diemKhuVuc = KV3;
    } else if (kv4.checked) {
        diemKhuVuc = KV4;
    } else {
        alert("Khu vực chưa chọn");
    }
    console.log(diemKhuVuc);
    // Điểm đối tượng 
    if (dt1.checked) {
        diemDoiTuong = DT1;
    } else if (dt2.checked) {
        diemDoiTuong = DT2;
    } else if (dt3.checked) {
        diemDoiTuong = DT3;
    } else if (dt4.checked) {
        diemDoiTuong = DT4;
    } else {
        alert("Đối tượng chưa chọn");
    }
    console.log(diemDoiTuong);

    // Điểm các môn
    diemThi = monA + monB + monC;

    tongDiem = diemKhuVuc + diemDoiTuong + diemThi;

    document.getElementById("result1").innerHTML = thiDau;
} 