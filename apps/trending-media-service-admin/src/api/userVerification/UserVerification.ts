import { User } from "../user/User";

export type UserVerification = {
  createdAt: Date;
  expiresAt: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
  verificationToken: string | null;
};
