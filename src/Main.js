import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import LoginForm from './pages/LoginForm';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import Router from './Router';
import HomePage from './pages/HomePage';
import SideBar from './components/SideBar'
import Destination from './pages/Destination';


class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                < Router />
            </View>

        );
    }
}
export default Main;