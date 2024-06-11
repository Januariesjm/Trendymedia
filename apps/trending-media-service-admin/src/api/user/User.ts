import { JsonValue } from "type-fest";
import { UserVerification } from "../userVerification/UserVerification";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userVerifications?: Array<UserVerification>;
};
