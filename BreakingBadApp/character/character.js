import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React from "react";
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import Style from '../utility/style';

const CharacterScreen= props => {
    const character = props.route.params.characterAssets;
    

    let color = '';

    switch (character.status){
        case 'Presumed dead':
            color = '#FFFF00';
            break;
        case 'Alive':
            color = '#006400';
            break;
        case 'Deceased':
            color = '#ff0000';
            break;
    
    }

    

    return(
        <View style={Style.container}>
            <View style={{backgroundColor:'#1F6032', width:'100%',height:'7%', alignItems:'center',justifyContent:'center'}}>
                <Text style={{  color:'#ffffff',fontSize:35, alignItems:'center',}}>{character.name}</Text>
            </View>
            <View style={{width:400, height:200, flex:2}}>
            <Image
                style={{width:'100%', height: '100%',}}
                source={{uri:character.img}}/>
            </View>

            <View style={{width:'100%'}} >
            </View>
            <View style={{width:'100%', height:'5%',backgroundColor:color}}>
                <Text style={{ textAlign:'center',fontSize:22,color:'#fff'}}>{character.status}</Text>

            </View>
            <View  style={{flex:1,margin:15}} >
            <Text style={{ fontSize:22,}}>Name: {character.name}</Text>
            <Text style={{ fontSize:22,}}>Birthday: {character.birthday}</Text>
            <Text style={{ fontSize:22,}}>Nickname: {character.nickname}</Text>
            <Text style={{ fontSize:22,}}>Portrayed: {character.portrayed}</Text> 
            <Text style={{ fontSize:22,}}>Appearance: {character.appearance+' '}</Text>
            </View>

        </View>
    )
}

export const screenOptions = navData => {
    return {
        HeaderTitle: 'character'
    }
}

export default CharacterScreen;