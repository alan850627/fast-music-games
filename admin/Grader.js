const firebase = require('firebase-admin')
const path = require('path')
const _ = require('lodash')
const uuidv4 = require('uuid/v4')
const YouTube = require('youtube-node');
const fs = require('fs')


const serviceAccount = require(path.resolve(__dirname, '..', 'auth', 'firebase.json'));
const app = firebase.initializeApp({
  // Setup service account for this app.
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://fast-music-games.firebaseio.com',
})
const db = app.database()
const youTube = new YouTube()
youTube.setKey('AIzaSyADtiS-UxkTMe6kpI920BURFww51d2YZY8');


function compareTwoArraysIgnoreNull(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i]) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr2[j]) {
          if (arr1[i] === arr2[j]) {
            return true
          }
        }
      }
    }
  }
  return false
}
