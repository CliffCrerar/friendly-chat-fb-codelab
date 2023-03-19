/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyBnvIwr2uMC9cyN9BiyQ6H315FkZ1bKtg4",
  authDomain: "friendly-b5abc.firebaseapp.com",
  projectId: "friendly-b5abc",
  storageBucket: "friendly-b5abc.appspot.com",
  messagingSenderId: "827359804860",
  appId: "1:827359804860:web:71c074a0bc16164320ffb9",
  measurementId: "G-0GQ6TWW3ZM"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}