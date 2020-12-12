## Video Search Application

![Application Demo Gif](./public/demo.gif)

### Description :
This project is a video search application which utilizes the YouTube v3 API. The user can enter a topic into the search bar and videos related to that topic will be returned.  
<br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
<br/>  

### Setup :

If you would like this project on your local machine
1. Select the green `Code` button in the upper right of the github repository and copy the key (HTTPS or SSH)
2. Open your prefered text editor or EDI
3. Open the terminal
4. Enter `git clone [copied-github-key]`

To add an API Key to the project
1. Sign up for a GoogleAPI account at [console.developers.google.com](https://console.developers.google.com/)
2. Create a `new project`
3. Once the project has been created, navigate to the project dashboard
4. Select `+ ENABLE APIS AND SERVICES` and search for the YouTube API
5. Select the `YouTube Data API v3` search result and then select `enable`
6. Select `+ CREATE CREDENTIALS` in the upper righthand corner *or* select `Credentials` in the lefthand column and then `+ CREATE CREDENTIALS` at the top of the page
7. Create an API Key
8. Create a folder in the project's `src` directory called `api`
9. Add a file to the `api` folder and give it the title of `youtube.js` *You can give this file a different name, but if you do, you will need to update the import statement on line 3 of the `App.js` file*
10. Copy the following and paste it into the `youtube.js` file
```
import axios from 'axios';

const KEY = '[YOUR API KEY]';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
```
11. Replace `[YOUR API KEY]` with the API key generated in your GoogleAPI project


### Tools & Technology :
* CSS
* React
* Axios library
* YouTube API 
* Git & Github
* VS Code
* [Semantic-ui](https://semantic-ui.com/views/card.html)  
<br/>
