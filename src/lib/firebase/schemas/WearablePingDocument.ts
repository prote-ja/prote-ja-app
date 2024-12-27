import { Timestamp } from "firebase/firestore";

interface WearablePingDocument {
  uid: string;

  wearable: string; // UID of the wearable that sent the ping

  battery: number;
  pedometer: number;
  temperature: number;

  gateway: string; // UID of the totem used to relay the ping

  createdAt: Timestamp;
}
export default WearablePingDocument;
