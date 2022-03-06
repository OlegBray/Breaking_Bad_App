import React from "react";
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Style from '../utility/style';

const EpisodeScreen= props => {
    
    const episodeData = props.route.params.episodeList;

    return(
        <View style={Style.container}>
            <View style={{flex:0.3,alignItems:'center', justifyContent:'center',width:'100%', height:'10%',backgroundColor:'#1F6032'}}>
                <Text style={{fontSize:25,fontWeight: "bold",}}>season: {episodeData.season} | episode: {episodeData.episode}</Text>
            </View>
            <View style={{flex:1.5,alignItems:'center', justifyContent:'center',width:'100%', height:'10%',backgroundColor:'#1F6050'}}>
                <Text style={{fontSize:80,fontWeight: "bold",fontStyle:'italic'}}>{episodeData.title}</Text>
            </View>
            <View style={{flex:0.3,alignItems:'center', justifyContent:'center',width:'100%', height:'10%',backgroundColor:'#1F6032'}}>
                <Text style={{fontSize:25,fontWeight: "bold",}}>characters</Text>
            </View>
            <View name='participation' style={{flex:2,width:'100%',justifyContent:'center', alignItems:'center',padding:50,backgroundColor:'#d3d3d3'}}>
                <FlatList
                    data={episodeData.characters}
                    keyExtractor={item => item.index}
                    renderItem={character =>
                        <View style={{width:'100%',padding:10, fontSize:50}}>
                            <Text style={{fontStyle:'italic'}}>{character.item}</Text>
                        </View>
                    }
                />
            </View>
        </View>
    )
}

export const screenOptions = navData => {
    return {
        HeaderTitle: 'Episode'
    }
}

export default EpisodeScreen;