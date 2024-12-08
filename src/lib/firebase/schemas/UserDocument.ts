import { Timestamp } from "firebase/firestore";

export enum UserRoles {
  ADMIN = "admin",
  PERSON = "person",
  COMPANY = "company",
}

export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

interface UserDocument {
  uid: string;

  name: string;
  phone: string;
  email: string;

  role: UserRoles;
  status: UserStatus;

  createdAt: Timestamp;
}

export default UserDocument;
