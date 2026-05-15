importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// تهيئة فايرباس بمعلومات مشروعك
firebase.initializeApp({
    apiKey: "AIzaSyCfaXlGarmxWH8HkxDqdvOAtTqJaF0LXvg",
    projectId: "kdcsaas",
    messagingSenderId: "453734628369",
    appId: "1:453734628369:web:7445ad89cdc541255905b0"
});

const messaging = firebase.messaging();

// استقبال الإشعارات في الخلفية (عندما يكون التطبيق مغلقاً)
messaging.onBackgroundMessage(function(payload) {
  console.log("تم استقبال إشعار في الخلفية: ", payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png' // تأكد أن صورة اللوكو موجودة بهذا المسار
  };
  
  self.registration.showNotification(notificationTitle, notificationOptions);
});
