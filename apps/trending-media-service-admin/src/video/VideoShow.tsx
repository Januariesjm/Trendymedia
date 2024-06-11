import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const VideoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="platform" source="platform" />
        <TextField label="title" source="title" />
        <TextField label="trending_score" source="trendingScore" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
