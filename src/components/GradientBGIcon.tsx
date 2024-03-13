import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';

interface GradientBGIconProps {
    name: String,
    color:String,
    size: number,
}

const GradientBGIcon = (props: GradientBGIconProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient
         start={{x:0,y:0}}
         end={{x:1,y:1}}
         colors={[COLORS.primaryGreyHex , COLORS.primaryBlackHex]}
         style={styles.LinearGradientBG}
      >
       <CustomIcon  name={props.name} color={props.color} size={props.size}/>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        borderWidth:2,
        borderColor:COLORS.secondaryDarkGreyHex,
        borderRadius:SPACING.space_12,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.secondaryDarkGreyHex,
        overflow:'hidden'
    },
    LinearGradientBG: {
        height: SPACING.space_36,
        width:SPACING.space_36,
        alignItems:'center',
        justifyContent:'center' 
    }
  });
  

export default GradientBGIcon;

