import React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import styles from './style'


export default function Search(){

    return(

        <View style= {styles.containerSearch}> 

                  
                <TextInput style= {styles.inputSearch} placeholder="Digite aqui o produto"></TextInput>
                

        </View>

    );

}