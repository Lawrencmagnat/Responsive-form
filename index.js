// // alert('Welcome to Lawrence Form Please Make Sure you enter your details correctly and if you are a Pro ; please visit the backend to view a surprise but if you are not. feel free and input your details here')




// class details {
//     firstName = "";
//     lastName = "";
//     email = "";
//     phone = "";
//     address = "";
//     city = "";
//     state = "";
//     zip = "";
//     country = "";
//     password = "";
//     confirmPassword = "";

//     displayFirstName() {
//         console.log(this.firstName);
//     }

//     displayLastName() {
//         console.log(this.lastName);
//     }

//     displayAge() {
//         console.log(this.age);
//     }

//     displayEmail() {
//         console.log(this.email);
//     }

//     displayPhone() {
//         console.log(this.phone);
//     }

//     displayAddress() {
//         console.log(this.address);
//     }

//     displayCity() {
//         console.log(this.city);
//     }

//     displayState() {
//         console.log(this.state);
//     }

//     displayZip() {
//         console.log(this.zip);
//     }

//     displayCountry() {
//         console.log(this.country);
//     }

//     displayPassword() {
//         console.log(this.password);
//     }

//     displayConfirmPassword() {
//         console.log(this.confirmPassword);
//     }

//     welcomeAddress() {
//         console.log('Welcome to Lawrence Form Please Make Sure you enter your details correctly and if you are a Pro ; please visit the backend to view a surprise but if you are not. feel free and input your details here')
//     }


// }

// const Form = new details

// Form.firstName = "Chukwu Lawrence";

// Form.lastName = "Chinecherem";

// Form.email = "Chukwulawrencep@gmail.com";

// Form.password = "Chukwulawman";

// Form.confirmPassword = "Chukwulawman";

// Form.age = "27years"

// Form.country = "Nigeria";

// Form.address = "No 10 unije Street independent layout Paskan jakes";

// Form.city = "Independent Layout";

// Form.state = "Enugu State";

// Form.zip = "12345";


// Form.displayFirstName();

// Form.displayLastName();

// Form.displayAge();

// Form.displayEmail();

// Form.displayPhone();

// Form.displayAddress();

// Form.displayCity();

// Form.displayState();

// Form.displayZip();

// Form.displayCountry();

// Form.displayPassword();

// Form.displayConfirmPassword();


// // Form.welcomeAddress();


// // Form.welcomeAddress();





// function Approve_Form() {
//     var usersUsername = document.getElementById('').value;

//     var age = document.getElementById('').value;
//     alert('Welcome '  + usersUsername  + ', ' + ' to '   + 'Lawrence form '  + 'You  are ' + age  +  ' years old');


const nameBe = document.getElementById('username');
const age = document.getElementById('password');
const Email = document.getElementById('Email');




form.addEventListener('submit', (e) =>{
    let messages = [];
    if (username.value === "" || username.value == null){
        messages.push('Name is required')
    }

    if(password.value.length <= 10){
        messages.push('WTF..Password is required men.')
    }else{
        alert('Success')
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }


});