import React from 'react';
import { View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const Card = (props) => {
    return(
    <View style = {styles.containerStyle}>
        {props.children}
    </View>
    );
    
};

    const styles = {
        containerStyle: {
            width: width,
            height: height * 0.45,
            alignItems: "flex-start",
            flexDirection: "column",
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10,
            
           
}
    };

export default Card;

