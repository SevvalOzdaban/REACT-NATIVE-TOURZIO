import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, ImageBackground, Button, Dimensions, TouchableOpacity, Alert, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window')

class Register extends Component {
    render() {
        const image = { uri: "https://i.pinimg.com/originals/7f/ea/2c/7fea2c1974d7bd54cc0fca08ecfa7460.jpg" };
        return (
            <View style={{ flex: 1 }} >
                <ImageBackground source={image} style={{ flex: 1, justifyContent: 'center' }}>

                    <View style={{ height: height * 0.20, justifyContent: 'center' }}>
                        <Text style={styles.text}>TOURZIO</Text>
                        <Text style={styles.text}>We stay for you..</Text>
                    </View>

                    <View style={{ height: height * 0.1, width: width, flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: width * 0.01 }}>
                        <TextInput
                            placeholder="FIRST NAME"
                            value={this.props.firstName}
                            style={styles.border}
                            onChangeText={email => this.props.emailChanged(email)}
                        />
                        <TextInput
                            placeholder="LAST NAME"
                            value={this.props.firstName}
                            style={styles.border}  
                            onChangeText={email => this.props.emailChanged(email)}
                        />

                    </View >

                    <View style={{ height: height * 0.70, paddingBottom: height * 0.1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                        <TextInput
                            placeholder="E-MAIL ADDRESS"
                            value={this.props.email}
                            style={styles.genis_border}
                            onChangeText={email => this.props.emailChanged(email)}
                        />
                        <TextInput
                            placeholder="TELEPHONE"
                            value={this.props.telefon}
                            style={styles.genis_border}
                            onChangeText={telefon => this.props.telefonChanged(telefon)}
                        />
                        <TextInput
                            placeholder="PASSWORD"
                            value={this.props.password}
                            style={styles.genis_border}
                            onChangeText={password => this.props.passwordChanged(password)}
                        />
                        <TextInput
                            placeholder="CONFIRM PASSWORD"
                            value={this.props.password}
                            style={styles.genis_border}
                            onChangeText={password => this.props.emailChanged(password)}
                        />
                        <View style={{ width: "95%", opacity: 0.80 }}>
                            <Button
                                color="#000"
                                title="REGISTER"
                                onPress={() => Actions.push("loginScreen")}
                            />
                        </View>
                        <View style={{ height: height * 0.10, justifyContent: 'center', }}>
                            <Text style={{ color: "black", textAlign: "center", fontSize: 16 }}>  By clicking Register. </Text>
                            <Text style={{ color: "black", fontSize: 16 }} > You accept our Term of Use and Privacy Policy </Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: width, justifyContent: "center", alignItems: 'center' }}>
                            <Text style={{ color: "white", textAlign: 'center', fontSize: 18, textAlignVertical: 'center' }}>
                                Already Have an Account ?
                            </Text>
                            <TouchableOpacity
                                onPress={() => Actions.push("loginScreen")}>
                                <Text style={{ color: "#fafafa", textAlign: 'center', fontSize: 18, textAlignVertical: 'center' }}> LOGIN </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
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
    border: {
        width: width * 0.45,
        height: 50,
        padding: 15,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#fafafa'
    },
    genis_border: {
        width: width * 0.95,
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'white'
    },

}

);

export default Register;