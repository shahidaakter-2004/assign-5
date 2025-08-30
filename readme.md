
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?


<!-- 1.Ans:  -->
getElementById ("id") means which  returns 1 element by ID (or null).

getElementsByClassName("class") which  returns a live HTMLCollection of all elements with that class.

querySelector("selector")  Returns the first element matching a CSS selector.

querySelectorAll("selector")  returns a static NodeList of all elements matching a CSS selector.

<!-- 2.Ans: -->
Create a new element with document.createElement(), set its content/attributes, then insert it into the DOM using methods like appendChild(), append(), prepend(), or insertBefore().

<!-- 3.Ans: -->
Event bubbling is when an event starts on the target element and then propagates upward through its ancestors (parent → grandparent → document).

<!-- 4.Ans: -->
Event delegation is a technique where you attach a single event listener to a parent element and use it to handle events on its child elements via event bubbling.

Some benefit of Event Delegation in Javascript :

1.Fewer event listeners → better performance.

2.Works for dynamically added elements (no need to reattach listeners).

3.Cleaner, easier-to-manage code.

<!-- 5.Ans: -->
PreventDefault()  is used to block default behavior, while 
stopPropagation() is used to stop the event from bubbling up.
