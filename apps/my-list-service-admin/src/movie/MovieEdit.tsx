import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MovieEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="description" multiline source="description" />
        <TextInput label="director" source="director" />
        <div />
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
