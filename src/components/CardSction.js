import React from 'react';
import { View, Dimensions, ImageButton } from 'react-native';

const { width, height } = Dimensions.get('window')

const CardSection = (props) => {
    return(
    <View style = {styles.subContainerStyle}>
        {props.children}
    </View>
    );
    
};

    const styles = {
        subContainerStyle: {
            width: width,
            height: height * 0.8, 
            justifyContent: "space-around", 
            alignItems: 'center',
            flexDirection: "row",
            

        }
};

export default CardSection;