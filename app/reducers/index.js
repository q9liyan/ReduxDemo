/**
 * Created by mac1012 on 2017/6/20.
 */
/*
*   combineReducers:将多个Reducer合并成一个大函数
* */
import {calulate} from './calculate'
import {combineReducers} from  'redux'
export default  combineReducers( {
    calculate:calulate
} );