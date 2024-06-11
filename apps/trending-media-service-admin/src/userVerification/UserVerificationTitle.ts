import { UserVerification as TUserVerification } from "../api/userVerification/UserVerification";

export const USERVERIFICATION_TITLE_FIELD = "verificationToken";

export const UserVerificationTitle = (record: TUserVerification): string => {
  return record.verificationToken?.toString() || String(record.id);
};
