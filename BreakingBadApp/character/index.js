import React, {useEffect, useState} from "react";
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import Style from '../utility/style';

const CharactersScreen= props => {
    
    const [data, setData] = useState([]);

    const loadData = async() =>{
        const url = 'https://www.breakingbadapi.com/api/characters';
        const response = await fetch(url, {
            method: 'GET'
        })
        const serverData = await response.json();
        setData(serverData);
    }

    useEffect(()=>{
        loadData();
    },[])

    const ColorCheck = (item) =>{
        switch(item.status){
        case "Presumed dead":
            return '#FFFF00';
        case "Alive":
            return '#006400';
        case "Deceased":
            return '#ff0000';
        }
    }

    return(
        <View style={Style.container}>
            <View name='logo' style={Style.containerLogo}>
                <Image 
                    style={{width:250, height:150}}
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/369px-Breaking_Bad_logo.svg.png'}}
                />
            </View>
            <View style={{alignItems:'center', justifyContent:'center',width:'100%', height:'10%',backgroundColor:'#1F6032'}}><Text style={{fontSize:25,fontWeight: "bold",}}>Characters</Text></View>
            <View name='characterView' style={{flex:1,width:'100%',height:120,justifyContent:'center', alignItems:'center'}}>
                <FlatList
                data={data}
                keyExtractor={item=>item.char_id}
                renderItem={character =>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('character',{characterAssets:character.item})}}>
                    <View style={Style.characterView}>
                        <View name='image' style={{ width:'18%', height: 100}}>
                            <Image
                                style={{width:80,height:100}}
                                source={{uri:character.item.img}}
                            />
                        </View>
                        <View style={{flex:0.1,width:'5%',height:100,backgroundColor:ColorCheck(character.item),marginRight:10}}></View>
                        <View name='description' style={{flex:2,width:'75%',height:100}}>
                            <Text style={{fontSize:25,fontWeight:'bold',color:'green',marginTop:20}}>
                                {character.item.name}
                            </Text>
                            <Text>
                                {character.item.nickname}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                }
                />
            </View>

        </View>
    )
}

export const screenOptions = navData => {
    return {
        HeaderTitle: 'Characters'
    }
}

export default CharactersScreen;