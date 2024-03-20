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

    console.log("backgroundMessage: ", payload);

    // {
    //     "from": "359980592837",
    //     "collapseKey": "campaign_collapse_key_7577404568745323110",
    //     "notification": {
    //         "title": "abc title",
    //         "body": "abc text",
    //         "image": "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    //     },
    //     "data": {
    //         "gcm.n.e": "1",
    //         "google.c.a.ts": "1710912070",
    //         "google.c.a.udt": "0",
    //         "google.c.a.e": "1",
    //         "google.c.a.c_id": "7577404568745323110",
    //         "google.c.a.c_l": "notification name abc"
    //     }
    // }

    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: notificationTitle,
        icon: '<>'
    };

    self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});