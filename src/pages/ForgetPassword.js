import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Alert, TouchableHighlight, ImageComponent } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const { width, height } = Dimensions.get('window')

class ForgetPassword extends Component {
    render() {
        const image = { uri: "https://i.pinimg.com/originals/7f/ea/2c/7fea2c1974d7bd54cc0fca08ecfa7460.jpg" };
        return (
            <View style={{ flex: 1 }} >
                <ImageBackground source={image} style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ height: height * 0.30, justifyContent: 'flex-end', }}>
                        <Text style={styles.text}> FORGOT {"\n"} PASSWORD {"\n"} </Text>
                        <Text style={{ fontSize: 20, color: "white" }}> Select which contact details should we {"\n"} use to reset your password</Text>
                    </View>

                    <View style={{ ...styles.mainView, flexDirection: 'row', alignItems: "center" }}>
                        <Icon
                            name='mobile'
                            type='ion-icon'
                            color='#517fa4'
                            size={30}
                        />
                        <TextInput
                            placeholder="+90 *** *** 18"
                            placeholderTextColor="black"
                            style={styles.inputStyle}
                            value={this.props.email}
                            onChangeText={null}
                        />
                    </View>

                    <View style={{ ...styles.mainView, flexDirection: 'row', alignItems:"center" }}>
                        <Icon
                            name='envelope'
                            type='ion-icon'
                            color='#517fa4'
                            size={22}
                        />
                        <TextInput 
                            placeholder="*****@gmail.com"
                            placeholderTextColor="black"
                            style={styles.inputStyle}
                            value={this.props.email}
                            onChangeText={null}                      
                        />
                </View>

                    <View style={{ padding: 20, paddingLeft: 30, height: height * 0.50, alignItems: 'center',  }}>
                        <TouchableOpacity style={{ backgroundColor: 'black', width: width * 0.9, height: height * 0.06, borderRadius: width * 0.03, justifyContent: 'space-around'  }}>
                            <Text style={{ width: width * 0.9, height: height * 0.06, color: "#fafafa", textAlign: 'center', textAlignVertical: 'center' }}> SEND </Text>
                        </TouchableOpacity>
                    </View>


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
        textAlign: "left",
        color: "white"
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
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        height: height * 0.1,

    },
    mainView: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fafafa',
        borderBottomWidth: 2,
        //backgroundColor: '#fff',
        height: height * 0.08,
        justifyContent: 'flex-start',
        width: width * 0.9,
        paddingLeft:width*0.03,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        //elevation: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 13,

    }


});

export default ForgetPassword;