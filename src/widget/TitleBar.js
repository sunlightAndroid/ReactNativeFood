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

const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');

// ES6 写法
export default class TitleBar extends Component {



    render() {
        // leftTitle和leftImage 优先判断leftTitle (即 文本按钮和图片按钮优先显示文本按钮)
        const {title, leftTitle,title_bg} = this.props;

        return (
            <View style={[styles.title, {backgroundColor:title_bg}]}>
                <TouchableOpacity style={styles.left} activeOpacity={0.5}
                                  onPress={()=>back()}
                >
                    <Text style={{color: '#fff',}}>{leftTitle}</Text>
                </TouchableOpacity>
                <Text style={{color:'#fff',textAlign:'center',}}>{title}</Text>
            </View>


        )
    }

}
const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        width: width,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    left: {
        position: 'absolute',
        left: 2,
        marginTop: 23
    },
});
