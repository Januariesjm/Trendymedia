import { InputJsonValue } from "../../types";
import { UserVerificationCreateNestedManyWithoutUsersInput } from "./UserVerificationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  userVerifications?: UserVerificationCreateNestedManyWithoutUsersInput;
};
