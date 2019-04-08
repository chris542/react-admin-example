import React from 'react';
import {
    Create,
    Edit,
    List,
    Datagrid,
    TextField,
    EmailField,
    UrlField,
    SimpleForm,
    TextInput,
    DisabledInput,
} from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" label="Address"/>
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" label="Company"/>
        </Datagrid>
    </List>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" label="Address" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" label="Company" />
        </SimpleForm>
    </Create>
);
export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" label="Address" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" label="Company" />
        </SimpleForm>
    </Edit>
);

