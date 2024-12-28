import { Timestamp } from "firebase/firestore";

export enum WearableStatus {
  CONNECTED = "connected",
  DISABLED = "disabled",
  DISCONNECTED = "disconnected",
  OUT_OF_BOUNDS = "out_of_bounds",
}

interface WearableDocument {
  uid: string;

  battery: number;
  status: WearableStatus;

  createdAt: Timestamp;
}

export default WearableDocument;
