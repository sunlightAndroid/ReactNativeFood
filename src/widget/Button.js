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
    TouchableOpacity
} from 'react-native';

// ES6 写法
export default class Button extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            disable: false,
        };
    }
    pressButton = () => {


        const {onclick} = this.props;
        onclick();
    };
    enable = () => {
        this.setState(this.state = {
                disable: false,
            }
        );
    };
    disable = () => {
        this.setState(
            this.state = {
                disable: true,
            }
        );
    };
    render() {
        const {button_bg, text} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={()=>this.pressButton()}
                >
                    <View style={[styles.buttonStyle, {backgroundColor: button_bg},this.state.disable&&styles.disable]}>
                        <Text style={{textAlign:'center',color:'#fff'}}>{text}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        width: 200,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disable: {
        backgroundColor: 'gray',
    },
});
