import React, {useState, useEffect} from "react";
import {View, Text, FlatList, Image} from 'react-native';
import Style from '../utility/style';

const QuotesScreen= props => {
    const [data, setData] = useState([]);

    const loadEpisodeData = async() =>{
        const url = 'https://www.breakingbadapi.com/api/quotes';
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
            <View style={{alignItems:'center', justifyContent:'center',width:'100%', height:'10%',backgroundColor:'#1F6032'}}><Text style={{fontSize:25,fontWeight: "bold",}}>Quotes</Text></View>
            <View name='characterView' style={{flex:1,width:'100%',height:120,justifyContent:'center', alignItems:'center'}}>
                <FlatList
                data={data}
                keyExtractor={item=>item.quote_id}
                renderItem={quoteList =>
                <View style={Style.quoteView}>
                    <Text style={{fontSize:25, fontWeight:'bold',color:'green',alignSelf:'flex-start'}}>{quoteList.item.quote}</Text>
                        
                    <View style={{flex:1,width:'100%',flexDirection:'row',marginTop:10}}>
                        <View style={{flex:1,width:'30%',alignSelf:'flex-start'}}><Text style={{fontStyle:'italic', color:'#707070'}}>"{quoteList.item.author}"</Text></View>
                    </View>
                </View>
                }
                />
            </View>
        </View>
    )
}

export const screenOptions = navData => {
    return {
        HeaderTitle: 'Quotes'
    }
}

export default QuotesScreen;