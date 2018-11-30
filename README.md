Learn to read music!

[Noteful](https://learn-noteful.herokuapp.com/)

**_Demo Account_**
username:
password:

## Table of Contents

- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Description of Key Parts of Project](#key-parts)
  - [Client Folder Structure](#client-folder-structure)
  - [Server Folder Structure](#server-folder-structure)
- [Future Features](#future-features)
- [Feedback](#feedback)

## Tech Stack

This project was built with the following:

- `React` for the frontend
- `Redux` for state management
- `Node` for the backend
- `MongoDB` for the database
- `JWTs` for authentication

## Screenshots

**_Home Page_**
Entry point into the site

<!-- ![Home Page](./ss/home-page.png) -->

**_Sign Up_**
Sign up form

<!-- ![Sign up](./ss/sign-up.png) -->

**_Login_**
Login form

<!-- ![Login](./ss/log-in.png) -->

**_Dashboard Dock Navigation_**
Navigation for the dashboard that allows the user to access the different views

<!-- ![Dock Nav](./ss/dock-navigation.png) -->

**_Dashboard View_**
The main dashboard page is where the user learns to read notes.

<!-- ![Calendar](./ss/calendar-view.png) -->

**_Progress View_**
The progress page is where the user can review their progress, how many they've gotten right and wrong per each note.

<!-- ![Dream Post](./ss/dream-post-view.png) -->

## Description of Key Parts of Project

-------------ADD DETAIL HERE --------------------

<!-- The authorization and user creation happens in the auth and users actions and reducers connected to the signupForm and loginForm components and connected to their respective server side models. -->

### Client Folder Structure

```
public/
  favicon.ico
  index.html
  manifest.json
  src/
    __tests__
    _actions/
      auth-action.js
      card-action.js
      notes-action.js
      users.action.js
      utils.js
    _components/
      dashNavigation-component.js
      feedback-component.js
      input-component.js
      key-component.js
      keyboard-component.js
      navigation-component.js
      next-button-component.js
      note-display-component.js
      notifications-component.js
      points-component.js
    _containers/
      dashboard-container.js
      login-container.js
      progress-container.js
      signup-container.js
    _images/
      ledger.svg
      note.png
      quarter-note.svg
      sheet.png
      sheet2.png
    _reducers/
      auth.reducer.js
      card-reducer.js
      notes-reducer.js
      points-reducer.js
    pages/
      home.js
      not-found.js
    utils/
      sounds/
        piano/
          A.mp3
          As-Bb.mp3
          B.mp3
          C.mp3
          Cs-Db.mp3
          D.mp3
          Ds-Eb.mp3
          E.mp3
          F.mp3
          Fs-Gb.mp3
          G.mp3
          Gs-Ab.mp3
      shallowWithStore.js
      sound-player.js
      validators.js
    App.css
    App.js
    config.js
    index.css
    index.js
    logo.svg
    store.js
  eslintrc.json
  ss/
  package-lock.json
  package.json
  README.md
```

### Server Folder Structure

```
db/
  data.js
models/
  card-model.js
  user-model.js
passport/
  jwt-strategy.js
  local-strategy.js
routers/
  auth-router.js
  cards-router.js
  users-router.js
test/
utils/
  resetCards.js
config.js
db-mongoose.js
index.js
package-lock.json
package.json
Procfile
README.md
```

## Future Features

- Expand notes taught from just Major C to include other octaves and sharp/flat notes.

## Feedback

We are always open to [your feedback](https://github.com/clkent/dreams-client/issues) or feature requests. Thanks for checking out Noteful!
