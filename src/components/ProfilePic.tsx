//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, SPACING } from '../theme/theme';

// create a component
const ProfilePic = () => {
    return (
        <View style={styles.ImageContainer}>
           <Image source={require('../assets/app_images/avatar.png')} style={styles.image}/>
        </View>
    );
};


const styles = StyleSheet.create({
    ImageContainer: {
        height:SPACING.space_36,
        width:SPACING.space_36,
        borderRadius:SPACING.space_12,
        borderWidth:2,
        borderColor:COLORS.secondaryDarkGreyHex,
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden',
    },
    image:{
        height:SPACING.space_36,
        width:SPACING.space_36,
    }
});


export default ProfilePic;
