import React from 'react';
import {StyleSheet} from 'react-native';
import character from '../character/character';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d3d3d3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerLogo: {
      //flex: 1,
      backgroundColor: '#d3d3d3',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      height:'30%'
    },
    characterView:{
      flex:1,
      flexDirection:'row', 
      width:'100%', 
      height:100, 
      padding:10, 
      justifyContent:'center', 
      alignItems:'center',
      marginBottom:10,
      backgroundColor:'#fff',
      borderRadius:10
    },
    episodeView:{
      flex:1,
      width:'100%', 
      height:200, 
      padding:10, 
      justifyContent:'center', 
      alignItems:'center',
      marginBottom:10,
      backgroundColor:'#fff',
      borderRadius:10
    },
    quoteView:{
      flex:1,
      width:'80%',  
      padding:10, 
      justifyContent:'center', 
      alignItems:'center',
      marginBottom:10,
      backgroundColor:'#fff',
      borderRadius:10,
      marginLeft:50,

    }
});

