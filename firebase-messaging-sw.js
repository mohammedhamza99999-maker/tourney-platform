// Firebase Messaging Service Worker - touner-88371
// لازم يكون هذا الملف بجانب index.html بنفس المسار بالضبط.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBtiuPzJYI98lgvkRSUKF30LkMkdv8COpQ",
  authDomain: "touner-88371.firebaseapp.com",
  databaseURL: "https://touner-88371-default-rtdb.firebaseio.com",
  projectId: "touner-88371",
  storageBucket: "touner-88371.firebasestorage.app",
  messagingSenderId: "408830354970",
  appId: "1:408830354970:web:566cbca4878a2e44ea53a3"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const notification = payload.notification || {};
  const title = notification.title || 'تحديث البطولة';
  const options = {
    body: notification.body || '',
    icon: 'logo.png',
    badge: 'logo.png',
    data: {
      url: (payload.fcmOptions && payload.fcmOptions.link) || (payload.webpush && payload.webpush.fcm_options && payload.webpush.fcm_options.link) || './index.html'
    }
  };
  return self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || './index.html';
  event.waitUntil(clients.openWindow(url));
});
