/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import  Mainpager from  './Mainpager';

export default class XFoodMain extends Component {

    render() {
        var defaultName = 'Mainpager';
        var defaultComponent = Mainpager;
        return (
            <Navigator
                initialRoute={
                    {
                        name:defaultName,
                        component: defaultComponent,
                    }


                }

                configureScene={
                    ()=>{
                          return Navigator.SceneConfigs.HorizontalSwipeJump;
                    }
                }
                renderScene={

                    (route,navigator)=>{
                    let Com=route.component;
                    return <Com {...route.params}  navigator={navigator} />;


                }
                }>

            </Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#76ffd4',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
