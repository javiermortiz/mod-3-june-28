# Exercise: HTTP Request Components Solution

1. Click a link to an Instagram post that your friend thought was funny.
   - method: GET
   - URI: /posts/postId
   - headers:
     - Host: instagram.com
   - body: none
2. Edit your Facebook comment
   - method: PATCH
   - URI: /posts/comment-id
   - headers:
     - Host: facebook.com
     - Content-Type: x-www-form-urlencoded
   - body:
     - contains information like the text that I want to edit in my comment and my
       reaction
3. Upload your sick mixtape to SoundCloud
   - method: POST
   - URI: /tracks
   - headers:
     - Host: soundcloud.com
     - Content-Type: audio/mpeg
   - body: the mixtape
4. Submit an Amazon review for a product through an HTML form
   - method: POST
   - URI: /product-name/reviews
   - headers:
     - Host: amazon.com
     - Content-Type: x-www-form-urlencoded
   - body: the product review, the rating of the product
5. Sell one of your stocks on Robinhood
   - method: DELETE, or PUT/PATCH
   - URI: /stock-tag
   - headers:
     - Host: robinhood.com
     - Content-Type: x-www-form-urlencoded
   - body: number of stocks I'm selling
6. Browse GIPHY for a cute puppy gif
   - method: GET
   - URI: /cute-puppy-gif
   - headers:
     - Host: giphy.com
   - body: none
7. Send a picture to a friend on Snapchat
   - method: POST
   - URI: /friend-id/dms
   - headers:
     - Host: snapchat.com
     - Content-Type: image/png
   - body: the picture you want to send
