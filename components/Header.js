import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({headerTitle}) =>{

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{headerTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:60,
        backgroundColor:"#F8F8F8",
        shadowColor: "#000",
        shadowOffset:{width:0, height:2},
        shadowOpacity: 0.5,
        elevation:3,
       // position:"relative"

    },
    textStyle:{
        fontSize:20
    }
})

export default Header;