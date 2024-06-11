import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserVerificationCreateInput = {
  expiresAt?: Date | null;
  user?: UserWhereUniqueInput | null;
  verificationToken?: string | null;
};
