/*global confirm, console, prompt, else, case, alert, echo*/

//Task 1
var a = 3;
var b = 5;
var c;

alert("var a = 3;\nvar b = 5;\nvar c;\n-------\n" +
      "a + b = " + (a + b) + "\n" +
      "a - b = " + (a - b) + "\n" +
      "a * b = " + (a * b) + "\n" +
      "a / b = " + (a / b) + "\n" +
      "a % b = " + (a % b) + "\n" +
      "(a += b) = " + (a += b) + "\n" +
      "(a -= b) = " + (a -= b) + "\n" +
      "(a *= b) = " + (a *= b) + "\n" +
      "(a /= b) = " + (a /= b) + "\n" +
      "(a %= b) = " + (a %= b) + "\n" +
      "(a == b) = " + (a === b) + "\n" +
      "(a != b) = " + (a !== b) + "\n" +
      "(a > b) = " + (a > b) + "\n" +
      "(a < b) = " + (a < b) + "\n" +
      "(!a && !c) = " + (!a && !c) + "\n" +
      "(!a || !c) = " + (!a || !c) + "\n");

//Task 2
var first_name = "Shiyu";
var last_name = "Zhuang";
var email = "zhua0008@algonquinlive.com";
var output;

output = "My name is " + first_name + " " + last_name + "." + "You can contact me at " + email + ".";
alert(output);

//Task 3
var numbers = [
        Math.floor(Math.random() * (200 - 100) + 100),
        Math.floor(Math.random() * (200 - 100) + 100),
        Math.floor(Math.random() * (200 - 100) + 100),
        Math.floor(Math.random() * (200 - 100) + 100),
        Math.floor(Math.random() * (200 - 100) + 100)
    ];

console.log(numbers[0]); // first array element
console.log(numbers[4]); // last array element
console.log(numbers[0] + "+" + numbers[4] + "=" + (numbers[0] + numbers[4]));

//check if number is even or odd?
var sum = numbers[0] + numbers[4];
if (sum % 2 === 0) {
    alert(("153 + 107 = 260") + "\n" + "This is an even number.");
} else {
    alert(("131 + 142 = 273") + "\n" + "This is an odd number.");
}
