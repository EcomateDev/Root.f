/*
   root.js | MIT
   Powered by EcomateDev

   Explanation:
   This script demonstrates how to change the priority of root classes.
   In this example, we are changing the priority from root3 to root2.

   To change the priority of root classes:
   - Locate the line 'element.classList.remove('root3');'.
   - Replace 'root3' with the class you want to remove the priority from.
   - Locate the line 'element.classList.add('root2');'.
   - Replace 'root2' with the class you want to assign the higher priority to.
    */

document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'root3'
    let root3Elements = document.querySelectorAll('.root3');

    // For each element with class 'root3'
    root3Elements.forEach(function(element) {
        // Remove 'root3' class
        element.classList.remove('root3');
        
        // Add 'root2' class to increase its priority
        element.classList.add('root2');
    });
});