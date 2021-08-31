import React from 'react';
import { Scene, Router, Actions, Stack, Drawer } from 'react-native-router-flux';
import { Dimensions, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginForm from './pages/LoginForm';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import HomePage from './pages/HomePage';
import Destination from './pages/Destination';
import SideBar from './components/SideBar';

const { width, height } = Dimensions.get("window")

const RouterComponent = () => {
    return (

        <Router style={{ marginTop: 0 }}>
            <Stack key="root">
                <Scene key="kimlik" hideNavBar={true}>
                    <Scene key="loginScreen" component={LoginForm} />
                    <Scene key="register" component={Register} hideNavBar={true} />
                    <Scene key="forgetPassword"
                        titleStyle={{ color: "transparent" }}
                        component={ForgetPassword}
                        leftButton={LeftButton}
                        navTransparent
                        hideNavBar={false} />

                </Scene>

                <Drawer drawerWidth={200}
                    contentComponent={SideBar}
                    hideNavBar
                    drawerPosition='left'
                    drawerType='back'
                    drawerIcon={<Icon
                        name="bars"
                        type="ion-icon"
                        color='#fafafa'
                        size={30}
                    />}
                >
                    <Scene key="drawermenu" hideNavBar>
                        <Scene key="login" titleStyle={{ color: "transparent" }}
                            component={HomePage}
                            navTransparent hideNavBar={false}
                        />
                        <Scene key="dest"
                            titleStyle={{ color: "transparent" }}
                            component={Destination}
                            leftButton={LeftButton}
                            navTransparent
                            hideNavBar={false} />
                        <Scene key="Register2" hideNavBar
                            component={Register}
                        />

                    </Scene>
                </Drawer>
            </Stack>
        </Router>
    );
};


const LeftButton = () => {
    return (

        <View style={{ width: width, height: height * 0.08, justifyContent: "center", alignItems: "flex-start" }}>
            <TouchableOpacity onPress={() => Actions.pop()}>
                <Icon
                    name='chevron-left'
                    type='ion-icon'
                    color='#fafafa'
                    size={25}
                />
            </TouchableOpacity>
        </View>

    );
};

export default RouterComponent;