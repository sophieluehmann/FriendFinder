# FriendFinder

FriendFinder is an app that uses Express and Node. After taking a short quiz, you will be matched with your new best friend.

Use the FriendFinder app at: 
- https://thawing-falls-76611.herokuapp.com

![](FriendFinder.gif)

# Dependencies

To use this app, you must use the following NPM packages:
- `express`
- `path`

# How It Works

- The `server.js` file loads `express`, sets up the routing, and starts the server.

- The `htmlRoutes.js` displays either `home.html` or `survey.html` depending on which URL the user navigates to.

- The `apiRoutes.js` gets the stored data from the users who have taken the survey and posts the data from incoming survey results.

- When a survey is taken, the responses are compared to other users who have taken the survey. The `survey.html` file contains JavaScript that computes the results and matches you with the person with the least amount of difference in scores.

- Once your match is determined, a modal will pop up with the name and photo of your new best friend.
