import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MovieCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="description" multiline source="description" />
        <TextInput label="director" source="director" />
        <div />
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
