function validateForm() {
    let isValid = true;
    
    // First Name validation
    const firstName = document.getElementById('firstName').value.trim();
    if (!/^[a-zA-Z]{6,}$/.test(firstName)) {
        document.getElementById('firstNameError').innerText = 'Name should contain alphabets and be at least 6 characters.';
        isValid = false;
    } else {
        document.getElementById('firstNameError').innerText = '';
    }
    
    // Last Name validation
    const lastName = document.getElementById('lastName').value.trim();
    if (!lastName) {
        document.getElementById('lastNameError').innerText = 'Last Name cannot be empty.';
        isValid = false;
    } else {
        document.getElementById('lastNameError').innerText = '';
    }
    
    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Email id should follow the standard pattern name@domain.com.';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }
    
    // Password validation
    const password = document.getElementById('password').value.trim();
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password should not be less than 6 characters.';
        isValid = false;
    } else {
        document.getElementById('passwordError').innerText = '';
    }
    
    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').innerText = 'Confirm Password and Password should be the same.';
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').innerText = '';
    }
    
    // Address validation
    const address = document.getElementById('address').value.trim();
    if (!address) {
        document.getElementById('addressError').innerText = 'Address cannot be empty.';
        isValid = false;
    } else {
        document.getElementById('addressError').innerText = '';
    }
    
    // Mobile Number validation
    const mobileNo = document.getElementById('mobileNo').value.trim();
    if (!/^\d{10}$/.test(mobileNo)) {
        document.getElementById('mobileNoError').innerText = 'Mobile Number should contain exactly 10 digits.';
        isValid = false;
    } else {
        document.getElementById('mobileNoError').innerText = '';
    }
    
    return isValid;
}
