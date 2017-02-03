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
    TouchableOpacity
} from 'react-native';

import  FoodDetail from './FoodDetial';

const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const foodJsonData = require('../data/foodData.json');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const url = 'http://api.jisuapi.com/recipe/byclass?classid=2&start=0&num=10&appkey=019edfd7e2c45c72';

export default class HomeFoodPager extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(foodJsonData.result.list),
        };
    }

    render() {
        pressItem = (rowData) => {
            const {navigator}=this.props;
            console.log(rowData.name);
            if(navigator!=null){
                navigator.push({

                    name:"FoodDetail",
                    component:FoodDetail,

                    params:{
                        rowData:rowData,
                    }
                })
            }

        };

        renderRowData = (rowData, rowID) => {


            return <TouchableOpacity activeOpacity={0.5}
                                     onPress={()=>pressItem(rowData)}

            >
                <View style={styles.cellStyle}>

                    <Image style={{width:100,height:100}} source={{uri: rowData.pic}}/>

                    <View style={styles.rightStyle}>
                        <Text style={{fontWeight:'bold'}}
                              numberOfLines={1}
                        >
                            {rowData.name }</Text>

                        <Text style={{width:0.7*width, textAlign: 'left',fontWeight:'normal',marginTop:10} }
                              numberOfLines={3}
                        >
                            {rowData.content }</Text>
                    </View>

                </View>
            </TouchableOpacity>
        };

        return (

            <ListView style={styles.container}
                      dataSource={this.state.dataSource}
                      renderRow={(rowData,rowID) => renderRowData(rowData,rowID)}
            />

        )
    }

    //获取网络数据
    componentDidMount() {


        fetch(url).then((response) => response.json())
            .then((responseJson) => {
                var jsonData = responseJson.result.list;
                console.log("数据大小：" +responseJson);

        this.setState(
            this.state = {
                dataSource: ds.cloneWithRows(jsonData),
            }
        );


        })
        .catch((error) => {
            console.error(error);
        });


    }


}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
    },
    cellStyle: {
        flexDirection: 'row',
        marginBottom: 1,
        backgroundColor: '#fff',
        padding: 3,

    },
    rightStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 3
    },
});

