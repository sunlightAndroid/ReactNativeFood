/**
 * Created by gechuanguang on 2017/1/26.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import TabBar from 'react-native-xtabbar';
import  HomeFoodPager from './HomeFoodPager';
import  TitleBar from '../../widget/TitleBar';

const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');


export default class AllKindsFood extends Component {

    // 构造
    constructor(props) {
        super(props);
        var {navigator, route}=this.props;
        // 初始状态
        this.state = {
            navigator: navigator,
        };
    }


    render() {
        press = (index) => {
        };
        back = () => {
            var {navigator}=this.props;
            if (navigator != null) {
                navigator.pop();
            }
        };
        return (
            <View style={styles.container}>

                <TitleBar title="XFood" leftTitle="上一级" title_bg="#1c4ef2"/>
                <TabBar
                    style={styles.content}
                    onItemSelected={(index)=>press(index)}
                >
                    <TabBar.Item
                        icon={require('../../image/home_normal.png')}
                        selectedIcon={require('../../image/home_pressed.png')}
                        title='首页'>
                        <HomeFoodPager navigator={this.state.navigator}/>

                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('../../image/find_normal.png')}
                        selectedIcon={require('../../image/find_pressed.png')}
                        title='其他'>
                        <HomeFoodPager navigator={this.state.navigator}/>

                    </TabBar.Item>

                </TabBar>
            </View>
        );
    }

    componentDidMount() {
        console.log('第一个'+this.props.title);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    title: {
        flexDirection: 'row',
        backgroundColor: '#2751f2',
        width: width,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,

    },
    welcome: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height - 56 * 2,
        backgroundColor: '#f3fd33'
    },
});

