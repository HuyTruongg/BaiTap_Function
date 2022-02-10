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

    var diemKhuVuc = 0;
    var diemDoiTuong = 0;
    var thiDau = "";
    var tongDiem = 0;
    var diemThi = 0;

    // Điểm khu vực 
    var khuVuc = document.getElementById("khuVuc");

    if (khuVuc.value == "A") {
        diemKhuVuc = KV1;
    } else if (khuVuc.value == "B") {
        diemKhuVuc = KV2;
    } else if (khuVuc.value == "C") {
        diemKhuVuc = KV3;
    } else if (khuVuc.value == "D") {
        diemKhuVuc = KV4;
    } else {
        alert("Khu vực chưa chọn");
    }
    console.log(diemKhuVuc);

    // Điểm đối tượng 
    var doiTuong = document.getElementById("doiTuong");
    if (doiTuong.value == "1") {
        diemDoiTuong = DT1;
    } else if (doiTuong.value == "2") {
        diemDoiTuong = DT2;
    } else if (doiTuong.value == "3") {
        diemDoiTuong = DT3;
    } else if (doiTuong.value == "4") {
        diemDoiTuong = DT4;
    } else {
        alert("Đối tượng chưa chọn");
    }
    console.log(diemDoiTuong);

    // Điểm các môn
    diemThi = monA + monB + monC;
    tongDiem = diemKhuVuc + diemDoiTuong + diemThi;

    // Điểm liệt
    if (monA == 0 || monB == 0 || monC == 0) {
        console.log("Bạn đã rớt do có môn bị 0 điểm")
        return;
    }
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var thongBao = "";
    if (tongDiem >= diemChuan) {
        thongBao = "Bạn đã thi đậu; ";
    } else {
        thongBao = "Bạn đã thi đậu; ";
    }
    
    thiDau = thongBao + "Số điểm thi: "+ tongDiem;
        document.getElementById("result1").innerHTML = thiDau;
}


/**
 * BÀI 2 - TÍNH TIỀN ĐIỆN
 * KHỐI 1
 * nhập biến tên và số kw: ten, soKW
 * KHỐI 2
 * tính tiền theo số KW
 *      0 < soKW <=50 : soKW * KW_50_DAU;
 *      50 < soKW <=100 : 25000 + (soKW-50) * KW_50_KE;
 *      100 < soKW <=200 : 25000 + 32500 + (soKW-100) * KW_100_KE;
 *      200 < soKW <=350 : 25000 + 32500 + 85000 + (soKW-200) * KW_150_KE;
 *      350 < soKW : 25000 + 32500 + 85000 + 165000 + (soKW-350) * KW_CONLAI;
 * KHỐI 3
 * thanhTien
 */

document.getElementById("tinhTienDien").onclick = function () {
    var tenDien = document.getElementById("tenDien");
    var soKW = Number(document.getElementById("soKW").value);

    const KW_50_DAU = 500;
    const KW_50_KE = 650;
    const KW_100_KE = 850;
    const KW_150_KE = 1100;
    const KW_CONLAI = 1300;

    thanhTien = 0;

    if (0 < soKW && soKW <= 50) {
        thanhTien = soKW * KW_50_DAU;
    } else if (50 < soKW && soKW <= 100) {
        thanhTien = 25000 + (soKW - 50) * KW_50_KE;
    } else if (100 < soKW && soKW <= 200) {
        thanhTien = 25000 + 32500 + (soKW - 100) * KW_100_KE;
    } else if (200 < soKW && soKW <= 350) {
        thanhTien = 25000 + 32500 + 85000 + (soKW - 200) * KW_150_KE;
    } else if (350 < soKW) {
        thanhTien = 25000 + 32500 + 85000 + 165000 + (soKW - 350) * KW_CONLAI;
    } else {
        alert("Số Kw không hợp lệ");
    }
    thanhTien = "Họ và tên: " + tenDien + ";" + "Tiền điện: " + thanhTien;
    document.getElementById("result2").innerHTML = thanhTien;
}


