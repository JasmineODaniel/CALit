
CALit is a simple calculator built with HTML, CSS, and JavaScript.
This project focuses on understanding how user input flows from the interface into JavaScript logic, how application state is managed, and how results are displayed dynamically using the DOM.
The goal of CALit is not complexity or advanced UI, but clarity. Every part of the code is intentional and explained. 
Project Overview
CALit allows users to:
Enter multi-digit numbers
Select basic arithmetic operators (addition, subtraction, multiplication, division)
Calculate results instantly
Clear and reset calculations
The calculator mimics real calculator behavior by storing values in memory and only performing calculations when the equals button is pressed.
Technologies Used
HTML for structure and elements
CSS for layout and visual styling
JavaScript for logic, state management, and calculations
No frameworks or external libraries were used.


How CALit Works
CALit uses JavaScript to manage three core pieces of state:
currentNumber stores the number currently being typed
previousNumber stores the first number entered before an operator is selected
operator stores the selected arithmetic operation
While typing, numbers are stored as strings so digits can be appended correctly. When the equals button is pressed, these string values are converted into real numbers using parseFloat so proper mathematical operations can be performed.
The calculator display is updated dynamically using DOM manipulation, without reloading the page.
File Structure
Copy code



CALit/
│
├── index.html
├── style.css
├── script.js
└── README.md
How to Run CALit
Clone or download the repository
Open index.html in any modern browser
Use the on-screen buttons to perform calculations
No setup or installation is required.



Key Concepts Practiced
DOM selection using document.getElementById
Handling user input through button click events
Managing application state with JavaScript variables
Using functions to separate logic and responsibilities
Understanding strict equality (===) versus loose equality (==)
Converting strings to numbers using parseFloat
Future Improvements
Add keyboard input support
Support decimal point input
Improve responsiveness and visual design
Add basic error handling for invalid operations
