# Blog-App

Frontend Blogging App Documentation
Overview
This Blogging App is a frontend-only application developed using React. The app allows users to sign up, log in, create blog posts, view blog posts, make posts public or private, comment on public posts, and search and paginate posts. All features are implemented on the frontend with the assumption that data will be stored and managed on the backend (which is not implemented in this version).

Core Features
1. Sign Up and Log In
Sign Up:
Users can sign up for an account by providing a username, email, and password.
Sign-up data is stored in local state (for simulation purposes), and users receive an authentication token (simulated).
Log In:
Users can log in by entering their credentials (email and password).
Upon successful login, an authentication token is generated (stored locally) to simulate access to protected routes.
2. Create and View Blog Posts
Create Blog Posts:
Authenticated users can create new blog posts with a title, content, and an optional image URL.
Users can select whether the post is public or private. Public posts are visible to everyone, while private posts are only accessible to the user who created them.
View Blog Posts:
Users can view a list of all public blog posts on the homepage.
Clicking on a post will take users to a detailed view of the blog post.
The app displays the title, author, content, and image of each post.
3. Make Posts Public or Private
Public Posts:

Public posts are visible to all users.
These posts are displayed in the homepage feed and can be interacted with (commented on).
Private Posts:

Private posts are only visible to the user who created them.
These posts are hidden from the general feed, and the user can view them from their own dashboard or private feed.
4. Comment on Public Posts
Commenting on Public Posts:
Users can comment on any public post.
Each post contains a comment section where users can write and submit comments.
Comments are stored in local state (for frontend simulation) and displayed under the corresponding post.
5. Search and Paginate Posts
Search Functionality:

Users can search for posts by title or content using a search bar.
As users type, the displayed posts are filtered dynamically based on the search query.
Pagination:

To manage large lists of posts, the app implements pagination.
Users can navigate between pages of posts, and only a subset of posts is displayed on each page.
Technologies Used
Frontend
React: JavaScript library for building the user interface.
React Router: For routing and managing navigation within the app.
Tailwind CSS: Utility-first CSS framework for styling the app.
Local Storage: Used for simulating authentication tokens and storing temporary data (such as created posts and comments).
useState / useContext: Used for managing state locally and globally (e.g., blog posts, comments, authentication).
Project Structure
bash
Copy
Edit
src/
|-- components/              # React components
|   |-- Header.js            # Contains navigation, login, and sign-up buttons
|   |-- BlogCard.js          # Displays individual blog posts in a list
|   |-- CreateBlog.js        # Contains the form for creating new blog posts
|   |-- CardDetail.js        # Displays detailed view of a single post
|-- pages/                   # Pages of the app
|   |-- Home.js              # Homepage displaying public posts
|   |-- Login.js             # Login page with form
|   |-- Signup.js            # Signup page with form
|-- context/                 # React context for managing global data
|   |-- BlogContext.js       # Provides global state for posts, comments, and user session
|-- App.js                   # Main app component with routing and layout
|-- index.js                 # Entry point of the application
How to Run the Application
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/your-username/blogging-app.git
cd blogging-app
Install Dependencies:

bash
Copy
Edit
npm install
Run the Application:

bash
Copy
Edit
npm start
The app will open on http://localhost:3000.

How the App Works
1. Authentication (Sign Up / Log In)
Sign Up:

The sign-up page allows users to create an account by entering a username, email, and password.
Upon successful sign-up, a JWT token is generated (simulated) and stored in localStorage for the duration of the session.
Log In:

The login page allows users to sign in by providing their email and password.
Upon successful login, the JWT token is stored, and the user is redirected to the homepage.
2. Blog Post Creation and Visibility
Create Post:

Once logged in, users can create blog posts via the CreateBlog form.
They can add a title, content, and an image URL.
They also select whether the post is public or private.
Public and Private Posts:

Public posts are displayed on the homepage feed for all users to view.
Private posts are only visible to the user who created them (they are stored in local state for now).
3. Commenting on Public Posts
Comment Section:
Each public post includes a comment section where users can add their comments.
Comments are stored in local state and displayed under the corresponding blog post.
New comments are added dynamically when submitted.
4. Search Functionality
Real-Time Search:
Users can search for posts using the search bar.
The app filters the displayed posts in real-time based on the search query.
The search looks for matching content in post titles and the content body.
5. Pagination
Pagination Implementation:
Posts are divided into pages to avoid displaying too many posts at once.
Users can navigate between pages to see different sets of posts.
Pagination is simulated, and posts are split across multiple pages.