/**
 * BÀI 3 - TÍNH TIỀN THUẾ
 * KHỐI 1
 * nhập biến tên và số kw: tenThue, soThuNhap, soNguoiPT
 * nhập thuế suất chịu
 * KHỐI 2
 * tính tiền thuê theo từng mốc
 *      thuNhapChiuThue <= 60 : thueThuNhap = thuNhapChiuThue * THUE_60
 *      60  < thuNhapChiuThue && thuNhapChiuThue <=120 : thueThuNhap = 6e+7*THUE_60 + (thuNhapChiuThue- 6e+7)*THUE_60_120
 *      120 < thuNhapChiuThue && thuNhapChiuThue <=210: thueThuNhap = 6e+7*THUE_60 + 6e+7*THUE_60_120 + (thuNhapChiuThue-12e+7)*THUE_120_210
 *      210 < thuNhapChiuThue && thuNhapChiuThue <=384: thueThuNhap = 6e+7*THUE_60 + 6e+7*THUE_60_120 + 9e+7*THUE_120_210 + (thuNhapChiuThue-21e+7)*THUE_210_384
 *      384 < thuNhapChiuThue && thuNhapChiuThue <=624: thueThuNhap = 6e+7*THUE_60 + 6e+7*THUE_60_120 + 9e+7*THUE_120_210 + 174e+6*THUE_210_384 + (thuNhapChiuThue-384e+6)*THUE_384_624
 *      624 < thuNhapChiuThue && thuNhapChiuThue <=960: thueThuNhap = 6e+7*THUE_60 + 6e+7*THUE_60_120 + 9e+7*THUE_120_210 + 174e+6*THUE_210_384 + 240*THUE_384_624 + (thuNhapChiuThue-324e+6)*THUE_624_960
 *      960 < thuNhapChiuThue : thueThuNhap = 6e+7*THUE_60 + 6e+7*THUE_60_120 + 9e+7*THUE_120_210 + 174e+6*THUE_210_384 + 24e+7*THUE_384_624 + 336e+6*THUE_624_960 +  (thuNhapChiuThue-96e+7)*THUE_960
 * KHỐI 3
 * thueThuNhap
 */

document.getElementById("tinhTienThue").onclick = function () {
    var tenThue = document.getElementById("tenThue");
    console.log("tenThue");
    var soThuNhap = Number(document.getElementById("soThuNhap").value);
    var soNguoiPT = Number(document.getElementById("soNguoiPT").value);

    var thueThuNhap = 0;
    var thuNhapChiuThue = 0;
    thuNhapChiuThue = soThuNhap - 4e+6 - soNguoiPT * 16e+5;

    const THUE_60 = 0.05;
    const THUE_60_120 = 0.1;
    const THUE_120_210 = 0.15;
    const THUE_210_384 = 0.2;
    const THUE_384_624 = 0.25;
    const THUE_624_960 = 0.3;
    const THUE_960 = 0.35;



    if (thuNhapChiuThue <= 6e+7) {
        thueThuNhap = thuNhapChiuThue * THUE_60;
    } else if (6e+7 < thuNhapChiuThue && thuNhapChiuThue <= 12e+7) {
        thueThuNhap = 6e+7 * THUE_60 + (thuNhapChiuThue - 6e+7) * THUE_60_120;
    } else if (12e+7 < thuNhapChiuThue && thuNhapChiuThue <= 21e+7) {
        thueThuNhap = 6e+7 * THUE_60 + 6e+7 * THUE_60_120 + (thuNhapChiuThue - 12e+7) * THUE_120_210;
    } else if (21e+7 < thuNhapChiuThue && thuNhapChiuThue <= 384e+6) {
        thueThuNhap = 6e+7 * THUE_60 + 6e+7 * THUE_60_120 + 9e+7 * THUE_120_210 + (thuNhapChiuThue - 21e+7) * THUE_210_384;
    } else if (384e+6 < thuNhapChiuThue && thuNhapChiuThue <= 624e+6) {
        thueThuNhap = 6e+7 * THUE_60 + 6e+7 * THUE_60_120 + 9e+7 * THUE_120_210 + 174e+6 * THUE_210_384 + (thuNhapChiuThue - 384e+6) * THUE_384_624;
    } else if (624e+6 < thuNhapChiuThue && thuNhapChiuThue <= 96e+7) {
        thueThuNhap = 6e+7 * THUE_60 + 6e+7 * THUE_60_120 + 9e+7 * THUE_120_210 + 174e+6 * THUE_210_384 + 240 * THUE_384_624 + (thuNhapChiuThue - 324e+6) * THUE_624_960;
    } else if (96e+7 < thuNhapChiuThue) {
        thueThuNhap = 6e+7 * THUE_60 + 6e+7 * THUE_60_120 + 9e+7 * THUE_120_210 + 174e+6 * THUE_210_384 + 24e+7 * THUE_384_624 + 336e+6 * THUE_624_960 + (thuNhapChiuThue - 96e+7) * THUE_960;
    } else {
        alert("Số thuế không hợp lệ");
    }
    thueThuNhap = "Họ và tên: " + tenThue + ";" + "Tiền thuế thu nhập: " + thueThuNhap + " VND";
    document.getElementById("result3").innerHTML = thueThuNhap;
}

