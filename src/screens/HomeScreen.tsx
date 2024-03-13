import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, TextInput} from "react-native";
import { useStore } from "../store/store";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import HeaderBar from "../components/HeaderBar";
import GradientBGIcon from "../components/GradientBGIcon";
import CustomIcon from "../components/CustomIcon";


const getCategoriesList = (data: any) => {
     let temp:any = [];

     for(let i=0; i < data.length; i++){
         if(temp[data[i].name] == undefined){
             temp[data[i].name] = 1;
         }
         else{
             temp[data[i].name]++;
         }
     }

     let categories = Object.keys(temp);
     categories.unshift('All');
     return categories;
} 

const getCoffeeList = (category: String, data:any) => {
    if(category == 'All'){
        return data;
    }
    else{
          let coffeeList = data.filter((item: any )=> item.name == category);
          return coffeeList; 
    }

}

const HomeScreen = () => {
    const coffeList = useStore((state: any) => state.CoffeeList);
    const beansList = useStore((state:any) => state.BeansList);
    const[categories , setCategories] = useState(getCategoriesList(coffeList));
    const[searchText , setSearchText] = useState('');
    const[categoryIndex , setCategoryIndex] = useState({
        index:0,
        category: categories[0],
    });
    const [sortedCoffeeList , setSortedCoffeeList] = useState(
        getCoffeeList(categoryIndex.category , coffeList)
    )
    console.log(sortedCoffeeList);
    
    
    
    
    return(
          <View style={style.ScreenContainer}>
               <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
               <ScrollView
                 showsVerticalScrollIndicator={false}
                 contentContainerStyle={style.ScrollViewFlex}>
                 <HeaderBar title="Coffee Shop"/>
                 <Text style={style.ScreenTitle}>
                       Find the best {'\n'}coffee for you
                 </Text>

                 <View style={style.InputContainerComponent}>
                       <TouchableOpacity onPress={() => {}}>
                              <CustomIcon 
                                name="search"
                                style={style.InputIcon}
                                size={FONTSIZE.size_18}
                                color={
                                    searchText.length > 0 ?
                                         COLORS.primaryOrangeHex :
                                         COLORS.primaryLightGreyHex 
                                }/>
                       </TouchableOpacity>
                       <TextInput 
                                placeholder="Find your coffee..."
                                onChangeText={(text) => setSearchText(text)}
                                value={searchText}
                                placeholderTextColor={COLORS.primaryLightGreyHex}
                                style={style.TextInputContainer}/>
                 </View>

                 
                  
               </ScrollView>
          </View>
    )
}

const style = StyleSheet.create({
    ScreenContainer:{
           flex:1,
           backgroundColor:COLORS.primaryBlackHex,
    },
    ScrollViewFlex:{
          flexGrow:1,
    },
    ScreenTitle:{
          fontSize:FONTSIZE.size_28,
          fontFamily:FONTFAMILY.poppins_semibold,
          color:COLORS.primaryWhiteHex,
          paddingLeft:SPACING.space_30,
    },
    InputContainerComponent:{
        flexDirection:'row',
        margin:SPACING.space_30,
        borderRadius:BORDERRADIUS.radius_20,
        backgroundColor:COLORS.primaryDarkGreyHex,
        alignItems:'center'
    },
    InputIcon:{
        marginHorizontal:SPACING.space_20,
    },
    TextInputContainer:{
        flex:1,
        height:SPACING.space_20 * 3,
        fontFamily:FONTFAMILY.poppins_medium,
        fontSize:FONTSIZE.size_14,
        color:COLORS.primaryWhiteHex,
    }
    


});


export default HomeScreen;