import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native';
import ImageButton from '../components/ImageButton';
import SideBar from '../components/SideBar'
import Search from '../components/Search';

const { width, height } = Dimensions.get('window')

class HomePage extends Component {
    render() {
        const image = { uri: "https://i.pinimg.com/564x/aa/b6/63/aab66399b48fb56c9493da8969f67208.jpg" };
        return (
            <ScrollView>
                <View style={
                    { flex: 1 }} >
                    <ImageBackground source={image}
                        style={{ height: height * 0.65, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, overflow: "hidden" }} >
                        <View style={{ height: height * 0.2, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: "space-evenly", alignItems: "center" }} >
                            <Text style={
                                {
                                    fontFamily: "Cochin",
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    color: "#fafafa"
                                }
                            }
                            >TOURZIO </Text>

                            <Search />
                        </View>

                        <View style={{ height: height * 0.45, backgroundColor: 'rgba(0,0,0,0.5)' }} >
                            <Text style={{ fontFamily: "Cochin", fontSize: 14, textAlign: "left", color: "#BCC5C0" }} > TRIP </Text>
                            <Text style={{ fontFamily: "Cochin", fontSize: 13, fontWeight: "bold", textAlign: "left", color: "#fafafa" }}> THEMES </Text> 
            
            <ScrollView style={styles.scroll} horizontal={true} >

                            <View
                                ImageButton imageUrl={'https://i.pinimg.com/564x/96/4c/e8/964ce8e0935f02011c1706d79518dd06.jpg'}
                                imageName={"Honey Moon"}
                                resim={styles.resim1}
                                metin={
                                    { color: "#fafafa", fontSize: 11 }}
                            />
                            <View
                                ImageButton imageUrl={'https://i.pinimg.com/236x/76/ae/8c/76ae8cc35b12dca088b264d60237a394.jpg'}
                                imageName={"Adventure"}
                                resim={styles.resim1}
                                metin={
                                    { color: "#fafafa", fontSize: 11 }}
                            />
                            <View
                                ImageButton imageUrl={'https://i.pinimg.com/564x/ec/38/dc/ec38dc98a555dd13fbfec3a9c8501d5c.jpg'}
                                imageName={"Nature"}
                                resim={styles.resim1}
                                metin={
                                    { color: "#fafafa", fontSize: 11 }}
                            />
                            <View
                                ImageButton imageUrl={'https://i.pinimg.com/236x/ae/83/fc/ae83fc7891a836d5f184f2c5eb4e8379.jpg'}
                                imageName={"Family"}
                                resim={styles.resim1}
                                metin={
                                    { color: "#fafafa", fontSize: 11 }}
                            />
                            <View
                                ImageButton imageUrl={'https://i.pinimg.com/236x/98/42/d9/9842d9a940ef70d5ab34b9aacede5571.jpg'}
                                imageName={"Travel"}
                                resim={styles.resim1}
                                metin={
                                    { color: "#fafafa", fontSize: 11 }}
                            />
                            <View
                                ImageButton imageUrl={'https://i.pinimg.com/236x/f4/f2/8f/f4f28f15493ba1870e3524910e0ca8f8.jpg'}
                                imageName={"Hotel"}
                                resim={styles.resim1}
                                metin={
                                    { color: "#fafafa", fontSize: 11 }}
                            />
                            <View
                                ImageButton imageUrl={'https://i.pinimg.com/564x/96/4c/e8/964ce8e0935f02011c1706d79518dd06.jpg'}
                                imageName={"Europe"}
                                resim={styles.resim1}
                                metin={
                                    { color: "#fafafa", fontSize: 11 }}
                            /> 
                                            </ScrollView>

                        <View style={{ height: height * 0.20 }} >
                            <Text style={{ fontFamily: "Cochin", fontSize: 14, textAlign: "left", color: "#BCC5C0" }} > TRENDING </Text>
                            <Text style={{ fontFamily: "Cochin", fontSize: 13, fontWeight: "bold", textAlign: "left", color: "#fafafa" }} > DESTINATION </Text>
                        </View> 
                                            
            </View> 
                    </ImageBackground>
                <View style={{ height: height * 0.35, marginTop: -70, backgroundColor: "transparent" }} >

                    <ScrollView style={[styles.scroll, { alignContent: "space-around" }]} horizontal={true} >
                        <View style={styles.resimContainer}>
                            <ImageButton imageUrl={'https://i.pinimg.com/236x/f4/f2/8f/f4f28f15493ba1870e3524910e0ca8f8.jpg'}
                                imageName={"Thailand"}
                                resim={styles.resim2}
                                metin={{ color: "#000", fontSize: 11, marginLeft: width * 0.1 }}
                            />
                            <View style={{ flexDirection: "row" }} >
                                <Text style={{ color: "grey", fontSize: 11, }} > starting: </Text>
                            </View>
                        </View>
                        
                        <View style={styles.resimContainer} >
                            <ImageButton imageUrl={'https://i.pinimg.com/564x/4a/81/0f/4a810f9f67666d0acb6fe2c9d4086812.jpg'}
                                imageName={"Greece"}
                                resim={styles.resim2}
                                metin={{ color: "#000", fontSize: 11, marginLeft: width * 0.1 }}
                            />
                            <View style={{ flexDirection: "row" }} >
                                <Text style={{ color: "grey", fontSize: 11, }} > starting: </Text>
                            </View> 
            </View>
                        <View style={styles.resimContainer}>
                            <ImageButton imageUrl={'https://i.pinimg.com/564x/48/2d/26/482d268acdfc89cf534b7d58451f440d.jpg'}
                                imageName={"Romania"}
                                resim={styles.resim2}
                                metin={{ color: "#000", fontSize: 11, marginLeft: width * 0.1 }} />
                            <View style={{ flexDirection: "row" }} >
                                <Text style={{ color: "grey", fontSize: 11, }} > starting: </Text>
                            </View>
                        </View>
                        <View style={styles.resimContainer} >
                            <ImageButton imageUrl={'https://i.pinimg.com/564x/ac/02/1d/ac021da6d1d338ae4bc016119a8c548e.jpg'}
                                imageName={"Hawaii"}
                                resim={styles.resim2}
                                metin={{ color: "#000", fontSize: 11, marginLeft: width * 0.1 }} />
                            <View style={{ flexDirection: "row" }} >

                                <Text style={{ color: "grey", fontSize: 11, }} > starting: </Text>
                                <Text style={{ color: "green", fontSize: 11 }} > $3600 </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={{ height: height * 0.10, }} >

                    <Text style={{ fontFamily: "Arial", fontSize: 14, textAlign: "left", color: "grey" }} > SPECIAL </Text>
                    <Text style={{ fontFamily: "Arial", fontSize: 13, fontWeight: "bold", textAlign: "left", color: "black" }} > OFFERS </Text>
                </View>
                <View style={{ height: height * 0.5, width: width * 0.5, alignContent: "space-around" }} >
                    <ScrollView style={[styles.scroll, { alignContent: "space-around" }]} horizontal={true} >

                        <View style={styles.resimContainer2} >
                            <ImageButton imageUrl={'https://i.pinimg.com/564x/a3/e5/f3/a3e5f399e5e61be8876c08bc3052f7ec.jpg'}
                                imageName={"Waterfall"}
                                resim={styles.resim3}
                                metin={{ color: "#000", fontSize: 13, marginLeft: width * 0.3, textAlign: "left" }} />
                            
                        </View>
                        <View style={styles.resimContainer2} >
                            <ImageButton imageUrl={'https://i.pinimg.com/236x/3e/06/ad/3e06ad099bc735ac39a81ac10a0c6f31.jpg'}
                                imageName={"Hiking "}
                                resim={styles.resim3}
                                metin={{ color: "#000", fontSize: 13, marginLeft: width * 0.3, textAlign: "left" }} />
                            
                        </View>
                        <View style={styles.resimContainer2} >
                            <ImageButton imageUrl={'https://i.pinimg.com/236x/82/e6/8b/82e68bd6637f41ea8e77d6270ef077b4.jpg'}
                                imageName={"Dubai Tour"}
                                resim={styles.resim3}
                                metin={{ color: "#000", fontSize: 12, marginLeft: width * 0.3, textAlign: "left" }} />
                            
                        </View>
                        
                    </ScrollView>
                </View> 
            </View> 
            </ScrollView >
            );
    }
}

const styles = StyleSheet.create({
    resimContainer: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 10,
        backgroundColor: "white",
        width: width * 0.30,
        height: height * 0.28,
        marginLeft: width * 0.1
    },
    resimContainer2: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 18,
        backgroundColor: "white",
        width: width * 0.5,
        height: height * 0.4,
        marginLeft: width*0.12
    },
    text: {
        fontFamily: "Cochin",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "#fafafa"
    },
    scroll: {
        width: width * 1,
        maxHeight: height * 0.5,
    },
    resim1: {
        width: 55,
        height: 55,
        borderRadius: width / 2
    },
    resim2: {
        width: width * 0.28,
        height: height * 0.18,
        borderRadius: 10,
        marginLeft: height * 0.06
    },
    resim3: {
        width: width * 0.48,
        height: height * 0.35,
        borderRadius: 10,
        marginLeft: height * 0.18,
        marginTop: height * 0.07

    },
    background: {
        height: height * 0.40,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
});

export default HomePage;