/**
 * BÀI 3 - TÍNH TIỀN CÁP
 * KHỐI 1
 * nhập biến maKH, loaiKH, ketNoi, kenhCaoCap
 * 
 * KHỐI 2
 * tính tiền cáp theo thuê bao
 *      Nhà dân
 *  hoaDonKhachHang = HOADON_DAN +  DICHVU_DAN + KENH_DAN*kenhCaoCap
 *      Doanh nghiệp
 *  hoaDonKhachHang = HOADON_DN + KENH_DN*kenhCaoCap +  DICHVU_DN => ketNoi <=10
 *  hoaDonKhachHang = HOADON_DN + KENH_DN*kenhCaoCap +  DICHVU_DN + (ketNoi-10)*5 => ketNoi > 10
 * KHỐI 3
 * hóa đơn khách hàng: hoaDonKhachHang
 */

document.getElementById("tinhTienCap").onclick = function () {
    var maKH = document.getElementById("maKH").value;
    var loaiKH = document.getElementById("chonKH");
    var ketNoi = Number(document.getElementById("ketNoi").value);
    var kenhCaoCap = Number(document.getElementById("kenhCaoCap").value);

    const HOADON_DAN = 4.5;
    const DICHVU_DAN = 20.5;
    const KENH_DAN = 7.5;

    const HOADON_DN = 15;
    const DICHVU_DN = 75;
    const KENH_DN = 50;
    var hoaDonKhachHang = 0;

    // Kiểm tra khách hàng
    var khach = "";
    if (loaiKH.value == "1") {
        khach = "dan";
    } else if (loaiKH.value == "2") {
        khach = "doanhNghiep";
    } else {
        alert("Loại khách hàng chưa chọn");
    }

    switch (khach) {
        case "dan":
            hoaDonKhachHang = HOADON_DAN + DICHVU_DAN + KENH_DAN * kenhCaoCap
            break;
        case "doanhNghiep":
            if (ketNoi <= 10) {
                hoaDonKhachHang = HOADON_DN + DICHVU_DN + KENH_DN * kenhCaoCap;
            } else if (ketNoi > 10) {
                hoaDonKhachHang = HOADON_DN + DICHVU_DN + KENH_DN * kenhCaoCap + 5 * (ketNoi - 10);
            } else {
                console.log("Khách hàng không hợp lệ");
            }
            break;
        default:
            console.log("Loại khách hàng chưa có");
            break;
    }


    hoaDonKhachHang = "Mã khách hàng: " + maKH + "; " + "Tiền cáp: " + "$ " + hoaDonKhachHang;
    document.getElementById("result4").innerHTML = hoaDonKhachHang;
}
function showKH() {
    // var show = document.getElementById("chonKH");
    if (document.getElementById("chonKH").value == '2') {
        document.getElementById("ketNoiShow").style.display = 'block';
    } else {
        document.getElementById("ketNoiShow").style.display = 'none';
    }
};