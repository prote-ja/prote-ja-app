import { auth, db } from "@/firebase";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import UserDocument, { UserStatus } from "./schemas/UserDocument";
import {
  setDoc,
  doc,
  DocumentSnapshot,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export async function login(
  email: string,
  password: string
): Promise<UserCredential> {
  const credentials = await signInWithEmailAndPassword(auth, email, password);
  return credentials;
}

export async function logout(): Promise<void> {
  await auth.signOut();
}

export async function getUserById(uid: string) {
  const user = (await getDoc(
    doc(db, "users", uid)
  )) as DocumentSnapshot<UserDocument>;

  return user;
}

export async function getAllActiveUsers(): Promise<UserDocument[]> {
  const q = query(
    collection(db, "users"),
    where("status", "==", UserStatus.ACTIVE)
  );

  const querySnapshot = await getDocs(q);

  const users: UserDocument[] = querySnapshot.docs.map((doc) => {
    return doc.data() as UserDocument;
  });

  return users;
}

export async function updateUser(newDocument: UserDocument) {
  const docRef = doc(db, "users", newDocument.uid);

  await setDoc(docRef, newDocument);
}

export async function sendResetPassword(email: string) {
  await sendPasswordResetEmail(auth, email);
}
