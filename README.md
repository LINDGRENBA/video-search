## Video Search Application

### Description :
This project is a video search application. The user can enter a topic into the search bar and videos related to that topic will be returned.  
<br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
<br/>  

### Setup :

If you would like this project on your local machine
1. Select the green `Code` button in the upper right of the github repository and copy the key (HTTPS or SSH)
2. Open your prefered text editor or EDI
3. Open the terminal
4. Enter `git clone [copied-github-key]`

### Tools & Technology :
* React
* Axios
* YouTube API
* Git & Github
* VS Code
<!-- * [Semantic-ui](https://semantic-ui.com/views/card.html)   -->
<br/>


## Image Query Application

### Description :
This project is a very basic React application, built as an exercise in managing user input, querying APIs and handling asynchronous actions in React.   
<br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
<br/>  




To add an API Key to the project
1. Sign up for an account on the [Unsplash Developers](https://unsplash.com/developers) website
2. Create a `new application`
3. Note the location of your API key inside of the newly generated application
4. Create a folder called `api` inside the `src` folder of this project
5. Add a file to the `api` folder and give it the title of `unsplash.js` **You can give this file a different name, but if you do, you will need to update the import statement on line 2 of the `App.js` file
6. Copy the following and paste it into the `unsplash.js` file
```
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID [YOUR API KEY]'
  }
})
```
7. Replace `[YOUR API KEY]` with the API key generated in your application on unsplash

### Tools & Technology :
* React
* Axios
* Unsplash API
* Git & Github
* VS Code
<br/>
