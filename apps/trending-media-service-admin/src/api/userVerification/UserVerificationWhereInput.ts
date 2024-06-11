import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserVerificationWhereInput = {
  expiresAt?: DateTimeNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  verificationToken?: StringNullableFilter;
};
