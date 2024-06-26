import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TvShowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <div />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
