import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, ImageBackground, Button, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window')

class LoginForm extends Component {
    render() {
        const image = { uri: "https://i.pinimg.com/originals/7f/ea/2c/7fea2c1974d7bd54cc0fca08ecfa7460.jpg" };
        return (
            <View style={
                { flex: 1 }
            }>
                <ImageBackground source={image} style={{ flex: 1, justifyContent: 'center' }} >
                    <View style={{ height: height * 0.20, justifyContent: 'center', }} >

                        <Text style={styles.text} > TOURZIO </Text>
                        <Text style={styles.text} > We stay for you.. </Text>
                    </View >

                    <View style={{ height: height * 0.38, width: width, alignItems: 'center', justifyContent: 'space-around' }} >
                        <TextInput placeholder="E-mail"
                            style={styles.border}
                            value={this.props.email}
                            onChangeText={email => this.props.emailChanged(email)}
                        />

                        <TextInput secureTextEntry placeholder="Şifre"
                            style={styles.border}
                            value={this.props.password}
                            onChangeText={password => this.props.passwordChanged(password)}
                        />

                        <TouchableOpacity onPress={() => Actions.push("forgetPassword")} >
                            <Text style={{ width: width * 0.9, color: "white", textAlign: 'right', alignItems: 'flex-end' }} > FORGET PASSWORD </Text>
                        </TouchableOpacity >


                        <TouchableOpacity style={{ backgroundColor: 'black', width: width * 0.9, height: height * 0.06, borderRadius: width * 0.01, }}
                            onPress={() => Actions.drawermenu({ type: 'replace' })} >
                            <Text style={{ width: width * 0.9, height: height * 0.06, color: "#fafafa", textAlign: 'center', borderRadius: width * 0.01, textAlignVertical: 'center' }} > LOG IN </Text>
                        </TouchableOpacity >
                    </View>

                    <View style={{ width: width, height: height * 0.42, justifyContent: 'space-evenly', paddingBottom: height * 0.1, alignItems: 'center' }} >
                        <Text style={{ color: "white", textAlign: 'center', fontSize: 25, fontWeight: "bold" }} >OR </Text>
                        <View style={{ flexDirection: 'row', width: width, justifyContent: "center", alignItems: 'center' }} >

                            <Text style={{ color: "white", textAlign: 'center', fontSize: 18, textAlignVertical: 'center' }} >Login With </Text>
                            <TouchableOpacity onPress={() => Actions.register()} >
                                <Text style={{ color: "#fafafa", fontSize: 18, textAlign: 'center', textAlignVertical: 'center' }} > SIGN UP </Text>
                            </TouchableOpacity >
                        </View>


                        <View style={{ flexDirection: 'row', width: width, justifyContent: "space-evenly", paddingHorizontal: width * 0.01 }} >
                            <Icon.Button name="facebook" backgroundColor="#3b5998" >
                                <Text style={{ fontFamily: 'Arial', fontSize: 15, color: '#fafafa' }} >Facebook </Text>
                            </Icon.Button >

                            <Icon.Button name="twitter" backgroundColor="#40FFF5" >
                                <Text style={{ fontFamily: 'Arial', fontSize: 15, color: '#fafafa' }}>Twitter </Text>
                            </Icon.Button >
                            <Icon.Button name="google" backgroundColor="#FF0011" >
                                <Text style={{ fontFamily: 'Arial', fontSize: 15, color: '#fafafa' }} >Google </Text>
                            </Icon.Button >
                        </View>
                    </View >
                </ImageBackground>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Cochin",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "black"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    border: {
        width: width * 0.9,
        height: 50,
        padding: 10,
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5,
        borderColor: '#fafafa'
    },


});

export default LoginForm;