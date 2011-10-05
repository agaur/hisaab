$(document).ready(function() {
	var getUrlVars = function() {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
		for ( var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	}
	var getUrlVar = function(name) {
		return getUrlVars()[name];
	};

	var accessToken = getUrlVar('access_token');
	$("#user-picture").html("<img src='https://graph.facebook.com/me/picture?access_token="+accessToken+"'/>");
});