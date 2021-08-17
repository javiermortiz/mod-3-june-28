# Parse the Body of a Request Phase 3 - Read the Body of the Request

In this phase, you will convert a percent-encoded request body into a JavaScript
object.

Reference the _Parsing the Body of the Request_ reading for the steps to take to
parse the body of a typical HTML form submission request with a `Content-Type`
header of `application/x-www-form-urlencoded`. Implement these steps in the
server that you created and log the parsed request body to your terminal.

To test your code to make sure it's working, start the server and send a request
using Postman with a body and `Content-Type` header of
`application/x-www-form-urlencoded` with a method of `POST`. The URL path can be
anything.

Here are some key-value pairs that you can have in your request body to test
your code:

| Key      | Value       |
| -------- | ----------- |
| username | azure green |
| password | password!   |

When the above request body gets sent by Postman to the server, the server will
get the body in the form of a string,
"username=azure+green&password=password%21". The spaces in the values got
replaced with a plus symbol, `+`, and the symbols in the values got replaced by
a percent-encoded value (the exclamation mark got percent-encoded into a
`%21`).

Use your knowledge of `String`, `Array`, and `Object` manipulation to turn the
request body string of "username=azure+green&password=password%21" into a
JavaScript object with the following key-value pairs:

```js
{
  username: "azure green",
  password: "password!"
}
```

Tip: You can use the following functions to aid you:

- [`String.split`] - to split a string into an array by a given delimiter
- [`String.replace`] - to replace the substrings in a string with another
  substring
  - Use `str.replace(/\+/g, " ")` to replace all `+` symbols in the string
    with a space
- [`Array.map`] - to convert each element in the array to a new element
- [`Array.reduce`] - to convert an array into an object (TRICKY to use so don't
  use this unless you have a good idea of how to do this)
- [`decodeURIComponent(str)`] - decodes a given string from [Percent Encoding]

Once you successfully transformed the request body string into a JavaScript
object, save it to the `body` property on the request object, `req.body`.

[`String.split`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
[`String.replace`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[`Array.map`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[`Array.reduce`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[`decodeURIComponent`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
[Percent Encoding]: https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding
