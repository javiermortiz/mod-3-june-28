# Element Manipulation Quiz

This quiz will test your knowledge of element manipulation.

## The questions

<quiz>
  <question multiple>
    <p>Which method(s) select a single or multiple elements based on tag name?</p>
    <answer>`document.getElementById()`</answer>
    <answer correct>`document.getElementsByTagName()`</answer>
    <answer>`document.getElementsByClassName()`</answer>
    <answer correct>`document.querySelector()`</answer>
    <answer correct>`document.querySelectorAll()`</answer>
    <explanation>`getElementsByTagName` does exactly that, while `querySelector` and `querySelectorAll` accept CSS selectors, which include tag names.</explanation>
  </question>
<quiz>

<quiz>
  <question multiple>
    <p>Which of these methods and/or properties allow you to add children to an element?</p>
    <answer>`element.innerText`</answer>
    <answer correct>`element.innerHTML`</answer>
    <answer>`element.addChild()`</answer>
    <answer correct>`element.appendChild()`</answer>
    <explanation>`innerHTML` allows you to define nested HTML, and thus child elements. `appendChild()` adds a new child element to the end of its list of children.</explanation>
  </question>
<quiz>

<quiz>
  <question multiple>
    <p>What code below can you use to create a new element?</p>
    <answer>`document.newElement()`</answer>
    <answer correct>`document.createElement()`</answer>
    <answer>`element.innerText`</answer>
    <answer>`element.createElement()`</answer>
    <answer correct>`element.innerHTML`</answer>
    <explanation>`createElement` explicitly creates new elements, while `innerHTML` implicitly interprets new elements based on the string value.</explanation>
  </question>
<quiz>

<quiz>
  <question>
    <p>How do you access child nodes of an element?</p>
    <answer correct>`element.childNodes`</answer>
    <answer>`element.children`</answer>
    <answer>`child.element`</answer>
    <answer>`access.element.child`</answer>
    <explanation>`childNodes` is a property on nodes, whereas `children` is a property of elements</explanation>
  </question>
<quiz>

<quiz>
  <question>
    <p>What of the following statement(s) are correct?</p>
    <answer correct>An element is a specific type of node</answer>
    <answer>A node is a specific type of element</answer>
    <answer>Nodes and elements refer to the same thing and are interchangeable</answer>
    <explanation>A node is a general term for objects in the DOM, whereas elements are objects that can be mapped to specific HTML elements (e.g. div, p, span, etc.)</explanation>
  </question>
<quiz>
