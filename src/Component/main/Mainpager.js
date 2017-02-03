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

import  Button from '../../widget/Button';
import  AllKindsFood from '../allkindsFood/AllKindsFood';

export default class Mainpager extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            navigator: null,
        };
    }


    comeIn = () => {
        if(this.state.navigator){
            this.state.navigator.push({
                name: 'AllKindsFood',
                component: AllKindsFood,
                params: {

                    title: 'wtf',
                    name: 'hehda',
                },
            })
        }

    };

    render() {


        return (

            <View style={styles.container}>
                <Text style={styles.welcome}>
                    欢迎使用XFood
                </Text>

                <Button ref="button" text={"进入"} button_bg={"#1c4ef2"} onclick={this.comeIn}/>

            </View>
        );
    }

    componentDidMount() {
        var {navigator} =this.props;
        this.setState(
            this.state = {
            navigator: navigator,
        });
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

