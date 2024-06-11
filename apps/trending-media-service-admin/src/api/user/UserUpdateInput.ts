import { InputJsonValue } from "../../types";
import { UserVerificationUpdateManyWithoutUsersInput } from "./UserVerificationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  userVerifications?: UserVerificationUpdateManyWithoutUsersInput;
};
