import { GoogleAuthProvider, FacebookAuthProvider, EmailAuthProvider } from 'firebase/auth';
import { auth } from 'firebaseui';

export const firebaseConfig = {
  apiKey: 'AIzaSyDb07B1nv0May__cQB7eVoHTTwSRZa1oQ4',
  authDomain: 'doctrinal-mastery-ebe13.firebaseapp.com',
  databaseURL: 'https://doctrinal-mastery-ebe13.firebaseio.com',
  projectId: 'doctrinal-mastery-ebe13',
  storageBucket: 'doctrinal-mastery-ebe13.appspot.com',
  messagingSenderId: '66956608965',
  appId: '1:66956608965:web:60ff2741510fd3f6ebb7ac'
};

export const firebaseUiAuthConfig = {
  signInFlow: 'popup',
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    FacebookAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
    auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: '/home',
  // tosUrl: '<your-tos-link>',
  // privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: auth.CredentialHelper.GOOGLE_YOLO
};
