import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PolicyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="Effected Date" source="effectedDate" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
