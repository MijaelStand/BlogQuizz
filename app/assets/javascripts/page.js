var App = {};
App.View = {};
App.View.IndexViewModel = {};

$.ajaxSetup({
    cache : false
});

App.View.IndexViewModel._init_ = function() {

    var self = this;
    self.postlist = ko.observableArray();
    
    self.ViewUserPostAndComments = function()
    {
        var Selfthis = this;
        console.log(Selfthis);
        
    };
    

    var Aux_LoadpostList = function() {
        $.ajax({
            url : "/post/postlist",
            type : "GET",
            success : function(Response) {

                if (Response.success == true) {
                    self.postlist(Response.data);

                } else {
                    $("#Div_AlertError").alert()
                }
            },
            error : function(jqXHR, textStatus, errorThrown) {
            }
        });

    };
    
    var menu_options_OnClick = function() {
        
        
        var idVieModel = this.id    
        
        
        /*   

        
        */

    };
    
    

    var Aux_setvisibleWorkingPlace = function() {
        if ($('#Div_WorkingPlace').is(':visible') == false) {

            $("#Div_WorkingPlace").show(1000, function() {
            })
        }
    }; 


    
    var Aux_setHandlers = function ()
    {
        
        $("#a_createNewPost").click(function() {

            $.get('/post/postshow', function(response) {
                App.View.PostViewModel = {};
                $("#Div_home").hide(1000, function() {
                    $("#Div_WorkingPlace").html(response)
                    Aux_setvisibleWorkingPlace();
                });

                $.getScript("/assets/post", function(data, textStatus, jqxhr) {
                    App.View.PostViewModel.getView();
                })
            });
        });        
        
 
        $("#a_NewUserViewModel").click(function() {

            $.get('/user/show', function(response) {
                App.View.UserViewModel = {};
                $("#Div_home").hide(1000, function() {
                    $("#Div_WorkingPlace").html(response)
                    Aux_setvisibleWorkingPlace();
                });

                $.getScript("/assets/user", function(data, textStatus, jqxhr) {
                    App.View.UserViewModel.getView();
                })
            });
        });    

        $("#a_homeViewModel").click(function() {

            $("#Div_WorkingPlace").hide(500, function() {
                $("#Div_home").show(1000);
                $("#Div_WorkingPlace").empty();
            })
        });
    };


    App.View.IndexViewModel.getView = function() {
        App.View.LastVmOpened = "IndexViewModel";
        
        $("#menu_options li").click(menu_options_OnClick);
        Aux_setHandlers();

        ko.applyBindings(self, document.getElementById("Div_home"));
        Aux_LoadpostList();
    };

}();

