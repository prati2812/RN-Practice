import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarProps {
    title?: string,
}

const HeaderBar = (props: HeaderBarProps) => {
  return (
    <View style={styles.HeaderContainer}>
       <GradientBGIcon name="menu" color={COLORS.primaryLightGreyHex} size={SPACING.space_16}/> 
      <Text style={styles.HeaderText}>{props.title}</Text>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
    HeaderContainer: {
        padding: SPACING.space_30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    HeaderText:{
        fontFamily:FONTFAMILY.poppins_semibold,
        color:COLORS.primaryWhiteHex,
        fontSize:FONTSIZE.size_20,
    }
});

export default HeaderBar;


