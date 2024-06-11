import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserVerificationUpdateInput = {
  expiresAt?: Date | null;
  user?: UserWhereUniqueInput | null;
  verificationToken?: string | null;
};
