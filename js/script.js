function validateForm() {
  const name = document.forms['registrationForm']['name'].value;
  const dateOfBirth = document.forms['registrationForm']['dateOfBirth'].value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const phoneNumber = document.forms['registrationForm']['phoneNumber'].value;

  // Validation for Name
  if (name.trim() === '') {
      document.getElementById('errorName').innerHTML = "Name cannot be empty";
  } else {
      document.getElementById('errorName').innerHTML = "";
  }

  // Validation for Date of Birth
  if (dateOfBirth === '') {
      document.getElementById('errorDateOfBirth').innerHTML = "Date of Birth cannot be empty";
  } else {
      document.getElementById('errorDateOfBirth').innerHTML = "";
  }

  // Validation for Gender
  if (!gender) {
      document.getElementById('errorGender').innerHTML = "Please select a gender";
  } else {
      document.getElementById('errorGender').innerHTML = "";
  }

  // Validation for Phone Number
  if (phoneNumber.trim() === '') {
      document.getElementById('errorPhoneNumber').innerHTML = "Phone Number cannot be empty";
  } else {
      document.getElementById('errorPhoneNumber').innerHTML = "";
  }

  
  // Check if all fields are filled
  if (name.trim() === '' || dateOfBirth === '' || !gender || phoneNumber.trim() === '') {
      return false;
  }

  // If all validations pass, set the data
  setData(name, dateOfBirth, gender.value, phoneNumber);
}

function setData(name, dateOfBirth, gender, phoneNumber) {
  // Display the registration details
  document.getElementById('nameData').innerText = name;
  document.getElementById('dateOfBirthData').innerText = dateOfBirth;
  document.getElementById('genderData').innerText = gender;
  document.getElementById('phoneNumberData').innerText = phoneNumber;
}
