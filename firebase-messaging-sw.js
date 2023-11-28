// Service Worker
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCkRIayjPBxAnow-E1oFAa2wzGT1i8HjG4",
    authDomain: "smit-b9.firebaseapp.com",
    projectId: "smit-b9",
    storageBucket: "smit-b9.appspot.com",
    messagingSenderId: "359980592837",
    appId: "1:359980592837:web:4bcf4342a463c1919c0aac"
};

// // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = firebase.messaging()


messaging.onBackgroundMessage(payload => {
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: notificationTitle,
        icon: '<>'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});