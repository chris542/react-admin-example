import React, { Component } from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit, UserCreate } from './src/users';

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

class App extends Component {
    render() {
        //https://marmelab.com/react-admin/index.html
        //return (
            //<Admin dataProvider={dataProvider}>
                //<Resource name="users" list={ListGuesser} edit={EditGuesser}/>
            //</Admin>
        //);
        return (
            <Admin dataProvider={dataProvider}>
                <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/>
                <Resource name="posts" list={ListGuesser} edit={EditGuesser}/>
            </Admin>
        );
    }
}

export default App;
