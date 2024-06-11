import { UserVerificationWhereInput } from "./UserVerificationWhereInput";
import { UserVerificationOrderByInput } from "./UserVerificationOrderByInput";

export type UserVerificationFindManyArgs = {
  where?: UserVerificationWhereInput;
  orderBy?: Array<UserVerificationOrderByInput>;
  skip?: number;
  take?: number;
};
