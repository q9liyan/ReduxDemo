/**
 * Created by mac1012 on 2017/6/20.
 */
'use strict';
/*
* action:store数据的唯一来源,可以理解为更新组件的动作状态,动作的抽象行为
*         在组件使用this.props.dispatch(increment(count+1)) 更新组件动作状态
*         type:参数是必选
*         count:可选参数,除type以外参数可自定义
* */
import * as TYPES from './types';

export function increment(count) {
    return{
        type: TYPES.INCREASE,
        count:count,
    };
}

export function decrement(count){
    return {
        type:TYPES.DECREASE,
        count:count,
    };
}