import { SortOrder } from "../../util/SortOrder";

export type UserVerificationOrderByInput = {
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  verificationToken?: SortOrder;
};
