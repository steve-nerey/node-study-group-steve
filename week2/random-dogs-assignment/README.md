## Random Dog Ratings

A site for rating the cuteness of random dogs

---

### USER STORIES
- When the user visits the site, they are presented with a random dog picture and asked to rate its cuteness using a dropdown menu. 
- When the user submits their rating, they receive a message to let them know that their rating was recorded and they are presented with a new picture.
- When the user navigates to the gallery page, they see all of the dogs that have been rated, along with their ratings.

---

### STEPS

1. download the starter code 
</br>

**Client Side in index.js**

2. write a function that makes a GET request with fetch to get a random dog picture from the [random dog api](https://random.dog/woof.json) and display it in the browser.
3. write a function that makes a POST request with fetch to send data to the server (image url and cuteness rating) whenever the user selects an option from the dropdown menu and clicks the submit button.

**Server Side in server.js**

4. create a `package.json` file and `npm install` express and nedb.
5. write a route to handle the POST request and log it to the console on the server side.
6. create a database and store data sent to the server in it.
7. define a route to handle GET requests, query the database for all entries, and send data back to client

**Client Side in gallery.js**

8. write a function that makes a GET request to the server at the route defined in the previous step and log the data to the console on the client side.
9. iterate through the array of data, adding the pictures and ratings to the `gallery/index.html` page. 

---

### EXTENSIONS

- Add some style to the site with css
- Some images from the random dogs api don't load in the browser. Can you figure out why, and make changes to your code to account for this?
- On the gallery page the images load in an arbitrary order. Try to sort the images that get returned from the database so that the most recently rated images appear at the top. 
- Refactor the code to load the data from the random dogs api on the server side, rather than client side (see [module three](https://www.youtube.com/watch?v=ZtLVbJk7KcM) of the "working with data and APIs" series for an idea of how to do this).