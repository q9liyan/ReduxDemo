/**
 * Created by mac1012 on 2017/6/20.
 */
import React,{Component} from 'react'
import {increment,decrement} from '../action/actionCreator'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native'
import {connect} from 'react-redux'

 class  CalculatePage extends Component{
    constructor(props){
        super(props)

    }
    touchIncrement = (sender) =>{
        let {count} = this.props
      this.props.dispatch(increment(count+1))
    }
     touchDecrement = (sender) =>{
         let {count} = this.props
         this.props.dispatch(decrement(count-1))
     }
    render(){
        let {count} = this.props
        return(
            <View style={styles.container}>
                <Text >
                    结果:{count}
                </Text>

                <TouchableHighlight
                    onPress={this.touchIncrement}
                >
                    <Text style={{fontSize:20, marginTop:35}}>
                        +
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.touchDecrement}
                >
                    <Text style={{fontSize:20,marginTop:35}}>
                        -
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

function counter(store){
    return{
        count:store.calculate.count
    }
}


export default connect(counter)(CalculatePage);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
