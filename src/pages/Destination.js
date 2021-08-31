import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import WhereDest from '../components/WhereDest';
import Search from '../components/Search';

const { width, height } = Dimensions.get('window')

class Destination extends Component {
  
    render() {
        const image = { uri: "https://i.pinimg.com/564x/aa/b6/63/aab66399b48fb56c9493da8969f67208.jpg" };
      

        return (
            <ScrollView style={{ width: width, maxHeight: height }}>
                <View View style={{ flex: 1 }}>
                    <ImageBackground
                        source={image}
                        style={{ position: "relative", height: height * 0.65, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, overflow: "hidden" }}>
                        <View style={{ height: height * 0.15, justifyContent: "space-evenly", alignItems: "center", backgroundColor: 'rgba(0,0,0,0.5)' }}>

                            <Text style={{
                                textAlign: "center",
                                color: "#fafafa",
                                fontFamily: "Cochin",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}> Destinations </Text>

                            <Search/>
                        </View>
                        
                        <View style={{ height: height * 0.5, backgroundColor: 'rgba(0,0,0,0.5)', flexDirection: "row", justifyContent: "space-around", alignItems: "flex-start" }}>
                        <WhereDest
                            imageUrl={'https://i.pinimg.com/564x/ea/3d/d4/ea3dd47276b865c44d253c028da19a06.jpg'}
                            text={ "GREEK \n choose destination"}
                           
                        />
                         <WhereDest
                            imageUrl={'https://i.pinimg.com/564x/47/bd/e9/47bde91e8085e6143fa4b2de43f65aae.jpg'}
                            text={"TURKEY \n choose destination"}
                        />
                        </View>
                    </ImageBackground>

                    <View style={{ height: height * 0.45,  flexDirection: "row", justifyContent: "space-around", marginTop: -height * 0.26 }}>
                        <WhereDest
                            imageUrl={'https://i.pinimg.com/564x/97/40/db/9740db5cbfc818ad79676aeb5b9458bd.jpg'}
                            text={"ITALY \n choose destination"}
                        />
                        <WhereDest
                            imageUrl={'https://i.pinimg.com/236x/34/86/74/348674d89f3f00a30a8dff5c0e3d08e5.jpg'}
                            text={"FRANCE \n choose destination"}
                        />
                    </View>

                    <View style={{ height: height * 0.45, flexDirection: "row", alignItems: "flex-start", justifyContent: "space-around" }}>
                    <WhereDest
                            imageUrl={'https://i.pinimg.com/236x/42/ad/d7/42add7a646340849ca256b944548f35b.jpg'}
                            text={"ALASKA \n choose destination"}
                        />
                        <WhereDest
                            imageUrl={'https://i.pinimg.com/236x/0a/8c/64/0a8c64c7b4e848eea73e7c4647dd2859.jpg'}
                            text={"ROMANIA  \n choose destination"}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    resim1: {
        width: width * 0.40,
        height: height * 0.25,
        borderRadius: 10,

    }
});
export default Destination;