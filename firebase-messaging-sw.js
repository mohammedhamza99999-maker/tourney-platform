importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCfaXlGarmxWH8HkxDqdvOAtTqJaF0LXvg",
    authDomain: "kdcsaas.firebaseapp.com",
    projectId: "kdcsaas",
    storageBucket: "kdcsaas.firebasestorage.app",
    messagingSenderId: "453734628369",
    appId: "1:453734628369:web:7445ad89cdc541255905b0"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title || "تحديث من البطولة";
    const notificationOptions = {
        body: payload.notification.body,
        icon: './logo.png', // تعديل المسار هنا
        badge: './logo.png', // وتعديل المسار هنا
        vibrate: [300, 100, 300],
        requireInteraction: true
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
