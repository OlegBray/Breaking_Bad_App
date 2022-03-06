import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, FlatList,Image} from 'react-native';
import Style from '../utility/style';

const SeasonsScreen= props => {
    const [data, setData] = useState([]);

    const loadEpisodeData = async() =>{
        const url = 'https://www.breakingbadapi.com/api/episodes';
        const response = await fetch(url, {
            method: 'GET'
        })
        const serverData = await response.json();
        setData(serverData);
    }
    useEffect(()=>{
        loadEpisodeData();
    },[])

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
                keyExtractor={item=>item.episode_id}
                renderItem={season =>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('episode',{episodeList:season.item})}}>
                    <View style={Style.episodeView}>
                        <Text style={{fontSize:25, fontWeight:'bold',color:'green',alignSelf:'flex-start'}}>{season.item.title}</Text>
                        
                        <View style={{flex:1,width:'100%',flexDirection:'row',marginTop:10}}>
                            <View style={{flex:1,width:'30%',alignSelf:'flex-start'}}><Text style={{fontStyle:'italic', color:'#707070'}}>season: {season.item.season} | episode: {season.item.episode}</Text></View>
                            <View style={{flex:1,width:'30%',alignSelf:'flex-end'}}><Text style={{fontStyle:'italic',color:'#707070'}}>air date: {season.item.air_date}</Text></View>
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
        HeaderTitle: 'Seasons'
    }
}

export default SeasonsScreen;