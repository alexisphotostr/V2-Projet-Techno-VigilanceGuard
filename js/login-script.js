function validateForm(formId) {
    // You can add form validation logic here
    // For simplicity, it returns true, allowing the forms to submit
    return true;
}

document.getElementById('registerLink').addEventListener('click', function () {
    var loginForm = document.getElementById('loginForm');
    var registerForm = document.getElementById('registerForm');
    var formTitle = document.getElementById('formTitle');
    var toggleFormText = document.getElementById('toggleFormText');

    if (loginForm.style.display === 'block') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        formTitle.innerText = 'Register';
        toggleFormText.innerHTML = 'Already have an account? <a href="javascript:void(0);" id="loginLink">Login here</a>';

        // Add event listener to the dynamically created login link
        document.getElementById('loginLink').addEventListener('click', function () {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            formTitle.innerText = 'Login';
            toggleFormText.innerHTML = 'Don\'t have an account? <a href="javascript:void(0);" id="registerLink">Register here</a>';
        });
    }
});