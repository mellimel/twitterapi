import { TwitterApi } from 'twitter-api-v2';
import {config} from 'dotenv'
const bearer = config().parsed.BEARER_TOKEN

// Instanciate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi(bearer);

// Tell typescript it's a readonly app
const roClient = twitterClient.readOnly;

// get tweet by id
// roClient.get('https://api.twitter.com/2/tweets/6541').then(e => {
//   console.log(e);
// })

// get recent tweets with hashtag
const hashtag = 'babylonjs'
roClient.get(`https://api.twitter.com/2/tweets/search/recent?query=%23${hashtag}`).then(e => {
  console.log(e);
})

// get all tweets with hashtag, you need higher access than the default for this
// roClient.get(`https://api.twitter.com/2/tweets/search/all?query=%23${hashtag}`).then(e => {
//   console.log(e);
// })