
// 1. Color Changing Button

const colorButton = document.getElementById("colorButton");

const colors = ["red", "green", "blue", "purple", "orange"];

let colorIndex = 0;

colorButton.addEventListener("click", function() {

    colorButton.style.backgroundColor = colors[colorIndex];

    colorIndex++;

    if (colorIndex === colors.length) {
        colorIndex = 0;
    }

});


// 2. Time-Based Greeting

const greetingButton = document.getElementById("greetingButton");

greetingButton.addEventListener("click", function() {

    const currentHour = new Date().getHours();

    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning!";
    }
    else if (currentHour < 17) {
        greeting = "Good Afternoon!";
    }
    else {
        greeting = "Good Evening!";
    }

    alert(greeting);

});


// 3. Addition Calculator

const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", function() {

    const number1 = document.getElementById("num1").value;
    const number2 = document.getElementById("num2").value;

    if (number1.trim() === "" || number2.trim() === "") {
        document.getElementById("result").textContent =
            "Please enter both numbers.";
        return;
    }

    const sum = Number(number1) + Number(number2);

    document.getElementById("result").textContent =
        "Sum: " + sum;

});
