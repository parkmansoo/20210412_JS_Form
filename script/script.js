$(function () {
    $("input[type=button]").click(function () {

        var uPW = $("#uPW").val().trim();
        var uPWcheck = $("#uPWcheck").val().trim();


        if (uPW != uPWcheck) {
            alert("비밀번호가 다릅니당.");
        } else {
            $("form").submit();
        }

    });


  $("#chkbox").click(function(){
      var chked = $(this).prop("checked");
      // alert("chked : " + chked);
      if (chked) {
          $("input.pw").attr("type","text");
      } else {
          $("input.pw").attr("type","password");
      }

  });

    // 출생년도 입력하기 select option 시작
    var now = new Date();
    var nowYear = now.getFullYear();    // 현재년도
    var startYear = nowYear;
    var endYear = 1930;

    var txtYear = "<option>년도</option>";
    for(var i = startYear; i>=1930; i--) {
        // document.write(i + "<br>");

        txtYear += "<option>" + i + "</option>";
    }
        $("#birthYear").html(txtYear);




    // 출생년도 입력하기 select option 시작




});
