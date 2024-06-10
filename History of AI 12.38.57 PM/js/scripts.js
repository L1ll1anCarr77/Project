const submitButton = document.getElementById('submit')
const form = document.getElementById('form')
const password = document.getElementById('password')
const fullName = document.getElementById('fullName')
const email = document.getElementById('email')

//Hamburger menu function
function functionHamburger(){
	var menu = document.getElementById('mobile-link')
	var logo = document.getElementById('ai-logo')
	if(menu.style.display === "block"){
		menu.style.display = "none"
	} else {
		menu.style.display = "block"
	}
}
// Call the Hamburger Menu Function


/* END of Hamburger menu function */


/* Start Form Validation */

//formValidation function
		form.addEventListener('submitButton', (e) => {
			let alert = []
			alert('You must enter your information')
			e.preventDefault();	
			
		function newPassword(){
			var minNumberofChars = 8;
			var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{8}$/;
			if(password.length < minNumberofChars || password.length > minNumberofChars){
				return false;
			}
			if(!regularExpression.test(password)){
				alert('Password should contain one number and one special character.');
				return false;
			}else {
				return true;
			}
		}
			
		//Validate Name
		function validateName(){
			var validateName = /^[a-zA-Z\s-]+$/;
			if(fullName === ' ' || fullName == null){
				alert('Enter your Name');
			}
			
			if(validateName.test(fullName)){
				alert('Invalid Name');
			}
			return true;
		}
			
			function fullNameValidation(){
				if(fullName.value == 0){
					fullName.style.borderColor = "red solid 5px";
				}
			}
			
			function emailValidation(){
				if(email.value == 0){
					email.style.borderColor = "red solid 5px";
				}
			}
		})