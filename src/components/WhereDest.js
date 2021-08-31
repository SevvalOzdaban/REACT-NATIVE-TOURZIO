import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../components/Card';
import CardSection from '../components/CardSction';
import ImageButton from '../components/ImageButton';
import { renderNode } from 'react-native-elements/dist/helpers';

const { width, height } = Dimensions.get('window')

class WhereDest extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() => Actions.push( this.props.key )}
                style={{ alignItems: "center", justifyContent: "center" }}
                activeOpacity={0.6}>
                <Image style={styles.imageStyle} source={{ uri: this.props.imageUrl }} />
                <Text style={styles.textStyle}>{this.props.text} </Text>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    imageStyle: {
        width: width * 0.43,
        height: height * 0.30,
        borderRadius: 10,

    },

    textStyle: {
        color: "#fafafa",
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: -height * 0.17
    }
});
export default WhereDest;