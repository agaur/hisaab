$(document).ready(function(){
	var url =  window.location.toString();
	alert(url);
	var code = url.substring(url.lastIndexOf("code=")+5);
	$.ajax({
		  url: "https://graph.facebook.com/oauth/access_token?client_id=108168559291917&redirect_uri=http://localhost:8080/hisaab/home.html&client_secret=68c107b753dbef9404126ce306b0abce&code="+code,
		  context: document.body,
		  success: function(resp){
		   alert(resp);
		  }
		});
});