import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity, Image } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { Actions } from 'react-native-router-flux';
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("window")

export default class SideBar extends Component {
   render() {
      return (
            <View style={styles.container}>
              <View>
                 <Image
                  style= {{ width: width * 0.7, height: height * 0.3 }}
                  source={{uri: "https://i.pinimg.com/564x/aa/b6/63/aab66399b48fb56c9493da8969f67208.jpg"}}
                 />
              </View>
               <View style={styles.textView}>
                  <TouchableOpacity onPress={() => Actions.login()}>
                     <Text style={styles.title}> Home </Text>
                     <Icon style={styles.iconStyle} name="home" color="green" size={23} />
                  </TouchableOpacity>
               </View>

               <View style={styles.textView}>
                  <TouchableOpacity onPress={() => Actions.destination()}>
                     <Text style={styles.title}> Destinations </Text>
                     <Icon style={styles.iconStyle} name="plane" color="green" size={23} />
                  </TouchableOpacity>
               </View>

               <View style={styles.textView}>
                  <TouchableOpacity onPress={() => Actions.Register2()}>
                     <Text style={styles.title}> Register </Text>
                     <Icon style={styles.iconStyle} name="user" color="green" size={23} />
                  </TouchableOpacity>
               </View>

               <View style={styles.textView}>
                  <TouchableOpacity onPress={() => Actions.drawerClose()}>
                     <Text style={styles.title}> Back </Text>                    
                     <Icon style={styles.iconStyle} name="arrow-left" color="green" size={23} />

                  </TouchableOpacity>
               </View>
            </View>
      );
   }
}

let styles = StyleSheet.create({
   container: {
      flexDirection: 'column',      
      width: width * 0.4,
      height: height * 0.2,
      backgroundColor: "#fafafa",
   },
   textView: {
      width: width * 0.5,
      height: height * 0.1,
      backgroundColor: "#fafafa"
   },
   title: {
      fontSize: 17,
      color: "black",
      marginLeft: 25

   },
   iconStyle: {
      alignItems: "flex-start",
      width: width * 0.05,
      height: height * 0.05,
      marginTop: -23,
      marginLeft: 5

   }
});