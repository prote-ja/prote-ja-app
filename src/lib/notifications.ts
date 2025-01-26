import { updateUser } from "@/db/users";
import { messaging } from "@/firebase";
import { getToken } from "firebase/messaging";

export async function getMessagingToken() {
  return getToken(messaging, {
    vapidKey: import.meta.env.VITE_PUBLIC_VAPID_KEY,
    serviceWorkerRegistration: await navigator.serviceWorker.register(
      "../prote-ja-app/firebase-messaging-sw.js"
    ),
  });
}

export async function updateUserFcmToken(id: string) {
  await requestPermission();

  const fcmToken = await getMessagingToken();
  const response = await updateUser(id, { fcm_token: fcmToken });

  return response;
}
export async function requestPermission() {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    console.log("Notification permission granted.");
  }
}
