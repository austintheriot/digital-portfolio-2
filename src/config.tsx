import firebase from 'firebase/app';
import 'firebase/analytics';

export const contactForm = 'f17LZtI55f2YK6SMRCDt2jBRnwCk6yyk';
export const tryItOut = 'd0WikTjKTd4rYZJZQA8CljIKQ5GOpYVp';
export const firebaseconfig = {
  apiKey: 'AIzaSyBHcDJ33mfluQY0zLXaVyMbZqDy0kN7Qsc',
  authDomain: 'portfolio-7d177.firebaseapp.com',
  databaseURL: 'https://portfolio-7d177.firebaseio.com',
  projectId: 'portfolio-7d177',
  storageBucket: 'portfolio-7d177.appspot.com',
  messagingSenderId: '856760981673',
  appId: '1:856760981673:web:809f05498b5e841d2d31b8',
  measurementId: 'G-KSH1KWWTDY',
};

export const app = firebase.initializeApp(firebaseconfig);
export const analytics = firebase.analytics(app);
