import axios from 'axios';

const KEY = 'AIzaSyDmv7eIx9Btp8Hg-lkUFSY7qHdC_Sc9b3I';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});