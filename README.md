
# Instagram Clone

A Self project built using React. This is a frontend-only Instagram clone. All accounts, posts, likes, comments, and messages are simulated in the browser.

There is no backend, database, or connection to real Instagram.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- React.js
- Bootstrap 5
- Bootstrap Icons

## How to Run the Project

1. Install Node.js from https://nodejs.org.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Install the required packages:

   ```bash
   npm install
   ```

5. Start the project using the command specified in `package.json`:

   ```bash
   npm run dev
   ```

   If the project uses a `start` script instead, run `npm start`.

6. Open the local URL shown in the terminal.

## Folder Structure

- `index.html` - Contains the root element for React.
- `src/main.jsx` or `src/index.js` - Starts the React application.
- `src/App.jsx` - Main file that connects the components.
- `src/utils.js` - Contains helper functions.
- `src/data/` - Contains sample users, posts, and stories.
- `src/components/` - Contains the different parts of the website.
- `src/styles/` - Contains CSS files.

## How React Works

React uses state to remember data and update the screen when that data changes.

For example, when you click Like:
1. The `toggleLike` function updates the post.
2. React updates the state using `setPosts()`.
3. The screen displays the updated like count.

Components receive data and functions through props.

## How Local Storage Works

Local storage saves demo data in your browser so it can remain after refreshing the page.

The project uses:
- `loadData()` to read saved data.
- `saveData()` to store updated data.

Saved data may include posts, likes, comments, stories, follows, and settings.

You can inspect local storage through your browser's developer tools.

## Features

- Home feed with posts
- Like and comment on posts
- Create posts with images and captions
- Stories and story viewer
- Follow and unfollow users
- Search users and posts
- Explore page
- Reels page
- Messages and notifications
- User profile and saved posts
- Dark mode and settings
- Account switching
- Responsive layout for desktop and mobile
- Local storage for demo data

## Testing Checklist

- [ ] Navigation works correctly.
- [ ] Stories open and close.
- [ ] Likes and comments update.
- [ ] New posts can be created.
- [ ] Posts can be saved and removed from Saved.
- [ ] Search displays results.
- [ ] Follow and unfollow work.
- [ ] Messages can be sent.
- [ ] Settings and dark mode work.
- [ ] Data remains after refreshing.
- [ ] The layout works on smaller screens.

## Common Errors

**npm is not recognized**

Install Node.js and restart VS Code.

**Module not found**

Run `npm install` in the folder containing `package.json`.

**Blank page**

Check the terminal and browser console for errors.

**Images do not load**

Check your internet connection or use local images.

**Data disappears**

Check browser local storage and available storage space.

## Customization

- Change sample users and posts in `src/data/`.
- Change colors and sizes in the CSS files.
- Add components inside `src/components/`.
- Import new components into `App.jsx`.

This project is intended for learning React and frontend development.
