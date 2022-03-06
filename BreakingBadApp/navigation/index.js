import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//character
import CharactersScreen , {screenOptions as CharactersScreenOptions} from '../character/index';
import CharacterScreen , {screenOptions as CharacterScreenOptions} from '../character/character';
//episodes
import SeasonsScreen, {screenOptions as SeasonsScreenOptions} from '../episode/index';
import EpisodeScreen, {screenOptions as EpisodeScreenOptions} from '../episode/episode';
//quotes
import QuotesScreen, {screenOptions as QuotesScreenOptions} from '../quotes/index';


//Stacks
const CharacterStackNavigator = createStackNavigator();
export const CharacterStack = () => {
    return(
        <CharacterStackNavigator.Navigator>
            <CharacterStackNavigator.Screen name='characters' component={CharactersScreen} options={CharactersScreenOptions}/>
            <CharacterStackNavigator.Screen name='character' component={CharacterScreen} options={CharacterScreenOptions}/>
        </CharacterStackNavigator.Navigator>
    )
}

const EpisodesStackNavigator = createStackNavigator();
export const EpisodesStack = () => {
    return(
        <EpisodesStackNavigator.Navigator>
            <EpisodesStackNavigator.Screen name='seasons' component={SeasonsScreen} options={SeasonsScreenOptions}/>
            <EpisodesStackNavigator.Screen name='episode' component={EpisodeScreen} options={EpisodeScreenOptions}/>
        </EpisodesStackNavigator.Navigator>
    )
}

const QuotesStackNavigator = createStackNavigator();
export const QuotesStack = () => {
    return(
        <QuotesStackNavigator.Navigator>
            <QuotesStackNavigator.Screen name='quotes' component={QuotesScreen} options={QuotesScreenOptions}/>
        </QuotesStackNavigator.Navigator>
    )
}

//Bottom Bar

const AppBottomBarNavigator = createMaterialBottomTabNavigator();
export const AppBottomBar = () => {
    return(
        <AppBottomBarNavigator.Navigator barStyle={{backgroundColor:'#1F6032'}}>
            <AppBottomBarNavigator.Screen options={{
                tabBarLabel:'Characters', 
                tabBarIcon:({focused}) => {
                    const iconShape = focused ? 'person' : 'person-outline'
                    const iconColor = focused ? '#fff' : '#000'
                    const iconSize = focused ? 26 : 26

                    return(
                        <Ionicons name={iconShape} color={iconColor} size={iconSize}/>
                    )
                }}}
                name='CharactersStack'
                component={CharacterStack}
            />
            <AppBottomBarNavigator.Screen options={{
                tabBarLabel:'Episodes', 
                tabBarIcon:({focused}) => {
                    const iconShape = focused ? 'list-circle' : 'list-circle-outline'
                    const iconColor = focused ? '#fff' : '#000'
                    const iconSize = focused ? 28 : 26

                    return(
                        <Ionicons name={iconShape} color={iconColor} size={iconSize}/>
                    )
                }}}
                name='EpisodesStack'
                component={EpisodesStack}
            />
            <AppBottomBarNavigator.Screen options={{
                tabBarLabel:'Quotes', 
                tabBarIcon:({focused}) => {
                    const iconShape = focused ? 'comment-quote' : 'comment-quote-outline'
                    const iconColor = focused ? '#fff' : '#000'
                    const iconSize = focused ? 28 : 26

                    return(
                        <MaterialCommunityIcons name={iconShape} color={iconColor} size={iconSize}/>
                    )
                }}}
                name='QuotesStack'
                component={QuotesStack}
            />
        </AppBottomBarNavigator.Navigator>
    )
}