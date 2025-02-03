import { getUser, updateUser } from "@/db/users";
import { messaging } from "@/firebase";
import { Database } from "@/types/database.types";
import { getToken, onMessage } from "firebase/messaging";

export async function getMessagingToken() {
  try {
    const serviceWorkerRegistration = await navigator.serviceWorker.register(
      "../prote-ja-app/firebase-messaging-sw.js"
    );

    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_PUBLIC_VAPID_KEY,
      serviceWorkerRegistration,
    });

    return token;
  } catch (error) {
    console.error("Error getting messaging token:", error);
    throw error;
  }
}

export async function updateUserFcmToken(
  data: Database["public"]["Tables"]["users"]["Row"]
) {
  try {
    const fcmToken = await getMessagingToken();

    if (data.fcm_token === fcmToken) {
      return;
    }

    const response = await updateUser(data.id, { fcm_token: fcmToken });
    console.log("updateUserFcmToken", response);

    return response;
  } catch (error) {
    console.error("Error updating user FCM token:", error);
    throw error;
  }
}

// Listen for token refresh
export function setupTokenRefreshListener(userId: string) {
  // Firebase v9 does not have an explicit `onTokenRefresh` method.
  // Instead, you can periodically check for token changes or listen for messages.
  // Here, we use `onMessage` to detect when a new token might be generated.
  onMessage(messaging, async (payload) => {
    console.log("Message received. ", payload);

    // Check if the token has changed
    const newToken = await getMessagingToken();
    const currentUser = await getUser(userId); // Replace with your function to fetch user data

    if (currentUser.data?.fcm_token !== newToken) {
      await updateUser(userId, { fcm_token: newToken });
      console.log("FCM token refreshed and updated on server:", newToken);
    }
  });
}

// Listen for incoming messages
export function setupMessageListener() {
  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    // Customize notification here
    const notificationTitle = payload.notification?.title || "New Message";
    const notificationOptions = {
      body: payload.notification?.body || "You have a new message",
      icon: payload.notification?.icon || "/icons/icon-192x192.png",
    };

    if (Notification.permission === "granted") {
      new Notification(notificationTitle, notificationOptions);
    }
  });
}
