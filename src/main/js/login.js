
// Login Form
$(function() {
    var button = $('#loginButton');
    var box = $('#loginBox');
    var form = $('#loginForm');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#loginButton').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
    $('#FBLogin').click(function(){
    		window.location = "https://www.facebook.com/dialog/oauth?client_id=108168559291917&redirect_uri=http://localhost:8080/hisaab/home.html&scope=email,publish_stream,manage_friendlists,read_friendlists";
    });
});
