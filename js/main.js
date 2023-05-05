$(document).ready(function() {
    function Kiemtratendangnhap() {
        var user = $("#Username").val();
        if (user.trim() == '') {
            $(".error_user").html("(*) Tên đăng nhập bắt buộc nhập!!!");
            return false
        }

        $(".error_user").html("");
        return true;
    }

    function Kiemtrapassword() {
        var mk = $("#Password").val();
        var regmk = /^(?=.*[A-Za-z])(?=.*[0-9]).{6,}$/; //có ít nhất 1 kí tự chữ, 1 số và có ít nhất 6 kí tự 
        if (mk.trim() == '') {
            $(".error_pass").html("(*) Mật khẩu bắt buộc nhập!!!");
            return false
        } else if (!regmk.test(mk)) {
            $(".error_pass").html("(*) Mật khẩu phải có ít nhất 1 kí tự chữ, 1 số và có ít nhất 6 kí tự!!!");
            return false;
        }


        $(".error_pass").html("");
        return true;
    }

    function Kiemtraaginpassword() {
        var pass = $("#Againpass").val();
        if ($("#Password").val() != pass) { // != Không bằng nhau.
            $(".error_apass").html("(*) Không trùng mật khẩu!!!");
            return false;
        }

        $(".error_apass").html("");
        return true;
    }
    ///Thông tin cá nhân
    function Kiemtrahoten() {
        var ten = $("#Name").val();
        var regten = /^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*){1}$/; //Chữ đầu viết hoa, chữ còn lại viết thường, không cách 
        if (ten.trim() == '') {
            $(".error_name").html("(*) Họ và tên bắt buộc nhập!!!");
            return false
        } else if (!regten.test(ten)) {
            $(".error_name").html("(*) Họ và tên phải có chữ đầu viết hoa, chữ còn lại viết thường, không cách!!!");
            return false;
        }

        $(".error_name").html("");
        return true;
    }

    function Kiemtrasodienthoai() {
        var dt = $("#Phone").val();
        var regdt = /^[0-9]{9,10}$/;
        if (dt.trim() == '') {
            $(".error_phone").html("(*) Số điện thoại bắt buộc nhập!!!");
            return false;
        } else if (!regdt.test(dt)) {
            $(".error_phone").html("(*) Số điện thoại phải 9 hoặc 10 số !!!");
            return false;
        }

        $(".error_phone").html("");
        return true;
    }

    function Kiemtraemail() {
        var email = $("#Email").val();
        var regemail = /^.+@.+$/;
        if (email.trim() == '') {
            $(".error_email").html("(*) Email bắt buộc nhập!!!");
            return false;
        } else if (!regemail.test(email)) {
            $(".error_email").html("(*) Email không đúng định dạng!!!");
            return false;
        }

        $(".error_email").html("");
        return true;
    }
    $("#sub_form").click(function() {
        Kiemtratendangnhap();
        Kiemtrapassword();
        Kiemtraaginpassword();
        Kiemtrahoten();
        Kiemtrasodienthoai();
        Kiemtraemail();

        if (Kiemtratendangnhap() && Kiemtrapassword() && Kiemtraaginpassword() && Kiemtrahoten() && Kiemtrasodienthoai() && Kiemtraemail()) {
            alert("Đăng kí thành công");
        } else
        {
            alert('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        // Lấy thông tin từ các trường đầu vào
        var username = $('#Username').val();
        var name = $('#Name').val();
        var phone = $('#Phone').val();
        var email = $('#Email').val();

        // Thêm hàng mới vào bảng
        var row = '<tr><td></td><td>' + username + '</td><td>' + name + '</td><td>' + phone + '</td><td>' + email + '</td></tr>';
        $('#myTable tbody').append(row);

        // Lặp qua các hàng trong bảng và đặt số thứ tự cho từng hàng
        $('#myTable tbody tr').each(function(index) {
            $(this).find('td:first').text(index + 1);
        });

        // Xóa nội dung các trường đầu vào sau khi thêm hàng mới vào bảng
        $('#Username').val('');
        $('#Password').val('');
        $('#Againpass').val('');
        $('#Name').val('');
        $('#Phone').val('');
        $('#Email').val('');

        

    })
})

///Show pass login
var pwShown = 0;
function show() {
    var temp = document.getElementById('login_pass');
    temp.setAttribute('type', 'text');
}

function hide() {
    var temp = document.getElementById('login_pass');
    temp.setAttribute('type', 'password');
}

function password()
{
    if(pwShown == 0)
    {
        pwShown = 1;
        show();
    }
    else
    {
        pwShown = 0;
        hide();
    }
}