importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAWdmKs-Af0IN3PI-wODpEMLtKkgHrlEkY",
  authDomain: "login-gg-ebc58.firebaseapp.com",
  projectId: "login-gg-ebc58",
  storageBucket: "login-gg-ebc58.appspot.com",
  messagingSenderId: "448339567275",
  appId: "1:448339567275:web:87bbc2febb630e6236cdee",
});

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: "/firebase-logo.png",
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
