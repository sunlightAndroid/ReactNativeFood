/**
 * Created by gechuanguang on 2017/1/26.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    ListView,
    Image,
    TouchableOpacity,
    ScrollView

} from 'react-native';
import  TitleBar from '../../widget/TitleBar';
import  HomeFoodPager from './HomeFoodPager';
const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');

export default class FoodDetial extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            rowData: '',
        };
    }

    render() {

        let data = this.state.rowData;
        console.log(data);


        return (


            <View style={styles.container}>
                <TitleBar title="详情页" leftTitle="上一级" title_bg="#1c4ef2"/>

                <ScrollView>

                <View style={styles.foodCeil}>
                    <Text style={{backgroundColor:'#f2c11e',color:'#fff',paddingTop:5,paddingBottom:5}}>菜肴名称</Text>

                    <View style={styles.foodheader}>
                        <Image style={styles.foodLogo}
                               source={{uri:data.pic}}
                               resizeMode={'stretch'}/>
                        <Text style={{marginLeft:3}}>菜谱名称：{data.name}</Text>

                    </View>


                    <Text
                        style={{backgroundColor:'#f2c11e',color:'#fff',paddingTop:5,paddingBottom:5,marginTop:4}}>菜肴说明</Text>
                    <Text style={{backgroundColor:'#fff',paddingTop:5,paddingBottom:5}}>类型：{data.tag}</Text>

                    <Text
                        style={{backgroundColor:'#f2c11e',color:'#fff',paddingTop:5,paddingBottom:5,marginTop:4}}>菜肴介绍</Text>
                    <Text style={{backgroundColor:'#fff',paddingTop:5,paddingBottom:5}}>介绍：{data.content}</Text>

                    <Text
                        style={{backgroundColor:'#f2c11e',color:'#fff',paddingTop:5,paddingBottom:5,marginTop:4}}>菜肴准备</Text>
                    <Text style={{backgroundColor:'#fff',paddingTop:5,paddingBottom:5}}>菜肴准备: {this.getData()}</Text>

                    <Text
                        style={{backgroundColor:'#f2c11e',color:'#fff',paddingTop:5,paddingBottom:5,marginTop:4}}>开始制作</Text>
                    <View style={styles.step}>
                        {this.getStep()}

                    </View>


                </View>
                </ScrollView>

            </View>


        )
    }

    getStep=()=>{
        var contentView =[];
        let data = this.state.rowData;

        if (data.process != null) {

            for(let i=0;i<data.process.length;i++){
                contentView.push(
                    <View key ={i} style={styles.foodheader}>
                        <Image style={styles.foodLogo}
                               source={{uri:data.process[i].pic}}
                               resizeMode={'stretch'}/>
                        <Text style={{marginLeft:3,width:width*0.6}}
                            numberOfLines={3}
                        >第{i+1}步：{data.process[i].pcontent}</Text>

                    </View>
                )
            }

            return contentView;
        }


    };

    getData = () => {
        let data = this.state.rowData;

        if (data.material != null) {
            var s = '';
            for (let i = 0; i < data.material.length; i++) {
                s += data.material[i].mname + "" + data.material[i].amount + ',\t';
            }
            return s;
        }
    };

    componentDidMount() {
        const {rowData}=this.props;

        console.log(rowData.name);

        this.setState(this.state = {
            rowData: rowData,
        });

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffd16',
        alignItems: 'center',
        paddingRight: 5,
        paddingLeft: 5
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

    foodCeil: {
        flex: 1,
        width: width * 0.96,
        backgroundColor: '#8c7cf2',
        paddingLeft: 6,
        paddingRight: 6,

    },
    foodheader: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5

    },
    foodLogo: {
        width: width * 0.3,
        height: width * 0.3,
        backgroundColor: '#22ff22',
    },

    step:{


    },

});



