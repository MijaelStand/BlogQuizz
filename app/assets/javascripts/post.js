App.View.PostViewModel._init_ = function() {

    $("#Btn_SaveNewPost").click(function() {

        if ($("#Frm_NewPost").valid() == true) {

            var myJson = {
                'userid' : 1,
                'title' : $("#Txt_postTitle").val(),
                'postexto' : $("#Txt_postMessage").val()
            };

            $.ajax({
                url : "/post/newpost",
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

    });

    $('#Div_modalNewPostCreated').on('hidden', function() {
        App.View.PostViewModel = null;

        $("#Div_WorkingPlace").hide(500, function() {
            $("#Div_home").show(1000);
            $("#Div_WorkingPlace").empty();
        })
    });

    App.View.PostViewModel.getView = function() {

        $("#Frm_NewPost").validate({
            rules : {
                Txt_postTitle : "required",
                Txt_postMessage : {
                    required : true,
                    minlength : 5
                }
            }
        });
    };

}();

