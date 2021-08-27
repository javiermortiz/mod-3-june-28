# Persistent Storage Quiz

This quiz will test your knowledge of persistent storage in the browser.

## The questions

<quiz>
  <question>
    <p>Which of the following can store the most data in the browser?</p>
    <answer>Persistent Cookie</answer>
    <answer correct>Local Storage</answer>
    <answer>Backend Database</answer>
    <answer>Query Parameters</answer>
    <explanation>Web storage, meaning local storage and session storage, can hold more data that any kind of cookie.</explanation>
  </question>
<quiz>

<quiz>
  <question>
    <p>Can typed variables be stored in a cookie?</p>
    <answer>Yes</answer>
    <answer correct>No</answer>
    <answer>I don't know</answer>
    <explanation>The variables in a cookie can only be of the `String` type because a cookie is a series of key/value pairs stored in a single string.</explanation>
  </question>
<quiz>

<quiz>
  <question>
    <p>What technique is used to make a cookie last longer than a single session?</p>
    <answer>Write it to local storage</answer>
    <answer>Assign a key</answer>
    <answer correct>Include a timestamp</answer>
    <answer>Send it to a server</answer>
    <explanation>Without an expiration date, a cookie will disappear with the user's session, as when the browser is closed.</explanation>
  </question>
<quiz>

<quiz>
  <question>
    <p>Which of the following is the best option for storing a list of products available for purchase from an online store?</p>
    <answer>Session Cookie</answer>
    <answer>Persistent Cookie</answer>
    <answer>Local Storage</answer>
    <answer>Session Storage</answer>
    <answer correct>Backend Database</answer>
    <explanation>The items for purchase must be stored in a backend database so all users have access to them.</explanation>
  </question>
<quiz>

<quiz>
  <question>
    <p>Which of the following is the best option for storing a list of products the user has added to their shopping cart?</p>
    <answer>Session Cookie</answer>
    <answer>Persistent Cookie</answer>
    <answer correct>Local Storage</answer>
    <answer>Session Storage</answer>
    <answer>Backend Database</answer>
    <explanation>Since the list of items can grow quite large, it is best to put them into the web storage (either local or session). Also, the server will be provided with the list when the shopping cart is submitted, so a cookie is not necessary. Local storage is best if the cart needs to remember the items so the user can checkout on another day in the future (after browser is closed and reopened).</explanation>
  </question>
<quiz>

<quiz>
  <question>
    <p>Which of the following is the best option for storing the user's preferred date format (mm/dd/yyyy vs. dd/mm/yyyy)?</p>
    <answer>Session Cookie</answer>
    <answer correct>Persistent Cookie</answer>
    <answer correct>Local Storage</answer>
    <answer>Session Storage</answer>
    <answer correct>Backend Database</answer>
    <explanation>Sometimes the "best" choice isn't obvious. Probably the site visitors don't want to have to change the selection every time they visit the site, so neither session storage nor session cookie are a great option. If the backend API needs to format any dates, then a (permanent) cookie will help transfer the information on this preference to the server. If the backend API wants to store that information for a user regardless of the device they are using, it would be better to store it on the backend database. If not and/or if there are already other preferences in local storage already, then that is the better option.</explanation>
  </question>
<quiz>

<quiz>
  <question>
    <p>Which of the following is the best option for storing the date and time the session will expire?</p>
    <answer correct>Session Cookie</answer>
    <answer>Persistent Cookie</answer>
    <answer>Local Storage</answer>
    <answer>Session Storage</answer>
    <answer>Backend Database</answer>
    <explanation>Since this information is session-related, it should disappear when closing the browser. Since it is useful to check and update the expiration time while the user is actively using the application, it may be helpful to send it to the server which means using a session cookie.</explanation>
  </question>
<quiz>

<quiz>
  <question>
    <p>Which of the following is the best option for storing the username of the last logged in user?</p>
    <answer>Session Cookie</answer>
    <answer correct>Persistent Cookie</answer>
    <answer>Local Storage</answer>
    <answer>Session Storage</answer>
    <answer>Backend Database</answer>
    <explanation>Assuming the requirement includes "remember me" on the login form as well as verifying access to data requested in API calls to server, then a persistent cookie may be the easiest to implement.</explanation>
  </question>
<quiz>

<quiz>
  <question>
    <p>Which of the following is the best option for storing the values of more than 30 text boxes in a web form requesting the user's health history?</p>
    <answer>Session Cookie</answer>
    <answer>Persistent Cookie</answer>
    <answer>Local Storage</answer>
    <answer correct>Session Storage</answer>
    <answer>Backend Database</answer>
    <explanation>Since these are text boxes, they are likely to have too much data for a cookie. Since the values should be forgotten (for HIPAA-compliance reasons) when the user leaves the website or closes their browser, session storage is the best option.</explanation>
  </question>
<quiz>