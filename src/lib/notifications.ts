import { updateUser } from "@/db/users";
import { messaging } from "@/firebase";
import { Database } from "@/types/database.types";
import { getToken } from "firebase/messaging";

export async function getMessagingToken() {
  return getToken(messaging, {
    vapidKey: import.meta.env.VITE_PUBLIC_VAPID_KEY,
    serviceWorkerRegistration: await navigator.serviceWorker.register(
      "../prote-ja-app/firebase-messaging-sw.js"
    ),
  });
}

export async function updateUserFcmToken(
  data: Database["public"]["Tables"]["users"]["Row"]
) {
  const fcmToken = await getMessagingToken();

  if (data.fcm_token === fcmToken) {
    return;
  }

  const response = await updateUser(data.id, { fcm_token: fcmToken });
  console.log("updateUserFcmToken", response);

  return response;
}
