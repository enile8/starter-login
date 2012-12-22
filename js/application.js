$(document).ready(function(){
	
  
  function isValidEmailAddress(emailAddress) {
	 var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	 return pattern.test(emailAddress);
  };


	$('.waiting').hide(0);
	$('#user_name').focus();
	$('#user_name').select();
	
	
	var $regpart = $( '#registration-form' ), timeout = false;
	
	$regpart.find('#user_name').focus();
	
  function getPasswordStrength(H){
    var D=(H.length);
		if(D>5){
      D=5
		};
		var F=H.replace(/[0-9]/g,"");
		var G=(H.length-F.length);
		if(G>3){G=3};
		var A=H.replace(/\W/g,"");
		var C=(H.length-A.length);
		if(C>3){C=3};
		var B=H.replace(/[A-Z]/g,"");
		var I=(H.length-B.length);
		if(I>3){I=3};
		var E=((D*10)-20)+(G*10)+(C*15)+(I*10);
		if(E<0){E=0};
		if(E>100){E=100};
		return E
	};
	
	$('.container').on('keyup', '#password', function() {
		
		var strength = getPasswordStrength (this.value);
		  
		$('.bar').css('width', strength + '%');
			
	  if ( strength < 20 ) {
			$('.strength').show();
			$('.bar').removeClass('bar-warning bar-info bar-success');
		  $('.bar').addClass('bar-danger');
		} else if ( strength < 30 ) {
		  $('.bar').removeClass('bar-info bar-success');
		  $('.bar').removeClass('bar-danger').addClass('bar-warning');
		} else if ( strength < 55 ) {
		  $('.bar').removeClass('bar-success');
		  $('.bar').removeClass('bar-warning').addClass('bar-info');
		} else if ( strength < 80 ) {
		  $('.bar').removeClass('bar-info').addClass('bar-success');
		};
		
		if ( $regpart.find('#password').val().length == 0 ) {
			$('.strength').hide();
		};
	});
	
	$('#reg').click(function() {
	  $('#reg').blur();
		  
		var emailaddress = $regpart.find('#email').val();
		
		$regpart.find('#user_name').removeClass('form-error');
		$regpart.find('#email').removeClass('form-error');
		$regpart.find('#password').removeClass('form-error');
		$regpart.find('#repassword').removeClass('form-error');
		
		$('.waiting').show(0);
		$('#registration-form').hide(0);
		$('.errorMessage').hide(0);
		
		if( $regpart.find('#user_name').val().length == 0 ) {
		  $('.errorMessage').addClass('error').text('Please enter your username.').show(500);
			$regpart.find('#user_name').addClass('form-error').focus();
			$('.waiting').hide(0);
			$('#registration-form').show(500);
		} else if ( $regpart.find('#email').val().length == 0 ) {
			$('.errorMessage').addClass('error').text('Please enter your email.').show(500);
			$regpart.find('#email').addClass('form-error').focus();
			$('.waiting').hide(0);
			$('#registration-form').show(500);
		} else if ( !isValidEmailAddress( emailaddress ) ) {
			$('.errorMessage').addClass('error').text('Please enter a valid email address.').show(500);
			$regpart.find('#email').addClass('form-error').focus();
			$('.waiting').hide(0);
			$('#registration-form').show(500);
		} else if ( $regpart.find('#password').val().length == 0 ) {
			$('.errorMessage').addClass('error').text('Please enter your password.').show(500);
			$regpart.find('#password').addClass('form-error').focus();
			$('.waiting').hide(0);
			$('#registration-form').show(500);
		} else if ( $regpart.find('#repassword').val().length == 0 ) {
			$('.errorMessage').addClass('error').text('Please verify your password.').show(500);
			$regpart.find('#repassword').addClass('form-error').focus();
			$('.waiting').hide(0);
			$('#registration-form').show(500);
		} else if ( $regpart.find('#password').val() != $regpart.find('#repassword').val() ) {
			$('.errorMessage').addClass('error').text('Passwords don\'t match.').show(500);
			$regpart.find('#repassword').addClass('form-error').focus();
			$('.waiting').hide(0);
			$('#registration-form').show(500);
		} else {
			$('.errorMessage').addClass('info').text('Please check your email to complete registration.').show(500);
			$('.waiting').hide(0);
		};
		return false;
  });
	
});
