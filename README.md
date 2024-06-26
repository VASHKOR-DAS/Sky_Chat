
![Logo](https://img.icons8.com/?size=512&id=amvS4799Tp94&format=png)


# Sky Chat

> #### A Realtime Chat Web Application.

### Sky Chat made using

- [React JS](https://legacy.reactjs.org/docs/getting-started.html) (All components are written in [JSX](https://legacy.reactjs.org/docs/jsx-in-depth.html) and ES6 style and are combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/))
 - [Node JS](https://nodejs.org/en/docs) (JavaScript runtime built)
 - [Express JS](https://expressjs.com/en/api.html) (Node JS web application framework)
 - [MongoDB](https://www.mongodb.com/docs/) (Backend is implemented using [MongoDB Atlas](https://www.mongodb.com/atlas/database/), the Cloud version of MongoDB is used)
 - [Socket.IO](https://socket.io/) (for Realtime communication)

 This is a *responsive* web application for viewing in both
✅ **Mobile** and 
✅ **Desktop**.

## Features
- Latest features of JavaScript i.e. ES6, ES7, ES8 is used
- [React JS Hooks](https://legacy.reactjs.org/docs/hooks-intro.html) are used with Functional components
- ES8 `async/await` is used
- All the user details, group chats and conversations are stored in the [MongoDB Atlas.](https://www.mongodb.com/atlas/database)
- Login/Signup as well as Logout feature is added.
- Guest User Login added.
- Error will be shown if the credentials are not correct.
- Real time communication & notification is supported using [Socket.IO](https://socket.io/)
- Realtime One on One chats and group chats
- Functionality and features like Search for chats, create a group, add or remove partricipants.
- typing... animation when typping message by other user.
- Online / Offline status are shown.
- Read / Unread status of conversation is supported
- All the conversation are stored in the database i.e. *persistant*.
## Screenshots

![Click a user for chatting](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Click%20a%20user%20to%20chatting.png?raw=true)

*Click a user for chatting.*


![When received multiple Message.](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Notification%20-%20Click%20on.png?raw=true)

*When received multiple Message.*


![When received a single Message.](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Notification%20-%20%20Single.png?raw=true)

*When received a single Message.*


![My profile](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Profile%20Modal%20-%20My.png?raw=true)

*My profile*


![A User profile](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Profile%20Modal%20-%20Other.png?raw=true)

*A User profile*


![Create a group chat](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Group%20-%20Create.png?raw=true)

*Create a group chat*


![Update a group chat](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Group%20-%20Update.png?raw=true)

*Update a group chat*


![Hover on users](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Hover.png?raw=true)

*Hover on users*


![Hover my message show the time when send](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Hover%20time%20-%20My%20Msg.png?raw=true)

*Hover my message show the send time.*

![Hover a user message show the time when send](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Hover%20time%20-%20other.png?raw=true)

*Hover a user message show the send time.*


![Search users](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Search%20user.png?raw=true)

*Search users.*


![Login page](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Auth%20-%20Login.png?raw=true)

*Login page.*


![Signup page](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Auth%20-%20Sign%20up.png?raw=true)

*Signup page.*


![Mobile view - My Chats](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Mobile%20-%20My%20Chats.png?raw=true)

*Mobile view - My Chats*


![Mobile view - Single Chat](https://github.com/nandininila/Sky-Chat/blob/main/frontend/src/assets/Screenshots/Mobile%20-%20Single%20chat.png?raw=true)

*Mobile view - Single Chat*
## Environment Variables

To run this project, you will need to create a .env file in the root & add the following environment variables to your .env file

```
  PORT = 5000
  MONGO_URI = <yourMongoDbUri>
  JWT_SECRET = <yourSecret>
```


## Installation

Install `frontend` & `backend` with npm

```
  npm install
  cd frontend
  npm install
```
    
## Run

Run frontend only
```bash
  cd frontend
  npm start
```

Run backend only
```bash
  npm start
```

This wil run ports
```bash
  frontend - 3000
  backend - 5000
```
## Build & Deploy

Create frontend production build
```
  cd frontend
  npm run build
```

There is a [Render](https://render.com/) postbuild script, so if you push to [Render](https://render.com/), no need to build manually for deployment to [Render](https://render.com/).