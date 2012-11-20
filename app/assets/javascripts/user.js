App.View.UserViewModel._init_ = function() {

    var Btn_SaveNewUser_OnClick = function() {
        
        if ($("#Frm_NewUser").valid() == true) {

            var myJson = {
                'usernombre' : 1,
                'userclave' : $("#Txt_postTitle").val(),
                'correo' : $("#Txt_postMessage").val()
            };

            $.ajax({
                url : "/user/user_new",
                type : "POST",
                data : ko.toJSON(myJson),
                dataType : "json",
                contentType : "application/json; charset=utf-8",
                success : function(response) {
                    if (response.success == true) {
                        $("#Div_modalNewPostCreated").modal('toggle')
                    } else {
                        $("#Div_AlertError").alert()
                    }
                },
                error : function(jqXHR, textStatus, errorThrown) {
                }
            });
        }

    };

    $('#Div_modalNewUserCreated').on('hidden', function() {
        App.View.UserViewModel = null;

        $("#Div_WorkingPlace").hide(500, function() {
            $("#Div_home").show(1000);
            $("#Div_WorkingPlace").empty();
        })
    });

    App.View.UserViewModel.getView = function() {
        
        $("#Btn_SaveNewUser").click(function() {
            Btn_SaveNewUser_OnClick()
        });

        $("#Frm_NewUser").validate({
            rules : {
                Txt_Email : {
                    required : true
                },
                Txt_NewUsername : "required",
                Txt_password : {
                    required : true,
                    minlength : 5
                }
            }
        });
    };

}();
