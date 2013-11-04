//signup.js 
// add your JavaScript code to this file

$(function(){
	var stateSelect = $('.us-states');
	var option = $('.option');
	var instance;
	$.each(usStates, function(){
		instance = option.clone(); // manually added a class to 'option'
		instance.attr('value', this.abbreviation);
		instance.attr('selected', false); // removes attributes from 'states' 
		instance.attr('disabled', false);
		instance.html(this.name);
		stateSelect.append(instance);
	});

	$('.signup-form').submit(function(){
		var signupForm = $(this);

		//select a descendant input element with the name "addr-1"
		var address = signupForm.find('input[name="addr-1"]').val();
		var zipCode = signupForm.find('input[name="zip"]').val();

		if(address.length > 0 && zipCode == 0) {
			alert("Please input a zip code!");
			return false;
		}
	}); // if address, force zip code

	$('.cancel-signup').click(function(){
		$('.cancel-signup-modal').modal();
	}); // on cancel-signup click

	$('.btn-abandon').click(function(){
		window.location = 'http://www.google.com';
	}); // on confirm leave click

}); // document is ready