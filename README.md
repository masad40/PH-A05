1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans = 
getElementById() : Selects one element by ID. 

getElementsByClass() : Selects all elements with a class.

querySelector() : Selects first match using any CSS selector.


querySelectorAll(): Selects all matches using CSS selector 


2. How do you **create and insert a new element into the DOM**?
ans =  
const element = document.createElement("p");      
element.textContent = "New paragraph";            
document.body.appendChild(element);


3. What is **Event Bubbling** and how does it work?
ans =
Event Bubbling means when you click a child element, the event also triggers on its parent, grandparent, and so on — moving up the page.

4. What is **Event Delegation** in JavaScript? Why is it useful?
ans =
Event Delegation = parent handles events from child using event.target.
Saves memory, works with dynamic elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
ans =
- preventDefault() -- Stops browser’s default action.
- stopPropagation() -- Stops event from reaching parent elements.
