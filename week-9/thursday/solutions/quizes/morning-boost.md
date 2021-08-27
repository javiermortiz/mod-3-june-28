# Morning Boost Thursday, Week 9

<quiz>
    <question>
        <p>What method would you use to get rid of an element from the DOM?</p>
        <answer correct>`.remove()`</answer>
        <answer>`.delete()`</answer>
        <answer>`.disconnect()`</answer>
        <answer>`.unappend()`</answer>
        <explanation> If you wanted to remove an element from the DOM then select the element and call the remove method on it.</explanation>
    </question>
</quiz>

<quiz>
  <question multiple>
    <p>What are the sub-properties that control the individual components of a transition?</p>
    <answer>`transition-box`</answer>
    <answer correct>`transition-property`</answer>
    <answer correct>`transition-duration`</answer>
    <answer correct>`transition-delay`</answer>
    <explanation>The method sub-properties of a transtion are property, duration and delay.</explanation>
  </question>
</quiz>

```js
let colors = ["red", "yellow", "blue", "green", "black", "beige"];
let removed = colors.splice(2, 3, "Gainsboro", "Ivory", "Khaki");
```

<quiz>
  <question>
    <p>In the code above, what will `colors` evaluate to after the `splice`?</p>
    <answer>`[ 'yellow', 'blue', 'green' ]`</answer>
    <answer>`[ 'red', 'Gainsboro', 'Ivory', 'Khaki', 'black', 'beige' ]`</answer>
    <answer>`[ 'blue', 'green', 'black' ]`</answer>
    <answer correct>`[ 'red', 'yellow', 'Gainsboro', 'Ivory', 'Khaki', 'beige' ]`</answer>
    <explanation>We removed the 3 next elements after the targeted index of 2 and then insert 'Gainsboro', 'Ivory', and 'Khaki'.</explanation>
  </question>
</quiz>
