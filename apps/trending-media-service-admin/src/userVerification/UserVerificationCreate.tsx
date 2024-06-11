import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const UserVerificationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="expiresAt" source="expiresAt" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="verificationToken" source="verificationToken" />
      </SimpleForm>
    </Create>
  );
};
