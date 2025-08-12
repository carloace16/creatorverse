# WEB103 Prework - Creatorverse

Submitted by: **👉🏿 Carlo Ace Sagad**

About this web app: **👉🏿 "A web application that allows users to curate a list of their favorite content creators with full CRUD functionality."**

Time spent: **👉🏿 10** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='https://github.com/carloace16/creatorverse/blob/main/creatorverse_V1.gif?raw=true' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ... 👉🏿 Kapwing.com (for Windows)

## Notes

A few challenges were encountered while building this application, which provided valuable debugging experience:

- **Environment Configuration:** The project initially failed to start due to a `TypeError: crypto.hash is not a function`. This was a challenging environment issue caused by an outdated version of Node.js. It was resolved by using a node version manager (`nvm`) to upgrade Node.js to a compatible version and then reinstalling the project's dependencies.

- **Complex CSS Layout Debugging:** A significant challenge was properly centering the main application layout. This required using the browser's developer tools to inspect the DOM and discover that the default Vite/Pico.css styles on the `<body>` and `#root` elements were interfering with our own layout styles. The solution involved removing the conflicting `display: flex` property from the `body` and ensuring the `#root` container was set to `100%` width.

- **Nested Interactive Elements:** The "Visit Channel" button on the creator cards initially conflicted with the link that navigated to the creator's detail page. This was resolved by refactoring the `Card` component to separate the two actions, making the creator's name the link to the detail page and the "Visit Channel" a distinct button. This followed a best practice for user interface design to avoid conflicting actions.

- **Database Schema Mismatch:** An error occurred when adding a new creator, which I diagnosed using the browser console. The error message `Could not find the 'description' column` revealed a mismatch between the frontend code and the Supabase database schema. The issue was fixed by correcting the column name in the Supabase table editor.

## License

Copyright [2025] [👉🏿 your name here]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law memorabilia, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
