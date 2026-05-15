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

// هذه الدالة تعمل بالخلفية والموبايل مقفول
messaging.onBackgroundMessage(function(payload) {
  console.log("تم استقبال إشعار في الخلفية: ", payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png',         // الأيقونة الكبيرة للإشعار
    badge: '/logo.png',        // الأيقونة الصغيرة التي تظهر في شريط الموبايل العلوي
    dir: 'rtl',                // اتجاه النص من اليمين لليسار
    vibrate: [300, 100, 300],  // نمط الاهتزاز لجذب الانتباه
    requireInteraction: true   // إبقاء الإشعار على الشاشة حتى يلمسه المستخدم (اختياري)
  };
  
  // إجبار نظام التشغيل (أندرويد/ويندوز) على إظهار الإشعار
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
