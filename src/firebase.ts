import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAWY6ZM9hSoGrIEXOJRq-LfkX7QGNd7pqs',
  authDomain: 'authcreatepush.firebaseapp.com',
  projectId: 'authcreatepush',
  storageBucket: 'authcreatepush.appspot.com',
  messagingSenderId: '95654287756',
  appId: '1:95654287756:web:6fde25f4b2538d89fddea9'
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
